import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useLocalSearchParams, router } from "expo-router";
import { cortes } from '@/data/arrayCorte'; // Importando seus dados para filtrar

export default function marcar() {
  const { idCorte } = useLocalSearchParams<{ idCorte: string }>();
  
  const corteSelecionado = cortes.find(c => c.id === Number(idCorte));

  const [hora, setHora] = useState('08');
  const [minuto, setMinuto] = useState('00');

  const horas = Array.from({ length: 15 }, (_, i) => String(i + 8).padStart(2, '0'));
  const minutes = ['00', '15', '30', '45'];

  const handleConfirmar = () => {
    console.log(`Agendamento do corte ID: ${idCorte} (${corteSelecionado?.titulo}) para às ${hora}:${minuto}`);
    
    alert(`Agendado: ${corteSelecionado?.titulo} às ${hora}:${minuto}`);
    router.replace('/'); 
  };

  console.log('horas:', horas);
  console.log('minutos:', minutes);
  console.log('Renderizando marcar');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Agendar Horário</Text>
        
        {corteSelecionado && (
          <Text style={styles.subtitle}>Serviço: {corteSelecionado.titulo}</Text>
        )}
        
        <View style={styles.pickerContainer}>
          <Picker selectedValue={hora} onValueChange={setHora} style={styles.picker}>
            {horas?.map(h => ( <Picker.Item key={h} label={h} value={h} />))}
          </Picker>

          <Text style={styles.separator}>:</Text>

          <Picker selectedValue={minuto} onValueChange={setMinuto} style={styles.picker}>
            {minutes?.map(m => ( <Picker.Item key={m} label={m} value={m} />))}
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleConfirmar}>
          <Text style={styles.buttonText}>Confirmar Agendamento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { backgroundColor: '#fff', padding: 24, borderRadius: 16, width: '100%', maxWidth: 400, alignItems: 'center', shadowOpacity: 0.1, elevation: 4 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1F2937', marginBottom: 4 },
  subtitle: { fontSize: 16, color: '#4F46E5', fontWeight: '600', marginBottom: 24 },
  pickerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 24, width: '100%', justifyContent: 'center' },
  picker: { width: 100, padding: 8, borderRadius: 8, borderColor: '#E5E7EB', backgroundColor: '#F9FAFB' },
  separator: { fontSize: 22, fontWeight: 'bold', marginHorizontal: 12, color: '#4F46E5' },
  button: { backgroundColor: '#4F46E5', width: '100%', padding: 14, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});