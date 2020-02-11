import React, {Component} from 'react';
import { Text, Button, Image, StyleSheet, View, ScrollView, RefreshControl, Dimensions } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import PartyComponent from '../components/PartyComponent';
import { withNavigation } from 'react-navigation';
import { API, graphqlOperation } from 'aws-amplify';
import { listEvents as ListEvents } from './../graphql/queries';

class PartyListscreen extends Component {
  
  constructor(){
    super()
    this.state = {
      index: 0,
      events: [],
      refreshing: false,
    }
  }

    updateIndex = (newindex) => {
      this.setState({index: newindex})
      console.log(this.state.index);
    }

    //Fetch Data from server
    getData = async() => {
      try {
        const eventslist = await API.graphql(graphqlOperation(ListEvents));
        this.setState({events: eventslist.data.listEvents.items});
      } catch (error) {
        console.log(error);
      }
    }

    //On Mount, try to get data and save in state
    componentDidMount(){
      //Uncomment before pushing to prodiction
      //Just to limit number of api calls during development
      //Might increase interval
      //setInterval(()=>{ this.getData(); }, 1000);

      this.getData();
    }

    _onRefresh = () => {
      this.setState({refreshing: true});
      this.getData();
      this.setState({refreshing: false});
    }

    render() {
     return (
      <View style={styles.container}>
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={this.state.index}
        buttons={['Explore', 'My Events', 'Favourites']}
        conta
        inerStyle={{height: 30}} />

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh}/>
          }>

          {this.state.events.map((event,index)=>(
            <PartyComponent party={event} key={index}></PartyComponent>
          ))}

      </ScrollView>
      </View>
     )
    }
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    ptyComponent: {
        paddingBottom: 50
    }
});

export default PartyListscreen;