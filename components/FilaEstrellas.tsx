import { MaterialIcons } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"
import { generarListaIdsEstrellas } from "../utils/Funciones"



type FilaEstrellasProp = {
    estrellas:number
}

export const FilaEstrellas = ({ estrellas }: FilaEstrellasProp) => {
    const estrellasVacias = 5 - estrellas

    const listaLlenas = generarListaIdsEstrellas(estrellas)
    const listaVacias = generarListaIdsEstrellas(estrellasVacias)

    return (
        <View style={styles.contenedor}>
            {listaLlenas.map((id) => (
                <MaterialIcons
                key={`llena-${id}`}
                name = "star"
                style={styles.estrellaLlena}
                />
            )
        )}

            {listaVacias.map((id) => (
                <MaterialIcons
                key={`vacia-${id}`}
                name = "star"
                style={styles.estrellaVacia}
                />
            )
        )}

        </View>
    )
}




const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',  // No necesita "as 'row'" con StyleSheet
  },
  estrellaLlena: {
    fontSize: 16,
    color: '#ffd700',
  },
  estrellaVacia: {
    fontSize: 16,
    color: '#cccccc',
  }
});