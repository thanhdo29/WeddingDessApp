import { Button, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { Colors, Fontsizes, Spacing } from '../constants'
import Banner from '../component/Banner'
import Swiper from 'react-native-swiper'
const HomeScreen = ({route}) => {
  const navigation = useNavigation();
  const [data, setdata] = useState([])
  const navigateToDetailService = (service) => {
    navigation.navigate('detailService', { service });
  }
  //item
  // const RenderitemService =({data,onpress})=>{
  //   return(
  //     <View>
  //     <TouchableOpacity key={data._id} onPress={onpress}>
  //       <Image source={{uri:data.img}} style={{width:100,height:100}}></Image>
  //       <Text>{data.nameService}</Text>
  //       <Text>{data.priceService}</Text>
  //     </TouchableOpacity>
  //     <Button title='Thêm vào giỏ hàng' ></Button>
  //     </View>
  //   )
  // }
  //slide 

  //Data
  const fetchData = async () => {
    try {
      let res = await fetch('http://172.19.200.175:3000/Service/list');
      let Data = await res.json();
      setdata(Data);
    } catch (error) {
      console.log("erro", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trang chủ</Text>
        <TouchableOpacity>
          <Icon1 name="cart" size={30} color="black" style={{ padding: 10 }} />
        </TouchableOpacity>

      </View>
      < Text style={styles.sectionTitle}>Hot Products</Text>
      <Swiper autoplay={true} autoplayTimeout={1}>
        {data.map((service) => (
          <View key={service._id} style={styles.productItem}>
            <TouchableOpacity
            
            onPress={()=>navigateToDetailService(service)}
            
          >
            <Image source={{ uri: service.img }} style={{ width: 300, height: 300, alignItems: 'center' }}></Image>
            <Text >{service.nameService}</Text>
            <Text >{service.priceService}</Text>
          </TouchableOpacity>
          </View>
        ))}

      </Swiper>
      {/* Danh sách sản phẩm mới */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>New Products</Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={item => item._id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productItem} onPress={() => { navigation.navigate('detailService', { item }) }}>
              <Image source={{ uri: item.img }} style={{ width: 200, height: 200, alignItems: 'center' }}></Image>
              <Text >{item.nameService}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 200,
    marginBottom: 70
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: 'blue'
  },
  bottomItem: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.space_18,
    paddingTop: Spacing.space_10,
    justifyContent: 'center',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: Fontsizes.fs_28,
    fontWeight: '700',
    color: Colors.Pink
  }
})