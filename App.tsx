import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Titulo from './components/Titulo'
import { SafeAreaView } from 'react-native-safe-area-context'
import Persona from './components/Persona'

export default function App() {
  return (
    <SafeAreaView style={styles.contenedorPrincipal}>
      <ScrollView>

        <View style={styles.tituloPrincipal}>
          <Titulo texto='Equipo de desarrollo' fontSize={48}/>
        </View>

        <View style={styles.seccion}>
          <Titulo texto='Dirección'/>
        
          <Persona
            nombre="Alfonso"
            puesto="Gerente"
            opiniones={21}
            estrellas={5}
            foto={require('./assets/foto3.png')}  
          />
          <Persona
            nombre="Maria Pérez"
            puesto="Jefa de quipo"
            opiniones={35}
            estrellas={4}
            foto={require('./assets/foto5.png')}
          />
        </View>

        <View style={styles.seccion}>
          <Titulo texto='Analistas' fontSize={38}/>

          <Persona
            nombre="Juan Pedro"
            puesto="Analista Programador"
            opiniones={21}
            estrellas={3}
            foto={require('./assets/foto1.png')}
          />

          <Persona
            nombre="Andrés"
            puesto="Programador Senior"
            opiniones={35}
            estrellas={4}
            foto={require('./assets/foto2.png')}
          />

          <Persona
            nombre="Alfonso"
            puesto="Administrador DB"
            opiniones={21}
            estrellas={4}
            foto={require('./assets/foto3.png')}
          />
        </View>

        
        <View style={styles.seccion}>
          <Titulo texto='Programadores'/>
          <Persona 
            nombre="Juan Pedro"
            puesto="Analista Programador"
            opiniones={321}
            estrellas={5}
            foto={require('./assets/foto1.png')}
          />

            <Persona 
            nombre="Andrés"
            puesto="Programador Senior"
            opiniones={35}
            estrellas={5}
            foto={require('./assets/foto2.png')}
          />

            <Persona 
            nombre="María Pérez"
            puesto="Programadora"
            opiniones={35}
            estrellas={3}
            foto={require('./assets/foto5.png')}
          />

            <Persona 
            nombre="Josefa Smith"
            puesto="Programadora senior"
            opiniones={24}
            estrellas={5}
            foto={require('./assets/foto4.png')}
          />

            <Persona 
            nombre="Robin"
            puesto="Programador junior"
            opiniones={15}
            estrellas={2}
            foto={require('./assets/foto6.png')}
          />
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
    alignItems:"center",
    marginTop:24
  },
  tituloSecundario:{
    marginTop:28
  },

   seccion: {
    marginTop: 28,
    paddingHorizontal: 16      
  }
})
