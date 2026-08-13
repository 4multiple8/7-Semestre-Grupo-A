import { StyleSheet, Text, View } from 'react-native';

export default function Mensaje(props) {

    return(
        <View>
            <Text style={styles.texto_azul} style={styles.fondo_rosado}>{props.msg}</Text>
            <Text style={styles.texto_rojo} style={styles.fondo_amarillo}>{props.num}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto_rojo: {
    color:'red',
  },
  texto_azul: {
    color:'blue',
  },
  fondo_amarillo: {
    backgroundColor: 'yellow',
  },
  fondo_rosado: {
    backgroundColor: 'pink',
  }
});
