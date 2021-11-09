import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d3d3d3",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 48,
        color: "#F24F00",
        marginBottom: 10,
        fontWeight: 'bold' //negrito
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#F24F00',
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
        
    },
    inputPreco: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#F24F00',
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156",
        flexDirection: 'row'
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F24F00",
        borderRadius: 50,
        marginTop: 30

    },
    textButtonLogin: {
        color: "#ffffff",
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center"
    },
    waringAlert: {
        paddingLeft: 10,
        color: '#bdbdbd',
        fontSize: 16
    },
    login: {
        marginTop: 20,
        color: "#4d5156",
    },
    linkLogin: {
        color: "#0000FF",
        fontSize: 16

    },
    checkbox: {
        alignSelf: "center",
    },
    funcao: {
        height: 50,

        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: "red"
    },
    btnop: {
        width: 200,
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
       // backgroundColor: "#F24F00"        

    },
    checkboxContainer: {
        marginBottom: 20,
        height: 25,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,

    },
    teste:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
    }
    

})

export default styles

//PAREIE EM 58:10