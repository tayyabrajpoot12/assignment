import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import Header from './components/Header'
import Section from './components/Section'
import Footer from './components/Footer';


export default function App() {



  return (
    <ScrollView>
      <View style={styles.container}>
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
      </View>
      </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170633',
    alignItems: 'center',
    height:750
  },
})