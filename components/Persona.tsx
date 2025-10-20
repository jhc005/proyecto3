import { ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { FilaEstrellas } from './FilaEstrellas'

type PersonaProps = {
    nombre:string,
    puesto:string,
    opiniones:number,
    foto:ImageSourcePropType,
    estrellas:number
}

export default function Persona({nombre,puesto,opiniones,foto,estrellas}:PersonaProps) {
  return (
    <View style={styles.contenedor}>

    <Image style={styles.imagen} source={foto}></Image>

    <View style={styles.contenedorflex}>

    <Text style={styles.nombre}>{nombre}</Text>
    <Text style={styles.puesto}>{puesto}</Text>
    
    <View style={styles.contenedorEstrellas}>
        <FilaEstrellas estrellas={estrellas}/>
        <Text style={styles.opiniones}>({opiniones} opiniones)</Text>

    </View>

    </View>

    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        flexDirection: "row",
        alignContent:"center",
        borderRadius:16,
        backgroundColor:"white",
        width:320,
        padding:16,
        margin:8,
        shadowColor: "#000",
        shadowOffset: {
	            width: 0,
	            height: 2,
},
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 7,
    },

    imagen:{
        width:72,
        height:72,
        borderRadius:36
    },

    contenedorflex: {
        flex:1,
        flexDirection:"column",
        marginLeft:16
        

    },

    nombre: {
        fontSize: 18,
        fontWeight:"bold",
        color:"#1a1a1a",
        marginBottom:4
    },

    puesto: {
        fontSize:14,
        color:"#6b7280",
        marginBottom:6
    },

    contenedorEstrellas: {
        flexDirection: "row",
        alignItems:"center"
    },

    opiniones: {
        fontSize:12,
        color: '#9ca3af', 
        marginLeft:8
    }

})