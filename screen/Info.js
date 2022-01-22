

import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator } from "react-native";
import React, { Component } from "react"
import axios from "axios";




export default class Info extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props;
        return (
            <>                <View style={styles.container}>
                <Text style={{fontSize:25,fontWeight:"bold"}}>ASTEROID DATA</Text>
                <View style={{ alignItems: "center", margin: 20 }}>
                    <Text style={styles.text}>
                        name : {JSON.stringify(navigation.getParam("name", ""))}
                    </Text>
                    <Text style={styles.text}>
                        url: {JSON.stringify(navigation.getParam("nasa_jpl_url", ""))}
                    </Text>
                    <Text style={styles.text}>
                        potentially_hazardous_asteroid:
                        {JSON.stringify(navigation.getParam("potentially_hazardous_asteroid", "")
                        )}
                    </Text>
                </View>
            </View>
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
    text: {
        fontSize: 18,

    }

});