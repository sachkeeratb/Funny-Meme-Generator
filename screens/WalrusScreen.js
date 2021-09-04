import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import Homescreen from './Homescreen';
import wl1 from '../assets/wl1.png';
import wl2 from '../assets/wl2.png';
import wl3 from '../assets/wl3.png';
import wl4 from '../assets/wl4.png';
import wl5 from '../assets/wl5.png';
import wl6 from '../assets/wl6.png';
import wl7 from '../assets/wl7.png';
import wl8 from '../assets/wl8.png';
import wl9 from '../assets/wl9.png';
import wl10 from '../assets/wl10.png';
import wl11 from '../assets/wl11.png';
import wl12 from '../assets/wl12.png';
import wl13 from '../assets/wl13.png';
//import wl14 from '../assets/wl14.png';
import arrow from '../assets/arrow.png';

const images = [
  wl1,
  wl2,
  wl3,
  wl4,
  wl5,
  wl6,
  wl7,
  wl8,
  wl9,
  wl10,
  wl11,
  wl12,
  wl13,
];

export default class WalrusScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      // This is our Default number value
      NumberHolder: 1,
    };
  }

  GenerateRandomNumber = () => {
    var RandomNumber = Math.floor(Math.random() * images.length);

    this.setState({
      NumberHolder: RandomNumber,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#000000'}
          centerComponent={{
            text: 'Walrus Memes',
            style: {
              color: '#d3d3d3',
              fontSize: 19,
              fontWeight: 'bold',
              fontFamily: 'Calibri',
            },
          }}
        />
        <Image
          source={images[this.state.NumberHolder]}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={this.GenerateRandomNumber}>
          <Image style={styles.arrowIcon} source={require('../assets/arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => this.props.navigation.navigate('Homescreen')}>
            <Icon name="home" type="fontawesome6" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3DED97',
  },
  goButton: {
    height: 75,
    alignSelf: 'center',
    padding: 10,
    marginTop: 100,
    borderRadius: '15',
    alignItems: 'center'
  },
  arrowIcon: {
    width:100,
    height:100,
    alignItems: 'center',
    marginTop: -20
  },
});
