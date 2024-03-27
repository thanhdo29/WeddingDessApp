import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon1 from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const DetailStaffScreen = () => {
  const navigation = useNavigation();
  const backhome2 =()=>{
    navigation.navigate('home2')
  }
  return (
    <View >
      <TouchableOpacity
      
      onPress={backhome2}
      >

        <Icon name="back" size={30} color="black" style={{padding:10}}></Icon>
      </TouchableOpacity>
      <View style={{ alignItems: 'center',marginTop:30 }}>

        <Text>Hồ sơ cá nhân</Text>
        <Icon1 name="person" size={20} color="black" ></Icon1>
        <Text>xxx@gmail.com</Text>
        <Text>012345677</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,marginTop:30}}>
        <Text>Tên</Text>
        <Text>Nghề nghiệp</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text>NGuyễn Văn A</Text>
        <Text>Cắt tóc</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,marginTop:30}}>
        <Text>Ngân Hàng</Text>
        <Text>Số tài khoản</Text>
        
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
        <Text>MB</Text>
        <Text>9999999999999</Text>
        
      </View>
      <View style={{padding:10,marginTop:30}}>
        <Text>Doanh thu</Text>
      </View>
    </View>
  )
}

export default DetailStaffScreen

const styles = StyleSheet.create({})