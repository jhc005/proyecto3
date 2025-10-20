import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Titulo from './components/Titulo'

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
    color:"#dbeafe"
  },
  tituloPrincipal:{
    textAlign:"center",
    marginTop:28
  },
  tituloSecundario:{
    marginTop:28
  }
})
