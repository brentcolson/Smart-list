// @flow

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles.js';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class mainButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const adding = !(this.props.userInput.length === 0);


    return (
      <View style={styles.buttonContainer} >
        <View>
          <TouchableOpacity
            style={(this.props.filter === 'DO' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('DO')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50.png') :require('../assets/Clipboard-50.png')}
            />
            {(this.props.filter === 'DO' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>DO</Text>}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'BUY' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('BUY')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50.png') :require('../assets/ShoppingCart-50.png')}
            />
            {(this.props.filter === 'BUY' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>BUY</Text>}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'READ' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('READ')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50.png') :require('../assets/Literature-50.png')}
            />
            {(this.props.filter === 'READ' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>READ</Text>}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'LISTEN' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('LISTEN')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50.png') :require('../assets/Headphones-50.png')}
            />
            {(this.props.filter === 'LISTEN' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>LISTEN</Text>}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'EAT' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('EAT')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50.png') :require('../assets/Restaurant-50.png')}
            />
            {(this.props.filter === 'EAT' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>EAT</Text>}
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={(this.props.filter === 'WATCH' && this.props.saved) ? styles.mainButtonItemAdded : styles.mainButton}
            onPress={() => {this.props.mainButtonPressed('WATCH')}}
          >
            <Image
              style={adding ? 'ios-add-outline' : styles.buttonImage}
              style={styles.buttonImage}
              source={adding ? require('../assets/PlusMath-50.png') :require('../assets/Documentary-50.png')}
            />
            {(this.props.filter === 'WATCH' && this.props.saved) ? <Text style={styles.buttonCategoryText}>Added!</Text> : <Text style={styles.buttonCategoryText}>WATCH</Text>}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
