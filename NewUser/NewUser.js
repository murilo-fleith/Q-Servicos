import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
//import databse from "../Firebase"


export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");
    const [city, setCity] = useState("");
    var databse = firebase.firestore();

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                if (userCredentials.user) {
                    userCredentials.user.updateProfile({
                        displayName: name
                    }).then((s) => {
                        navigation.navigate('Usuario');
                    })
                }
            })
            .catch(function (error) {
                alert(error.message);
            });
        databse.collection("usuario").add({  //funcao que salva no banco 
            name: name,
            telefone: telefone,
            email: email

        })
    }




    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Text style={styles.title}> Cadastro  </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu Nome"
                type="text"
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu Telefone"
                type="text"
                onChangeText={(text) => setTelefone(text)}
                value={telefone}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Digite Sua Cidade"
                type="text"
                onChangeText={(text) => setCity(text)}
                value={city}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true} //carecterer de senha 
                placeholder="Digite sua senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {email === "" || password === ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonRegister}>
                    <Text style={styles.textButtonLogin}>Cadastar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonRegister}
                    onPress={() => { register() }}>
                    <Text style={styles.textButtonLogin}>Cadastrar</Text>
                </TouchableOpacity>
            }

            <Text style={styles.login}>Voce ja é cadastrado ?
                <Text
                    style={styles.linkLogin}
                    onPress={() => navigation.navigate("Home")}
                >
                    Entre Agora!
                </Text>
            </Text>
            <View style={{ height: 100 }} />

        </KeyboardAvoidingView>
    )
}
//onPress={() => this.props.navigation.navigate('CadastroPrestador')

