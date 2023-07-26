import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const InningList = ({inningData}) => {
  // console.log('data:::', inningData.Number);

  return (
    <View style={{marginVertical: 20}}>
      <View style={styles.overview}>
        <Text>Total:{`${inningData.Total}/${inningData.Wickets}`}</Text>
        <Text>Overs:{inningData.Overs}</Text>
        <Text>Runrate:{inningData.Runrate}</Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Text>Name</Text>
          <Text>Runs</Text>
          <Text>Balls</Text>
          <Text>Fours</Text>
          <Text>Sixes</Text>
        </View>
      </View>

      <FlatList
        data={inningData.Batsmen}
        keyExtractor={key => key.Batsman}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text>{item.Batsman}</Text>
            <Text>{item.Runs !== '' ? item.Runs : 'NA'}</Text>
            <Text>{item.Balls !== '' ? item.Balls : 'NA'}</Text>
            <Text>{item.Fours !== '' ? item.Fours : 'NA'}</Text>
            <Text>{item.Sixes !== '' ? item.Sixes : 'NA'}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default InningList;

const styles = StyleSheet.create({
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
