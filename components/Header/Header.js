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
        backgroundColor: '#e6fcff',
        display: 'flex',
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 0.1, height: 0.1 },
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        zIndex: 999,  
    },

    title: {
        position: 'relative',
        top: '12%',
        fontSize: responsiveFontSize(5),
        color: '#5faeba',
    }
});
