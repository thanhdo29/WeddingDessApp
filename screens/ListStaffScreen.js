import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const ListStaffScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState('');

  const fetchData = async () => {
    try {
      let res = await fetch('http://172.19.200.175:3000/User/list');
      let result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchData();
    console.log(data);
  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => { navigation.navigate('detailStaff', { item }) }}>
        <View style={{flexDirection:'row'}}>
          <View>
            <Image style={styles.img} source={require('../assets/images/customer.jpg')} />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textNameService}>{item.name}</Text>
            <Text style={styles.textPriceService}>Số điện thoại: {item.numberPhone}</Text>
            <Text style={styles.textPriceService}>Quê quán: {item.address}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.xemthem} onPress={()=>{navigation.navigate('assign', {item})}}>
          <Text>Giao việc</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  const handleTextInputChange=(text,field)=>{
    if (field==='search') {
      setSearchKeyword(text)
    }
  }
  return (
    <View style={styles.container}>
      <CusomTextInputSearch onChangeText={(txt)=>handleTextInputChange(txt, 'search')} props={{value: searchKeyword}}/>
      <FlatList
        data={data.filter(item=>
          item.name&& typeof item.name==='string'&& item.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase())
        )}
        keyExtractor={(item) => item._id}
        renderItem={(item) => renderItem(item)}
      />
      <TouchableOpacity style={styles.btnAdd}>
        <Icon name="add" color={Colors.White} size={Fontsizes.fs_22} />
      </TouchableOpacity>
    </View>


  )
}

export default ListStaffScreen

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
    backgroundColor: Colors.White,
    padding: Spacing.space_15,
    borderRadius: Radius.rd_10,
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: Spacing.space_12
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
    marginLeft: 200
  }
})