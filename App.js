import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const App = () => {
  return(
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundcolor:'blue'
  }
});

export default App;
