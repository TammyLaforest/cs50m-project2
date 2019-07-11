import React from 'react'
import Constants from 'expo-constants'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const processTitle = movie => ({
    title: movie.Title,
    type: movie.Type,
    year: movie.Year,
    imdb: movie.imdbID
})
// Sister Act has 1 page
// Mulan has 2 pages
// Batman has 37 pages

const callApiPages = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const { Search } = await response.json()
        const results = Search.map(movie => processTitle(movie))
        return results
    } catch (err) {
        this.setState({ err: err.message })
        console.log('nope')
    }
}

const callApi = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const { totalResults } = await response.json()
        let pageNum = Math.ceil(totalResults / 10)
        let searchResults = []
        let c = []

        for (i = 1; i <= pageNum; i++) {
            const multiPageResults = await callApiPages(`${url}&page=${i}`)
            c = searchResults.concat(multiPageResults)
            searchResults = c
        }
        return searchResults
    } catch (err) {
        this.setState({ err: err.message })
        console.log('no soup for you')
    }

}
export default class ResultsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            err: '',
            results: [],
            pages: 0
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
        }
        catch (err) {
            this.setState({ err: err.message })
        }
    }

    componentWillMount() {
        this.getResults()
    }

    onSelectMovie = (item) => {
        this.props.navigation.navigate('Detail',
            {
                title: item.title,
                type: item.type,
                year: item.year,
                imdb: item.imdb
            })
    }

    render() {
        items = this.state.results.map((item, key) =>
            <TouchableOpacity
                style={styles.eachMovie}
                key={key}
                onPress={() => this.onSelectMovie(item)}>
                <Text>Title: {item.title}</Text>
                <Text>Year: {item.year}</Text>
                <Text>Type: {item.type}</Text>
                <Text>IMDb Number: {item.imdb}</Text>
            </TouchableOpacity>)
        return (
            // ScrollView is slow loading. How can I improve this?
            < ScrollView style={styles.appContainer} >
                <Text style={styles.error}>{this.state.err}</Text>
                <Text style={styles.search}>Search: {JSON.stringify(this.props.navigation.getParam('search', 'no-search'))}</Text>
                {items}

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: Constants.statusBarHeight,
    },
    search: {
        fontSize: 30,
        paddingBottom: 10
    },
    error: {
        color: 'red'
    },
    eachMovie: {
        fontSize: 12,
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
    }
})