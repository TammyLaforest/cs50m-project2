import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, Text, View } from 'react-native'



// Screens
// import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import SearchScreen from '../screens/SearchScreen'


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            < View style={styles.appContainer} >
                <Text>Hello, HomeScreen!!!</Text>
                <Button
                    title="Go to Detail View"
                    onPress={() => this.props.navigation.navigate('Detail', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
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