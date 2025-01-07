import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const DimensionsBugSolution = () => {
  const [screenDimensions, setScreenDimensions] = useState({ width, height });

  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions(Dimensions.get('window'));
    };

    Dimensions.addEventListener('change', updateDimensions);

    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Screen Width: {screenDimensions.width}</Text>
      <Text>Screen Height: {screenDimensions.height}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DimensionsBugSolution;