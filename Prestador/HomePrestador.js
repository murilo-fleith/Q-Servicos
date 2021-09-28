import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Animated, StatusBar, FlatList } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { SearchBar } from "react-native-screens"
//import databse from "../Firebase"


export default function HomeUsuario({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listFire, setListFire] = useState('');

    const user = firebase.auth().currentUser;
    if (user) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

    }
    user.updateProfile({
        displayName: name,

    }).then(() => {
        // Update successful
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });

    var database = firebase.firestore();


    //databse.collection("prestador").onSnapshot((query))
    useEffect(() => {
        database.collection("usuario").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setListFire(list);
        });
    }, []);



    /////////////////////////////////////////////////////////
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            navigation.navigate("Home")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity
                    //onPress={() => navigation.navigate("teste")}
                    onPress={signOut}>
                    <MaterialCommunityIcons
                        name="account"
                        size={20}
                        color="#00000"
                    />
                </TouchableOpacity>

                <Text>Bem Vindo {user.displayName} </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("NewPrestador")}>
                    <MaterialCommunityIcons
                        name="filter-menu"
                        size={20}
                        color="#00000"

                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.box}>
                    <TouchableOpacity onPress={() => navigation.navigate('Usuario')}> ??{user.displayName}</TouchableOpacity>
                </View>

                <FlatList
                    data={listFire}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) =>

                        <View style={styles.box}>
                            <View style={styles.box2}>
                                <Text >Nome: {item.name} </Text>
                                <Text> Telefone: {item.telefone} </Text>
                                <Text > email: {item.email} </Text>
                            </View>
                            <View style={styles.box2}>
                                <Text>Cidade:{item.city}</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('Chat')}> CHAT</TouchableOpacity>
                            </View>

                        </View>


                        //flexDirection: 'row',

                    }
                />


            </ScrollView>
        </SafeAreaView >
    )
}