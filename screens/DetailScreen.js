import React from 'react'
import Constants from 'expo-constants'
import { Button, StyleSheet, View, Text } from 'react-native'
import { isModuleSpecifier } from '@babel/types';
// import console = require('console');
// import console = require('console');

// title: item.title,
// type: item.type,
// year: item.year,
// imdb: item.imdb

const processDetails = (movie) => ({
    Title: movie.Title,
    Year: movie.Year,
    Rated: movie.Rated,
    Released: movie.Released,
    Runtime: movie.Runtime,
    Genre: movie.Genre,
    Director: movie.Director,
    Writers: movie.Writers,
    Actors: movie.Actors,
    Plot: movie.Plot,
    Awards: movie.Awards,
    Poster: movie.Poster,
    IMDbRating: movie.imdbRating,
    Type: movie.Type,
    IMDbNumber: movie.imdbID,
})

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            data: []
        }
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: params.title,
        };
    }
    componentDidMount() {
        this.getDetails()
    }

    getDetails = async () => {

        // let apiKey = [apiKey]

        let imdb = this.props.navigation.getParam('imdb', '')
        let url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdb}`
        try {
            const response = await fetch(`${url}`)
            const results = await response.json()
            const data = processDetails(results)
            this.setState({
                data: data,
            })
            return data
        }
        catch (err) {
            this.setState({ err: err.message })
        }
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