import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, Text, View } from 'react-native'


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            < View style={styles.appContainer} >
                <Button
                    title="Go to Search"
                    onPress={() => this.props.navigation.navigate('Search', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />

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