import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Hello from Karol to Android World! 🎉
      </Text>
    </View>
      <View style={styles.container}>
        <Text>You clicked {count} times</Text>
        <Button
          onPress={() => setCount(count + 1)}
          title="Click me!"
        />
      </View>
    </>
  );
};

export default App;