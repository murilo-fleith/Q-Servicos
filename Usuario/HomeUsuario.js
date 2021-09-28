import React, { useState, useEffect, Fragment } from "react"
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Animated, StatusBar, FlatList } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { SearchBar } from "react-native-screens"



export default function HomeUsuario({ navigation }) {
    var database = firebase.firestore();
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


    useEffect(() => {
        database.collection("prestador").onSnapshot((query) => {
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
                <Text>Bem Vindo! {user.displayName} !</Text>
                <Text>Oque Esta Precisando Hoje ?</Text>
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
                    <Text> ! {user.uid}</Text>
                    <Text> ! {user.email} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Prestador')}>Ver tela visa pelos Prestadores </TouchableOpacity>
                </View>

                <FlatList
                    data={listFire}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) =>

                        <View style={styles.box}>
                            <View style={styles.box2}>
                                <Text>Nome: {item.name} </Text>
                                <Text>Telefone: {item.telefone} </Text>
                                <Text>Capacidades:{item.eletrecista} {item.pedreiro} {item.encanador} {item.manutencaoGeral}</Text>
                            </View>
                            <View style={styles.box2}>
                                <Text>Cidade:{item.city}</Text>
                                <Text>Valor R$:{item.preco}/{item.dia}{item.ponto}</Text>

                            </View>
                            <View style={styles.box3}>
                                <TouchableOpacity onPress={() => navigation.navigate('Chat')}> CHAT</TouchableOpacity>
                            </View>
                        </View>
                    }
                />

            </ScrollView>
        </SafeAreaView >
    )
}