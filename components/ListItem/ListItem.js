import { StyleSheet, Text, View } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import React from 'react';
const ListItem = () => {
    return(
        <View style={styles.container}>
            <Text>Location 1</Text>
            <Text>Location 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke',
        margin: '1%',
        height: responsiveFontSize(13),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    
    }
})

export default ListItem;