import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import InningList from './InningList';
import Highlights from './Highlights';

const Inning = ({data,playersName}) => {
  const [list, setList] = useState(null);
  const [noteList, setnoteList] = useState(null);
  const [btn,setBtn]=useState(null)
  // console.log('inning',playersName)
  // console.log(data.Innings[0].AllottedOvers)
  const handleBtn = e => {
    if (e === 'first') {
      setBtn(e)
      setList(0)
      setnoteList(1)
      players(0)
    } else if(e === 'second') {
      setBtn(e)
      setList(1);
      setnoteList(2)
      players(1)
    }else{
      setBtn(e)
    }
  };
  // console.log(btn)
  const players=(num)=>{
    
    for(let i =0; i<data.Innings[num].Batsmen.length;i++){
      // console.log('inning',inningData.Batsmen[i].Batsman)

      for(let j=0; j<Object.keys(playersName[num]).length;j++){
        if(data.Innings[num].Batsmen[i].Batsman === Object.keys(playersName[num])[j] ){
          data.Innings[num].Batsmen[i].Batsman = Object.values(playersName[num])[j]
          break
        }
        // console.log('playrer',Object.keys(playersName)[j])
      }
    }
  }
  // console.log('notes',data.Notes)
  return (
    <View style={styles.container}>
      <View style={styles.btnCon}>

        <TouchableOpacity onPress={() => handleBtn('first')} style={styles.btn}>
          <Text>First Inning </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBtn('second')}
          style={styles.btn}>
          <Text>Second Inning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleBtn('highlights')}
          style={styles.btn}>
          <Text>Highlights</Text>
        </TouchableOpacity>

      </View>
      <View>
        {
        (list !== null  &&  btn !== 'highlights' ) ?
        (<InningList 
          inningData={data.Innings[list] } 
          notes={data.Notes[noteList]}
        />):(
          <Highlights data={data.Nuggets}  info={data.Matchdetail}/>
        )
      }
      </View>
    </View>
  );
};

export default Inning;

const styles = StyleSheet.create({
  btnCon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: 'skyblue',
    padding: 10,
  },
});
