import React from 'react'
import { Platform, Text, View } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// Screens
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'
import ResultsScreen from '../screens/ResultsScreen'

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";


export default createAppContainer(createBottomTabNavigator(
    {
        Home: HomeScreen,
        Search: SearchScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Search' || routeName === 'Details' || routeName === 'Results') {
                    iconName = `ios-options`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
));