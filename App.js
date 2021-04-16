import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';


export default function App() {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <SafeAreaView>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Nom Prenom"
            keyboardType="text"
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Prix"
            keyboardType="numeric"
        />
      </SafeAreaView>
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 150,
    textAlign: 'center',
  },
});
