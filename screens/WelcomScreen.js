import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../component/CustomButton';

const WelcomScreen = () => {
  const navigation = useNavigation();

  const login =()=>{
    navigation.navigate('login')
  }
  return (
    <View style={styles.container}>
      <Text>ádsadsd</Text>
     <Image source={require('../assets/images/logo.jpg') } style={{width:100,height:100}} ></Image>
     <CustomButton label={'login'} style={{width:100,height:100}} onPress={login}></CustomButton>
    </View>
  )
}

export default WelcomScreen

const styles = StyleSheet.create({
container:{
  alignItems:'center',
  justifyContent:'center',
  flex:1
}

})