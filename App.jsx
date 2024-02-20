import React, { useState } from 'react';
import { SafeAreaView, Text, Image, FlatList, View, StyleSheet } from 'react-native';

const App = () => {
  const moviesList = [{
    id: 1,
    name: "Transformers: La Venganza de los Caídos",
    director: "Michel Bay",
    url: 'https://pics.filmaffinity.com/Transformers_La_venganza_de_los_caaidos-446981154-large.jpg',
    description: "Sam Witwicky deja atrás a los Autobots para comenzar una nueva vida. Pero cuando su mente es llena de símbolos criptográficos, los Decepticons lo persiguen y él vuelve a unirse a los Autobots para enfrentar a los Decepticons.",
  },
  {
    id: 2,
    name: "Cars",
    director: "Disney",
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS3_Bu8aJaA_DE7bOSQ7bz3o9Y6whQ7_0PxNnBfGXQ82nE1xVRh',
    description: "Rayo McQueen, un novato corredor de la Copa Pistón, descubre que la vida no es solo acerca de ganar carreras, sino de encontrar amigos y el verdadero significado del éxito.",
  },
  {
    id: 3,
    name: "Avengers",
    director: "Marvel",
    url: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSK0mRgxk6RD6AXbkAzpQRs7FCh9J0FiOxC9eIHCqoxAgpBeywiPrFjbAcGKbCaVYkc',
    description: "Cuando un enemigo inesperado emerge y amenaza la seguridad mundial, Nick Fury, director de la agencia internacional de paz conocida como SHIELD, encuentra que necesita un equipo para salvar al mundo.",
  },
  {
    id: 4,
    name: "El laberinto del fauno",
    director: "Guillermo del toro",
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTflFpHovyLpPQxtH3pvl1R7EhUU9ruoA5KcerUOoEumtkXz9M3',
    description: "En 1944, tras la victoria de Franco, una niña y su madre se trasladan a una zona rural al norte de España. Al explorar el laberinto del fauno, la niña descubre un mundo de fantasía y horror.",
  },
  {
    id: 5,
    name: "Dime cuando tu",
    director: "Gerardo Gatica",
    url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS05L4QmyKDqZE4RLuvDBDdmYHKgVzGQgW5RQ9o0QDwYQyZ3kcH',
    description: "Willie, un músico mexicano, se encuentra en una encrucijada en su vida. Cuando su abuela muere, decide buscar su destino en Nueva York, donde se encuentra con una joven que le ayuda a descubrir su verdadero amor por la música.",
  },
  {
    id: 6,
    name: "La gran seducción",
    director: "Celso García",
    url: 'https://pics.filmaffinity.com/La_gran_seducciaon-290624226-large.jpg',
    description: "Un pueblo pesquero en México se encuentra en una crisis económica. Un médico llega al pueblo y les promete que se quedará si logran seducir a un médico de la ciudad para que se quede.",
  },
  {
    id: 7,
    name: "Flamming hot",
    director: "Eva Longoria",
    url: 'https://lumiere-a.akamaihd.net/v1/images/796133_disney_flamin_hot_4x5_csp_x1_jlg_c6417a93.jpeg?region=0,0,2160,2700',
    description: "La verdadera historia de Richard Montañez, un inmigrante mexicano que superó la pobreza y el racismo para convertirse en un ejecutivo de PepsiCo. Montañez inventó el sabor Flamin' Hot Cheetos y se convirtió en un ícono de la cultura pop.",
  },
  {
    id: 8,
    name: "Wonka",
    director: "Paul King",
    url: 'https://pics.filmaffinity.com/Wonka-113186318-large.jpg',
    description: "La película se centrará en la juventud de Willy Wonka y en sus aventuras antes de abrir la fábrica de chocolate más famosa del mundo.",
  },
  {
    id: 9,
    name: "Creed III",
    director: "Michel B. Jordan",
    url: 'https://hips.hearstapps.com/hmg-prod/images/pu5u25f2enavdf7ojppu3hf7zq-1666108043.jpeg',
    description: "Después de dominar el mundo del boxeo, Adonis Creed ha progresado tanto en su carrera como en su vida familiar. Cuando Damian, un amigo de la infancia y antiguo prodigio del boxeo, reaparece después de cumplir una larga condena en prisión, Adonis Creed quiere demostrar que merece una oportunidad en el ring.",
  },
  {
    id: 10,
    name: "Rocky III",
    director: "Sylvester Stallone",
    url: 'https://pics.filmaffinity.com/Rocky_III-182829734-large.jpg',
    description: "Después de ganar el campeonato mundial, Rocky debe enfrentarse a un nuevo y poderoso oponente, Clubber Lang, quien lo derrota y le quita el título. Apollo Creed decide entrenar a Rocky para recuperar el título.",
  },
  ];

  
  const renderMovieItem = ({ item }) => (
    <View style={styles.movieContainer}>
      <Image source={{ uri: item.url }} style={styles.movieImage} />
      <Text style={styles.movieName}>{item.name}</Text>
      <Text style={styles.movieDirector}>{`Director: ${item.director}`}</Text>
      <Text style={styles.description}>{`${item.description}`}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={moviesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
        horizontal={true} // Habilita el desplazamiento horizontal
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 16,
    marginTop: 50,
  },
  movieContainer: {
    marginBottom: 16,
    flex: 1,
    justifyContent: 'top',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 650,
    width: 300,
    margin: 8,
    borderRadius: 8,
    padding: 8,
  },
  movieImage: {
    width: 270,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 8,
    margin: 16,
  },
  movieName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  movieDirector: {
    fontSize: 16,
    color: 'gray',
  },
  description: {
    fontSize: 14,
    color: 'black',
    margin: 8,
    textAlign: 'justify',
  },
});

export default App;
