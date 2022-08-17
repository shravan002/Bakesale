import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    // paddingHorizontal: 24,
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'space-around',
    // alignItems:'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
    backgroundColor: 'grey',
    margin: 10,
  },
});

export default App;
