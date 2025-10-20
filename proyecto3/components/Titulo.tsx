import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props={
    texto:string;
    fontSize?:number;
};

export default function Titulo({texto,fontSize=28}:Props) {
  return (
    <View>
      <Text style={[styles.texto,{fontSize}]}>{texto}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    texto:{
        fontWeight:"bold",
        color:"#111827",
        marginBottom:8,
        paddingHorizontal:8
    }
})