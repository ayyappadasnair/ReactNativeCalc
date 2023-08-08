import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
    btnRed: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: myColors.red, 
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
      },
      btnGreen: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: myColors.green, 
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
      },
    btnBlue:{
        width:72,
        height:72,
        borderRadius:36,
        backgroundColor:myColors.blue,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    btnDark:{
        width:72,
        height:72,
        borderRadius:36,
        backgroundColor:myColors.btnDark,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    btnLight:{
        width:72,
        height:72,
        borderRadius:36,
        backgroundColor:myColors.white,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    btnGray:{
        width:72,
        height:72,
        borderRadius:36,
        backgroundColor:myColors.btnGray,
        justifyContent:"center",
        alignItems:"center",
        margin:8,
    },
    smallTextLight:{
        fontSize:32,
        color:myColors.white,
    },

    row:{
        maxWidth:'100%',
        flexDirection:"row",
    },
    viewBottom:{
        position:'absolute',
        bottom:30,
    },
    screenFirstNumber:{
        fontSize:96,
        color:myColors.gray,
        fontWeight :'100',
        alignSelf:'flex-end',
    },
    screenSecondNumber:{
        fontSize:96,
        color:myColors.gray,
        fontWeight:'100',
        alignself:'flex-end'
    },
})