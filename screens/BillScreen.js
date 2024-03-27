import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'

const BillScreen = () => {

  const renderItem = () => {
    return (
      <View style={styles.item}>
        <View style={styles.headerItem}>
          <Text style={styles.nameService}>Dịch vụ: Thuê váy cưới</Text>
          <Text style={styles.textSuccess}>Đã hoàn thành</Text>
        </View>
        <View style={styles.footerItem}>
          <Image style={styles.img} source={require('../assets/images/dv.jpg')} />
          <View>
            <Text style={styles.textInfo}>Tên khách hàng: Đỗ Tuấn Thành</Text>
            <Text style={styles.textInfo}>Số điện thoại: 0123456789</Text>
            <Text style={styles.textInfo}>Quê quán: Thái Bình</Text>
            <Text style={styles.textInfo}>Giá dịch vụ: 20.000.000 đ</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: Spacing.space_12 }}>
        <Text style={styles.title}>Đơn hàng</Text>
      </View>
      <FlatList />
    </View>

    
  )
}

export default BillScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: Fontsizes.fs_32,
    color: Colors.Black,
    fontWeight: '800',
    alignItems: 'center'
  },

  item: {
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: Radius.rd_8,
    padding: Spacing.space_15,
    margin: Spacing.space_16,
    paddingHorizontal: Spacing.space_32
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    width: 107,
    height: 115,
  },
  footerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.space_10
  },
  textSuccess: {
    color: Colors.Green,
    fontSize: Fontsizes.fs_20
  },
  nameService: {
    color: Colors.Black,
    fontSize: Fontsizes.fs_20
  },
  textInfo: {
    color: Colors.Black,
    fontSize: Fontsizes.fs_15,
    margin: Spacing.space_4
  }
})