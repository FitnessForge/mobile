import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: 'red',
  },
});

export default Index;
