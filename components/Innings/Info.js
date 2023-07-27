import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Info = ({info}) => {
    // console.log(info) 
  return (
    <View>
      <Text>Match:{info.Match.Number}</Text>
      <Text>League:{info.Match.League}</Text>
      <Text>Series:{info.Series.Name}</Text>
      <Text>Umpires:{info.Officials.Umpires}</Text>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
    
})