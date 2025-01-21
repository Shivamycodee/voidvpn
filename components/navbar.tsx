import { XStack } from "tamagui";
import { Main } from "@/tamagui.config";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { TouchableOpacity } from "react-native";


export default function Navbar(){

    function handleThemeChange(){

        // alert('theme changed.')

    }


    return (
        <XStack width={'100%'} top={'12%'}  justifyContent="flex-end">
            {/* <MaterialIcons name="dark-mode" size={24} color="white" /> */}
            <TouchableOpacity onPress={handleThemeChange} >
            <Entypo name="light-up" size={24} color="white" />
            </TouchableOpacity>
        </XStack>
    )

}