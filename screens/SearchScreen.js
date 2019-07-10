import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, View, Text } from 'react-native'

export default class SearchScreen extends React.Component {
    render() {
        return (
            < View style={styles.appContainer} >
                <Text>Hello, SearchScreen!!!</Text>


                <Button
                    title="Go to Results"
                    onPress={() => this.props.navigation.navigate('Results', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#bbb',
        paddingTop: Constants.statusBarHeight,
    }
})