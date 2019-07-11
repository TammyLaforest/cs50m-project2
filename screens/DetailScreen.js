import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, View, Text } from 'react-native'

// title: item.title,
// type: item.type,
// year: item.year,
// imdb: item.imdb


const callDetailApi = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const { Search } = await response.json()
        const results = Search.map(movie => processTitle(movie))
        return results
    } catch {
        console.log('You cannot learn more')
    }
}

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params.title,
        };
    }

    render() {
        const title = this.props.navigation.getParam('title', 'Title').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
        const year = this.props.navigation.getParam('year', 'Year')
        return (
            < View style={styles.appContainer} >

                <Text>{`${title}(${year})`}</Text>

                <Text>Type: {this.props.navigation.getParam('type', 'Type')}</Text>
                <Text>IMDb Number: {this.props.navigation.getParam('imdb', 'IMDB Number')}</Text>

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
        backgroundColor: '#ccc',
        paddingTop: Constants.statusBarHeight,
    }
})