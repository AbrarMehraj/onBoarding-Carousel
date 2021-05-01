import React, { useRef, useState } from 'react';
import { Animated, FlatList, StyleSheet, Text, View } from 'react-native';

import slides from '../slides';
import NextButton from './NextButton';
import OnbardingItem from './OnbardingItem';
import Paginator from './Paginator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Onbarding = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentageThreshold: 50 })
    .current;

  console.log(currentIndex, slides.length);
  const scrollTo = async () => {
    if (currentIndex < slides.length - 1) {
      console.log('succeess');
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      alert('ddff');
      console.log('error');

      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (error) {
        console.log('error');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={slides}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OnbardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          // viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <Paginator data={slides} scrollX={scrollX} />

      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / slides.length)}
      />
    </View>
  );
};

export default Onbarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
