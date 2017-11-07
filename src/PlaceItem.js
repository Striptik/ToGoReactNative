// @flow

import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from '../styles';
import { PlaceItemProps} from '../flowDef';

const Item = props => {
  const itemStyle = props.visited
    ? [styles.item, styles.itemVisited]
    : styles.item;
  return (
  <TouchableOpacity onPress={props.pressItem}>
    <Text style={itemStyle}>{props.label}</Text>
  </TouchableOpacity>
  );
}; 

export default Item;
