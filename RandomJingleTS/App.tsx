/**
 * App that will play random music files from an on-device directory at random intervals
 * 
 * Based on:
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */



import React, { Component } from 'react';

import {
  Alert,
  AppRegistry,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Player,
  Recorder,
  MediaStates
} from '@react-native-community/audio-toolkit';

import PropTypes from 'prop-types';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Stopwatch, Timer } from 'react-native-stopwatch-timer';





interface AppProps {
  timerStart: boolean
  timerDuration: Number
  timerReset: boolean
  
}

interface AppState {
  timerStart: boolean
  
  timerDuration: Number
  timerReset: boolean
}

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      timerStart: false,
      timerDuration: 90000,
      timerReset: false,
    };
    this.toggleTimer = this.toggleTimer.bind(this);

  }

  toggleTimer() {
    this.setState({timerStart: !this.state.timerStart, timerReset: false});
  }

  resetTimer() {
    this.setState({timerStart: false, timerReset: true});
  }


  render() {
    return (
      <View>
        
        
      </View>
    );
  }
  
}




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
