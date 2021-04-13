/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';

import {FlatListSlider} from 'react-native-flatlist-slider';

import {Text,View,FlatList,ActivityIndicator,StyleSheet,Image} from 'react-native';




const App: () => Node = () => {
  const images = [
    {
      image:'https://blog.arsys.es/file/uploads/2016/10/MongoDB.jpg',
      desc: 'sql',
     },
    {
      image:'https://phptoday.ru/img-cache/storage/frameworks/laravel/laravel.jpg?p=home-carousel',
      desc: 'laravel',
     },
    {
     image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
     desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
   {
     image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
     desc:
       'Red fort in India New Delhi is a magnificient masterpeiece of humans',
   },
   ]
  /*const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://hidden-savannah-38765.herokuapp.com/categorias')
      .then((response) => response.json())
      .then((json) => setData(json.categorias))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);*/


  return (
    <View>
       
  <FlatListSlider 
    data={images} 
  />
  <Text style={{color:"white",marginTop:16}}>Hugo Nava Gonzalez</Text>
    </View>
    // <View style={{ flex: 1, padding: 24 }}>
    //   <Text style={{fontSize:20,color:"white"}}>Categorias</Text>
    //   {isLoading ? <ActivityIndicator/> : (
    //     <FlatList
    //       data={data}
    //       keyExtractor={({ id }, index) => id}
    //       renderItem={({ item }) => (
    //         <View>
    //           <View style={styles.subcontainer}>
    //             <Image style={styles.image} source={{uri:item.image}}/>
    //           <Text style={{color:"white",marginTop:4,fontSize:20}}>{item.name} </Text>
    //           <Text style={{color:"white",marginTop:10}}>{item.description}</Text>
    //           </View>
              


    //         </View>
            
    //       )}
    //     />
    //   )}
    //   <Text style={{color:"white"}}>Hugo Nava Glez</Text>
    // </View>
  );
};

// const styles=StyleSheet.create({
   
//      subcontainer:{
//        padding:18,
//        backgroundColor:"grey",
//        borderRadius:20,
//        marginTop:6
//      },
//      image:{
//        width:60,
//        height:60
//      }
  
// });

export default App;
