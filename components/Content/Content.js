import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.center}>Main</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
});
