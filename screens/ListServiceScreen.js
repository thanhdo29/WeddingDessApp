import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons';


const ListServiceScreen = () => {
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
          <Image style={styles.img} source={require('../assets/images/dv.jpg')} />
        </View>
        <View style={styles.infoItem}>
          <View>
            <Text style={styles.textNameService}>Dịch vụ trang điểm</Text>
            <Text style={styles.textPriceService}>200.000 đ</Text>
          </View>
          <TouchableOpacity style={styles.xemthem}>
            <Text>Xem thêm {'>>'}</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CusomTextInputSearch />

      <TouchableOpacity style={styles.btnAdd}>
        <Icon name="add" color={Colors.White} size={Fontsizes.fs_22} />
      </TouchableOpacity>
    </View>

    
  )
}

export default ListServiceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Spacing.space_20
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
  },
  infoItem: {
    marginLeft: Spacing.space_32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',

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
    justifyContent: 'flex-end',
    flex: 1,
    marginLeft: 200
  }
})