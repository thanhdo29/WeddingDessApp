import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'

const BillScreen = () => {
  const [databill, setdatabill] = useState([]);
  const [title, settite] = useState("Xác nhân");

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
    <View style={{alignItems:'center'}}>
    <Text>DANH SÁCH GIỎ HÀNG</Text>
    <FlatList
      data={databill}
      keyExtractor={(item)=>item._id}
      renderItem={({item})=>{
       
        return(
         item.status ?

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
  },
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