import React from "react";
import { View, Text, Pressable } from "react-native";
import style from "../style/Navegacao"

export default function Navegacao(props){
    return <View style={style.navegacao}> 
        <View style={style.navegacaoTopo}>
            <Text style={style.navegacaoTopoTexto}> Atendimento </Text>
        </View>

        <View style={style.navegacaoBase}>
            <Pressable onPress={() => props.navigation.navigate("Clinica")} style={style.navegacaoBaseBotao}>
                <Text style={style.navegacaoBaseTexto}> Clinica </Text>
            </Pressable>
            <Pressable onPress={() => props.navigation.navigate("Paciente")} style={style.navegacaoBaseBotao}> 
                <Text style={style.navegacaoBaseTexto}> Paciente </Text>
            </Pressable>
        </View>
    </View>
}