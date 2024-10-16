import { View , Text} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () =>{
    return(
        <SafeAreaView className={'items-center'}>
            <Text>Hello world!</Text>
        </SafeAreaView>
    )
}

export default Home;