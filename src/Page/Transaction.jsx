import {View} from 'react-native'
import AppBar from '../Components/AppBar';
const Transaction = ({navigation}) => {
    return(
        <View style={{flex: 1}}>
            <AppBar navigation={navigation} title={'Transactions'}/>
        </View>
    );
}
export default Transaction;