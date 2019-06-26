import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NavbarItem = (props) => (
    <View style = {styles.position}>
        <Text style={styles.words}>{props.name}</Text>
    </View>
);

const styles = StyleSheet.create({
    position: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
        height: '100%',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 1,
    },

    words: {
        backgroundColor: 'white',
        padding: '10%',
        position: 'relative',

    }
});

export default NavbarItem