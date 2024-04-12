import React, {useState, useEffect} from "react";
import { StatusBar, Text, TextInput, Pressable } from "react-native";
import Tela from "../components/Tela";
import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";
import Carregar from "../functions/Carregar";

export default function Clinica({navigation}){

    const [resultados, definirResultado] = useState({})

    useEffect(function() {
        Carregar()
        .then(function(dados) {
            const valido = JSON
                .parse(dados || "{}")
            definirResultado(valido)
        })
        .catch(function(erro){
            alert(erro)
        })
    }, [])

    return <Tela>
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
        <Navegacao navigation={ navigation }/>

        {
            Object.keys(resultados).length > 0 &&
                <Janela>
                    <Text style={{ fontFamily: "Rubik", fontSize: 18, marginBottom: 8}}>
                        { resultados.nome }
                    </Text>
                    <Text style={{ fontFamily: "Rubik"}}>
                        { resultados.horario }
                    </Text>
                    <Text style={{ fontFamily: "Rubik"}}>
                        { resultados.categoria }
                    </Text>
                </Janela>
        }
    </Tela>
}