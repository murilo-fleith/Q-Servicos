import {Platform, StyleSheet} from "react-native"
//home usuario

//"#F24F00"
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#d3d3d3',
    },
    header:{
        height: 50,
        backgroundColor:'#F24F00',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
        
    },
    title:{
        alignItems: 'center',
        justifyContent:"center",
        color:"#ffffff"
    },
    box:{
        height : 150,
        backgroundColor: "#808080",
        margin: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        
    },
    box2:{
        //height : 150,
        backgroundColor: "#808080",
        margin: 7,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'column',
        
    }


})
export default styles