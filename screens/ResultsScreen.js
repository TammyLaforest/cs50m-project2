import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import console = require('console');

const processTitle = movie => ({
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
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
        this.state = {
            err: '',
            results: [],
            resultsActive: false,
            processed: "",
            detailTitle: "",
            detailTitleUrl: ""
        }
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
            this.setState({ err: err.message })
        }
    }

    componentWillMount() {
        this.getResults()
    }

    onSelectMovie = movie => {
        this.props.navigation.push('DetailsScreen', movie);
    };

    render() {
        items = this.state.results.map((item, key) =>
            <TouchableOpacity
                style={styles.eachMovie}
                key={key}
                onPress={() => this.onSelectMovie(item.title)}>
                <Text>Title: {item.title}</Text>
                <Text>Year: {item.year}</Text>
                <Text>Type: {item.type}</Text>
            </TouchableOpacity>)
        return (
            < View style={styles.appContainer} >
                {items}

                <Text>{this.state.err}</Text>
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
    },
    eachMovie: {
        fontSize: 12,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
    }
})

