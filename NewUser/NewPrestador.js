import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity, CheckBox, KeyboardAvoidingView, Platform } from 'react-native'
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
    const [encanador, setEncanador] = useState(false);
    const [eletrecista, setEletricista] = useState(false);
    const [pedreiro, setPedreiro] = useState(false);
    const [manutencaoGeral,setManutencaoGeral]= useState(false);
    var databse = firebase.firestore();

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
        databse.collection("prestador").add({  //funcao que salva no banco 
            name: name,
            telefone: telefone,
            email: email,
            encanador: encanador,
            eletrecista: eletrecista,
            pedreiro: pedreiro,
            manutencaoGeral: manutencaoGeral
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
                secureTextEntry={true} //carecterer de senha 
                placeholder="Digite sua senha"
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Text> Selecione Suas Habilidades </Text>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={encanador}
                    onValueChange={setEncanador}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Encanador        </Text>

                <CheckBox
                    value={eletrecista}
                    onValueChange={setEletricista}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Eletricista</Text>
            </View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={pedreiro}
                    onValueChange={setPedreiro}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Pedreiro     </Text>
                <CheckBox
                    value={manutencaoGeral}
                    onValueChange={setManutencaoGeral}
                    style={styles.checkbox}
                />
                <Text style={styles.label}>Manutenção Geral</Text>
            </View>
            {
                email === "" || password === ""
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

        </KeyboardAvoidingView >
    )
}
//onPress={() => this.props.navigation.navigate('CadastroPrestador')

