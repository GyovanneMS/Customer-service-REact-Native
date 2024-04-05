import React, {useState} from "react";
import { StatusBar, Text, TextInput, Pressable } from "react-native";
import Tela from "../components/Tela";
import Navegacao from "../components/Navegacao";
import Janela from "../components/Janela";
import Salvar from "../functions/Salvar";



export default function Paciente(){

    const [formulario, definirFormulario] = useState({
        nome: "",
        horario: "",
        categoria: "",
    })

    function SalvarFormulario(){
        Salvar(formulario.nome, formulario.horario, formulario.categoria)
        definirFormulario({nome: "", horario: "", categoria: ""})
        alert("Salvo com sucesso!")
    }

    return <Tela>
        <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"}/>
        <Navegacao navigation={navigation}/>
        <Janela>
            <Text style={{fontSize: 20, fontFamily: "Rubik", textAlign: "center"}}>
                Formulário do paciente {"\n"}
            </Text>

            <TextInput
            style={{backgroundColor: "#eee", fontFamily: "Rubik", padding: 8, marginBottom: 8}}
            value={/.../}
            onChangeText={/.../}
            placeholder="Nome"/>
            <TextInput
            style={{backgroundColor: "#eee", fontFamily: "Rubik", padding: 8, marginBottom: 8}}
            value={/.../}
            onChangeText={/.../}
            placeholder="horário"/>
            <TextInput
            style={{backgroundColor: "#eee", fontFamily: "Rubik", padding: 8, marginBottom: 8}}
            value={/.../}
            onChangeText={/.../}
            placeholder="categora"/>
        </Janela>
        <Pressable onPress={ SalvarFormulario}>
            <Text Style ={{
                backgroundColor: "#6ebbdc",
                color: "#fff",
                fontFamily: "Rubik",
                paddingVertical: 16,
                textAlign: "center"}}> Eviar </Text>
        </Pressable>
    </Tela>
}