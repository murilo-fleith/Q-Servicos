import {Platform, StyleSheet} from "react-native"






//"#F24F00"
const styles = StyleSheet.create({
    header:{
        height: 50,
        backgroundColor: '#F24F00',
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
        height : 100,
        backgroundColor: "#DDD",
        margin: 7,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center"
    }

})
export default styles