import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@/constants/Colors";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LogInScreen = () => {
  const navigation = useNavigation();
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/home", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/screenshot.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              color: colors.black,
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            <Text style={{ color: colors.primary }}> Business Directory</Text>{" "}
            App
          </Text>
          <Text
            style={{
              color: colors.black,
              width: 300,
              textAlign: "center",
            }}
          >
            your ultimate resource for finding local businesses and services
            quickly and easily.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={onPress}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={styles.googleIcon}
            />
            <Text style={styles.buttonText}>Let's Get Stared</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryBackground,
    width: 400,
  },
  imageContainer: {
    marginTop: 30,
    backgroundColor: colors.black,
    borderRadius: 30,
    width: 213,
    height: 413,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 400,
    borderRadius: 20,
  },
  buttonContainer: {
    backgroundColor: colors.white,
    width: "100%",
    height: 500,
    marginTop: -20,
    alignItems: "center",
    gap: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: colors.gray,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 30,
    width: 300,
  },

  googleIcon: {
    width: 26,
    height: 26,
    marginRight: 10,
  },
  buttonText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: "500",
  },
});
