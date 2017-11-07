//@flow

import React, { Component } from 'react';
import { Text, View, ScrollView, StatusBar } from 'react-native';

StatusBar.setHidden(true);

import PlaceItem from './PlaceItem';
import InputCity from './InputCity';
import styles from '../styles';

import { PlacesState } from '../flowDef';

const places = [
  { id: 0, label: 'Hong Kong', visited: true, },
  { id: 1, label: 'Londres', visited: true, },
  { id: 2, label: 'Singapour', visited: true, },
  { id: 3, label: 'Bangkok', visited: true, },
  { id: 4, label: 'Paris', },
  { id: 5, label: 'Macao', },
  { id: 6, label: 'New York', },
];

export default class Places extends Component<{}, PlaceState> {
  constructor() {
    super();
    //# Bind functions
    this.addCity = this.addCity.bind(this);
    //# Init states
    this.state = {
      places,
    };
  }
  
  //
  //ITEMS
  //
  
  // Function when press Items
  pressItem = (i) => {
    let items = this.state.places,
      item = items[ i ];
    if (typeof item.visited !== 'undefined' && item.visited === true) {
      item.visited = false;
    } else {
      item.visited = true;
    }
    items[ i ] = item;
    this.setState({
      places: items,
    });
  };
  
  renderPlaces = () => {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        {
          this.state.places.map((place, i) => {
            let visited = false;
            if (typeof place.visited !== 'undefined' && place.visited) {
              visited = true;
            }
            return <PlaceItem
              visited={visited}
              label={place.label}
              key={place.id}
              pressItem={this.pressItem.bind(this, i)}
            />;
          })
        }
      </ScrollView>
    );
  };
  
  //
  // INPUT
  //
  
  addCity = (label) => {;
    let newCity = {};
    newCity.label = label;
    newCity.id = this.state.places.length;
    
    let places = this.state.places;
    places.unshift(newCity);
    this.setState({
      places,
    });
  };
  
  renderInput = () => {
    return (
      <InputCity addCity={this.addCity} />
    );
  };
  
  render() {
    return (
      <View style={styles.root}>
        {/*INPUT*/}
        {
          this.renderInput()
        }
        {/*LIST CITIES*/}
        {
          this.renderPlaces()
        }
        {/*FILTERS*/}
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}
