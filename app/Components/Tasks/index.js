import React, {useEffect} from 'react';
import {
    SafeAreaView, View, FlatList, Text
} from 'react-native';
import { connect } from 'react-redux';

function Tasks(props) {

    useEffect(() => {
      props.fetchTaskList();
    }, []);

    const TaskListItem = ({task}) => {
      return (
        <View style={{flex: 1, marginVertical: 10, marginHorizontal: 10}}>
          <Text>{task.taskName}</Text>
        </View>
      )
    }

    console.log(JSON.stringify(props.arrTasks));

    return (
      <SafeAreaView style={{flex: 1}}>
         <FlatList
            data={props.arrTasks}
            renderItem={({ item, index }) => <TaskListItem task={item}/>}
            keyExtractor={(item, index) => item.taskID}
        />
      </SafeAreaView>
    );
  }
  const mapStateToProps = ({ TaskList, loading }) => ({
    arrTasks: TaskList.arrTasks,
    loading: loading.effects.TaskList.arrTasks,
  });
  
  const mapDispatchToProps = ({ TaskList: { fetchTaskList } }) => ({
    fetchTaskList: () => fetchTaskList(),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
