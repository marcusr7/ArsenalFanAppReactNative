import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {SectionList, SafeAreaView, Image } from 'react-native';

import firebase from '../firebaseConfig'
import { StackActions } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function useResults(){
    const [results, setResults] = useState<any[]>([])

    React.useEffect(() => {
        firebase
         .firestore()
         .collection('results').orderBy('Order')
         .onSnapshot((snapshot) => {
             const newResults = snapshot.docs.map((document) => ({
                 id: document.id,
                 ...document.data()
             }))

             setResults(newResults)
         })
    }, [])

    return results
}

export default function ResultsScreen() {
  
  const results = useResults();
  
  return (
    
   
    <View style={styles.container}>
      <ScrollView>

    {results?.map((result) =>

        <View key={result.id}>

            <Text style={styles.resultsGameType}>{result.Type}</Text>
            <Text style={styles.resultsScore}>{result.Home} v {result.Team} {result.Score}</Text>
            <Text style={styles.resultsWin}>{result.Win}</Text>
            <Text>------------------------------------------------------------------------------------------------------------</Text>

            <View>
            {result.Team == "MK Dons" ? <Image source={require('../assets/images/teamBadges/MKDons.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Chelsea" ? <Image source={require('../assets/images/teamBadges/Chelsea.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Watford" ? <Image source={require('../assets/images/teamBadges/Watford.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Aston Villa" ? <Image source={require('../assets/images/teamBadges/AstonVilla.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Manchester City" ? <Image source={require('../assets/images/teamBadges/ManCity.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Tottenham" ? <Image source={require('../assets/images/teamBadges/Tottenham.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Leicester" ? <Image source={require('../assets/images/teamBadges/Leicester.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Wolves" ? <Image source={require('../assets/images/teamBadges/Wolves.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Norwich" ? <Image source={require('../assets/images/teamBadges/Norwich.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Liverpool" ? <Image source={require('../assets/images/teamBadges/Liverpool.png')} style={styles.teamBadgeStyle}></Image>
            : result.Team == "Fulham" ? <Image source={require('../assets/images/teamBadges/Fulham.png')} style={styles.teamBadgeStyle}></Image>
            : ''}
            </View>

            <View>
                {result.Type == "Premier League" ? <Image source={require('../assets/images/gameType/PremierLeague.png')} style={styles.gameTypeStyle}></Image>
                : result.Type == "Pre Season" ? <Image source={require('../assets/images/gameType/PreSeason.png')} style={styles.gameTypeStyle}></Image>
                : result.Type == "FA Community Shield" ? <Image source={require('../assets/images/gameType/CommunityShield.png')} style={styles.gameTypeStyle}></Image>
                : result.Type == "FA Cup Semi Final" || "FA Cup Final" ? <Image source={require('../assets/images/gameType/FACup.png')} style={styles.gameTypeStyle}></Image>
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

  resultsHeader: {
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 250,
    marginVertical: 5,
    marginHorizontal: 2,
  },

  resultsGameType: {
      fontSize: 20,
      marginVertical: 2,
      marginHorizontal: 80,
      marginTop: 20,
  },

  resultsScore:{
    fontSize: 15,
    marginVertical: 2,
    marginHorizontal: 80,
  },

  resultsWin: {
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
