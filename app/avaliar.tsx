import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Avaliar() {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleEnviar = () => {
    if (nota === 0) {
      alert('Por favor, selecione pelo menos uma estrela!');
      return;
    }

    alert(`Obrigado pela avaliação de ${nota} estrelas!\nSeu feedback ajuda muito a Barbearia.`);
    router.replace('/');
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Avalie nosso serviço!</Text>
          <Text style={styles.subtitle}>Sua opinião é fundamental para mantermos o padrão de excelência.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Qual a sua nota?</Text>
          
          {/* Sistema de 5 Estrelas */}
          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((estrela) => (
              <TouchableOpacity key={estrela} onPress={() => setNota(estrela)}>
                <FontAwesome 
                  name={nota >= estrela ? "star" : "star-o"} 
                  size={40} 
                  color={nota >= estrela ? "#FFD700" : "#D1D5DB"} 
                  style={styles.star}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Text style={styles.notaText}>
            {nota === 0 ? 'Toque nas estrelas' : `Você deu ${nota} ${nota === 1 ? 'estrela' : 'estrelas'}`}
          </Text>

          {/* Campo de Comentário */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Deixe um comentário (opcional):</Text>
            <TextInput
              style={styles.input}
              placeholder="Como foi o seu corte hoje?"
              placeholderTextColor="#9CA3AF"
              multiline={true}
              numberOfLines={4}
              value={comentario}
              onChangeText={setComentario}
            />
          </View>

          {/* Botão Enviar */}
          <TouchableOpacity style={styles.btnEnviar} onPress={handleEnviar}>
            <Text style={styles.btnEnviarText}>Enviar Avaliação</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
          <Text style={styles.btnVoltarText}>Cancelar e Voltar</Text>
        </TouchableOpacity>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F4F6',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 20
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 }
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 16
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12
  },
  star: {
    marginHorizontal: 4
  },
  notaText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
    fontWeight: '500'
  },
  inputContainer: {
    width: '100%',
    marginBottom: 24
  },
  inputLabel: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 8,
    fontWeight: '500'
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1F2937',
    textAlignVertical: 'top',
    minHeight: 100
  },
  btnEnviar: {
    backgroundColor: '#1F2937', 
    width: '100%',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center'
  },
  btnEnviarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  btnVoltar: {
    marginTop: 20,
    padding: 12
  },
  btnVoltarText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '600'
  }
});