import React from 'react'
import Constants from 'expo-constants'
import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
// import console = require('console');

let apiKey = 

export default class SearchScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            isFormValid: false,
            apiUrl: 'http://www.omdbapi.com/?apikey=${apiKey}&',
            err: '',
            results: [],
            resultsActive: false,
            processed: ""
        }
    }

    handleTextChange = title => {
        this.setState({
            title,
            isFormValid: true
        })
    }

    handleSubmit = () => {
        let cleanedTitle = this.state.title.replace(/\s/g, '+').toLowerCase()
        let newUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${cleanedTitle}`
        this.setState({
            apiUrl: newUrl
        }, () => this.props.navigation.navigate('Results',
            {
                url: this.state.apiUrl,
                movie: this.state.title,
            })
        )
    }
    render() {
        return (
            < View style={styles.appContainer} >
                <KeyboardAvoidingView behavior="padding">
                    <TextInput
                        style={styles.input}
                        placeholder="Type name of movie here"
                        value={this.state.title}
                        onChangeText={this.handleTextChange}
                        autoCapitalize="words"
                        clearButtonMode="while-editing"
                    />
                    <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
                </KeyboardAvoidingView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#bbb',
        paddingTop: Constants.statusBarHeight,
        alignContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 70,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
        fontSize: 24
    },
})

