import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Colors, Fontsizes, Spaces, Spacing } from '../constants'

const CustomTextInput = ({props, label}) => {
  return (
    <View style={styles.inputContainer} >
      <Text>{label}</Text>
      <TextInput {...props} style={styles.input}/>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  inputContainer:{
    position:"relative",
    justifyContent:'center',
    marginTop:Spacing.space_24
  },
  label:{
    color:Colors.Gray,
    fontSize:Fontsizes.fs_20,
    fontWeight:'600'
  },
  input:{
    borderBottomWidth:1,
    paddingVertical:Spacing.space_15,
    fontSize:Fontsizes.fs_18
  }

})