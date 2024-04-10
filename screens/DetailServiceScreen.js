import { Alert, Button, Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Fontsizes, Spacing } from '../constants'
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

import DatePicker from 'react-native-date-picker';
const DetailServiceScreen = ({ route }) => {
  const navigation = useNavigation();
  const [dataStaff, setdataStaff] = useState([]);
  const [dataCustomer, setdataCustomer] = useState([]);
 const [visible,setvisible]=useState(false)
 const [selected,setselected]=useState(null)
 const [selected1,setselected1]=useState(null)
 const [startDate,setstartDate]=useState(new Date())
 const [openDate,setopenDate]=useState(false)
 const [phoneCustomer,setphoneCustomer]=useState('')
 const [nameCustomer,setnameCustomer]=useState('')
 const [nameStaff,setnameStaff]=useState('')

 const {_id, nameService, statusService, descriptionService, priceService, img } = route.params.item

 
  //tìm phone
  console.log(selected1)
 const findphone=async(khachhang)=>{
  const phone = await dataCustomer.find(Customer=>Customer._id===khachhang)
  setphoneCustomer(phone.numberphone)
  return phoneCustomer
}
  
  //tìm name khách hàng
  const findnameCustomer=async(khachhang)=>{
    let name = await dataCustomer.find(Customer=>Customer._id===khachhang)
     setnameCustomer(name.nameCustomer);
     return nameCustomer
  }
  //tìm name nhân viên
  const findnameStaff=async(nhanvien)=>{
    let name =await dataStaff.find(Staff=>Staff._id===nhanvien)
     setnameStaff(name.name);
     return nameStaff
  }
 
  //render date
  const renderDate =()=>{
    return(
      <View>
        <Text>Ngày đặt :</Text>
        <TouchableOpacity onPress={()=>setopenDate(true)}>
          <Text>{`${startDate.getDay()}-${startDate.getMonth()}-${startDate.getFullYear()}-${startDate.getHours()}:${startDate.getMinutes()}`}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  //hàm khi ấn nút sẽ hiển thị dialog
  const ondialog=()=>{
    setvisible(!visible);
    
   }
   
  
   
    
   
  //Xác nhận
 const xacNhan=async(nhanvien,khachhang)=>{
 

 
  
  findnameCustomer(khachhang)
findnameStaff(nhanvien)
findphone(khachhang)
  
    console.log(phoneCustomer)
    console.log(nameCustomer)
    console.log(nameStaff)
console.log(selected)
console.log(selected1)
 
  let res = await fetch('http://192.168.1.98:3000/Bill/add', {

      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
          idCustomer:selected1,
          idStaff:selected,
          dateBuy:startDate,
          nameService:nameService,
          totalAmout:priceService,
          numberphone:phoneCustomer,
          nameCustomer:nameCustomer,
          nameStaff:nameStaff,
          img:img
        }
      )
    });
    if(res.status===200){
      Alert.alert("thêm thành công")
    
    } else{
      Alert.alert("thêm thất bại")
    }
 }
  
  // lấy danh sách nhân viên
  const fetchData = async () => {
    try {
      let res = await fetch('http://192.168.1.98:3000/User/list');
      let result = await res.json();
      setdataStaff(result);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchData();
   
    
  }, [])

  // lấy danh sách khách hàng

  const fetCustomer=async()=>{
    try {
      let res =await fetch('http://192.168.1.98:3000/Customer/list');
      let result = await res.json();
      setdataCustomer(result);
     
  
    } catch (error) {
      console.log("lấy không thành công")
    }
  }

  useEffect(()=>{
    fetCustomer();
    
  },[])
 
  // dialog
  
  //tìm phone
  
    
  //
  const back=()=>{
    navigation.goBack();
  }
  //dialog

  

  
  return (
    <View style={styles.container}>
     <TouchableOpacity style={styles.back} onPress={() => back()}>
        <Icon1 name="arrowleft" color={Colors.White} size={Fontsizes.fs_22} />
      </TouchableOpacity>

      <StatusBar translucent={true} backgroundColor="transparent" />
      <Image style={styles.img} source={{ uri: img }} />
      <View style={{ paddingHorizontal: Spacing.space_18 }}>
        <Text style={styles.nameService}>{nameService}</Text>
        <Text style={styles.priceService}>{priceService}</Text>
      </View>
      <View style={styles.space}></View>
      <View style={{ paddingHorizontal: Spacing.space_18 }}>
        <Text style={styles.des}>Mô tả sản phẩm</Text>
        <Text style={styles.contentDes}>
          {descriptionService}
        </Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>ondialog()} >
        <Text style={styles.text_btn}>Đặt</Text>
      </TouchableOpacity>
      <Modal
      
       
          visible={visible}
          animationType='slide'
          transparent={false}
          onRequestClose={ondialog}
          >
              <View >
              <Text>Tên nhân viên</Text>
             <Picker
              selectedValue={selected}
              onValueChange={(itemValue, itemIndex)=>
                setselected(itemValue)//hàm xử lí khi lựa chọn thay đổi
               
              }
             >
             {dataStaff.map( staff=>(
              <Picker.Item  label={staff.name} value={staff._id} key={staff._id}></Picker.Item>
             ))}
             </Picker>
             <Text>Tên khách hàng</Text>
             <Picker
              selectedValue={selected1}
              onValueChange={(itemValue, itemIndex)=>
                setselected1(itemValue)//hàm xử lí khi lựa chọn thay đổi
              }
             >
             {dataCustomer.map(Customer=>(
              
                <Picker.Item  label={Customer.nameCustomer} value={Customer._id} key={Customer._id}></Picker.Item>
                
             
             ))}
             
             </Picker>
             <Picker
              selectedValue={selected1}
              onValueChange={(itemValue, itemIndex)=>
                setselected1(itemValue)//hàm xử lí khi lựa chọn thay đổi
              }
             >
             {dataCustomer.map(Customer=>(
              
                <Picker.Item  label={Customer.numberphone} value={Customer._id} key={Customer._id}></Picker.Item>
                
             
             ))}
             
             </Picker>
             <View>
              {renderDate()}
              </View>
             <DatePicker
              title='ngày đặt dịch vụ'
              open={openDate}
              modal
              mode='date'
              date={startDate}
              onCancel={()=>setopenDate(false)}
              onConfirm={(a)=>setstartDate(a)}
             >

             </DatePicker>
              <Button
              title='Xác nhận' 
              onPress={()=>xacNhan(selected,selected1)}
              ></Button>
              <Button
              title='Hủy' 
              onPress={ondialog}
              ></Button>
              </View>
          </Modal>
    </View>
  )
}

export default DetailServiceScreen

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1
  },
  space: {
    backgroundColor: Colors.Medium_Gray,
    width: '100%',
    height: Spacing.space_4
  },
  btn: {
    backgroundColor: Colors.Pink,
    paddingVertical: Spacing.space_12,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  text_btn: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: Fontsizes.fs_15
  },
  img: {
    width: '100%',
    height: '67%'
  },
  nameService: {
    color: Colors.Black,
    fontWeight: '700',
    fontSize: Fontsizes.fs_26,
    marginTop: Spacing.space_28

  },
  priceService: {
    color: Colors.Red,
    fontSize: Fontsizes.fs_20,
    fontWeight: '400',
    marginBottom: Spacing.space_20,
    marginTop: Spacing.space_4
  },
  des: {
    color: Colors.Black,
    fontWeight: '500',
    marginTop: Spacing.space_32
  },
  contentDes: {
    color: Colors.Black,
    marginTop: Spacing.space_15
  },
  back:{
    marginTop: Spacing.space_16,
    position:'absolute',
    top:Spacing.space_16,
    left:Spacing.space_18,
    zIndex:1000
  }
})