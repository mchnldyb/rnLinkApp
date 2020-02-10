import React, {Component} from 'react';
import { ScrollView, StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import { Button } from 'react-native-elements';


import { API, graphqlOperation } from 'aws-amplify';
import { createEvent as CreateEvent } from './../graphql/mutations';


//STYLE CONSTS
const LABEL_COLOR = "#000000";
const INPUT_COLOR = "#000000";
const ERROR_COLOR = "#a94442";
const HELP_COLOR = "#999999";
const BORDER_COLOR = "#cccccc";
const DISABLED_COLOR = "#777777";
const DISABLED_BACKGROUND_COLOR = "#eeeeee";
const FONT_SIZE = 17;
const FONT_WEIGHT = "500";

const Form = t.form.Form;

const formStyles = {
    ...Form.stylesheet,
    fieldset: {
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 20
    },
    formGroup: {
      normal: {
        padding: 7,
        marginTop: 0,
        backgroundColor: '#fff',
      },
      error:{
          marginBottom: 10,
          padding: 7,
          marginTop: 0,
          backgroundColor: '#fff',
      }
    },
    controlLabel: {
      normal: {
        color: LABEL_COLOR,
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      },
      // the style applied when a validation error occours
      error: {
        color: 'red',
        fontSize: 18,
        marginBottom: 7,
        fontWeight: '600'
      }
    },
    textbox: {
        normal: {
          color: INPUT_COLOR,
          fontSize: FONT_SIZE,
          height: 50,
          paddingVertical: Platform.OS === "ios" ? 7 : 0,
          paddingHorizontal: 0,
          borderRadius: 0,
          borderBottomWidth: 1,
          borderColor: BORDER_COLOR,
          borderWidth: 0,
          marginBottom: 5,
        },
        // the style applied when a validation error occours
        error: {
          color: INPUT_COLOR,
          fontSize: FONT_SIZE,
          height: 36,
          paddingVertical: Platform.OS === "ios" ? 7 : 0,
          paddingHorizontal: 7,
          borderRadius: 0,
          borderBottomWidth: 1,
          borderColor: ERROR_COLOR,
          borderWidth: 0,
          marginBottom: 5
        },
        // the style applied when the textbox is not editable
        notEditable: {
          fontSize: FONT_SIZE,
          height: 36,
          paddingVertical: Platform.OS === "ios" ? 7 : 0,
          paddingHorizontal: 7,
          borderRadius: 4,
          borderColor: BORDER_COLOR,
          borderWidth: 1,
          marginBottom: 5,
          color: DISABLED_COLOR,
          backgroundColor: DISABLED_BACKGROUND_COLOR
        }
      },
    
  }


const Event = t.struct({
    name: t.String,
    description: t.maybe(t.String),
    street: t.String,
    city: t.String,
    state: t.String,
    zip: t.Number,
    datetime: t.Date,    
});

  const options = {
      fields: {
          name: {
              stylesheet: formStyles,
              placeholder: 'Name of Event',
              label: "Event Name",
          },
          description: {
              stylesheet: formStyles,
              placeholder: 'Description, rules, etc.',
              multiline: true,
              numberOfLines: 10
          },
          datetime: {
              stylesheet: formStyles,
              mode: 'datetime',
            },
        street: {
            placeholder:  'Street Address',
            stylesheet: formStyles,
        },
        city: {
            placeholder:  'City',
            stylesheet: formStyles,
        },
        zip:{
            placeholder: 'Zip Code',
            stylesheet: formStyles,
        },
        state: {
            placeholder: 'State',
            stylesheet: formStyles,
        }
        
      }
  };

class NewPartyscreen extends Component{

    state = { anEvent: {
                    name: '',
                    description: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: '',
                    datetime: ''
                    } 
            };


    // async componentDidMount(){
    //     try {
            
    //     } catch (err) {
            
    //     }
    // }

    // onChange = (key, value) => {
    //     this.setState({ [key] : value})
    // }

    createEvent = async event => {
        const _event = this.state.anEvent;
        event.preventDefault();
        //console.log(this.state.anEvent);
        //this.setState({anEvent: null});
        const result = await API.graphql(graphqlOperation(CreateEvent, {input: _event}));
        alert("Event Created Successfully");
        this.setState({anEvent: null});
        
        console.log(result);
    }

    //Flow
    //Onchange, set state var. Then finally on submit button press, push it to cloud

    onChange = (value) => {
        //console.log(value);
        this.setState({anEvent: value});
    }

    onPress = async event => {
        const value = this.refs.form.getValue();
        event.preventDefault();
        if (value) {
            // console.log(this.state.anEvent);
            const result =  await API.graphql(graphqlOperation(CreateEvent, {input: this.state.anEvent }));
            console.log(result);
            alert("Event Created");
            this.setState({anEvent: null });
        }
        
        //this.setState({anEvent: value});
        // if(value){
        //     //console.log(value);
        //     this.setState({anEvent: value});
        // }
        //console.log(this.state.anEvent);
    }

    render(){
        return (
                <View style={styles.container}>
                    <ScrollView indicatorStyle="white">
                        <Form 
                            ref="form"
                            type={Event}
                            value={this.state.anEvent}
                            onChange={this.onChange}
                            options={options}   
                        />
                    </ScrollView>
                    <Button title="Create Event" onPress={this.onPress}></Button>
                </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        
    },
    TouchableOpacityContainerStyle:{
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    addEventImageStyle: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
    },
});

export default NewPartyscreen;