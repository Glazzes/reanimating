type Knight = {
  name: string;
  attribute: string;
  color: string;
  star: number;
  winrate: number;
  image: any;
};

export const knights: Knight[] = [
  {
    name: 'Flame\nGold Gnome',
    attribute: 'Victim flames',
    color: '#fcbc2d',
    star: 9.5,
    winrate: 93,
    image: require('./assets/orange-knight.png'),
  },
  {
    name: 'Ice Diamond Gnome',
    attribute: 'Cold Kingdom',
    color: '#6353cb',
    star: 9.1,
    winrate: 69,
    image: require('./assets/blue-knight.png'),
  },
  {
    name: 'Fire Ruby Gnome',
    attribute: 'Fire Lightning',
    color: '#DC4C30',
    star: 7.9,
    winrate: 88,
    image: require('./assets/red-knight.png'),
  },
  {
    name: 'Poisonous Steel Gnome',
    attribute: 'Emerald Kingdom',
    color: '#8ed032',
    star: 9.1,
    winrate: 95,
    image: require('./assets/green_knight.png'),
  },
];
