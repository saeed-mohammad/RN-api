import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

export const TeamList = ({item}) => {
    const [isDetail,setisDetail]=useState(false)
  return (
        <View style={styles.cart1}>
            <TouchableOpacity
            onPress={()=>setisDetail(!isDetail)}
            >
                <Text>{`${item.Name_Full}  ${item.Iscaptain ? 'CAPTAIN':''} `}</Text>
            </TouchableOpacity>
            {(isDetail) && (
                <View>
                    <Text>Position: {item.Position}</Text>
                    <Text>Bating style: {item.Batting.Style} Strikerate:{item.Batting.Strikerate} Runs:{item.Batting.Runs}</Text>
                    <Text>Bowling style: {item.Bowling.Style} Wickets: {item.Bowling.Wickets}</Text>
                </View>
          )}
        </View>
      )
}

export default TeamList

const styles = StyleSheet.create({
    team1:{
        backgroundColor:'lightblue',
        paddingVertical:10,
        marginBottom:10,
      },
      cart1:{
        marginVertical:10,
        marginHorizontal:5,
        padding:10,
        borderWidth:1
      },
})