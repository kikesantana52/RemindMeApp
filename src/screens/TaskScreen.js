/*
*TaskScreen
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

import TasksHeader from './../components/TasksHeader';
import TaskList from './../components/TaskList';

export default class TaskScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        { id: 1, title:'Leche', completed: false },
        { id: 2, title:'Basura', completed: false },
        { id: 3, title:'Platos', completed: true },
        { id: 4, title:'Fiesta', completed: false },
        { id: 5, title:'Deals', completed: false }
      ]
    }
  }


  render(){
    return (
      <View style={ styles.container }>
        <TasksHeader />
        <View style={ styles.tasksContainer }>
          <TaskList tasks={this.state.tasks}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },tasksContainer: {
    backgroundColor: 'white',
    flex: 1
  }
});
