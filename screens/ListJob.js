import { ActivityIndicator, FlatList, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch';
import { Colors, Fontsizes, Radius, Spacing } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../component/CustomButton';
import CustomTextInput from '../component/CustomTextInput';
import DatePicker from 'react-native-date-picker'
import Icon1 from 'react-native-vector-icons/AntDesign';



const ListJob = () => {
  const [data, setData] = useState([]);
  const [modalAdd, setModalAdd] = useState(false);
  const [dataStaff, setDataStaff] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [loading, setLoading] = useState(false);
  const [showStaffList, setShowStaffList] = useState(false);



  const [nameJob, setNameJob] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [statusJob, setStatusJob] = useState(false);
  const [desJob, setDesJob] = useState('');
  const [openDateStart, setOpenDateStart] = useState(false);
  const [openDateEnd, setOpenDateEnd] = useState(false);

  const fetchData = async () => {
    try {

    } catch (error) {
      console.log(error);
    }
  }



  const fetchDataStaff = async () => {
    try {
      let res = await fetch('http://192.168.53.9:3000/User/list');
      let result = await res.json();
      setDataStaff(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchDataStaff();

  }, [selectedItem]);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const toggleStaffList = () => {
    setShowStaffList(!showStaffList);
  };


  const renderItem = ({ item }) => {
    <View style={styles.item}>
      <View>
        <Image style={styles.img} source={require('../assets/images/customer.jpg')} />
      </View>

    </View>
  }

  const handleTextInputChange = (text, field) => {
    if (field === "name") {
      setNameJob(text)
    } else if (field === "des") {
      setDesJob(text)
    }
  }


  const handleConfirmDate = (newDate, field) => {

    if (field === "start") {
      setStartDate(newDate)
      console.log(newDate);
      setOpenDateStart(false)
    } else if (field === "end") {
      setEndDate(newDate)
      console.log(newDate);
      setOpenDateEnd(false)
    }
  };
  const renderDateStart = () => {
    return (
      <View style={styles.containerDate}>
        <Text style={styles.textDate}>Ngày bắt đầu: </Text>
        <TouchableOpacity onPress={() => setOpenDateStart(true)}>
          <Text style={styles.textDate}>{`${startDate.getDate()}- ${startDate.getMonth() + 1}- ${startDate.getFullYear()}`}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderDateEnd = () => {
    return (
      <View style={styles.containerDate}>
        <Text style={styles.textDate}>Ngày kết thúc: </Text>
        <TouchableOpacity onPress={() => setOpenDateEnd(true)}>
          <Text style={styles.textDate}>{`${endDate.getDate()}- ${endDate.getMonth() + 1}- ${endDate.getFullYear()}`}</Text>
        </TouchableOpacity>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <CusomTextInputSearch />
      <FlatList />
      <TouchableOpacity style={styles.btnAdd} onPress={() => setModalAdd(true)}>
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
              <Text style={{ color: Colors.Black, fontWeight: '600', fontSize: Fontsizes.fs_28 }}>Tạo công việc</Text>
            </View>
            <CustomTextInput label={'Tên công việc'} onChangeText={(txt) => handleTextInputChange(txt, "name")} props={styles.inputc} />
            <View>{renderDateStart()}</View>

            <DatePicker
              title={'Ngày bắt đầu'}
              open={openDateStart}
              modal
              mode='date'
              date={startDate}
              onCancel={() => setOpenDateStart(false)}
              onConfirm={(newDate) => handleConfirmDate(newDate, "start")}

            />
            <View>{renderDateEnd()}</View>
            <DatePicker
              title={'Ngày kết thúc'}
              open={openDateEnd}
              modal
              mode='date'
              date={endDate}
              onCancel={() => setOpenDateEnd(false)}
              onConfirm={(newDate) => handleConfirmDate(newDate, "end")}
            />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionLabel}>Mô tả công việc</Text>
              <TextInput
                onChangeText={(txt) => handleTextInputChange(txt, "des")}
                style={styles.descriptionInput}
                multiline={true}
                numberOfLines={4}

              />
            </View>

            <View>
              <TouchableOpacity onPress={toggleStaffList}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Spacing.space_18 }}>
                  <Text style={{ marginRight: 10, fontSize: Fontsizes.fs_18, color: Colors.Black }}>Nhân viên</Text>
                  <Icon1 name={showStaffList ? 'caretup' : 'caretdown'} size={Fontsizes.fs_15} color={Colors.Black} />
                </View>
              </TouchableOpacity>
              {showStaffList && (
                <ScrollView style={{ maxHeight: 150 }}>
                  {dataStaff.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleSelectItem(item)}>
                      <Text style={{ color: Colors.Black, fontSize: Fontsizes.fs_15 }}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
              {selectedItem !== '' && (
                <Text style={{ marginTop: 20, color: Colors.Black, fontSize: Fontsizes.fs_15 }}>Đã chọn: {selectedItem.name}</Text>
              )}
            </View>

            <CustomButton label={'Xác nhận'} />


          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ListJob

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
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionLabel: {
    color: Colors.Black,
    fontSize: Fontsizes.fs_18,
    fontWeight: '600',
    marginBottom: 5,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: Colors.Gray,
    borderRadius: Radius.rd_10,
    padding: 10,
    minHeight: 100, 
  },
  inputc: {
    width: '100%',

  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: Spacing.space_10,
    marginTop: Spacing.space_10
  },
  textDate: {
    color: Colors.Black,
    fontSize: Fontsizes.fs_16
  }
})