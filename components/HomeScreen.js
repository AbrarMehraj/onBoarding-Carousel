import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title='logout'
        onPress={() => {
          AsyncStorage.clear();
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
