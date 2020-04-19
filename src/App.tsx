import React from 'react';
import { StatusBar, View, Text } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View>
        <Text>Welcome</Text>
      </View>
    </>
  );
};

export default App;
