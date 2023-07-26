
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import TeamScreen from '../screens/TeamScreen';
const Tab = createMaterialTopTabNavigator();
const Inshorts = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { color: 'black',letterSpacing:1 },
          tabBarStyle: { backgroundColor: '#2f87d4'},
        }}
        initialRouteName='Team'
      >
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Team" component={TeamScreen} />

      </Tab.Navigator>
  )
}

export default Inshorts

