import { ImageSourcePropType } from "react-native";

export type prodType={
    id : number
    titulo : string 
    descricao : string
    preco : string
    imagem : ImageSourcePropType
}

export type Produto = {
    id : string;
    nome : string;
    preco : string;
    descricao : string;
    imagem : string;
}