import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { router } from 'expo-router';

export default function Suporte() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Suporte</Text>
      <Text style={styles.subtitulo}>Entre em contato conosco</Text>

      <View style={styles.card}>
        <Text style={styles.label}>📧 E-mail</Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@barbearia.com')}>
          <Text style={styles.link}>encheosaconao@email.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>📱 WhatsApp</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/5531912345678')}>
          <Text style={styles.link}>(31) 91234-5678</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>🕐 Horário de atendimento</Text>
        <Text style={styles.valor}>Segunda a Sábado</Text>
        <Text style={styles.valor}>08h às 23h</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>📍 Endereço</Text>
        <Text style={styles.valor}>Av. Presidente Carlos Luz, 221</Text>
        <Text style={styles.valor}>Caiçaras — Belo Horizonte, MG</Text>
      </View>

      <TouchableOpacity style={styles.botaoVoltar} onPress={() => router.back()}>
        <Text style={styles.botaoVoltarText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#F3F4F6' },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1F2937', marginBottom: 4 },
  subtitulo: { fontSize: 14, color: '#6B7280', marginBottom: 24 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  label: { fontSize: 13, fontWeight: 'bold', color: '#6B7280', marginBottom: 6, textTransform: 'uppercase' },
  link: { fontSize: 16, color: '#2563EB', textDecorationLine: 'underline' },
  valor: { fontSize: 16, color: '#1F2937' },
  botaoVoltar: { marginTop: 16, paddingVertical: 12, alignItems: 'center' },
  botaoVoltarText: { fontSize: 15, color: '#6B7280' },
});