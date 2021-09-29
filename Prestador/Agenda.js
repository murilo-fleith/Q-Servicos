import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import firebase from '../Firebase'
import styles from "./styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { NavigationEvents } from "react-navigation"



export default function Agenda({ navigation }) {
    const [dia, setDia] = useState("");
    const [nomeCliente, setNomeCliente] = useState("");
    const [endereco, setEndereco] = useState("");
    const [descricao, setDescricao] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const user = firebase.auth().currentUser;
    if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
        const uid = user.uid;

    }
    function pushFirebase() {
        try {
            firebase.database().ref('/Agenda' + user.uid).push({
                dia: dia,
                nomeCliente: nomeCliente,
                endereco: endereco,
                descricao: descricao,
            })
        } catch (error) {
            alert(error)
        }
        finally {
            setDia('');
            setNomeCliente('');
            setEndereco('');
            setDescricao('');

        }
        navigation.navigate("Home");
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <Text style={styles.title}> Agenda   </Text>
            <Text> ooo {user.uid}</Text>
            <TextInput
                style={styles.inputAgenda}
                placeholder="Insira o dia do serviço"
                type="text"
                onChangeText={(text) => setDia(text)}
                value={dia}
            />
            <TextInput
                style={styles.inputAgenda}
                placeholder="Nome do Cliente "
                type="text"
                onChangeText={(text) => setNomeCliente(text)}
                value={nomeCliente}
            />
            <TextInput
                style={styles.inputAgenda}
                placeholder="Descração do serviço"
                type="text"
                onChangeText={(text) => setDescricao(text)}
                value={descricao}
            />
            <TextInput
                style={styles.inputAgenda}
                placeholder="Endereço do Serviço"
                type="text"
                onChangeText={(text) => setEndereco(text)}
                value={endereco}
            />

            <View style={styles.direction} >
                <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => navigation.navigate("Prestador")}>
                    <MaterialCommunityIcons
                        name="close"
                        size={30}
                        color="#00000"
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btdAdd}
                    onPress={pushFirebase}>
                    <MaterialCommunityIcons
                        name="calendar-plus"
                        size={30}
                        color="#00000"

                    />
                </TouchableOpacity>
            </View>


        </KeyboardAvoidingView >
    )
}
//onPress={() => this.props.navigation.navigate('CadastroPrestador')

