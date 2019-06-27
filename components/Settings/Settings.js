import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
export default class Settings extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.header}>Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },

    header: {
        backgroundColor: '#5faeba',
        fontSize: responsiveFontSize(3),
        padding: '3%',
        color: '#e6fcff'
    }
});
