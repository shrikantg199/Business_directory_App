import React from "react";
import * as WebBrowser from "expo-web-browser";
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Link } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import { useNavigation } from "@react-navigation/native";
import { colors } from "@/constants/Colors";
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
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
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
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
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image
            source={require("../assets/google.png")}
            style={{ width: 26, height: 26 }}
          />
          <Text
            style={{
              color: colors.black,
              fontSize: 18,
              alignItems: "center",
              fontWeight: 700,
            }}
          >
            Sign in with Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default LogInScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginLeft: 90,
    marginTop: 320,
    alignItems: "center",
    backgroundColor: colors.white,
    borderColor: "#303134",
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 20,
  },
});
