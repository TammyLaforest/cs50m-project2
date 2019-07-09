import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View, Text } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
            < View style={styles.appContainer} >
                <Text>Hello, HomeScreen!!!</Text>
            </View >

        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#ddd',
        paddingTop: Constants.statusBarHeight,
    }
})