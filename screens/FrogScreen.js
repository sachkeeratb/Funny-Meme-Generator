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
import frg1 from '../assets/frg1.png';
import frg2 from '../assets/froog2.png';
import frg3 from '../assets/frg3.png';
import frg4 from '../assets/frg4.png';
import frg5 from '../assets/frg5.png';
import frg6 from '../assets/frg6.png';
import frg7 from '../assets/frg7.png';
import frg8 from '../assets/frg8.png';
import frg9 from '../assets/frg9.png';
import frg10 from '../assets/frg10.png';
import frg11 from '../assets/frg11.png';
import frg12 from '../assets/frg12.png';
import frg13 from '../assets/frg13.png';
import frg14 from '../assets/frg14.png';
import frg15 from '../assets/frg15.png';
import arrow from '../assets/arrow.png';

const images = [
  frg1,
  frg2,
  frg3,
  frg4,
  frg5,
  frg6,
  frg7,
  frg8,
  frg9,
  frg10,
  frg11,
  frg12,
  frg13,
  frg14,
  frg15
];

export default class FrogScreen extends React.Component {
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
            text: 'Frog Memes',
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
    backgroundColor: '#FF5C5C',
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