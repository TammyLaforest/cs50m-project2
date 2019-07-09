import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
