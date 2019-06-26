import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NavbarItem = () => (
    <View style = {styles.words}>
        <Text style={styles.position}>Item</Text>
    </View>
);

const styles = StyleSheet.create({
    position: {
        backgroundColor: 'yellow',
        display: 'flex',
        // alignItems: 'center',
        height: '50%',
    },
    words: {
        backgroundColor: 'green'
    }
});

export default NavbarItem