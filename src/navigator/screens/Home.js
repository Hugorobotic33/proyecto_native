import  React,{useEffect,useState} from 'react';
import {Text, View, FlatList, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';


 /* Declaración De Nuestro función Home Screenjs */
export default function Home(){
    const images = [
        {
          image: 'https://blog.arsys.es/file/uploads/2016/10/MongoDB.jpg',
          desc:'sql',
         },
        {
          image:'https://phptoday.ru/img-cache/storage/frameworks/laravel/laravel.jpg? p = home-carousel',
          desc:'laravel',
         },
        {
         image:'https://blog.atomikod.com/wp-content/uploads/2020/12/reactjs.jpg',
         desc:'React',
        },
      
       ]


    return(
        <View>
            <View style={{flex:1}}>
            <FlatListSlider 
           data = {images}
            />
            </View>
       
             

             <View style={[styles.container, {flexDirection: "column"}]}>
      {/* V-SLIDER */}
      <View style={{backgroundColor:"gray",justifyContent:"center",}}><Text>Slider</Text></View>
      {/* VISTA CATEGORI 1 */}

      <Text>V2-Base De Datos</Text>
      <View style={{flex:1,backgroundColor:"darkorange", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"center"}}><Text>POst-1</Text></View>
        <View style={{flexDirection:"row",justifyContent:"center"}}><Text>POst-2</Text></View>
        <View style={{flexDirection:"row",justifyContent:"center"}}><Text>POst-3</Text></View>
      </View>

      {/* Vista categoria 2 */}
      <Text>V3-Laravel</Text>
      <View style={{backgroundColor:"gray", justifyContent:"center", flexDirection:"row", alignItems:"center"}}>
        <View style={{flexDirection:"row",justifyContent:"center"}}><Text>POST-4</Text></View>
        <View style={{flexDirection:"row",justifyContent:"center"}}><Text>POST-5</Text></View>
        <View style={{flexDirection:"row",justifyContent:"center"}}><Text>POST-6</Text></View>
      </View>
    </View>  

       </View>
    )
}

const styles = StyleSheet.create({
    container: {
     
    padding: 20,

    }
    });
