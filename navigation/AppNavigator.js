import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            title: `Home`,
            headerBackTitle: null,
            headerRight: <Text>"hey"</Text>
        }),
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: () => ({
            title: `Detail View`,
            headerBackTitle: null
        }),
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: () => ({
            title: `Search View`,
            headerBackTitle: null
        })
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
