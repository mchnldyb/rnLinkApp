import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';

const Homescreen =  () => {
    return (
        <View style={styles.container}>
            <Text>Homescreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
});

export default Homescreen;