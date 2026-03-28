import { useUser } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Redirect, useRootNavigationState } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const { user } = useUser();

  // Use `useFonts` only if you can't use the config plugin.
  const [loaded, error] = useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    checkNavLoader();
  }, []);

  const checkNavLoader = () => {
    if (!useRootNavigationState.key) return null;
  };

  if (!loaded && !error) {
    return null;
  }

  return (
    <View>
      {!user ? (
        <Redirect href={"/login"} />
      ) : (
        <Redirect href={"/(tabs)/home"} />
      )}
    </View>
  );
}
