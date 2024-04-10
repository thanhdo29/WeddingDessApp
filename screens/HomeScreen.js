import { Button, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, FlatList, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import Banner from '../component/Banner'
import Swiper from 'react-native-swiper'
import AsyncStorage from "@react-native-async-storage/async-storage"
import CustomButton from '../component/CustomButton'

const HomeScreen = () => {
  const navigation = useNavigation();
  const [dataAssign, setDataAssign] = useState([])
  const [user1, setUser] = useState({});
  const [assign, setAssign] = useState([]);
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [staff, setStaff] = useState([]);
  const [role, setRole] = useState('');
  const [isLoadingStaff, setIsLoadingStaff] = useState(true);

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

  const getData = async () => {
    try {
<<<<<<< HEAD
      let res = await fetch('http://192.168.1.98:3000/Service/list');
      let Data = await res.json();
      setdata(Data);
=======
      const user = await AsyncStorage.getItem('data');
      const userData = await JSON.parse(user);
      setUser(userData);
      setRole(userData.status ? 'manager' : 'staff');
>>>>>>> 7add35f0005c46e6cb1c61c357d753a12eb1b2ae
    } catch (error) {
      console.log(error);
    }
  }
<<<<<<< HEAD
  ///
  useEffect(() => {
    fetchData();
  }, [])
  //cart
  const cartscreen =()=>{
    navigation.navigate('cart')
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trang chủ</Text>
        <TouchableOpacity onPress={()=>cartscreen()}>
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
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productItem} onPress={() => { navigation.navigate('detailService', { item }) }}>
              <Image source={{ uri: item.img }} style={{ width: 200, height: 200, alignItems: 'center' }}></Image>
              <Text >{item.nameService}</Text>
            </TouchableOpacity>
=======

  const link_api = "http://172.19.200.113:3000/";

  //lấy danh sách nhân viên
  const fetchStaff = async () => {
    try {
      let res = await fetch(link_api + 'User/list');
      let result = await res.json();
      setStaff(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingStaff(false);
    }

  }

  //lấy danh sách giao việc
  const fetchAssign = async () => {
    try {
      let res = await fetch(link_api + 'Assign/list');
      let result = await res.json();
      setDataAssign(result);
    } catch (error) {
      console.log(error);
    }
  }

  //tìm công việc của nhân viên
  useEffect(() => {
    const userJobs = dataAssign.filter(item => item.idStaff === user1._id);
    setAssign(userJobs);
    console.log(dataAssign);
  }, [dataAssign]);

      
  

  const getJobDesById = (jobId) => {
    const foundJob = job.find(item => item._id === jobId);
    return foundJob ? foundJob.descriptionJob : '';
  }

  const complete = async (id) => {
    try {
      let res =await fetch(link_api+"Assign/put/" + id, {
        method: "PUT",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          statusJob: true
        })
      })
      if (res.status===200) {
        Alert.alert("Thông báo", "Xác nhận");
      }else{
        Alert.alert("Thông báo", "Thất bại");
      }
    } catch (error) {
      console.log(error);
    }


  }

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      await getData();
      await fetchAssign();
      await fetchlistJob();
      await fetchStaff();
      setIsLoading(false);
      console.log(user1);
      doDecentralization();
    };
    loadData();
  }, []);

  const doDecentralization = () => {
    if (role === 'manager') {
      console.log('Quản lí');
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Danh sách nhân viên</Text>

          {isLoadingStaff ? (<ActivityIndicator size={'large'} />) : (
            (staff.map(item => (
              <View key={item._id} style={{
                flexDirection: 'row',
                backgroundColor: Colors.White,
                padding: Spacing.space_15,
                borderRadius: Radius.rd_10,
                alignItems: 'center',
                justifyContent: 'space-around',
                margin: Spacing.space_12
              }}>
                <View style={{ flexDirection: 'row' }}>
                  <View>
                    <Image style={styles.img} source={require('../assets/images/customer.jpg')} />
                  </View>
                  <View style={styles.infoItem}>
                    <Text style={styles.textNameService}>{item.name}</Text>
                    <Text style={styles.textPriceService}>Số điện thoại: {item.numberPhone}</Text>
                    <Text style={styles.textPriceService}>Quê quán: {item.address}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.xemthem} onPress={() => { navigation.navigate('assign', { item }) }}>
                  <Text>Giao việc</Text>
                </TouchableOpacity>
              </View>
            )))
>>>>>>> 7add35f0005c46e6cb1c61c357d753a12eb1b2ae
          )}
        </View>
      )
    } else if (role === 'staff') {
      return (
        <View style={styles.container}>
        <Text style={styles.title}>Danh sách công việc</Text>
        {isLoading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          assign.map((ass) => {
            if (ass.statusJob) {
              return null; 
            }
            return (
              <View key={ass._id} style={styles.khungJob}>
                <Text>Công việc: {getJobNameById(ass.idJob)}</Text>
                <Text>Ngày bắt đầu: {`${(new Date(ass.dateStart)).getDate()}-${(new Date(ass.dateStart)).getMonth() + 1}-${(new Date(ass.dateStart)).getFullYear()}`}</Text>
                <Text>Ngày kết thúc: {`${(new Date(ass.dateEnd)).getDate()}-${(new Date(ass.dateEnd)).getMonth() + 1}-${(new Date(ass.dateEnd)).getFullYear()}`}</Text>
                <Text>Mô tả: {getJobDesById(ass.idJob)}</Text>
                <CustomButton label={'Hoàn thành'} onPress={() => complete(ass._id)} />
              </View>
            );
          })
        )}
      </View>
      )
    }
  }
  return (
    <ScrollView>
      {doDecentralization()}
    </ScrollView>
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
    color: Colors.Black
  },
  khungJob: {
    borderRadius: Radius.rd_8,
    borderWidth: 1,
    borderColor: Colors.Black,
    padding: Spacing.space_10,
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
  },
  img: {
    width: 80,
    height: 81
  },
})
