import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import TaskCard from './components/TaskCard';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task === '') {
      return Alert.alert('Yapılacak bir iş bulmaslısın!');
    }
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    updateCounter();
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    downCounter();
  };

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const downCounter = () => {
    setCounter(counter - 1);
  };

  const touchTask = () => {
    const newTask = taskItems.map(() => {
      taskItems.isCompleted = !taskItems.isCompleted;
    });
    setTaskItems(newTask);
    downCounter();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled">
        <View>
          <View style={styles.title_wrapper}>
            <Text style={styles.title}>Yapılacaklar</Text>
          </View>
          <View style={styles.counter_wrapper}>
            <Text style={styles.counter}> {counter}</Text>
          </View>
          <View style={styles.task}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onLongPress={() => completeTask(index)}
                  onPress={() => touchTask()}
                  style={styles.line_text}>
                  <TaskCard text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.write_task}>
        <TextInput
          style={styles.input}
          placeholder={'Yapılacak...'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <View style={styles.button_style}>
          <Button
            color={'#ffa500'}
            title="Kaydet"
            onPress={() => handleAddTask()}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  title_wrapper: {
    position: 'absolute',
    paddingTop: 70,
    paddingHorizontal: 25,
  },
  title: {
    color: '#ffa500',
    fontSize: 34,
    fontWeight: 'bold',
  },
  counter_wrapper: {
    alignItems: 'flex-end',
    paddingEnd: 20,
    paddingTop: 70,
  },
  counter: {
    color: '#ffa500',
    fontSize: 34,
    fontWeight: 'bold',
  },
  input: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#37474f',
    borderRadius: 10,
  },
  write_task: {
    alignSelf: 'center',
    backgroundColor: '#37474f',
    position: 'absolute',
    bottom: 45,
    width: '95%',
    alignItems: 'center',
    borderRadius: 10,
    height: 100,
  },
  task: {
    marginTop: 30,
  },
  button_style: {
    width: 350,
  },
});
