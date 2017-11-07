// @flow

import * as React from 'react';
import { TextInput, Button, View } from 'react-native';

import styles from '../styles';
import { PlaceItemProps } from '../flowDef';

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { input: '' };
  }
  
  handleOnPress () {
    this.props.addCity(this.state.input);
    this.setState({input: ''});
  }
  
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          onChangeText={(input) => this.setState({ input })}
          placeholder='Enter a destination'
          value={this.state.input}
        />
        
        <Button
          onPress={this.handleOnPress.bind(this)}
          style={styles.button}
          title="Add"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default CityInput;