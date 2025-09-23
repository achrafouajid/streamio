import { useLocalSearchParams, useRouter } from "expo-router";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

  interface MovieInfoProps {
    label: string;
    value?: string | number | null;
  }
  
  const MovieInfo = ({ label, value }: MovieInfoProps) => (
    <View className="flex-col items-start justify-center mt-5">
      <Text className="text-light-200 font-normal text-sm">{label}</Text>
      <Text className="text-light-100 font-bold text-sm mt-2">
        {value || "N/A"}
      </Text>
    </View>
  );
  
  const Details = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams();
  
  
    return (
      <View className="bg-primary flex-1">
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          <View>
          <Text>Details : {id}</Text>
  
            <TouchableOpacity className="absolute bottom-5 right-5 rounded-full size-14 bg-white flex items-center justify-center">
            
            </TouchableOpacity>
          </View>
  
          <View className="flex-col items-start justify-center mt-5 px-5">
            <View className="flex-row items-center gap-x-1 mt-2">
            
            </View>
  
            <View className="flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
  
              <Text className="text-white font-bold text-sm">
              </Text>
  
              <Text className="text-light-200 text-sm">
              </Text>
            </View>
  
  
            <View className="flex flex-row justify-between w-1/2">
            
           
            </View>
  
            
          </View>
        </ScrollView>
  
        <TouchableOpacity
          className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50"
          onPress={router.back}
        >
        
          <Text className="text-white font-semibold text-base">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Details;