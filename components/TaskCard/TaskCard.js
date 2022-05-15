import React from 'react';
import {View, Text} from 'react-native';
import styles from './TaskCard.styles';

const TaskCard = props => {
  return (
    <View style={styles.container}>
      <View style={styles.item_left}>
        <Text style={styles.item_text}> {props.text} </Text>
      </View>
    </View>
  );
};

export default TaskCard;
