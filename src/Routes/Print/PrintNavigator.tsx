import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator()

const PrintNavigator = () => {
    return (
        <Navigator>
            <Screen name="PrintHome" component={PrintHome}/>
            <Screen name="ImageGallery" component={ImageGallery}/>
            <Screen name="CheckoutForm" component={CheckoutForm}/>
            <Screen name="CheckoutConfirmation" component={CheckoutConfirmation}/>
        </Navigator>
    )
}

export default PrintNavigator
