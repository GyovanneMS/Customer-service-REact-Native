import { getItemAsync } from "expo-secure-store";

export default async function Carregar(){
    await getItemAsync("consulta")
}