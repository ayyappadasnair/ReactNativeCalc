import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, Switch, SafeAreaView,} from 'react-native';
import { ThemeContext } from './src/components/styles/context/ThemeContext';
import { myColors } from './src/components/styles/Colors';
import Keyboard from './src/components/Keyboard';



export default function App() {
  const[theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === 'light'?styles.container:[styles.container, {backgroundColor:'#000000'}]}>
     
      <StatusBar style="auto" />
      <Switch
        value={theme === 'light'}
        onValueChange={()=> setTheme(theme === 'light'? 'dark':'light')}
      />
     <Keyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
