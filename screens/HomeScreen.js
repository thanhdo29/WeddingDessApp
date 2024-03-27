import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {
  const navigation= useNavigation();
  const click =()=>{
    navigation.navigate('detailstaff')
  }
  return (
    <View>
      
      <TouchableOpacity style={{backgroundColor:"pink"}} onPress={click}>
      <Icon1 name="person-circle" size={30} olor="white"></Icon1>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})