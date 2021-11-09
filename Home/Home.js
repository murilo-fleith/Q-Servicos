import React, { useState, useEffect } from "react"
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, ScrollView, Animated, StatusBar } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
//import testes from "../teste"

export default function HomeUsuario({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");
    var databse = firebase.firestore();
    useEffect(() => { }, [])
    /////////////////////////////////////////////////////////


    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.title} >Gostaria de Acessar Como ?</Text>
            <View style={styles.funcao}>


                <TouchableOpacity style={styles.btnop}
                    onPress={() => navigation.navigate("Login")}>
                    <Image
                        style={styles.stretch}
                        source={require('../Imagens/Usuario 2.png')}
                    />


                    <Text style={styles.text}>USUÁRIO</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnop}
                    onPress={() => navigation.navigate("LoginPrestador")}>
                    <Image
                        style={styles.stretch}
                        source={require('../Imagens/Prestador.png')}
                    />
                    <Text style={styles.text}> PRESTADOR</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView >
    )
}



