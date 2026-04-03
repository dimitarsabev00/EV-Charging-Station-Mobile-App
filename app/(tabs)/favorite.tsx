import PlaceItem from "@/components/HomeTabScreen/PlaceItem";
import Colors from "@/constants/Colors";
import { app } from "@/services/firebaseConfig";
import { useUser } from "@clerk/clerk-expo";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const FavoriteTab = () => {
  const db = getFirestore(app);
  const { user } = useUser();
  const [favList, setFavList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    user && getFav();
  }, [user]);

  /**
   * Get All Fav List list of places from firebase
   */

  const getFav = async () => {
    setLoading(true);
    setFavList([]);
    const q = query(
      collection(db, "ev-fav-place"),
      where("email", "==", user?.primaryEmailAddress?.emailAddress),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setFavList((favList) => [...favList, doc.data()]);
      setLoading(false);
    });
  };
  return (
    <View>
      <Text
        style={{
          padding: 10,
          fontFamily: "outfit-medium",
          fontSize: 30,
        }}
      >
        My Favorite
        <Text style={{ color: Colors.PRIMARY }}> Place</Text>
      </Text>
      {!favList ? (
        <View
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
          <Text style={{ fontFamily: "outfit", marginTop: 5 }}>Loading...</Text>
        </View>
      ) : null}

      <FlatList
        data={favList}
        onRefresh={() => getFav()}
        refreshing={loading}
        style={{ paddingBottom: 200 }}
        renderItem={({ item, index }) => (
          <PlaceItem
            place={item.place}
            isFav={true}
            markedFav={() => getFav()}
          />
        )}
      />
      <View style={{ marginBottom: 200, height: 200 }}></View>
    </View>
  );
};

export default FavoriteTab;
