import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>

      <Image
        style={styles.logo}
        source={require('@/assets/images/barbearia-logo.jpg')}/>

      <Text style={styles.titulo}>Barber Shop</Text>
      <Text style={styles.subtitulo}>O melhor corte da cidade</Text>

      <View style={styles.botoes}>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/listaCortes')}>
          <Text style={styles.botaoTitulo}>Cortes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/loja')}>
          <Text style={styles.botaoTitulo}>Loja</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/avaliar')}>
          <Text style={styles.botaoTitulo}>Avaliar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => router.push('/suporte')}>
          <Text style={styles.botaoTitulo}>Suporte</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitulo: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 36,
  },
  botoes: {
    width: '100%',
    gap: 12,
  },
  botao: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    justifyContent: 'center'
  },
  botaoTitulo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2937',
  },
})