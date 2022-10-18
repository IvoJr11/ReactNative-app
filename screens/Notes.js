import { useState, useEffect } from "react"
import { View, Text, FlatList, Image, TouchableOpacity, Dimensions, ScrollView } from "react-native"
import { StyleSheet } from "react-native"
import MasonryList from '@react-native-seoul/masonry-list'
import Pin from "../components/Pin"

const notes = [
  {
    id: 1,
    title: 'UI Card',
    description: 'eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus' ,
    image: 'https://i.pinimg.com/236x/c9/8e/fc/c98efcdb6167429b733db05d4a61df68.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 2,
    title: 'UI List',
    description: 'sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra',
    image: 'https://i.pinimg.com/564x/c7/56/b8/c756b8cb687038c0887525dd7c634265.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 3,
    title: 'UI Navigate',
    description: 'ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque',
    image: 'https://i.pinimg.com/236x/ca/6c/ef/ca6cef4fa77fe228b6f72e0fd5d3fd1f.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 4,
    title: 'UI Buttons',
    description: 'arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus',
    image: 'https://i.pinimg.com/564x/ce/de/db/cededbbb11a7d2a3646f657f8e21c76a.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 5,
    title: 'UI Elements',
    description: 'arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus',
    image: 'https://i.pinimg.com/236x/b3/8f/77/b38f77f48ebc187b49cdb3383d99d8a3.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 6,
    title: 'UI Navbar',
    description: 'arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus',
    image: 'https://i.pinimg.com/236x/34/6d/f3/346df3662c7e00496baa06c7ceda1b3a.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 7,
    title: 'UI Player',
    description: 'arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus',
    image: 'https://i.pinimg.com/564x/87/a1/f8/87a1f833693ed2096377d7477a19d91b.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  },
  {
    id: 8,
    title: 'UI Sweets Shop',
    description: 'arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper risus',
    image: 'https://i.pinimg.com/564x/6e/a5/82/6ea5824fb5840dcd75bdf8308da6dc62.jpg',
    tags: ['error', 'HTTP', 'axios', 'status']
  }
]

export default function Notes() { 

  return(
    <MasonryList 
      data={notes}
      renderItem={({item: note}) => <Pin image={note.image} title={note.title} />}
      numColumns={2}
    />
  )

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  }
})