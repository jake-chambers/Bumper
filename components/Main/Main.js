import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
});
