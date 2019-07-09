import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, View, Text } from 'react-native'


export default class DetailScreen extends React.Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    /* render function, etc */

    render() {
        return (
            < View style={styles.appContainer} >
                <Text>Hello, DetailScreen!!!</Text>
                <Text>itemId: {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))}</Text>
                <Text>otherParam: {JSON.stringify(this.props.navigation.getParam('otherParam', 'some default value'))}</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
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
        backgroundColor: '#ccc',
        paddingTop: Constants.statusBarHeight,
    }
})