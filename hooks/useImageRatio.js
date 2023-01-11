import { Image } from 'react-native'
import { useState, useEffect } from 'react'

export default function GetImageRatio(image) {

  const [ratio, setRatio] = useState(1)

  useEffect(() => {
    Image.getSize(image, ((width, height) => {
      setRatio(width / height)
    }))
  }, [image])

  return ratio
}