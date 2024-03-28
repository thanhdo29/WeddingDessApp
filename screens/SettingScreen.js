import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, Fontsizes, Radius, Spacing } from '../constants'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon1 from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';


const SettingScreen = () => {
    const navigation = useNavigation();

    const doLogout=()=>{
        navigation.navigate('login');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Setting</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.btn}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="person-circle-outline" size={30} color="black" style={{ padding: 10 }}></Icon>
                        <Text style={styles.text_btn}>Cá nhân</Text>
                    </View>
                    <Icon2 name="right" size={Fontsizes.fs_20} color="black" style={{ padding: 10 }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon name="person-circle-outline" size={30} color="black" style={{ padding: 10 }}></Icon>
                        <Text style={styles.text_btn}>Đổi chủ đề</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={()=>{doLogout()}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Icon1 name="logout" size={30} color="black" style={{ padding: 10 }}/>
                        <Text style={styles.text_btn}>Đăng xuất</Text>
                    </View>
                    <Icon2 name="right" size={Fontsizes.fs_20} color="black" style={{ padding: 10 }} />
                </TouchableOpacity>
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
        height:'35%',
        backgroundColor: Colors.Medium_pink,
        

    },
    footer: {
        width: '100%',
        paddingHorizontal: Spacing.space_35,
        borderTopEndRadius:Radius.rd_20,
        
    },
    btn: {
        borderBottomWidth: 1,
        borderColor: Colors.Gray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:Spacing.space_40
    },
    text_btn: {
        color: Colors.Black,
        fontSize: Fontsizes.fs_15
    },
    title:{
        fontSize:Fontsizes.fs_28,
        color:Colors.Black,
        fontWeight:'500',
        position:'absolute',
        bottom:Spacing.space_28,
        left:Spacing.space_28
    }
})