import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const OnbardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, width]}>
      <Image
        source={require('../kisspng-onboarding-human-resource-management-business-tfx-onboarding-team-5d0bed5e9d1d23.4598214215610627506435.jpg')}
        style={[styles.image, { width, resizeMode: 'contain' }]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnbardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },

  title: {
    fontWeight: '800',
    fontSize: 25,
    marginBottom: 10,
    color: 'orangered',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: 'green',
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});
