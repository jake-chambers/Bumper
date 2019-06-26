import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import NavbarItem from '../NavbarItem/NavbarItem'
export default class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <NavbarItem></NavbarItem>
                <NavbarItem></NavbarItem>
                <NavbarItem></NavbarItem>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row', 
        alignItems: 'center'

    },
});
