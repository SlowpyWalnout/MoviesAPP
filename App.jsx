import React, { useState } from 'react';
import { SafeAreaView, Text, Image, FlatList, View} from 'react-native';

const App = () => {
  const moviesList = [{
    id: 1,
    name: "Transformers: La Venganza de los Caídos",
    director: "Michel Bay",
    url: 'https://static.wikia.nocookie.net/doblaje/images/7/75/Transformers_La_Venganza_de_los_Caidos.jpg/revision/latest/scale-to-width-down/1000?cb=20140205101748&path-prefix=es'
  },
  {
    id: 2,
    name: "Cars",
    director: "Disney",
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3_Bu8aJaA_DE7bOSQ7bz3o9Y6whQ7_0PxNnBfGXQ82nE1xVRh'
  },
  {
    id: 3,
    name: "Avengers",
    director: "Marvel",
    url: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSK0mRgxk6RD6AXbkAzpQRs7FCh9J0FiOxC9eIHCqoxAgpBeywiPrFjbAcGKbCaVYkc'
  },
  {
    id: 4,
    name: "El laberinto del fauno",
    director: "Guillermo del toro",
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflFpHovyLpPQxtH3pvl1R7EhUU9ruoA5KcerUOoEumtkXz9M3'
  }
]
  const [movies, setMovies] = useState(moviesList);

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to movies app! 🍿</Text>
      <FlatList 
        data = {movies}
        renderItem={({item}) => (
        <View>
          <Image source={{uri: item.url}} style={styles.image}/>
          <Text>{item.name}</Text>
          <Text>{item.director}</Text>
        </View>
  )}  
  keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};
const styles = {
  container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  },
  title: {
  fontSize: 30,
  fontWeight: 'bold',
  marginTop: 15
  },
  image: {
  width: 110,
  height: 160,
  },
  itemContainer: {
  alignItems: 'center',
  justifyContent: 'center',
  }
}
export default App;
