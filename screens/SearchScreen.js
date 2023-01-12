import { useContext, useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import SearchBar from "../components/SearchBar"
import ThemeContext from "../hooks/themeContext"
import { getImages } from "../services/getImages"
import MasonryList from '@react-native-seoul/masonry-list'
import Pin from "../components/Pin"

export default function SearchScreen() {
  const theme = useContext(ThemeContext)
  const [photos, setPhotos] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchWord, setSearchWord] = useState('UI Design')

  const loadingImages = async () => {
    const res = await getImages(searchWord, currentPage)
    setPhotos([...photos, ...res.data.photos])
  }
  
  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    loadingImages()
  }, [searchWord , currentPage])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MasonryList
        ListHeaderComponent={<SearchBar />}
        ListHeaderComponentStyle={{marginBottom: 3}}        
        data={photos}
        renderItem={({item: photo}) => <Pin image={photo.src.original} title={photo.alt} />}
        numColumns={2}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={2.5}
      />
    </View>
  )
}