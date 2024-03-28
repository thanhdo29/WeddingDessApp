import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ListServiceScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchData = async() => {
  

    try {
      let res= await fetch('http://192.168.53.9:3000/Service/list');
      let result=await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    fetchData();

  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate('detailService',{item})}}>
        <View>
          <Image style={styles.img} source={{uri:item.img}} />
        </View>
        <View style={styles.infoItem}>
          <View>
            <Text style={styles.textNameService}>{item.nameService}</Text>
            <Text style={styles.textPriceService}>{item.priceService}</Text>
          </View>
          <TouchableOpacity style={styles.xemthem}>
            <Text>Xem thêm {'>>'}</Text>
          </TouchableOpacity>
        </View>

      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <CusomTextInputSearch />
      <FlatList
        data={data}
        keyExtractor={(item)=>item._id}
        renderItem={(item)=>renderItem(item)}
      />
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
    paddingHorizontal: Spacing.space_20,
    backgroundColor:Colors.Medium_Gray
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
    margin:Spacing.space_10
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