import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, {  useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../constants';

const CartScreen = () => {
  
  // const [dataService, setdata] = useState([])
  // const [dataStaff, setdataStaff] = useState([]);
  // const [dataCustomer, setdataCustomer] = useState([]);
  const [databill, setdatabill] = useState([]);
  const [title, settite] = useState("Xác nhân");

  const navigation = useNavigation();

  // //lấy danh sách dịch vụ
  
  // const fetchData = async () => {
  //   try {
  //     let res = await fetch('http://172.19.201.46:3000/Service/list');
  //     let result = await res.json();
  //     setdata(result);
  //     console.log("Thành công 1");
  //   } catch (error) {
  //     console.log("lỗi");
  //   }

  // }
   
  // useEffect(() => {
  //   fetchData();
  //   console.log(dataService);
  // }, [])

  // // lấy danh sách nhân viên
  // const fetchData1 = async () => {
  //   try {
  //     let res = await fetch('http://172.19.201.46:3000/User/list');
  //     let result = await res.json();
  //     setdataStaff(result);
  //     console.log("Thành công 2");
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  // useEffect(() => {
  //   fetchData1();
  //   console.log(dataStaff);
  // }, [])

  // // lấy danh sách khách hàng

  // const fetCustomer=async()=>{
  //   try {
  //     let res =await fetch('http://172.19.201.46:3000/Customer/list');
  //     let result = await res.json();
  //     setdataCustomer(result);
  //     console.log("Thành công 3");
  
  //   } catch (error) {
  //     console.log("lấy không thành công")
  //   }
  // }

  // useEffect(()=>{
  //   fetCustomer();
  //   console.log(dataCustomer);
  // },[])
  //lấy  danh sách bill
  const fetbill=async()=>{
    try {
      let res =await fetch('http://192.168.54.3:3000/Bill/list');
      let result = await res.json();
      setdatabill(result);
      console.log("Thành công 4");
    } catch (error) {
      console.log("lấy không thành công")
    }
  }

  useEffect(()=>{
    fetbill();
    
  },[])
  
  // const getNameCustomer=(idCus)=>{
  //   let dataCus= dataCustomer.find(item=>item._id=== idCus);
  //   return dataCus ?dataCus.nameCustomer:null;  
  // };

  // const getNameStaff=(idStaf)=>{
  //   let dataStaf= dataStaff.find(item=>item._id=== idStaf);
  //   return dataStaf ?dataStaf.name:null;  
  // };

  //xac nhan 
const xacnhan=(id_item)=>{
  const update = databill.map(bill=>{
    if(bill._id===id_item){
     bill.status=true

    }
    return bill
  })
  setdatabill(update);
  
  console.log(update)

}
//tìm danh sách


  return (
    
      <View style={{alignItems:'center'}}>
      <Text>DANH SÁCH GIỎ HÀNG</Text>
      <FlatList
        data={databill}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>{
         
          return(
           !item.status ?

            <View style={styles.item}>
              <View><Image source={{uri:item.img}} style={{width:90,height:110}}></Image></View>
              <View style={{margin:10}}>
              <Text>Tên dịch vụ: {item.nameService}</Text>
              <Text>Tên nhân viên: {item.nameStaff}</Text>
              <Text>Tên khách hàng: {item.nameCustomer}</Text>
              <Text>số điện thoại khách hàng: {item.numberphone}</Text>
              <Button title={title}  onPress={()=>xacnhan(item._id)}></Button>
              </View>
              
            </View>
            :<></>
          )
        }}
      ></FlatList>
      
    </View>
    
  )
  }
  
export default CartScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.Medium_Gray
  },
  item:{
    flex:1,
    alignItems:'center',
    borderRadius:10,
    borderColor:'blue',
    backgroundColor:'gray',
    margin:10,
    justifyContent:'space-around',
    flexDirection:'row',
    padding:10,
    backfaceVisibility:Colors.White
  }
})