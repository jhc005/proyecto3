import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Titulo from './components/Titulo'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <ScrollView>
        <View style={styles.tituloPrincipal}>
          <Titulo texto='Equipo de desarrollo' fontSize={48}/>
        </View>
        <View style={styles.tituloSecundario}>
          <Titulo texto='Direccion'/>
        </View>
        <View>
          <Titulo texto='Analistas' fontSize={38}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal:{
    flex:1,
    backgroundColor:"#dbeafe"
  },
  tituloPrincipal:{
    textAlign:"center",
    marginTop:24
  },
  tituloSecundario:{
    marginTop:28
  }
})
