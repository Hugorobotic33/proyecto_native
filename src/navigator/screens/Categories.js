import React,{useEffect,useState} from 'react';
import {Text, View, FlatList,ActivityIndicator,StyleSheet,Image} from 'react-native';


export default function Categories(){
 const[isLoading,setLoading]=useState(true);
const[data,setData]=useState([]);

  useEffect(()=>{
    fetch('http://hidden-savannah-38765.herokuapp.com/categorias')
      .then((response)=>response.json())
      .then((json)=>setData(json.categories))
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false));
  },[]);
   return(
    <View style={{flex: 1, padding: 24}}>
    
             {isLoading?<ActivityIndicator/>:(
                <FlatList
                     data ={data}
                     keyExtractor={({id}, index) => id}
                     renderItem={({item}) => (
            
                        <View style={styles.subcontainer}>
                        <Image style={styles.image} source ={{uri:item.image}}/>
                        <Text style={{color:"white",marginTop:4,fontSize: 20}}>{item.name}</Text>
                        <Text style={{color:"white",marginTop:10}}>{item.description}</Text>
                        </View>
              


             )}
             />
    )}
    <Text>Hola</Text>
    </View>

   )
};






const styles=StyleSheet.create ({
   
subcontainer: {
padding: 10,
backgroundColor: "gray",
borderRadius: 20,
marginTop: 6
},
image: {
width: 60,
height: 60
}
  
});