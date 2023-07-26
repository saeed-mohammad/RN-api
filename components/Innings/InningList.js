import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InningList = ({inningData}) => {
    console.log('data:::',inningData.Number)
  return (
    <View>
      <Text>InningList</Text>
      {/* <Text>{data.Number}</Text> */}
    </View>
  )
}

export default InningList

const styles = StyleSheet.create({})