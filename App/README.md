# Arsenal Fan App 2
This is almost identical to the app made for assignment 1. There are few differneces between the apps which will be mentioned below.

The app is seperated into tabs only. The main implementation of the tab bar is seen in the 'BottomTabNavigator.tsx' file. This is a different design used to design the app compared to the button design seen in assignment 1.

The app starts off with the news screen. The main implementation of this page is seen in the 'HomeScreenTab.tsx' file. The purpose of this page is to show relevant news based on the sports team that this app is based on. The news is fetched using an api called NewsAPI which fetches news articles based on specific keywords. The news seen on this screen updates from time to time.

When the user presses the Players tab icon, the user will be taken to a new screen. The user will be taken to the players page. The implementation of this page can be seen in the 'PlayersScreenTab.tsx' file. This page consists of players in the current squad of this sports team, if a player is added to the team or if a player is removed from the team, the just add/remove a document in the firebaase database under the 'players' collection as that is where all the information is stored. 

When the user presses the Results tab icon, the user will be taken to a new screen. The implementation of this screen can be seen in the 'ResultsScreenTab.tsx' file. This screen consists of results of past games, if more results are to be added, then a new document needs to be added in the firebase database under the 'fixtures' collection.  

When the user presses the fixtures tab icon, the user will be taken to the fixtures screen. The implementation for this page can be seen in the 'FixturesScreenTab.tsx' file. This screen consists of fixtures of future games, if more fixtures are to be added, then a new document is to be added into the firebase database under the 'fixtures' collection. 

When the user presses the Season details tab icon, the user will be taken to the season details screen. The implementation for this page can be seen in the 'SeasonDetailsScreen.tsx' file. The user is able to see the season progress for this sports team, specifically the overall progress of the season and the progression in each competition that this team is apart of. As the season progresses, changes are to be made to this page, these changes can be made directly into the code in the form of a value, and it is represented as a AndroidProgressBar.



SWEN325 Assignment 2