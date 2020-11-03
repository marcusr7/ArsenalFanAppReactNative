import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground, HeaderTitle, } from '@react-navigation/stack';
import * as React from 'react';

import {Image} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreenTab from '../screens/HomeScreenTab';
import PlayersScreenTab from '../screens/PlayersScreenTab';
import ResultsScreenTab from '../screens/ResultsScreenTab';
import FixturesScreenTab from '../screens/FixturesScreenTab';
import SeasonDetailsScreenTab from '../screens/SeasonDetailsScreenTab';

import { BottomTabParamList, FixturesParamList, HomeParamList, PlayersParamList, ResultsParamList, SeasonDetailsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ 
        
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#000000',
        

        style:{
          backgroundColor: '#FF0000',
        }

        }}>


      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-paper" color={color} />,
          tabBarLabel: 'News',

        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-person" color={color} />,
          tabBarLabel: 'Players',
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="md-football" color={color}/>,
          tabBarLabel: 'Results',
        }}
      >
        
      </BottomTab.Screen>

      <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-calendar" color={color}/>,
          tabBarLabel: 'Fixtures',
        }}
      >

      </BottomTab.Screen>

      <BottomTab.Screen
        name="TabFive"
        component={TabFiveNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="ios-trophy" color={color}/>,
          tabBarLabel: 'Season Details',
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<HomeParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      
      <TabOneStack.Screen
        name="News"
        component={HomeScreenTab}
        options={{ 
          headerTitle: 'News',
          headerTintColor:'#FFFFFF',

          headerStyle:{
            backgroundColor: '#FF0000',
          },
          headerLeft: ()=> <Image source={require('../assets/images/Arsenal_White.png')} flex={1} left={-90} height={10} width={10} resizeMode={'contain'}></Image>,

        }} 
          
        
        
      />
      
    </TabOneStack.Navigator>
    
  );
}

const TabTwoStack = createStackNavigator<PlayersParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Players"
        component={PlayersScreenTab}
        options={{ 
          headerTitle: 'Players',
          headerTintColor: '#FFFFFF',

          headerStyle:{
            backgroundColor: '#FF0000',
          },
          headerLeft: ()=> <Image source={require('../assets/images/Arsenal_White.png')} flex={1} left={-90} height={10} width={10} resizeMode={'contain'}></Image>


       }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<ResultsParamList>();

function TabThreeNavigator(){
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Results"
        component={ResultsScreenTab}
        options={{ 
          headerTitle: 'Results',
          headerTintColor: '#FFFFFF',

          headerStyle:{
            backgroundColor: '#FF0000',
          },
          headerLeft: ()=> <Image source={require('../assets/images/Arsenal_White.png')} flex={1} left={-90} height={10} width={10} resizeMode={'contain'}></Image>


       }}
      />
    </TabThreeStack.Navigator>
  );

}

const TabFourStack = createStackNavigator<FixturesParamList>();

function TabFourNavigator(){
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Fixtures"
        component={FixturesScreenTab}
        options={{ 
          headerTitle: 'Fixtures',
          headerTintColor: '#FFFFFF',

          headerStyle:{
            backgroundColor: '#FF0000',
          },
          headerLeft: ()=> <Image source={require('../assets/images/Arsenal_White.png')} flex={1} left={-90} height={10} width={10} resizeMode={'contain'}></Image>


       }}
      />
    </TabFourStack.Navigator>
  );

}

const TabFiveStack = createStackNavigator<FixturesParamList>();

function TabFiveNavigator(){
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="Season Details"
        component={SeasonDetailsScreenTab}
        options={{ 
          headerTitle: 'Season Details',
          headerTintColor: '#FFFFFF',

          headerStyle:{
            backgroundColor: '#FF0000',
          },
          headerLeft: ()=> <Image source={require('../assets/images/Arsenal_White.png')} flex={1} left={-90} height={10} width={10} resizeMode={'contain'}></Image>


       }}
      />
    </TabFiveStack.Navigator>
  );

}

