

import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from "react-native";
import React, { Component } from "react";
import axios from "axios";



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            nasa_jpl_url: "",
            potentially_hazardous_asteroid: "",
            asteroid: [],
            search_box: '',
            random_click: '',
            isLoading: false,
            data: [],
        }
}
    inputChange = (text) => {
        this.setState({
            search_box: text,
        })
    };
    api_handler = () => {
        console.log("click")
        this.setState({
            isLoading: true,
        })
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${this.state.search_box}?api_key=Ka7pUozbAf4wmQrNaBZCkMYTqLjWSkayOrTVugUo`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    isLoading: false,
                    data: response.data
})
                this.props.navigation.navigate("Info", {
                    name: response.data.name,
                    nasa_jpl_url: response.data.nasa_jpl_url,
                    potentially_hazardous_asteroid: response.data.is_potentially_hazardous_asteroid
                })
            })
            .catch(error => {
                console.log(error);
                alert("Please enter valid Asteroid Id")
                this.setState({
                    isLoading: false,
                })
            })
    }
    random_handler = () => {
        // const random = Date.now()
        console.log("clicking")
        this.setState({
            isLoading: true,
        })

        axios.get("https://api.nasa.gov/neo/rest/v1/neo/2000719?api_key=Ka7pUozbAf4wmQrNaBZCkMYTqLjWSkayOrTVugUo")
            .then((resp) => {
                console.log(resp.data)
                this.setState({
                    isLoading: false,
                    asteroid: resp.data
                })

                this.props.navigation.navigate("Info", {
                    name: resp.data.name,
                    nasa_jpl_url: resp.data.nasa_jpl_url,
                    potentially_hazardous_asteroid: resp.data.is_potentially_hazardous_asteroid,
                });
            })
            .catch((err) => {
                console.log(err);
                // alert("Please enter valid Asteroid Id")
                this.setState({
                    isLoading: false,
                })

            });
    }

    render() {

        const { isLoading } = this.state
        return (
            <>

                {
                    isLoading ? (
                        <>
                            <View style={{ alignItems: "center" }}>
                                <ActivityIndicator size="large" color="#000" />
                            </View>

                        </>
                    ) :
                        (
                            <>
                                <View style={styles.container}>
                                    {/* <Text>{response.data}</Text> */}
                                    <TextInput value={this.state.search_box} onChangeText={this.inputChange} style={styles.input_box} placeholder='Enter Asteroid ID'></TextInput>
                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        {/* {this.disable_btn()} */}
                                        {this.state.search_box === "" ? null : <Button onPress={this.api_handler} type="submit" title='Submit' />}
                                    </View>
                                    <View style={{ marginTop: 20 }}>


                                        <Button onPress={this.random_handler} type="submit" title='Random Asteroid' />
                                    </View>
                                </View>
                            </>
                        )
                }

            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input_box: {
        borderWidth: 2,
        borderColor: "#000",
        padding: 8,
        width: 280
    }
});








