import React from 'react';
import { Text, Image, StyleSheet,View, ActivityIndicator } from 'react-native';

const Splashscreen =  () => {
    return (
        <View style={styles.container}>
            
            <Image 
                source={require('../../assets/logo_transparent.png')}
                style={{width: 260 , resizeMode: 'contain'}}
            />
            <ActivityIndicator size="large" color="blue" style={styles.ActivityIndicatorStyle}/>
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
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
    },
    ActivityIndicatorStyle : {
        margin: 10
    },
    taglineStyle: {
        color: 'grey',
    },
});

export default Splashscreen;