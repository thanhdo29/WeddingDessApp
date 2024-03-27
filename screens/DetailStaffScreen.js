import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const DetailStaffScreen = () => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity>
     
        <Icon name="back" size={20} color="black" ></Icon>
      </TouchableOpacity>
      <Text>Hồ sơ cá nhân</Text>
    </View>
  )
}

export default DetailStaffScreen

const styles = StyleSheet.create({})