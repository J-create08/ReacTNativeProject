import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../components/screens/HomePage';
import PrintNavigator from '../Print';
import FrameNavigator from '../Frame';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Navigator headerMode="none">
            <Screen name="Home" component={Home}/>
            <Screen name="PrintNavigation" component={PrintNavigator}/>
            <Screen name="FrameNavigation" component={FrameNavigator}/>
        </Navigator>
    )
}

export default HomeNavigator;
