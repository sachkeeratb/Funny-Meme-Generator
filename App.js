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
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Homescreen from './screens/Homescreen';
import WalrusScreen from './screens/WalrusScreen';
import CatScreen from './screens/CatScreen';
import FrogScreen from './screens/FrogScreen';

export default class MyProject extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appcontainer />
      </View>
    );
  }
}

var switchContainer = createSwitchNavigator({
  Homescreen: Homescreen,
  WalrusScreen: WalrusScreen,
  CatScreen: CatScreen,
  FrogScreen: FrogScreen,
});
const Appcontainer = createAppContainer(switchContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096FF',
  },
});
