import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../component/CustomButton'
import CustomTextInput from '../component/CustomTextInput'



const SettingScreen = () => {
    const navigation = useNavigation();
    const [modalLogout, setModalLogout] = useState(false);
    const [modalChangePass, setModalChangePass] = useState(false);


    const doLogout = () => {
        setModalLogout(true);
    }
    const doChangePass = () => {
        setModalChangePass(true);
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Setting</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="person-circle-outline" size={30} color="black" style={{ padding: 10 }}></Icon>
                        <Text style={styles.text_btn}>Cá nhân</Text>
                    </View>
                    <Icon2 name="right" size={Fontsizes.fs_20} color="black" style={{ padding: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="person-circle-outline" size={30} color="black" style={{ padding: 10 }}></Icon>
                        <Text style={styles.text_btn}>Đổi chủ đề</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => doChangePass()}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="key" size={30} color="black" style={{ padding: 10 }}></Icon>
                        <Text style={styles.text_btn}>Đổi mật khẩu</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={() => { doLogout() }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon1 name="logout" size={30} color="black" style={{ padding: 10 }} />
                        <Text style={styles.text_btn}>Đăng xuất</Text>
                    </View>
                    <Icon2 name="right" size={Fontsizes.fs_20} color="black" style={{ padding: 10 }} />
                </TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalLogout}
                    onRequestClose={() => {
                        setModalLogout(!modalLogout);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Icon2 name="warning" size={Fontsizes.fs_32} color="black" style={{ padding: 10 }} />
                            <Text style={{ fontSize: Fontsizes.fs_22, color: Colors.Black, fontWeight: '500', marginBottom: Spacing.space_10 }}>Đăng xuất</Text>
                            <Text style={{ fontSize: Fontsizes.fs_15, color: Colors.Black, fontWeight: '400', marginBottom: Spacing.space_16 }}>Bạn có chắc chắn muốn đăng xuất không ?</Text>
                            <View style={styles.viewModal}>
                                <TouchableOpacity style={styles.btnY} onPress={() => { setModalLogout(false) }}>
                                    <Text style={styles.textbtn}>Không</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btnY} onPress={() => navigation.navigate('login')}>
                                    <Text style={styles.textbtn}>Có</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalChangePass}
                    onRequestClose={() => {
                        setModalChangePass(!modalChangePass);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: Fontsizes.fs_24, color: Colors.Black, fontWeight: '600'}}>Đổi mật khẩu</Text>
                            <CustomTextInput
                                label={'Mật khẩu'}
                                props={{ secureTextEntry: true }}
                                
                            />                            
                            <CustomTextInput label={'Mật khẩu mới'} props={{ secureTextEntry: true }}/>
                            <CustomTextInput label={'Nhập lại mật khẩu'} props={{ secureTextEntry: true }}/>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: '35%',
        backgroundColor: Colors.Medium_pink,


    },
    footer: {
        width: '100%',
        paddingHorizontal: Spacing.space_35,
        borderTopEndRadius: Radius.rd_20,

    },
    btn: {
        borderBottomWidth: 1,
        borderColor: Colors.Gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: Spacing.space_40
    },
    text_btn: {
        color: Colors.Black,
        fontSize: Fontsizes.fs_15
    },
    title: {
        fontSize: Fontsizes.fs_28,
        color: Colors.Black,
        fontWeight: '500',
        position: 'absolute',
        bottom: Spacing.space_28,
        left: Spacing.space_28
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
        padding: Spacing.space_16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingHorizontal:Spacing.space_35,
        alignItems:'center'
    },

    viewModal: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Spacing.space_35
    },
    btnY: {
        backgroundColor: Colors.Pink,
        padding: Spacing.space_10,
        borderRadius: Radius.rd_10,
        flex: 1,
        marginLeft: Spacing.space_12
    },
    textbtn: {
        color: Colors.White,
        fontWeight: '400',
        textAlign: 'center'
    }
})