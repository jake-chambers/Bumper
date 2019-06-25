import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Test extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is a test</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
    },
});
