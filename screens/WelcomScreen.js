import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


const WelcomScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login')
    }, 3000)
  }, [])
  return (
    <View>
      <Text>WelcomScreen</Text>
    </View>
  )
}

export default WelcomScreen

const styles = StyleSheet.create({})