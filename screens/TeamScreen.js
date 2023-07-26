import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import TeamList from '../components/TeamList';
import Inning from '../components/Innings/Inning';

const TeamScreen = () => {
  const [MyData, setMyData] = useState(null);
  const [MyTeam, setMyTeam] = useState(null);
  const [MyPlayers, setMyPlayers] = useState([]);
  const [MyPlayers2, setMyPlayers2] = useState([]);
  const [isData, setisData] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [Btn, setBtn] = useState(MyPlayers);

  useEffect(() => {
    if (MyTeam == null) {
      fetchingTeam();
    }
  }, []);
  // fetching..
  const fetchingTeam = async () => {
    try {
      const response = await fetch(
        'https://www.sportsadda.com/cricket/live/json/nzin01312019187360.json',
      );
      const data = await response.json();
      //
      let teamVal = Object.values(data.Teams);
      let playerVal = Object.values(teamVal[0].Players);
      let playerVal2 = Object.values(teamVal[1].Players);

      setMyData(data);
      setMyTeam(teamVal);
      setMyPlayers(playerVal);
      setMyPlayers2(playerVal2);
      setisData(true);
    } catch (error) {
      console.log('Error Message:', error);
    }
  };
  // console.log(MyData)
  const handleBtn = e => {
    if (e == 'b1') {
      setTeamName(`Team: ${MyTeam[0].Name_Full}`);
      setBtn(MyPlayers);
    } else if (e == 'b2') {
      setTeamName(`Team: ${MyTeam[1].Name_Full}`);
      setBtn(MyPlayers2);
    } else {
      setBtn(e);
    }
  };
  return !isData ? (
    <ActivityIndicator />
  ) : (
    <View style={{backgroundColor: 'pink'}}>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => handleBtn('b1')} style={styles.btn}>
          <Text style={styles.btnTxt}>Team 1</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBtn('b2')} style={styles.btn}>
          <Text style={styles.btnTxt}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleBtn('b3')} style={styles.btn}>
          <Text style={styles.btnTxt}>Innings</Text>
        </TouchableOpacity>
      </View>

      {Btn != 'b3' ? (
        <View style={{padding: 5}}>
          {Btn && (
            <View style={styles.team1}>
              <Text> {teamName}</Text>
              <FlatList
                data={Btn}
                keyExtractor={key => key.Name_Full}
                renderItem={({item}) => <TeamList item={item} />}
              />
            </View>
          )}
        </View>
      ) : (
        <View style={{padding: 5}}>
          <Inning data={MyData} />
          {/* {(!MyData && !MyData.Innings) ?<ActivityIndicator/> :
        } */}
        </View>
      )}
    </View>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'tomato',
    padding: 10,
  },
});
