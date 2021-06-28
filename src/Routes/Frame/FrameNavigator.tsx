import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const {Navigator, Screen} = createStackNavigator()

const FrameNavigator = () => {
    return (
        <Navigator>
            <Screen name="FrameHome" component={FrameHome}/>
            <Screen name="FrameGallery" component={FrameGallery}/>
            <Screen name="CheckoutForm" component={CheckoutForm}/>
            <Screen name="CheckoutConfirmation" component={CheckoutConfirmation}/>
        </Navigator>
    )
}

export default FrameNavigator
