import { View , Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () =>{
    return(
        <SafeAreaView className={'items-center'}>
            <Text>Hello from index</Text>
        </SafeAreaView>
    )
}

export default Home;