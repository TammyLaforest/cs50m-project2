import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View, Text } from 'react-native'

export default class DetailScreen extends React.Component {
    render() {
        return (
            < View style={styles.appContainer} >
                <Text>Hello, DetailScreen!!!</Text>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#ccc',
        paddingTop: Constants.statusBarHeight,
    }
})