import React, { useState } from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import Colors from '../../color'
import Profile from './Profile'
import More from './More'
import { Text } from 'native-base'


const renderScrene = SceneMap({
    first:Profile,
    second:More
})

export default function Tabs() {
  const layout = useWindowDimensions()
  const [index,setIndex] = useState(0)
  const [routes] = useState([
    {
        key:'first',title:'PROFILE'
    },
    {
        key:'second',title:'MORE'
    },
  ]);

  const renderTabsBar = (props) =>(
    <TabBar
        {...props}
        tabStyle={styles.tabStyle}
        indicatorStyle={{backgroundColor:Colors.black}}
        activeColor={Colors.main}
        inactiveColor={Colors.white}
        renderLabel={({ route,color }) => ( 
            <Text
                style={{ color, ...styles.text }}
            >{route.title}</Text>
        )}
    />
  );

  return (
    <TabView
        navigationState={{index, routes}}
        renderScene={renderScrene}
        onIndexChange={setIndex}
        initialLayout={{width:layout.width}}
        renderTabBar={renderTabsBar}
    />
  )
}

const styles = StyleSheet.create({
    tabStyle:{
        backgroundColor:'black',
    },
    text:{
        fontSize:13,
        fontWeight:'bold',
    },
});