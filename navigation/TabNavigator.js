import React from 'react'
import { Platform, Text, View } from 'react-native'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

// Screens
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";

//const TabNavigator = createBottomTabNavigator(
//     {
//         Home: AppNavigator,
//     }
// );