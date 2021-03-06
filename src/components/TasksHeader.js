import React , {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

export default class TasksHeader extends Component<props>{
  constructor(props){
    super(props);
    //TODO: Define state
  }
  generateDate(){
    const currentDate = new Date(),
          day = currentDate.getDay(),
          month = currentDate.getMonth(),
          year = currentDate.getFullYear(),
          date = currentDate.getDate();
    const daysOfTheWeek= ['','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo' ];
    const months= ['enero','febrero','marzo','abril','mayo','junio','julio' ,'agosto','septiembre','octubre','noviembre','diciembre' ];
    return `${daysOfTheWeek[day]} ${date} de ${months[month]} ${year}`;
  }

  render(){
    const taskCount = this.props.toBeCompleted;
    return(
        <View style={ styles.Container }>
          <Image style={styles.userAvatar} source={require('./../images/user-avatar.png')}/>
          <Text style={styles.pendingTasksText}>{taskCount} Pendientes</Text>
          <Text style={styles.dateText}>{this.generateDate()}</Text>
        </View>

    )
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'center',
    paddingTop: 70
  },pendingTasksText: {
    marginTop: 25,
    fontSize: 36,
    color: 'white'
  },
  dateText: {
    marginTop: 8,
    fontSize: 16,
    color: '#A0A0A0'
  },
  userAvatar: {
    height: 130,
    width: 130,
    borderRadius: 65
  }
});
