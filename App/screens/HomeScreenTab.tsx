import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import {EnterButton} from '../components/EnterButton';
import { Component } from 'react';

import {FlatList} from 'react-native';
import {getNews} from '../components/News';
import Article from '../components/Article'
import { Colors } from 'react-native/Libraries/NewAppScreen';

// export default function HomeScreenTab() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,0,0,0.1)" />
      
//       {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
      
//     </View>
//   );
// }

export default class HomeScreenTab extends Component{
  constructor(props:any){
    super(props);
    this.state = {articles : [], refreshing: true};
    this.fetchNews = this.fetchNews.bind(this);
  }

  componentDidMount(){
    this.fetchNews();
  }

  fetchNews(){
    getNews()
      .then(articles => this.setState({articles, refreshing: false}))
      .catch(() => this.setState({refreshing: false}));
  }

  handleRefresh(){
    this.setState({
      refreshing: true
    },
    () => this.fetchNews()
    );
  }

  render(){
    return(
      
      <FlatList

      data={this.state.articles} 
      renderItem={({item}) => <Article article={item}></Article>}
       keyExtractor={item => item.url} 
       refreshing={this.state.refreshing}
       onRefresh={this.handleRefresh.bind(this)}>
         
        
       </FlatList>
       
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
