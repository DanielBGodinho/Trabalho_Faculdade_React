import { useLocalSearchParams, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getProdutos } from '@/services/produtoService';
import { Produto } from '@/types/prodType';

export default function DetalhesProduto() {
  const { id } = useLocalSearchParams();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    getProdutos().then((data: Produto[]) => {
      const encontrado = data.find(p => p.id === id);
      setProduto(encontrado || null);
    });
  }, [id]);

  if (!produto) return <View style={styles.container}><Text>Carregando...</Text></View>;

    return (
        <View style={styles.container}>
            <Image style={styles.imagem} source={{ uri : produto.imagem}}/>
            <View style={styles.info}>
                <Text style={styles.nome}>{produto.nome}</Text>
                <Text style={styles.preco}>{produto.preco}</Text>
                <Text style={styles.descricao}>{produto.descricao}</Text>

                <TouchableOpacity style={styles.botaoComprar}
                    onPress={() => alert(`${produto.nome} comprado com sucesso! ✅`)}
                >
                    <Text style={styles.botaoComprarText}>Comprar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
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