import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fontsizes, Radius, Spacing } from '../constants';

const ListCustomerScreen = () => {

  const [data, setData] = useState([]);

  const fetchData = () => {

  }

  useEffect(() => {
    fetchData();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View>
          <Image style={styles.img} source={require('../assets/images/customer.jpg')}/>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.textNameService}>Đỗ Tuấn Thành</Text>
          <Text style={styles.textPriceService}>Số điện thoại: 0123456789</Text>
          <Text style={styles.textPriceService}>Quê quán: Thái Bình</Text>
        </View>
        <TouchableOpacity style={styles.xemthem}>
          <Icon2 name="phone" color={Colors.Black} size={Fontsizes.fs_32} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <CusomTextInputSearch />
      <FlatList />
      <TouchableOpacity style={styles.btnAdd}>
        <Icon name="add" color={Colors.White} size={Fontsizes.fs_22} />
      </TouchableOpacity>
    </View>
  )
}

export default ListCustomerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.space_20
  },
  btnAdd: {
    backgroundColor: Colors.Pink,
    borderRadius: Radius.rd_50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: Spacing.space_20,
    bottom: Spacing.space_20,
    position: 'absolute'
  },
  img: {
    width: 80,
    height: 81
  },
  item: {
    flexDirection: 'row',
    backgroundColor: Colors.DarkOrange,
    padding: Spacing.space_15,
    borderRadius: Radius.rd_10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  infoItem: {
    marginLeft: Spacing.space_32,

  },
  textNameService: {
    fontSize: Fontsizes.fs_22,
    color: Colors.Black,
    fontWeight: '600'
  },
  textPriceService: {
    color: Colors.Black,
    marginTop: Spacing.space_8
  },
  xemthem: {
    flex: 1,
    marginLeft: 200
  }
})