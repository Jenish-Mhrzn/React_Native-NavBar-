import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from "../../components/TabBar.jsx"

const _layout = () => {
  return (
    <Tabs
    tabBar={props => <TabBar {...props}/>}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Home",
          headerShown:false,
        }}
      >
      </Tabs.Screen>
      <Tabs.Screen
        name='explore'
        options={{
          title: "Explore",
          headerShown:false,
        }}
      >
      </Tabs.Screen>

      <Tabs.Screen
        name='contact'
        options={{
          title: "Contact",
          headerShown:false,
        }}
      >
      </Tabs.Screen>

      <Tabs.Screen
        name='setting'
        options={{
          title: "Setting",
          headerShown:false,
        }}
      >
      </Tabs.Screen>
    </Tabs>
  )
}

export default _layout