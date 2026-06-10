import { router } from "expo-router"
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import { Produto } from "../types/prodType"

type Props = {produto:Produto}

export default function ProdutoCard({produto}:Props) {

    return (
        <TouchableOpacity 
            style={styles.card}
            onPress={()=>router.push(`/produto/${produto.id}` as any)}>
            <View style={styles.info}>
                <Text style={styles.titulo}>
                    {produto.nome}
                </Text>
                <Text style={styles.preco}>
                    {produto.preco}
                </Text>
            </View>
            <Image style={styles.imagem} source={{ uri: produto. imagem }} resizeMode="cover"/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f1f1f1",
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 2,
        flexDirection:"row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    info: {
        flex: 1,
        gap: 6
    },
    titulo: {
        fontSize: 18,
        fontWeight: "700",
        color: "#1a1a1a"
    },
    preco: {
        fontSize: 16,
        color: "#e63946",
        fontWeight: "600"
    },
    imagem: {
        width: 110,
        height: 110,
        borderRadius: 12,
        marginLeft: 1    }
})