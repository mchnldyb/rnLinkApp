import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Text, Image, StyleSheet,View, Dimensions  } from 'react-native';

class MapScreen extends Component {

    render (){
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} showsUserLocation>
                </MapView>
            </View>
        )
    }
    
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default MapScreen;