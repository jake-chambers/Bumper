import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },
});
