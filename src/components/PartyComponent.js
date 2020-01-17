import React,  {Component} from 'react';
import {Text,Image,View,StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

class PartyComponent extends Component{
    render(){

        return (
            <View style={styles.container}>
                <View style={styles.partyDetailsSection}>
                    <View style={styles.dateSection}>
                        <Text>20</Text>
                        <Text>Mar</Text>    
                    </View>

                    <View style={styles.titleAddressSection}>
                        <Text>Sample Event Title Here</Text>
                        <Text>Address of Event</Text>
                    </View>

                    <View>
                        <Text>EvntTime</Text>
                        <Button
                            title="View Details"
                            buttonStyle={{width:80, height: 25,}}
                            titleStyle={{fontSize: 12}}
                        />
                    </View>
                    
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 10,
        height: 100,        
    },
    
    partyDetailsSection : {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        
    },
    
    dateSection: {
        borderRightWidth: 1,
        marginRight: 10,
        paddingRight: 10,
    },

    titleAddressSection:{
        borderRightWidth: 1,
        marginRight: 10,
        paddingRight: 10,
    }
});

export default PartyComponent;
