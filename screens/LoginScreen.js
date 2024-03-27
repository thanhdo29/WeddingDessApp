import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomTextInput from '../component/CustomTextInput'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import CustomButton from '../component/CustomButton'
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const navigation = useNavigation();

  const replaceSignup=()=>{
    navigation.navigate('signup')
  }

  const doLogin=()=>{
    navigation.navigate('home2');
  }
  return (
    <View style={styles.container}>
      <View style={styles.text_welcom}>
        <Text style={{ fontSize: Fontsizes.fs_28, color: Colors.Black, fontWeight: 'bold' }}>Chào mừng bạn</Text>
        <Text style={{ fontWeight: 'bold', color: Colors.Gray, marginTop: Spacing.space_10, fontSize: Fontsizes.fs_16 }}>Đăng nhập để tiếp tục</Text>
      </View>
      <CustomTextInput style={styles.input} label={'Tên đăng nhập'} />
      <CustomTextInput label={'Mật khẩu'} />
      <View style={styles.forgotPass}>
        <Text>Quên mật khẩu ?</Text>
      </View>

      <CustomButton  label={'Đăng nhập'} onPress={doLogin}/>

      <View style={styles.loginOther}>
        <Text>-Hoặc-</Text>
        <TouchableOpacity style={styles.btnOther}>
          <Image source={require('../assets/images/googleIcon.png')} style={styles.iconButton} />
          <Text style={styles.labelButton}>Đăng nhập với Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOther}>
          <Image source={require('../assets/images/facebookIcon.png')} style={styles.iconButton} />
          <Text style={styles.labelButton}>Đăng nhập với Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerContainer}>
        <Text style={{ color: Colors.Black }}>Bạn chưa có tài khoản ?</Text>
        <TouchableOpacity onPress={()=>{replaceSignup()}}>
          <Text style={styles.text_register}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.space_20
  },
  text_welcom: {
    marginTop: Spacing.space_50,
    marginBottom: Spacing.space_50
  },
  input: {
    marginTop: Spacing.space_20
  },
  forgotPass: {
    marginTop: Spacing.space_15,
    alignItems: 'flex-end'
  },
  btnOther: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.rd_10,
    borderWidth: 1,
    paddingVertical: Spacing.space_15,
    position: 'relative',
    marginTop: Spacing.space_24
  },
  labelButton: {
    flex: 1,
    textAlign: 'center',
    fontSize: Fontsizes.fs_16,
    color: Colors.Black
  },
  iconButton: {
    position: 'absolute',
    left: Spacing.space_15
  },
  loginOther: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.space_20
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