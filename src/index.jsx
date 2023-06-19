import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import DeviceInfo from './screens/DeviceInfo';
import BatteryInfo from './screens/BatteryInfo';
import MyScreenOrientation from './screens/MyScreenOrientation';
import Notify from './screens/Notify';
import ContactsInfo from './screens/ContactsInfo';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{headerShown: true}} />
                <Stack.Screen name='DeviceInfo' component={DeviceInfo} options={{headerShown: true}} />
                <Stack.Screen name='BatteryInfo' component={BatteryInfo} options={{headerShown: true}} />
                <Stack.Screen name='MyScreenOrientation' component={MyScreenOrientation} options={{headerShown: true}} />
                <Stack.Screen name='Notify' component={Notify} options={{headerShown: true}} />
                <Stack.Screen name='ContactsInfo' component={ContactsInfo} options={{headerShown: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;