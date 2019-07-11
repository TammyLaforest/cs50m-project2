import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, View, Text } from 'react-native'


export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;

        return {
            title: params ? params.otherParam : 'A Nested Details Screen',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    render() {
        return (
            < View style={styles.appContainer} >
                {<Text>`Hello, DetailScreen!!! ${this.props.title}`</Text>}

                <Text>URL: {JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))}</Text>
                <Text>otherParam: {JSON.stringify(this.props.navigation.getParam('otherParam', 'some default value'))}</Text>

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