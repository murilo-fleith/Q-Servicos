import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Animated, StatusBar } from 'react-native'
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
    var databse = firebase.firestore();
    useEffect(() => { }, [])
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



                <Text>Bem Vindo! Oque Esta Precisando Hoje ??</Text>

                <TouchableOpacity
                    onPress={alert}  >
                    <MaterialCommunityIcons
                        name="filter-menu"
                        size={20}
                        color="#00000"

                    />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.box}>
                    <Text>Aqui ira os prestadores 1  </Text>
                </View>
                <View style={styles.box}>
                    <Text>Nome: </Text>
                    <Text>Função:</Text>
                    <Text>Avalhação</Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui ira os prestadores 3 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui ira os prestadores 4 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui ira os prestadores 5 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui  ira os prestadores 6 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui  ira os prestadores 7 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui  ira os prestadores 8 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui  ira os prestadores 9 </Text>
                </View>
                <View style={styles.box}>
                    <Text>Aqui  ira os prestadores 10 </Text>
                </View>

            </ScrollView>
        </SafeAreaView >
    )
}