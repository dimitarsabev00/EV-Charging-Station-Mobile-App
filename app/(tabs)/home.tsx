import Header from "@/components/HomeTabScreen/Header";
import { StyleSheet, View } from "react-native";
import AppMapView from "../../components/HomeTabScreen/AppMapView";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 60,
    width: "100%",
    paddingHorizontal: 20,
  },
});
