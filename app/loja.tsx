import { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { getProdutos } from '@/services/produtoService'
import { Produto } from '@/types/prodType'
import  ProdutoCard from '@/components/ProdutoCard'


export default function Lista() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect (() => {
        getProdutos().then(data => setProdutos(data));
    }, []);

    return (
        <View 
        style={{flex: 1, paddingTop:16, backgroundColor:"#d2cfcf"}}>
            <FlatList
            data={produtos}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=> (
                <ProdutoCard produto={item}/>
            ) }
            />
        </View>
    )
}