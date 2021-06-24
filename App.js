import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Linking,
  Image
} from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const WebScreen = () => {
  return <WebView source={{ uri: 'https://www.vita.net.my' }} />;
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.image}
      />
      <TouchableOpacity style={styles.browserButton} onPress={() => { Linking.openURL('https://www.vita.net.my') }}>
        <Text style={styles.text}>Open Vita Website using default browser</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.webViewButton} onPress={() => navigation.navigate("Web")}>
        <Text style={styles.text}>Open Vita Website using webView inside the application</Text>
      </TouchableOpacity>
    </View>
  );
}

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Web" component={WebScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  browserButton: {
    borderWidth: 1,
    borderColor: "#f05f23",
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  webViewButton: {
    borderWidth: 1,
    borderColor: "#f05f23",
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: '#f05f23',
    fontSize: 14,
    fontWeight: 'bold'
  },
  image: {
    marginBottom: 30
  }
});

export default App;
