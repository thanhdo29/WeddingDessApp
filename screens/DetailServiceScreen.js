import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fontsizes, Spacing } from '../constants'

const DetailServiceScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <Image style={styles.img} source={require('../assets/images/dv1.jpg')} />
      <View style={{paddingHorizontal:Spacing.space_18}}>
        <Text style={styles.nameService}>Váy cưới</Text>
        <Text style={styles.priceService}>10.000.000 Đ</Text>
      </View>
      <View style={styles.space}></View>
      <View style={{paddingHorizontal:Spacing.space_18}}>
        <Text style={styles.des}>Mô tả sản phẩm</Text>
        <Text style={styles.contentDes}>
          Váy tafta cổ yếm khoét giọt lệ tiểu thư Dilyshop là một lựa chọn hoàn hảo cho những cô nàng
          yêu thích phong cách trẻ trung nhưng không kém phần sang trọng.
        </Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text_btn}>Đặt</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DetailServiceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  space: {
    backgroundColor: Colors.Medium_Gray,
    width: '100%',
    height: Spacing.space_4
  },
  btn: {
    backgroundColor: Colors.Pink,
    paddingVertical: Spacing.space_12,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  text_btn: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: Fontsizes.fs_15
  },
  img: {
    width: '100%',
    height: '67%'
  },
  nameService: {
    color: Colors.Black,
    fontWeight:'700',
    fontSize:Fontsizes.fs_26,
    marginTop:Spacing.space_28

  },
  priceService: {
    color: Colors.Red,
    fontSize:Fontsizes.fs_20,
    fontWeight:'400',
    marginBottom:Spacing.space_20,
    marginTop:Spacing.space_4
  },
  des: {
    color: Colors.Black,
    fontWeight:'500',
    marginTop:Spacing.space_32
  },
  contentDes: {
    color: Colors.Black,
    marginTop:Spacing.space_15
  }
})