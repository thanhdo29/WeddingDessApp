import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import React, {  useEffect, useState } from 'react'

const CartScreen = () => {
  
  
  const [databill, setdatabill] = useState([]);
  const [title, settite] = useState("Xác nhân");
  
  const fetbill=async()=>{
    try {
      let res =await fetch('http://192.168.1.98:3000/Bill/list');
      let result = await res.json();
      setdatabill(result);
      
     
    } catch (error) {
      console.log("lấy không thành công")
    }
  }

  useEffect(()=>{
    fetbill();
    
  },[databill])
  
  
const xacnhan= async (item1)=>{
 
  console.log(item1._id)
    try {
      let res = await fetch('http://192.168.1.98:3000/Bill/put/'+item1._id, {

      method: "PUT",
      headers: {
        
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          status:true
        }
      )
    });
    if(res.status===200){
      Alert.alert("thêm thành công")
     
    } else{
      Alert.alert("thêm thất bại")
    }
    } catch (error) {
      console.log("không được")
    }
  
  
}

// }
// //tìm danh sách


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
              <Button title={title}  onPress={()=>xacnhan(item)}></Button>
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
  item:{
    flex:1,
    alignItems:'center',
    borderRadius:10,
    borderColor:'blue',
    backgroundColor:'gray',
    margin:10,
    justifyContent:'space-around',
    flexDirection:'row'
  }
})