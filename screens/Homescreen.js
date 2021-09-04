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
import { Header } from 'react-native-elements';

export default class Homescreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#000000'}
          centerComponent={{
            text: 'Funny Memes',
            style: {
              color: '#d3d3d3',
              fontSize: 28,
              fontWeight: 'bold',
              fontFamily: 'Calibri',
            },
          }}
        />

        <TouchableOpacity
          style={[styles.goButton, { backgroundColor: '#3DED97' }]}
          onPress={() => this.props.navigation.navigate('WalrusScreen')}>
          <Text style={styles.buttonText}>Walrus Memes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.goButton, { backgroundColor: '#FFFF9F' }]}
          onPress={() => this.props.navigation.navigate('CatScreen')}>
          <Text style={styles.buttonText}>Cat Memes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.goButton, { backgroundColor: '#FF5C5C' }]}
          onPress={() => this.props.navigation.navigate('FrogScreen')}>
          <Text style={styles.buttonText}>Frog Memes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096FF',
  },
  goButton: {
    width: '75%',
    height: 75,
    alignSelf: 'center',
    padding: 10,
    marginTop: 100,
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
});
