import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const Searchscreen =  () => {
    return (
        <View style={styles.container}>
            <Text>Search Party</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Searchscreen;