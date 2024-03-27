import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CusomTextInputSearch from '../component/CusomTextInputSearch'
import { Spacing } from '../constants'

const ListStaffScreen = () => {
  return (
    <View>
      <CusomTextInputSearch/>
    </View>
  )
}

export default ListStaffScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:Spacing.space_20
  }
})