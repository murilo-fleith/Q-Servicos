import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Animated, StatusBar } from 'react-native'
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
            <Text>Gostaria de Se cadastar Como ?</Text>
            <View style={styles.funcao}>
            

                <TouchableOpacity style={styles.btnop}
                    onPress={() => navigation.navigate("CadastroUSer")}>
                    <MaterialCommunityIcons
                        name="account"
                        size={50}
                        color="#00000"
                        Text = "Usuario"
                    />
                    <Text>Usuario</Text>
                </TouchableOpacity>
               

                <TouchableOpacity style={styles.btnop}
                    onPress={() => navigation.navigate("NewPrestador")}>
                    <MaterialCommunityIcons
                        name="filter-menu"
                        size={50}
                        color="#00000"
                    />
                    <Text> Prestador</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView >
    )
}



