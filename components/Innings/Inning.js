import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import InningList from './InningList'



const Inning = ({data}) => {
    const [list,setList]=useState('')
    // console.log(data.Innings[0].AllottedOvers)
    const handleBtn=(e)=>{
        if(e==='first'){
            setList('0')
        }else{
            setList('1')
        }
    }
    return (
    <View style={styles.container}>
        <View style={styles.btnCon}>
            <TouchableOpacity
            onPress={()=>handleBtn('first')}
             style={styles.btn}>
                <Text>First Inning </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>handleBtn('second')}
             style={styles.btn}>
                <Text>Second Inning</Text>
            </TouchableOpacity>
        </View>
        <View>
           { 
            (list !== '') && (<InningList inningData={data.Innings[list]} />) 
           }
        </View>
    </View>
  )
}

export default Inning

const styles = StyleSheet.create({
    btnCon:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btn:{
        backgroundColor:'skyblue',
        padding:10
    }
})