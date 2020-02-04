import React, {Component} from 'react';
import { Text, ScrollView, StyleSheet, View, TouchableHighlight } from 'react-native';
import t from 'tcomb-form-native';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

const Form = t.form.Form;

const Address = t.struct({
    street: t.String,
    city: t.String,
    zip: t.Number,
})

const Event = t.struct({
    name: t.String,
    description: t.String,
    address: Address,
    date: t.Date,
    
  });

  const options = {
      fields: {
          name: {
              placeholder: 'Name of Event',
              label: "Event Name",
          },
          description: {
              placeholder: 'Event Description or party rules here',
              multiline: true,
              numberOfLines: 10
          },
          address: {
              placeholder: 'Street, City, Zip',

          },
          date: {
              mode: 'datetime',
          },

      }
  };

class NewPartyscreen extends Component{

    onPress = () =>{
        const value = this.refs.form.getValue();
        if(value){
            console.log(value);
        }
    }

    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Form 
                        ref="form"
                        type={Event} 
                        options={options}   
                    />
                </View>
                <Button style={styles.container}
                    title="Create Event"
                    onPress={this.onPress}
                />
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        
    },
    textAreaStyle:{
        
    },  
    inputContainerPad: {
        padding: 15
    },  
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
});

export default NewPartyscreen;