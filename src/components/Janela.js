import React from "react";
import { View } from "react-native";
import style from "../style/Janela"

export default function Janela(props){
    return <View style={style.janela}>
        {props.children}
    </View>
}