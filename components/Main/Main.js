import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Main</Text>
                <Button
                    title="Add some friends"
                    onPress={() =>
                        this.props.navigation.navigate('Test')
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
    },
});
