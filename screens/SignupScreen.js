import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import { Colors, Fontsizes, Spacing } from '../constants';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';


const SignupScreen = () => {
  const navigation = useNavigation();

  const goBack=()=>{
    navigation.goBack();
  }

  const replaceLogin=()=>{
    navigation.navigate('login');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={()=>goBack()}>
        <Icon name="arrowleft" color={Colors.Black} size={Fontsizes.fs_22} />
      </TouchableOpacity>
      <Text style={styles.title_reg}>Đăng ký</Text>
      <CustomTextInput label={'Họ tên'}/>
      <CustomTextInput label={'Tên đăng nhập'}/>
      <CustomTextInput label={'Mật khẩu'}/>
      <CustomTextInput label={'Nhập lại mật khẩu'}/>
      <CustomButton label={'Đăng ký'} />
      <View style={styles.registerContainer}>
        <Text style={{ color: Colors.Black }}>Đã có tài khoản ?</Text>
        <TouchableOpacity onPress={()=>{replaceLogin()}}>
          <Text style={styles.text_register}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20
  },
  back:{
    marginTop:Spacing.space_28
  },
  title_reg:{
    fontSize:Fontsizes.fs_28,
    color:Colors.Black,
    fontWeight:"600",
    marginTop:Spacing.space_24
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: "absolute",
    bottom: 0,
    backgroundColor: '#EEEAEA',
    width: '100%',
    padding: 10,
    justifyContent: 'center'
  },
  text_register: {
    color: Colors.Black,
    fontWeight: "700",
    marginLeft: 4
  }
})
