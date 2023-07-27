import { FlatList, StyleSheet,TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import Info from './Info'


const Highlights = ({data,info}) => {
    const [btn,setBtn]=useState(false)
    const handleBtn =(e)=>{
        setBtn(!btn)
    }
    // console.log('highilights',data)
  return (
    <View > 
        <FlatList
        data={data}
        keyExtractor={(key)=>key}
        renderItem={({item})=>
        <View style={{marginVertical:5}}>
            <Text>* {item}</Text>
        </View>
    }
        />

        <View style={{marginVertical:20}}>
        <TouchableOpacity
          onPress={() => handleBtn('info')}
          style={styles.btn}>
          <Text >Info</Text>
        </TouchableOpacity>

        { 
            (btn) && <Info info={info}/>
        }
        </View>
    </View>
  )
}

export default Highlights

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'skyblue',
        padding: 10,
        alignItems:'center',
        marginVertical:20
      },
})