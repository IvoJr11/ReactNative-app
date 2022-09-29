import { useState } from "react"
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"

const notes = [
  {
    id: 1,
    title: 'Error 404',
    description: 'HTTP​ 404 Not Found o HTTP 404 No Encontrado es un código de estado HTTP que indica que el host ha sido capaz de comunicarse con el servidor, pero no existe el recurso que ha sido pedido.',
    image: 'https://www.acceseo.com/wp-content/uploads/2020/11/guia-errores-404.png',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 2,
    title: 'Error 400',
    description: 'La respuesta de código de estado del Protocolo de Transferencia de Hipertexto (HTTP) 400 Bad Request indica que el servidor no puede o no procesará la petición debido a algo que es percibido como un error del cliente.',
    image: 'https://help.autodesk.com/cloudhelp/ESP/SSOGUIDE-Okta-Guide/images/okta_400_nonsuccess.png',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 3,
    title: 'Error 400',
    description: 'La respuesta de código de estado del Protocolo de Transferencia de Hipertexto (HTTP) 400 Bad Request indica que el servidor no puede o no procesará la petición debido a algo que es percibido como un error del cliente.',
    image: 'https://help.autodesk.com/cloudhelp/ESP/SSOGUIDE-Okta-Guide/images/okta_400_nonsuccess.png',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 4,
    title: 'Error 404',
    description: 'HTTP​ 404 Not Found o HTTP 404 No Encontrado es un código de estado HTTP que indica que el host ha sido capaz de comunicarse con el servidor, pero no existe el recurso que ha sido pedido.',
    image: 'https://www.acceseo.com/wp-content/uploads/2020/11/guia-errores-404.png',
    tags: ['error', 'HTTP', 'axios', 'status']
  }
]

const Item = ({ item, onPress, backgroundColor, textColor, height }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={1} style={[styles.note, backgroundColor, height]}>
    <Image source={{uri: item.image}} style={styles.image} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    {/* <Text>{note.description}</Text> */}
  </TouchableOpacity>
)

export default function Notes() {

  const [selectedItem, selectItem] = useState(null)

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedItem ? "#585859" : "#23272E";
    const color = item.id === selectedItem ? 'black' : 'white'
    const height = item.id === selectedItem ? 150 : 100
    return (
      <Item
        item={item}
        onPress={() => selectItem(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        height={{height}}
      />
    );
  };

  return(
    <FlatList
      data={notes}
      style={styles.container}
      numColumns={2}
      columnWrapperStyle='wrap'
      renderItem={renderItem}
      // renderItem={(renderItem) => (
      //   <View style={styles.note} key={note.id}>
      //     <Image source={{uri: note.image}} style={styles.image} />
      //     <Text style={styles.title}>{note.title}</Text>
      //     <Text>{note.description}</Text>
      //   </View>
      // )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  note: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#23272E',
    // marginTop: 10,
    padding: 15,
    borderRadius: 20,
    width: '50%',
    marginHorizontal: 8,
    marginVertical: 10,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 15
  },
  title: {
    color: '#fff',
    fontSize: 18, 
    fontWeight: 'bold'
  }
})