import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, } from '../components/Themed';
import {SectionList, SafeAreaView, Image, ProgressBarAndroid } from 'react-native';

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

        <View>
          <Image source={require('../assets/images/Arsenal_White.png')} style={styles.arsenalBadgeStye}></Image>
          <Image source={require('../assets/images/gameType/PremierLeague.png')} style={styles.premierLeagueStyle}></Image>
          <Image source={require('../assets/images/gameType/EuropaLeague.png')} style={styles.europaLeagueStyle}></Image>
          <Image source={require('../assets/images/gameType/FACup.png')} style={styles.faCupStyle}></Image>
          <Image source={require('../assets/images/gameType/CarabaoCup.png')} style={styles.carabaoCupStyle}></Image>
        </View>

        <Text style={styles.seasonTitle}>Season Progress</Text>
        <View>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.02} color='#FF0000' style={styles.progressBarStyle}></ProgressBarAndroid>
        </View>

        <Text style={styles.premierLeagueTitle}>Premier League: 2nd Place</Text>
        <View>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.95} color='#FF0000' style={styles.progressBarStyle}></ProgressBarAndroid>
        </View>

        <Text style={styles.europaLeagueTitle}>Europa League: Group Stage</Text>
        <View>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.16} color='#FF0000' style={styles.progressBarStyle}></ProgressBarAndroid>
        </View>

        <Text style={styles.faCupTitle}>FA Cup: 3rd Round</Text>
        <View>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.16} color='#FF0000' style={styles.progressBarStyle}></ProgressBarAndroid>
        </View>

        <Text style={styles.eflCupTitle}>EFL Cup: 3rd Round</Text>
        <View>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.16} color='#FF0000' style={styles.progressBarStyle}></ProgressBarAndroid>
        </View>
 

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

  

  seasonTitle: {
    fontSize: 30,
    marginVertical: 2,
    marginHorizontal: 80,
    marginTop: 250,
    left: 15,
},

premierLeagueTitle:{
    fontSize: 20,
    marginVertical: 2,
    marginHorizontal: 80,
    marginTop: 20,
    left: 10,

},

europaLeagueTitle:{
    fontSize: 19,
    marginVertical: 2,
    marginHorizontal: 80,
    marginTop: 20,
    left: 8,
},

faCupTitle:{
    fontSize: 20,
    marginVertical: 2,
    marginHorizontal: 80,
    marginTop: 20,
    left: 35,
},

eflCupTitle:{
    fontSize: 20,
    marginVertical: 2,
    marginHorizontal: 80,
    marginTop: 20,
    left: 30,
   
},



progressBarStyle: {
    left: 0,
    bottom: 5,
    
    
},

  arsenalBadgeStye: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: 10,
    left: 120,
  },

  premierLeagueStyle: {
    width: 60,
    height: 60, 
    position: 'absolute',
    left: 80,
    top: 170,
  },

  europaLeagueStyle: {
    width: 65,
    height: 65, 
    position: 'absolute',
    left: 145,
    top: 170,
  },

  faCupStyle:{
      width: 65,
      height: 65,
      position: 'absolute',
      left: 205,
      top: 170,
  },

  carabaoCupStyle: {
      width: 65,
      height: 65,
      position: 'absolute',
      left: 265,
      top: 170,

  }


});




