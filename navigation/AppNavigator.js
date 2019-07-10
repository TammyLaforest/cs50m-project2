import React from 'react'
import { Button, Text, View, Platform } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';


// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'
import ResultsScreen from '../screens/ResultsScreen'

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                // title: `John`,
                headerBackTitle: null,
                headerRight: <Text>"hey"</Text>
            }),
        },
        Search: {
            screen: SearchScreen,
            navigationOptions: () => ({
                title: `Search View`,
                headerBackTitle: null
            })
        },


    },

    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },
    {
        navigationOptions: {
            tabBarLabel: 'JimmyJames!',
        },
    }
)


const SearchStack = createStackNavigator(
    {
        Search: {
            screen: SearchScreen,
            navigationOptions: () => ({
                title: `Search View`,
                headerBackTitle: null
            })
        },
        Results: {
            screen: ResultsScreen,
            navigationOptions: () => ({
                title: `Search Results`,
                headerBackTitle: null,
                headerRight: <Text>"hey"</Text>
            }),
        },

        Detail: {
            screen: DetailScreen,
            navigationOptions: ({ navigation }) => ({
                title: navigation.getParam('otherParam', 'A Nested Details Screen'),
                headerBackTitle: null
            }),
        }
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },
    {
        navigationOptions: {
            tabBarLabel: 'JimmyJohn!',
        },
    }
)


const AppContainer = createAppContainer(createBottomTabNavigator(
    {
        Home: HomeStack,
        Search: SearchStack
    })
)

export default AppContainer
