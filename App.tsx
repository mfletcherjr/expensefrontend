import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavContainer } from './components/Nav-container';


export default function App() {
  return (
    <View style={styles.container}>
        <NavContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4b71bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
