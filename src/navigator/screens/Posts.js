import React,{useEffect,useState} from 'react';
import {Text, View, FlatList,ActivityIndicator,StyleSheet,Image} from 'react-native';


export default function Posts(){
 const[isLoading,setLoading]=useState(true);
const[data,setData]=useState([]);

  useEffect(()=>{
    fetch('http://hidden-savannah-38765.herokuapp.com/posts')
      .then((response)=>response.json())
      .then((json)=>setData(json.posts))
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
                        <Text style={{color:"white",marginTop:4,fontSize: 20}}>{item.title}</Text>
                        <Text style={{color:"white",marginTop:10}}>{item.slug}</Text>
                        <Text style={{color:"white",marginTop:10}}>{item.description}</Text>
                        <Text style={{color:"white",marginTop:10}}>{item.extract}</Text>
                        
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
height:40,
padding: 10,
backgroundColor:"lightgray",
borderRadius: 10,
marginTop: 6
},
image: {
width: 60,
height: 60
}
  
});