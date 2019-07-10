import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, Text, View } from 'react-native'


export default class ResultsScreen extends React.Component {
    static navigationOptions = {
        title: 'Search Results',
    };

    render() {
        return (
            < View style={styles.appContainer} >
                <Text>Hello, ResultsScreen!!!</Text>
                <Button
                    title="Go to Detail View"
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>

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