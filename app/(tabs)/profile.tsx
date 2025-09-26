import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useState } from "react";
import { Image, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleLogin = () => {
    console.log("Login with Google");
  };
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />

      <View className="flex-1 justify-center items-center gap-8 z-10">
        <View className="flex-row items-center gap-4">
          <View className="w-20 h-20 rounded-full bg-secondary justify-center items-center">
            <Image source={icons.person} className="w-10 h-10" tintColor="#fff" />
          </View>
          <View>
            <Text className="text-white text-lg font-semibold">Username</Text>
            <Text className="text-gray-400 text-sm">user@example.com</Text>
          </View>
        </View>

        <View className="w-full px-4 gap-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-base">Country</Text>
            <Text className="text-gray-400 text-base">Unknown</Text>
          </View>

          <View className="flex-row justify-between items-center">
            <Text className="text-white text-base">Enable notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              thumbColor={notificationsEnabled ? "#34D399" : "#f4f3f4"}
            />
          </View>

          <TouchableOpacity>
            <Text className="text-blue-400 text-base">Help & Support</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            className="flex-row items-center bg-white px-5 py-3 rounded-2xl mt-4 self-start"
            activeOpacity={0.8}
          >
            <Image source={icons.google} className="w-6 h-6 mr-3" />
            <Text className="text-black font-semibold">Sign in with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
