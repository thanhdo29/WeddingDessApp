import { Alert, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { Colors, Fontsizes, Radius, Spacing } from '../constants';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import CustomTextInput from '../component/CustomTextInput';
import CustomButton from '../component/CustomButton';


const ListCustomerScreen = () => {
  const navigation = useNavigation();
  const [modalAdd, setModalAdd] = useState(false);
  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [numberPhone, setNumberPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleInputChange = (text, field) => {
    if (field === "name") {
      setName(text);
    } else if (field === "numberPhone") {
      setNumberPhone(text);
    } else if (field === "address") {
      setAddress(text);
    }
  }

  const fetchData = async () => {
    try {
      let res = await fetch('http://192.168.53.9:3000/Customer/list');
      let result = await res.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const addCustomer = async () => {

    if (name==="" || numberPhone==="" || address==="") {
      Alert.alert("Thông báo", "Vui lòng nhập đủ thông tin");
      return;
    }
    try {
      let res = await fetch('http://192.168.53.9:3000/Customer/add', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: ({
          nameCustomer:name,
          numberphone:numberPhone,
          address:address
        })
      })

      if (res.status===200) {
        Alert.alert("Thêm thành công");
        setModalAdd(false);
        fetchData();
      } else {
        Alert.alert("Thêm thất bại");
        setModalAdd(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <View>
          <Image style={styles.img} source={require('../assets/images/customer.jpg')} />
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.textNameService}>{item.nameCustomer}</Text>
          <Text style={styles.textPriceService}>Số điện thoại: {item.numberphone}</Text>
          <Text style={styles.textPriceService}>Quê quán: {item.address}</Text>
        </View>
        <TouchableOpacity style={styles.xemthem}>
          <Icon2 name="phone" color={Colors.Black} size={Fontsizes.fs_32} />
        </TouchableOpacity>
      </View>
    )
  }
  const back = () => {
    {
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => back()}>
        <Icon1 name="arrowleft" color={Colors.Black} size={Fontsizes.fs_22} />
      </TouchableOpacity>
      <CusomTextInputSearch />
      <FlatList
        data={data}
        keyExtractor={(item)=>item._id}
        renderItem={(item)=>renderItem(item)}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={() => { setModalAdd(true) }}>
        <Icon name="add" color={Colors.White} size={Fontsizes.fs_22} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAdd}
        onRequestClose={() => {

          setModalAdd(!modalAdd);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: Colors.Black, fontWeight: '600', fontSize: Fontsizes.fs_28 }}>Thêm khách hàng</Text>
            </View>
            <CustomTextInput label={'Tên khách hàng'} onChangeText={(txt)=>handleInputChange(txt, 'name')}/>
            <CustomTextInput label={'Địa chỉ'} onChangeText={(txt)=>handleInputChange(txt, 'numberPhone')}/>
            <CustomTextInput label={'Số điện thoại'} onChangeText={(txt)=>handleInputChange(txt, 'address')}/>
            <CustomButton label={'Xác nhận'} onPress={()=>addCustomer}/>
          </View>
        </View>
      </Modal>

    </View>
  )
}

export default ListCustomerScreen

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
    backgroundColor: Colors.DarkOrange,
    padding: Spacing.space_15,
    borderRadius: Radius.rd_10,
    alignItems: 'center',
    justifyContent: 'space-around'
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
    flex: 1,
    marginLeft: 200
  },
  back: {
    marginTop: Spacing.space_16
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '80%',

  },
})