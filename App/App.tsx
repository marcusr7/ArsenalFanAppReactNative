import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {FlatList} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import HomeScreenTab from './screens/HomeScreenTab';

import {getNews} from './components/News';
import Article from './components/Article';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// export default class App extends Component{
//   constructor(props:any){
//     super(props);
//     this.state = {articles : [], refreshing: true};
//     this.fetchNews = this.fetchNews.bind(this);
//   }

//   componentDidMount(){
//     this.fetchNews();
//   }

//   fetchNews(){
//     getNews()
//       .then(articles => this.setState({any: articles, refreshing: false}))
//       .catch(() => this.setState({refreshing: false}));
//   }

//   handleRefresh(){
//     this.setState({
//       refreshing: true
//     },
//     () => this.fetchNews()
//     );
//   }

//   render(){
//     return(
//       <FlatList

//       data={this.state.articles} 
//       renderItem={({item}) => <Article article={item}></Article>}
//        keyExtractor={item => item.url} 
//        refreshing={this.state.refreshing}
//        onRefresh={this.handleRefresh.bind(this)}>
        
//        </FlatList>
//     )
//   }
// }
