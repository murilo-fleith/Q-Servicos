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
        fontSize: 40,
        color: "#000000",
        marginBottom: 10,
        fontWeight: 'bold' //negrito
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
    funcao: {
        //height: 50,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: "red"
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }

})

export default styles

//PAREIE EM 58:10