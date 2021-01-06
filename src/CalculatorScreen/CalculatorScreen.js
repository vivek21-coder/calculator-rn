import React, { useState } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Image,
} from 'react-native';
import onButtonPress from '../utility/onButtonPress';

const CalculatorScreen = () => {
  const [query, setQuery] = useState('0');
  const [ans, setAns] = useState('');

  const onPress = (val) => {
    onButtonPress(val, ans, setQuery, setAns);
  };

  return (
    <View style={styles.container}>

      <View style={styles.upper_container}>

        <Text
          numberOfLines={1}
          ellipsizeMode="head"
          style={styles.query_text}
        >
          {query}
          {' '}
        </Text>

        <Text style={styles.ans_text}>
          {ans}
          {' '}
        </Text>

      </View>

      <View style={styles.middle_container}>
        <View style={styles.button_container}>
          <TouchableOpacity onPress={() => onPress('<')} style={styles.delete_prev_button}>
            <Image style={styles.backspace_icon} source={require('../../assets/backspace_icon.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttons_container}>
        <View style={styles.button_row_container}>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('C')} style={styles.clear_button}>
              <Text style={styles.number_text}>C</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('(')} style={styles.number_button}>
              <Text style={styles.bracket_text}>(</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress(')')} style={styles.number_button}>
              <Text style={styles.bracket_text}>)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('÷')} style={styles.number_button}>
              <Text style={styles.operation_text}>÷</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button_row_container}>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('7')} style={styles.number_button}>
              <Text style={styles.number_text}>7</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('8')} style={styles.number_button}>
              <Text style={styles.number_text}>8</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('9')} style={styles.number_button}>
              <Text style={styles.number_text}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('×')} style={styles.number_button}>
              <Text style={styles.operation_text}>×</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button_row_container}>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('4')} style={styles.number_button}>
              <Text style={styles.number_text}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('5')} style={styles.number_button}>
              <Text style={styles.number_text}>5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('6')} style={styles.number_button}>
              <Text style={styles.number_text}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('-')} style={styles.number_button}>
              <Text style={styles.operation_text}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button_row_container}>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('1')} style={styles.number_button}>
              <Text style={styles.number_text}>1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('2')} style={styles.number_button}>
              <Text style={styles.number_text}>2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('3')} style={styles.number_button}>
              <Text style={styles.number_text}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('+')} style={styles.number_button}>
              <Text style={styles.operation_text}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button_row_container}>
          <View style={styles.zero_button_container}>
            <TouchableOpacity onPress={() => onPress('0')} style={styles.number_button}>
              <Text style={styles.number_text}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('.')} style={styles.number_button}>
              <Text style={styles.number_text}>.</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={() => onPress('=')} style={styles.equal_button}>
              <Text style={styles.number_text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  upper_container: {
    flex: 2,
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: '3%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  middle_container: {
    flex: 1,
    width: '40%',
    alignSelf: 'flex-end',
  },
  query_text: {
    color: '#FFFFFF',
    fontSize: 36,
  },
  ans_text: {
    color: '#36ff00',
    fontSize: 28,
  },

  buttons_container: {
    flex: 4,
    width: '100%',
  },
  button_row_container: {
    flex: 1,
    flexDirection: 'row',
  },
  clear_button: {
    height: '100%',
    width: '100%',
    borderRadius: 35,
    backgroundColor: '#444ae9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  zero_button_container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  number_button: {
    height: '100%',
    width: '100%',
    borderRadius: 35,
    backgroundColor: '#333333',
    borderWidth: 1,
    borderColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  equal_button: {
    height: '100%',
    width: '100%',
    borderRadius: 35,
    backgroundColor: '#018515',
    borderWidth: 1,
    borderColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  delete_prev_button: {
    height: '100%',
    width: '100%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  number_text: {
    color: '#FFFFFF',
    fontSize: 34,
  },
  bracket_text: {
    color: '#85ac03',
    fontSize: 32,
  },
  operation_text: {
    color: '#e26b02',
    fontSize: 38,
  },

  backspace_icon: {
    height: 25,
    width: '60%',
    resizeMode: 'contain',
  },
});

export default CalculatorScreen;
