import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Bumper</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        display: 'flex',
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        position: 'relative',
        top: '12%',
        fontSize: responsiveFontSize(5),
        color: 'white',
    }
});
