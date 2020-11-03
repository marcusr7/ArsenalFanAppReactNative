import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {SectionList, SafeAreaView, Image } from 'react-native';

import firebase from '../firebaseConfig'
import { StackActions } from '@react-navigation/native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

function useForwards(){
  const [forwards, setForwards] = useState<any[]>()

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('forwards').orderBy('Number')
      .onSnapshot((snapshot) => {
        const newForwards = snapshot.docs.map((document) => ({
          id: document.id,
          ...document.data() //the ... operator will merge the id to the associated data
        }))

        setForwards(newForwards)
      })
  }, [])

  return forwards
}

function useMidfielders(){
  const[midfielders, setMidfielders] = useState<any[]>()
  
  React.useEffect(() => {
    firebase  
      .firestore()
      .collection('midfielders').orderBy('Number')
      .onSnapshot((snapshot) => {
        const newMidfielders = snapshot.docs.map((document) => ({
          ...document.data()
        }))
        setMidfielders(newMidfielders)
      })
  }, [])
  return midfielders
}

function useDefenders(){
  const[defenders, setDefenders] = useState<any[]>()

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('defenders').orderBy('Number')
      .onSnapshot((snapshot) => {
        const newDefenders = snapshot.docs.map((document) => ({
          ...document.data()
        }))
        setDefenders(newDefenders)
    
      })
  }, [])
  return defenders
}

function useGoalkeepers(){
  const[goalkeepers, setGoalkeepers] = useState<any[]>()

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('goalkeepers').orderBy('Number')
      .onSnapshot((snapshot)=> {
        const newGoalkeepers = snapshot.docs.map((document) => ({
          ...document.data()
        }))
        setGoalkeepers(newGoalkeepers)
      })
  }, [])
  return goalkeepers
}

function useOnloan(){
  const[onloan, setOnloan] = useState<any[]>()

  React.useEffect(() => {
    firebase
      .firestore()
      .collection('onloan').orderBy('Age')
      .onSnapshot((snapshot) => {
        const newOnloan = snapshot.docs.map((document) => ({
          ...document.data()
        }))
        setOnloan(newOnloan)
      })
  }, [])
  return onloan
}

export default function PlayersScreen() {
  const forwards = useForwards();
  const midfielders = useMidfielders();
  const defenders = useDefenders();
  const goalkeepers = useGoalkeepers();
  const onloan = useOnloan();
  
 
  return (
    
    <View style={styles.container}>
      <ScrollView>

      {/* Forwards */}
      <Text style={styles.forwardHeader}>Forwards</Text>
      {forwards?.map((forward) =>
      
        <View key={forward.id}>
          
          <Text style={styles.title}>{forward.Name}</Text>  
          <Text style={styles.playerDescription}>Age: {forward.Age}</Text>
          <Text style={styles.playerDescription}>Number: {forward.Number}</Text>
          <Text style={styles.playerDescription}>Nationality: {forward.Nationality}</Text>

          <View>
          {forward.Name == "Alexandre Lacazette" ? <Image source={require('../assets/images/players/alexandreLacazette.jpg')} style={styles.playerImage}></Image>
          : forward.Name == "Willian" ? <Image source={require('../assets/images/players/willian.jpg')} style={styles.playerImage}></Image>
          : forward.Name == "Pierre-Emerick Aubameyang" ? <Image source={require('../assets/images/players/pierreEmerickAubameyang.jpg')} style={styles.playerImage}></Image>
          : forward.Name == "Nicolas Pepe" ? <Image source={require('../assets/images/players/nicolasPepe.jpg')} style={styles.playerImage}></Image>
          : forward.Name == "Reiss Nelson" ? <Image source={require('../assets/images/players/reissNelson.jpg')} style={styles.playerImage}></Image>
          : forward.Name == "Eddie Nketiah" ? <Image source={require('../assets/images/players/eddieNketiah.jpg')} style={styles.playerImage}></Image>
          : forward.Name == "Gabriel Martinelli" ? <Image source={require('../assets/images/players/gabrielMartinelli.jpg')} style={styles.playerImage}></Image>
          : ''}
          </View>

        </View>
 
      )}

      {/* Midfielders */}
      <Text style={styles.midfielderHeader}>Midfielders</Text>
      {midfielders?.map((midfielder) =>

        <View key={midfielder.id}>

          <Text style={styles.title}>{midfielder.Name}</Text>
          <Text style={styles.playerDescription}>Age: {midfielder.Age}</Text>
          <Text style={styles.playerDescription}>Number: {midfielder.Number}</Text>
          <Text style={styles.playerDescription}>Nationality: {midfielder.Nationality}</Text>

          <View>
            {midfielder.Name == "Bukayo Saka" ? <Image source={require('../assets/images/players/bukayoSaka.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Mesut Ozil" ? <Image source={require('../assets/images/players/mesutOzil.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Lucas Torreira" ? <Image source={require('../assets/images/players/lucasTorreira.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Ainsley Maitland-Niles" ? <Image source={require('../assets/images/players/ainsleyMaitlandNiles.jpg')} style={styles.playerImage}></Image> 
            : midfielder.Name == "Mohamed Elneny" ? <Image source={require('../assets/images/players/mohamedElneny.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Joe Willock" ? <Image source={require('../assets/images/players/joeWillock.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Matteo Guendouzi" ? <Image source={require('../assets/images/players/matteoGuendouzi.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Emile Smith Rowe" ? <Image source={require('../assets/images/players/emileSmithRowe.jpg')} style={styles.playerImage}></Image>
            : midfielder.Name == "Granit Xhaka" ? <Image source={require('../assets/images/players/granitXhaka.jpg')} style={styles.playerImage}></Image>
            : ''}
          </View>

        </View>
      )}

      {/* Defenders */}
      <Text style={styles.defenderHeader}>Defenders</Text>
      {defenders?.map((defender) =>

        <View key={defender.id}>

          <Text style={styles.title}>{defender.Name}</Text>
          <Text style={styles.playerDescription}>Age: {defender.Age}</Text>
          <Text style={styles.playerDescription}>Number: {defender.Number}</Text>
          <Text style={styles.playerDescription}>Nationality: {defender.Nationality}</Text>

          <View>
            {defender.Name == "Hector Bellerin" ? <Image source={require('../assets/images/players/hectorBellerin.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Kieran Tierney" ? <Image source={require('../assets/images/players/kieranTierney.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "William Saliba" ? <Image source={require('../assets/images/players/williamSaliba.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Sokratis" ? <Image source={require('../assets/images/players/sokratis.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Gabriel Magalhaes" ? <Image source={require('../assets/images/players/gabrielMagalhaes.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Rob Holding" ? <Image source={require('../assets/images/players/robHolding.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Cedric Soares" ? <Image source={require('../assets/images/players/cedricSoares.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Shkodran Mustafi" ? <Image source={require('../assets/images/players/shkodranMustafi.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Calum Chambers" ? <Image source={require('../assets/images/players/calumChambers.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Pablo Mari" ? <Image source={require('../assets/images/players/pabloMari.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "David Luiz" ? <Image source={require('../assets/images/players/davidLuiz.jpg')} style={styles.playerImage}></Image>
            : defender.Name == "Sead Kolasinac" ? <Image source={require('../assets/images/players/seadKolasinac.jpg')} style={styles.playerImage}></Image>
            : ''}
          </View>

        </View>
      )}

      {/* Goalkeepers */}
      <Text style={styles.goalkeeperHeader}>Goalkeepers</Text>
      {goalkeepers?.map((goalkeeper) =>

        <View key={goalkeeper.id}>

      <Text style={styles.title}>{goalkeeper.Name}</Text>
      <Text style={styles.playerDescription}>Age: {goalkeeper.Age}</Text>
      <Text style={styles.playerDescription}>Number: {goalkeeper.Number}</Text>
      <Text style={styles.playerDescription}>Nationality: {goalkeeper.Nationality}</Text>

      <View>
        {goalkeeper.Name == "Bernd Leno" ? <Image source={require('../assets/images/players/berndLeno.jpg')} style={styles.playerImage}></Image>
        : goalkeeper.Name == "Matt Macey" ? <Image source={require('../assets/images/players/mattMacey.jpg')} style={styles.playerImage}></Image>
        : ''}
      </View>

        </View>
      )}

      {/* On loan players */}
      <Text style={styles.onloanHeader}>On Loan</Text>
      {onloan?.map((onloanPlayer) =>

      <View key={onloanPlayer.id}>

        <Text style={styles.title}>{onloanPlayer.Name}</Text>
        <Text style={styles.playerDescription}>Age: {onloanPlayer.Age}</Text>
        <Text style={styles.playerDescription}>Team: {onloanPlayer.Team}</Text>
        <Text style={styles.playerDescription}>Nationality: {onloanPlayer.Nationality}</Text>

        <View>
          {onloanPlayer.Name == "Konstantinos Mavropanos" ? <Image source={require('../assets/images/players/konstantinosMavropanos.jpg')} style={styles.playerImage}></Image>
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

  playerDescription: {
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 3,
  },

  forwardHeader:{
    
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 250,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  midfielderHeader:{
    
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 220,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  defenderHeader:{
    
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 232,
    marginVertical: 5,
    marginHorizontal: 5,
  },

  goalkeeperHeader:{
    
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 202,
    marginVertical: 5,
    marginHorizontal: 5,
  },

  onloanHeader:{
    
    backgroundColor: '#FF0000',
    fontSize: 30,
    padding: 20,
    paddingRight: 256,
    marginVertical: 5,
    marginHorizontal: 5,
  },

  playerImage:{
    width: 90, //90
    height: 90, //90
    position: 'absolute',
    top: -85, //-85
    left: 310, //250
    
  }
});
