import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import Onbarding from './components/Onbarding';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator color='primary' size='large' />
      <Text>loading</Text>
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [viewOnBoarding, setViewOnBoarding] = useState(false);

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewOnBoarding(true);
      }
    } catch (err) {
      console.log('Error @checkonboarding', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnBoarding();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {loading ? <Loading /> : viewOnBoarding ? <HomeScreen /> : <Onbarding />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
