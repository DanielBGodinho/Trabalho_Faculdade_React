import { View, FlatList, StyleSheet } from 'react-native'
import { cortes } from '../data/arrayCortes'
import CortesCard from '../components/cortesCard'

export default function Lista() {

    return (
        <View style={{flex: 1, paddingTop:16, backgroundColor:"#d2cfcf"}}>
            <FlatList
            data={cortes}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item})=> (
                <CortesCard produto={item}/>
            )}
            />
        </View>
    )
}