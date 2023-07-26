import { StyleSheet, Text, View ,Image,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [MyData,setMyData]=useState([])
    useEffect(()=>{
        fetchingData()
    },[])
    
    const fetchingData=async()=>{
        try {
            const response=await fetch('https://testffc.nimapinfotech.com/testdata.json')
            const data=await response.json()
            setMyData(data.data.Records)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log('data',MyData)
    const RenderData=({item})=>{
        return(
        <View style={styles.cartContainer}>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.shortDescription}</Text>
            <Text>startDate: {item.startDate}</Text>
            <Text>endDate: {item.endDate}</Text>
            <View style={styles.imgContainer}>
                <Image 
                style={styles.img}
                source={{uri: item.mainImageURL}}/>
            </View>
        </View>
        )
    }
  return (
    <View>
        <FlatList 
            data={MyData}
            keyExtractor={(key)=>key.Id}
            renderItem={({item})=> <RenderData item={item}/>}
        />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    cartContainer:{
        margin:20,
    },
    imgContainer:{
        backgroundColor:'royalblue'
    },
    img:{
        width:'100%',
        aspectRatio:1
    }
})