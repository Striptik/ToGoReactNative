import { type Node } from 'react';

export type PlacesStates = {
  places: Array<PlaceItem>,
  input: string,
};

export type PlaceItemProps = {
  label: string,
  visited?: boolean,
  pressItem: Function,
  key: number,
};

export type PlaceItem = {
  id: number,
  label: string,
  visited?: boolean,
};