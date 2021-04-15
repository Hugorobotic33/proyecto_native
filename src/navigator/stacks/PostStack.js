import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from '../screens/Posts';

const Stack = createStackNavigator();

export const PostStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Post" component={Posts} />
        </Stack.Navigator>
    )
}
