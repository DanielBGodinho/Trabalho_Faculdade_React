import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { cortes } from '@/data/arrayCorte'

export default function Id() {
    const {id} = useLocalSearchParams<{id:string}>()
    const produto = cortes.find((p)=>p.id === Number(id))
    if(!produto) return <Text>Não Existe esse Produto</Text>
    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={produto.imagem}/>
            <View style={styles.info}>
                <Text style={styles.nome}>{produto.titulo}</Text>
                <Text style={styles.preco}>{produto.preco}</Text>
                <Text style={styles.descricao}>{produto.descricao}</Text>

                <TouchableOpacity style={styles.botaoComprar}
                    onPress={() => router.push({
                    pathname: '/marcar',
                    params: { idCorte: id }
                })}
                >
                    <Text style={styles.botaoComprarText}>Marcar horário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoVoltar}>
                    <Text style={styles.botaoVoltarText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#fff"
    },
    imagem : {
        width: "100%",
        height: 300
    },
    info : {
        padding: 20,
        gap: 12
    },
    nome : {
        fontSize: 24,
        fontWeight:"bold",
        color: "#000"
    },
    preco : {
        fontSize: 40,
        fontWeight:"600",
        color: "#8e0866"
    },
    descricao : {
        fontSize: 25,
        lineHeight: 22,
        color: "#555",
        marginTop: 8
    },
    botaoComprar : {
        backgroundColor: "#f10b0b",
        paddingVertical: 14,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 16
    },
    botaoComprarText : {
        fontSize: 24,
        fontWeight: "bold",
        color: "#f6f0f0"
    },
    botaoVoltar : {
        paddingVertical: 12,
        alignItems: "center",
        marginTop: 8
    },
    botaoVoltarText : {
        fontSize: 14,
        color: "#4f4949"
    },
    errorText : {
        fontSize:16,
        color: "#4d4949",
        marginBottom: 16
    }
})