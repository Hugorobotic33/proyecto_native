  
import * as  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from '../screens/Categories';


const Stack = createStackNavigator();

export const  CategorieStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={Categories} />
        </Stack.Navigator>
    );
}