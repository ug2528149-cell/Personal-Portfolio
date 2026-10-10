import type { NavigatorScreenParams } from "@react-navigation/native";

export type TabParamList = {
  Home: undefined;
  Skills: undefined;
  Projects: undefined;
  EditProfile: undefined;
  About: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabParamList> | undefined;
  ProjectDetails: { projectId: string };
};