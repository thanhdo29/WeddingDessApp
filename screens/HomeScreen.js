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


  const getData = async () => {
    try {
      const user = await AsyncStorage.getItem('data');
      const userData = await JSON.parse(user);
      setUser(userData);
      setRole(userData.status ? 'manager' : 'staff');
    } catch (error) {
      console.log(error);
    }
  }

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


  //lấy danh sách công việc
  const fetchlistJob = async () => {
    try {
      let res = await fetch(link_api + 'Job/list');
      let result = await res.json();
      setJob(result);
    } catch (error) {
      console.log(error);
    }
  }

  const getJobNameById = (jobId) => {
    const foundJob = job.find(item => item._id === jobId);
    return foundJob ? foundJob.nameJob : '';
  }

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
