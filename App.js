/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//hugo
import React from 'react';
import {Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeStack} from './src/navigator/stacks/HomeStack';
import {CategorieStack} from './src/navigator/stacks/CategorieStack';
import {PostStack} from './src/navigator/stacks/PostStack';


function  InfoScreen(){
  return(
    <View style={{flex:1, justifyContent: 'center' ,alignItems: 'center', backgroundColor: "lightgray"}}>
      <Text>Informacion</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Cumque, nam quia! Enim odit inventore repellendus, omnis cumque
          impedit vitae iure, harum a iste magni vel tempore excepturi ducimus
           itaque aliquam.</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {
  return (
    <>
   
        {/* <NavigationContainer>
       <CoinsStack /> 
     </NavigationContainer>  */}
     <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={HomeStack}
           options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={'#F32A64'} size={35} />
            ),
          }}
          />

          <Tab.Screen name="Categorias" component={CategorieStack} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="new-box" color={'#F32A64'} size={35} />
              ),
            }}
          />
          <Tab.Screen name="Post" component={PostStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="newspaper" color={'#F32A64'} size={35} />
                ),
              }}
          />

            <Tab.Screen name="Info" component={InfoScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="information" color={'#F32A64'} size={35} />
                ),
              }}
          />
        </Tab.Navigator>
        
      </NavigationContainer>

    </>
      
  );
};

export default App;
