import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import CalculatorScreen from './src/CalculatorScreen/CalculatorScreen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    });
  }, []);

  return (
    <View style={{ backgroundColor: '#000000' }}>
      <StatusBar backgroundColor="#000000" />
      <SafeAreaView>
        <CalculatorScreen />
      </SafeAreaView>
    </View>
  );
};

export default App;
