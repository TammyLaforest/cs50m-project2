
// Outdated due to old tutorial. react-navigation requires app-container

import React from 'react'
import { Button, View, Text } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

// documentation
import { createAppContainer, createStackNavigator } from 'react-navigation';


// const AppNavigator = createStackNavigator(...);

const AppNavigator = createSwitchNavigator({
    "RouteNameOne": ScreenComponentOne
})

const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

// export default AppContainer;



class ScreenComponentOne extends React.Component {
    render() {
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 25,
            color: 'teal'
        }}>
            <Button title="Go to screen 2" onPress={
                () => {
                    this.props.navigation.navigate('RouteNameOne')
                }
            } />
        </View>
    }
}

class ScreenComponentTwo extends React.Component {
    render() {
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 25,
            color: 'red'
        }}>
            <Button title="Go to screen 1" onPress={
                () => {
                    this.props.navigation.navigate('RouteNameTwo')
                }
            } />
        </View>
    }
}



export default class AppContainer extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello, World!</Text>
                < AppNavigator />
                <AppContainer
                    onNavigationStateChange={handleNavigationChange}
                    uriPrefix="/app"
                />
            </View>
        )




    }
}