import {FlatList, StyleSheet, Text, View} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import React, { useEffect } from 'react';

const InningList = ({inningData,notes}) => {
  // console.log('notes',notes)
  // console.log('data:::', inningData.Number);
  // console.log(playersName);
  // console.log(inningData.Batsmen);
 
  return (
    <View style={{marginVertical: 20}}>
      <View style={styles.overview}>
        <Text>Total:{`${inningData.Total}/${inningData.Wickets}`}</Text>
        <Text>Overs:{inningData.Overs}</Text>
        <Text>Runrate:{inningData.Runrate}</Text>
      </View>
      {/* <View> */}
      <Table>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <Text>Name</Text>
          <Text>Runs</Text>
          {/* <Text>Balls</Text> */}
          <Text>Fours</Text>
          <Text>Sixes</Text>
        </View>
      {/* </View> */}

      <FlatList
        data={inningData.Batsmen}
        keyExtractor={key => key.Batsman}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{item.Batsman}</Text>
            <Text>{item.Runs !== '' ? item.Runs : 'NA'}</Text>
            {/* <Text>{item.Balls !== '' ? item.Balls : 'NA'}</Text> */}
            <Text>{item.Fours !== '' ? item.Fours : 'NA'}</Text>
            <Text>{item.Sixes !== '' ? item.Sixes : 'NA'}</Text>
          </View>
        )}
      />
      </Table>
      <View style={{marginVertical:20,paddingHorizontal:5}}>
        <Text style={{color:'black',fontSize:20}}>Notes:</Text>
        <FlatList
        data={notes}
        keyExtractor={key=>key}
        renderItem={({item})=>
      <View style={{marginVertical:5}}>
        <Text>{item}</Text>
      </View>

      }
        />
      </View>
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
