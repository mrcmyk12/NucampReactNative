import React, { Component } from "react";
import Directory from "./DirectoryComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import CampsiteInfo from "./CampsiteInfoComponent";
import { View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createDrawNavigator } from "react-navigation";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { createDrawerNavigator } from "react-navigation-drawer";

const DirectoryNavigator = createStackNavigator(
	{
		Directory: { screen: Directory },
		CampsiteInfo: { screen: CampsiteInfo },
	},
	{
		initialRouteName: "Directory",
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#5637DD",
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff",
			},
		},
	}
);

const HomeNavigtor = createStackNavigator(
	{
		Home: { screen: Home },
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#5637DD",
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff",
			},
		},
	}
);

const AboutNavigtor = createStackNavigator(
	{
		About: { screen: About },
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#5637DD",
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff",
			},
		},
	}
);

const ContactNavigator = createStackNavigator(
	{
		Contact: { screen: Contact },
	},
	{
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: "#5637DD",
			},
			headerTintColor: "#fff",
			headerTitleStyle: {
				color: "#fff",
			},
		},
	}
);

const MainNavigator = createDrawerNavigator(
	{
		Home: { screen: HomeNavigtor },
		Directory: { screen: DirectoryNavigator },
		About: { screen: AboutNavigtor },
		Contact: { screen: ContactNavigator },
	},
	{
		drawerBackgroundColor: "#cec8ff",
	}
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					paddingTop:
						Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
				}}>
				<AppNavigator />
			</View>
		);
	}
}

export default Main;
