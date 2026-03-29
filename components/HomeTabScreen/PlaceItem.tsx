import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import GlobalApi from "../../services/GlobalApi";

import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function PlaceItem({ place }) {
  const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/";

  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        margin: 5,
        borderRadius: 10,
        width: Dimensions.get("screen").width * 0.9,
        marginHorizontal: 20,
      }}
    >
      <LinearGradient colors={["transparent", "#ffffffff", "#ffffff"]}>
        <Image
          source={
            place?.photos
              ? {
                  uri:
                    PLACE_PHOTO_BASE_URL +
                    place?.photos[0]?.name +
                    "/media?key=" +
                    GlobalApi.GOOGLE_API_KEY +
                    "&maxHeightPx=800&maxWidthPx=1200",
                }
              : require("../../assets/images/ev-charging.png")
          }
          style={{
            width: "100%",
            borderRadius: 10,
            height: 140,
            zIndex: -1,
          }}
        />
        <View style={{ padding: 15 }}>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 23,
              fontFamily: "outfit-medium",
            }}
          >
            {place.displayName?.text}
          </Text>
          <Text
            style={{
              color: Colors.GRAY,
              fontFamily: "outfit",
            }}
          >
            {place?.shortFormattedAddress}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 15,
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.GRAY,
                  fontSize: 17,
                }}
              >
                Connectors
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                {place?.evChargeOptions?.connectorCount} Points
              </Text>
            </View>
            <Pressable
              onPress={() => {}}
              style={{
                padding: 12,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 6,
                paddingHorizontal: 14,
              }}
            >
              <FontAwesome name="location-arrow" size={25} color="white" />
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
