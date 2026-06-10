import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router';

export default function Index() {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>router.push('/listaCortes')}>
                <Image 
                    style={styles.imagem}
                    source={require('@/assets/images/barbearia-logo.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>router.push('/avaliar')}>
                <Image 
                    style={styles.imagem}
                    source={require('@/assets/images/barbearia-logo.jpg')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imagem: {
        width: 500,
        height: 500,
        borderRadius:20
    },
})