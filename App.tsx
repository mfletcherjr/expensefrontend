import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EmployeeHomePage } from './components/Employee-home';
import { ManagerHomePage } from './components/Manager-home';
import LoginView from './components/Nav-container';
import  NavContainer  from './components/Nav-container';


export default function App() {
  return (
    <View style={styles.container}>
    <NavContainer />
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
