import Nav from '../Components/Navbar';
import {View, ScrollView} from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View>
      <Nav navigation={navigation} />
      <ScrollView></ScrollView>
    </View>
  );
};

export default Main;





