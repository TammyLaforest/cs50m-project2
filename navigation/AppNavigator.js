import React from 'react'
import { Button, Text, View, Platform } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';


// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
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


// const TabNavigator = createBottomTabNavigator(
//     {
//         Home: AppNavigator,
//     }
// );


const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
