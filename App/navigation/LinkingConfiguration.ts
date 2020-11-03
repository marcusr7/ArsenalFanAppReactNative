import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              HomeScreenTab: 'news',
            },
          },
          TabTwo: {
            screens: {
              PlayersScreenTab: 'players',
            },
          },
          TabThree: {
            screen: {
              ResultsScreenTab: 'results',
            },
          },
          TabFour: {
            screen: {
              FixturesScreenTab: 'fixtures',
            },
          },
          TabFive: {
            screen: {
              SeasonDetailsScreenTab: 'season-details',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
