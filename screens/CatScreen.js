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
import ct1 from '../assets/ct1.png';
import ct2 from '../assets/ct2.png';
import ct3 from '../assets/ct3.png';
import ct4 from '../assets/ct4.png';
import ct5 from '../assets/ct5.png';
import ct6 from '../assets/ct6.png';
import ct7 from '../assets/ct7.png';
import ct8 from '../assets/ct8.png';
import ct9 from '../assets/ct9.png';
import ct10 from '../assets/ct10.png';
import ct11 from '../assets/ct11.png';
import ct12 from '../assets/ct12.png';
import ct13 from '../assets/ct13.png';
import ct14 from '../assets/ct14.png';
import ct15 from '../assets/ct15.png';
import arrow from '../assets/arrow.png';

const images = [
  ct1,
  ct2,
  ct3,
  ct3,
  ct4,
  ct5,
  ct6,
  ct7,
  ct8,
  ct9,
  ct10,
  ct11,
  ct12,
  ct13,
  ct14,
  ct15
];

export default class CatScreen extends React.Component {
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
            text: 'Cat Memes',
            style: {
              color: '#d3d3d3',
              fontSize: 28,
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
    backgroundColor: '#FFFF9F',
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
  }
});

