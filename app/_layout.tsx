import { Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:"Tela Inicial"}}/>
            <Stack.Screen name="cortes/[id]" options={{title:"Detalhes do corte"}}/>
            <Stack.Screen name="marcar" options={{title:"Marcar Horário"}}/>
        </Stack>
    )
}