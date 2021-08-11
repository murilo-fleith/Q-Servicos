import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"



export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [errorLogin, setErrorLogin] = useState("");


    const register = () => {

    }
    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Text style={styles.title}> Cadastro  </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true} //carecterer de senha 
                placeholder="Digite sua senha"
                type="text"
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />
            {errorLogin === true
                ?
                <View style={style.contentAlert}>
                    <MaterialCommunityIcons
                        name="alert-circle"
                        size={24}
                        color="#bdbdbd"
                    />
                    <Text style={styles.waringAlert}> Senha ou Email Invalidos</Text>
                </View>
                :
                <View />
            }
            {email === "" || senha === ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Cadastar</Text>
                </TouchableOpacity>
                :
                //onpresss funcao abaixo  
                <TouchableOpacity
                    style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Cadastrar</Text>
                </TouchableOpacity>

            }

        </KeyboardAvoidingView>
    )
}
//onPress={() => this.props.navigation.navigate('CadastroPrestador')

