import {Platform, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === "ios"?0:50,
    },
    title:{
        fontSize:48,
        color:"#F24F00",
        marginBottom: 10,
        fontWeight: 'bold' //negrito
    },
    input:{
        width: 300,
        marginTop: 10,
        padding: 10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor: '#F24F00',
        marginLeft:"auto",
        marginRight: "auto",
        color:"#4d5156"
    },
    buttonLogin:{
        width:200,
        height: 50,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"#F24F00",
        borderRadius: 50,
        marginTop:30

    },
    textButtonLogin:{
        color:"#ffffff",
    },
    contentAlert:{
        marginTop: 20,
        flexDirection: "row",
        justifyContent:'center',
        alignItems: "center"
    },
    waringAlert:{
       paddingLeft: 10,
       color: '#bdbdbd',
       fontSize: 16 
    },
    registration:{
        marginTop: 20,
        color:"#4d5156",
    },
    linkSubscribe:{
        color:"#0000FF",
        fontSize:16
    
    }

})

export default styles

//PAREIE EM 58:10