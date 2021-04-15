import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';

/* Const para crear nuestro stack navigator */

const Stack = createStackNavigator();

/* Declaración De Nuestro Componente */

export const HomeStack = () =>{
    /* nuestros stack */

    return(
        <Stack.Navigator>
            <Stack.Screen name="Homexd" component={Home} />
        </Stack.Navigator>
    );
}