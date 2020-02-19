import React, {Component} from 'react';
import { Text, Image, StyleSheet, View, ScrollView,Dimensions,TouchableOpacity, Platform } from 'react-native';
import MapView from 'react-native-maps';
import { Icon } from 'react-native-elements';
import moment from 'moment';

class PartyDetailsscreen extends Component{
    
    state = {
        isFavorite : false
    }

    bookmarkEvent = () => {
        this.setState({isFavorite : !this.state.isFavorite});
    }

    editEvent = () => {
        console.log('Edit Event Here');
    }

    deleteEvent = () => {
        console.log('Delete Event Here');
    }

    render(){

        const _event = this.props.navigation.state.params;
        //const _date = moment(this.props.navigation.state.params.datetime);          
        const _iconSize = 18;

        return(
            <View style={styles.container}>
                <MapView onPress={e => this.props.navigation.navigate('ViewMap')} style={styles.mapStyle} showsUserLocation></MapView>
                <ScrollView>
                    
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Title</Text>
                        <Text style={styles.sectionContent}>{_event.name}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Description/Rules</Text>
                        <Text style={styles.sectionDescription}>{_event.description}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Location</Text>
                        <Text>{_event.street}, {_event.city}, {_event.state}, {_event.zip}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Date/Time</Text>
                        <Text>{moment(_event.datetime).format('LLLL')}</Text>
                    </View>

                    <View style={styles.iconsection}>
                        <Icon
                        raised
                        name='bookmark'
                        size={_iconSize}
                        onPress={this.bookmarkEvent}
                        color={this.state.isFavorite ? '#00aced': '#CCC'}/>

                        <Icon
                        raised
                        name='edit'
                        onPress={this.editEvent}
                        size={_iconSize}
                        color='#00aced'/>

                        <Icon
                        raised
                        name='delete'
                        size={_iconSize}
                        onPress={this.deleteEvent}
                        color='#FF0000'/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        marginBottom: 15,
        height: '30%',
        borderWidth: 1,
        borderColor: '#DCDCDC',
    },
    iconsection: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
        flexDirection: "row",
        justifyContent: "space-around",
    },
    section:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        marginBottom: 15,
        marginHorizontal: 10,
        backgroundColor: '#FFF',
    },
    sectionTitle:{
        fontFamily: Platform.OS === 'ios' ? 'Cochin' : 'normal',
        fontSize: 15,
        color: '#A9A9A9',
    },
    sectionContent: {
        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'normal',
        fontSize: 25,
        fontWeight: 'bold',
    },
    sectionDescription: {
        fontSize: 17,
    }
});

export default PartyDetailsscreen;