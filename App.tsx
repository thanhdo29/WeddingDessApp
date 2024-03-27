import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import ListCustomerScreen from './screens/ListCustomerScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomScreen from './screens/WelcomScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import BottonTab from './navigation/BottonTab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './screens/ListScreen';
import CartScreen from './screens/CartScreen';
import StatisticalScreen from './screens/StatisticalScreen';
import ListServiceScreen from './screens/ListServiceScreen';
import ListStaffScreen from './screens/ListStaffScreen';
import BillScreen from './screens/BillScreen';
import ListJob from './screens/ListJob';





const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='welcom' screenOptions={{headerShown:false}}>
        <Stack.Screen name='welcom' component={WelcomScreen}/>
        <Stack.Screen name='login' component={LoginScreen}/>
        <Stack.Screen name='signup' component={SignupScreen}/>
        <Stack.Screen name='home2' component={BottonTab}/>
        <Stack.Screen name='staff' component={ListStaffScreen}></Stack.Screen>
        <Stack.Screen name='Service' component={ListServiceScreen}></Stack.Screen>
        <Stack.Screen name='Customer' component={ListCustomerScreen}></Stack.Screen>
        <Stack.Screen name='job' component={ListJob}/>
      </Stack.Navigator>
    </NavigationContainer>
    
      
  )
}

export default App

const styles = StyleSheet.create({})