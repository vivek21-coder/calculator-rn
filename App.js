import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import CalculatorScreen from './src/CalculatorScreen/CalculatorScreen';

const App = () => (
  <>
    <StatusBar backgroundColor="#000000" />
    <SafeAreaView>
      <CalculatorScreen />
    </SafeAreaView>
  </>
);

export default App;
