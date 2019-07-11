import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, Text, View } from 'react-native'
// import console = require('console');

const processTitle = movie => ({
    title: movie.Title,
    year: movie.Type,
    type: movie.Year,
})

const callApi = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const { Search } = await response.json()
        return results = Search.map(movie => processTitle(movie))
    } catch {
        console.log('no soup for you')
    }
}
export default class ResultsScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = {
        title: 'Search Results',
    }
    getResults = async () => {
        const url = this.props.navigation.getParam('url', 'No-Url')
        try {
            const results = await callApi(url)
            this.setState({
                results: results
            })
            console.log(this.state.results[0].title)
        }

        catch (err) {
            // console.log('err message results')
            const errMessage = err.message
            this.setState({ err: errMessage })
        }
    }

    componentWillMount() {
        this.getResults()
    }




    render() {

        return (
            < View style={styles.appContainer} >
                <Text>{this.props.err}</Text>



                <Text>Movie Name: {JSON.stringify(this.props.navigation.getParam('movie', 'no-movie'))}</Text>
                <Button
                    title="Go to Detail View"
                    onPress={() => this.props.navigation.navigate('Detail', { itemId: this.props.apiUrl, otherParam: this.props.title })}
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

