import {  StyleSheet, Text, View,FlatList, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import TeamList from '../components/TeamList'

const TeamScreen = () => {
    const [MyTeam,setMyTeam]=useState(null)
    const [MyPlayers,setMyPlayers]=useState([])
    const [MyPlayers2,setMyPlayers2]=useState([])
    const [isData, setisData] = useState(false)
    const [teamName,setTeamName]=useState('')
    const [Btn,setBtn]=useState(MyPlayers)
    useEffect(()=>{
      if(MyTeam ==null){
        fetchingTeam()
      }
    },[])
    // fetching..
    const fetchingTeam=async()=>{
        try {
            const response=await fetch('https://www.sportsadda.com/cricket/live/json/nzin01312019187360.json')
            const data=await response.json()
            // 
            let teamVal =Object.values(data.Teams);
            let playerVal= Object.values(teamVal[0].Players)
            let playerVal2= Object.values(teamVal[1].Players)
          
            setMyTeam(teamVal)
            setMyPlayers(playerVal)
            setMyPlayers2(playerVal2)
            setisData(true)
          } catch (error) {
            console.log('Error Message:',error)
          }
        }
        const handleBtn=(e)=>{
          if(e == 'b1'){
            setTeamName(`Team: ${MyTeam[0].Name_Full}`)
            setBtn(MyPlayers)
          }else{
            setTeamName(`Team: ${MyTeam[1].Name_Full}`)
            setBtn(MyPlayers2)
          }
        }
  return((!isData) ? <ActivityIndicator/>:
    <View>
      <View style={styles.btnContainer}>
          <TouchableOpacity
           onPress={()=>handleBtn('b1')}
           style={styles.btn}>
            <Text style={styles.btnTxt}>Team 1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>handleBtn('b2')}
          style={styles.btn}>
            <Text style={styles.btnTxt}>Team 2</Text>
          </TouchableOpacity>
      </View>
      {/* team 1 */}
      {(Btn == 'b1') ? (
         <View style={styles.team1}>
         <Text> {teamName}</Text> 
          <FlatList 
           data={Btn}
           keyExtractor={(key)=>key.Name_Full}
           renderItem={({item})=> <TeamList item={item}/> }
          />
       </View>
      ):(
      <View style={styles.team1}>
        <Text>{teamName}</Text> 
         <FlatList 
          data={Btn}
          keyExtractor={(key)=>key.Name_Full}
          renderItem={({item})=> <TeamList item={item}/> }
         />
      </View>
      )}
    </View>
  )
}

export default TeamScreen

const styles = StyleSheet.create({
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:10
  },
  btn:{
    backgroundColor:'tomato',
    padding:10
  },
  btnTxt:{},
  // team1:{
  //   backgroundColor:'lightblue',
  //   paddingVertical:10,
  //   marginBottom:10,
  // },
  // team2:{
    
  //   paddingVertical:10,
  //   marginBottom:10,
  //   backgroundColor:'lightgreen'
  // },
  // cart1:{
  //   marginVertical:10,
  //   marginHorizontal:5,
  //   padding:10,
  //   borderWidth:1
  // },
  // cart2:{
  //   marginVertical:10,
  //   marginHorizontal:5,
  //   padding:5,
  //   borderWidth:1
  // }
})