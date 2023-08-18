import {View, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native';
import AppBar from '../Components/AppBar';
const Mail = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <AppBar title={'Mails'} navigation={navigation}/>
      <ScrollView style={MailStyle.listMail} contentContainerStyle={{ paddingBottom: 15 }}></ScrollView>
    </View>
  );
};
const MailStyle = StyleSheet.create({
  listMail: {
    width: '100%',
    height: 60,
    maxHeight: 665,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#4E3636',
  },
});
export default Mail;
