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
        alignSelf: 'center',
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
        color: "#4d5156"
    },
    ///////////////////A G E N D A /////////////////////////
    btdAdd:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        
        
    },
    btnCancel:{
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20
        
    },
    direction:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    inputAgenda:{
        width: 500,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#F24F00',
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156"
    },
    agenda:{
        backgroundColor:'#d3d3d3'
        
    },
    titleAgenda:{
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent:"center",
        color:"#000000"
    },

})
export default styles



