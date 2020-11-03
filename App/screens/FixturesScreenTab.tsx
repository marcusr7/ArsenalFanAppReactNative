import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {SectionList, SafeAreaView, Image } from 'react-native';

import firebase from '../firebaseConfig'
import { StackActions } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';




function useFixtures(){
    const [fixtures, setFixtures] = useState<any[]>([])

    React.useEffect(() => {
        firebase
         .firestore()
         .collection('fixtures').orderBy('Order')
         .onSnapshot((snapshot) => {
             const newFixtures = snapshot.docs.map((document) => ({
                 id: document.id,
                 ...document.data()
             }))

             setFixtures(newFixtures)
         })
    }, [])

    return fixtures
}

export default function FixturesScreen() {
  
  const fixtures = useFixtures();
  
  return (
    
    <View style={styles.container}>
      <ScrollView>
    {fixtures?.map((fixture) =>

        <View key={fixture.id}>

            <Text style={styles.fixturesType}>{fixture.Type}</Text>
            <Text style={styles.fixturesGame}>{fixture.Home} v {fixture.Team}</Text>
            <Text style={styles.fixturesDate}>{fixture.Date}</Text>
            <Text>------------------------------------------------------------------------------------------------------------</Text>

            <View>
              {fixture.Team == "West Ham" ? <Image source={require('../assets/images/teamBadges/WestHam.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Liverpool" ? <Image source={require('../assets/images/teamBadges/Liverpool.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Sheffield United" ? <Image source={require('../assets/images/teamBadges/SheffieldUnited.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Manchester City" ? <Image source={require('../assets/images/teamBadges/ManCity.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Leicester" ? <Image source={require('../assets/images/teamBadges/Leicester.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Manchester United" ? <Image source={require('../assets/images/teamBadges/ManUnited.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Aston Villa" ? <Image source={require('../assets/images/teamBadges/AstonVilla.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Leeds United" ? <Image source={require('../assets/images/teamBadges/Leeds.png')} style={styles.teamBadgeStyle}></Image>
              : fixture.Team == "Wolves" ? <Image source={require('../assets/images/teamBadges/Wolves.png')} style={styles.teamBadgeStyle}></Image>
              : ''}
            </View>

            <View>
                {fixture.Type == "Premier League" ? <Image source={require('../assets/images/gameType/PremierLeague.png')} style={styles.gameTypeStyle}></Image>
                : fixture.Type == "EFL Cup 3rd Round" ? <Image source={require('../assets/images/gameType/CarabaoCup.png')} style={styles.gameTypeStyle}></Image>
                : ''}
            </View>
      
        </View>
    )}

    </ScrollView>
      
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      
    </View>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:  'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  scrollViewStyle:{
      backgroundColor: "#FFFFFF",
  },

  fixturesHeader: {
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 250,
    marginVertical: 5,
    marginHorizontal: 5,
  },

  fixturesType: {
      fontSize: 20,
      marginVertical: 2,
      marginHorizontal: 80,
      marginTop: 20,
  },

  fixturesGame: {
    fontSize: 15,
    marginVertical: 2,
    marginHorizontal: 80,
  },

  fixturesDate: {
    fontSize: 15,
    top: -10,
    marginVertical: 15,
    left: 80,
  },

  teamBadgeStyle: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: -110,
    left: 335,
  },

  gameTypeStyle: {
    width: 60,
    height: 60, 
    position: 'absolute',
    top: -110,
    left: 5,
  },

});




