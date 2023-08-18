import {View} from 'react-native'
import AppBar from '../Components/AppBar';
const Notification = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <AppBar navigation={navigation} title={'Notifications'}/>
        </View>
    );
}
export default Notification