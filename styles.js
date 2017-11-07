// @flow

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    flexDirection: 'row',
    height: 80,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FFF',
  },
  content: {
    flex: 0,
    alignItems: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  //item
  item: {
    fontSize: 32
  },
  itemVisited: {
    textDecorationLine: 'line-through'
  },
  // Input
  input: {
    width: '80%',
    height: 40,
    paddingLeft: 10,
    marginRight: '2%',
    borderColor: '#000',
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  button: {
    width: '20%'
  }
});

export default styles;