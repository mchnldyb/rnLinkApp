import React, {Component} from 'react';
import { Text, Button, Image, StyleSheet, View, ScrollView, RefreshControl, Dimensions } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import PartyComponent from '../components/PartyComponent';
import { withNavigation } from 'react-navigation';
import { API, graphqlOperation } from 'aws-amplify';
import { listEvents as ListEvents } from './../graphql/queries';

class PartyListscreen extends Component {
    state = {
      index: 0,
      events: [],
      refreshing: false,
    }
    
    updateIndex = (index) => {
      this.setState({index})
    }

    async componentDidMount(){
      try {
        const eventslist = await API.graphql(graphqlOperation(ListEvents));
        this.setState({events: eventslist.data.listEvents.items});
        //console.log("Events: ", eventslist);

      } catch (error) {
        console.log("Error: ", error);
      }
    }

    _onRefresh = async() => {
      this.setState({refreshing: true});
      try {
        const eventslist = await API.graphql(graphqlOperation(ListEvents));
        this.setState({events: eventslist.data.listEvents.items});
        this.setState({refreshing: false});
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    render() {
      return (
        
        <View style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Explore', 'Popular', 'Favourites']}
          conta
          inerStyle={{height: 30}} />

        <ScrollView style={styles.scrollViewSize}
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>
            }>

            {this.state.events.map((event,index)=>(
              <PartyComponent party={event}></PartyComponent>
            ))}

        </ScrollView>

        
          
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },

    scrollViewSize: {
      height: Dimensions.get('window').height,
    },
    ptyComponent: {
        paddingBottom: 50
    }
});

export default PartyListscreen;