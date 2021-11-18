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
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

    }


    var database = firebase.firestore();


    //databse.collection("prestador").onSnapshot((query))
    useEffect(() => {
        try {
            firebase.database().ref('/Agenda' + user.uid).on('value', (snapshot) => {
                const list = [];
                snapshot.forEach((childItem) => {
                    list.push({
                        key: childItem.key,
                        dia: childItem.val().dia,
                        nomeCliente: childItem.val().nomeCliente,
                        endereco: childItem.val().endereco,
                        descricao: childItem.val().descricao,
                    });
                });
                setListFire(list);
            })

        } catch (error) {
            alert(error);
        }
    }, [])



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

                <Text>Bem Vindo !!{user.displayName} </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Agenda")}>
                    <MaterialCommunityIcons
                        name="calendar-plus"
                        size={20}
                        color="#00000"

                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
               
                    <FlatList
                        //style={styles.viewFlat} 
                        data={listFire}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) =>
                        
                            <View style={styles.box}>
                                <View style={styles.box2}>
                                    <Text>Nome Ciletne: {item.nomeCliente} </Text>
                                    <Text>Dia: {item.dia} </Text>
                                    <Text>Descrição :{item.descricao} </Text>
                                </View>
                                <View style={styles.box2}>
                                    <Text>Endereço:{item.endereco}</Text>

                                </View>
                            </View>
                        }
                    />
                

            </ScrollView>
        </SafeAreaView >
    )
}