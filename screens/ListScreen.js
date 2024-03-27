import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../component/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const ListScreen = () => {
  const navigation = useNavigation();
   const staff =()=>{
    navigation.navigate('staff')
   }
  return (
    <View>
      <CustomButton label={'Danh sách nhân viên'} onPress={staff}></CustomButton>
      <CustomButton label={'Danh sách dịch vụ'} onPress={()=>{navigation.navigate('Service')}}></CustomButton>
      <CustomButton label={'Danh sách khách hàng'} onPress={()=>{navigation.navigate('Customer')}}> </CustomButton>
      <CustomButton label={'Danh sách công việc'} onPress={()=>{navigation.navigate('job')}}></CustomButton>
    </View>
  )
}

export default ListScreen

const styles = StyleSheet.create({})