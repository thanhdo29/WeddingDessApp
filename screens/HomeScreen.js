import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { Colors, Fontsizes, Spacing } from '../constants'
import Banner from '../component/Banner'
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trang chủ</Text>
        <TouchableOpacity>
          <Icon1 name="cart" size={30} color="black" style={{ padding: 10 }} />
        </TouchableOpacity>
      </View>
      <Banner/>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.space_18,
    paddingTop: Spacing.space_10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: Fontsizes.fs_28,
    fontWeight: '700',
    color: Colors.Pink
  }
})