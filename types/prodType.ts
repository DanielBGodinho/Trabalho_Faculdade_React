import { ImageSourcePropType } from "react-native";

export type prodType={
    id : number // <--- mude de Number para number
    titulo : string 
    descricao : string
    preco : string
    imagem : ImageSourcePropType
}