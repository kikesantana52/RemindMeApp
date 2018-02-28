/*
*TaskScreen
*/
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';

import TasksHeader from './../components/TasksHeader';
import Task from './../components/Task';

export default class TaskScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      tasks: [
        { id: 1, title:'Leche', completed: false },
        { id: 2, title:'Basura', completed: true },
        { id: 3, title:'Platos', completed: false },
        { id: 4, title:'Fiesta', completed: true },
        { id: 5, title:'Deals', completed: false }
      ]
    }
  }

  addTask(){

  }
  updateTask(targetedId){
    let currentTasks = [...this.state.tasks];
    let taskToUpdate = currentTasks.find((task)=> task.id === targetedId );
    taskToUpdate.completed = !taskToUpdate.completed;
    this.setState({tasks: currentTasks});
  }
  updateTaskCount(){
    let count = 0;
    this.state.tasks.forEach(task => !task.completed? count++ : '');
    return count;
  }

  renderTasks(){
    return(
      this.state.tasks.map((task) => {
        return(
          <Task key={task.id} task={task} updateTask={this.updateTask.bind(this)}/>
        )
      })
    )
  }


  render(){
    return (
      <View style={ styles.container }>
        <TasksHeader toBeCompleted={this.updateTaskCount()}/>
        <ScrollView style={ styles.taskContainer }>
          {this.renderTasks()}
        </ScrollView>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },taskContainer: {
    flex: 1,
    backgroundColor: 'white'
  }
});
