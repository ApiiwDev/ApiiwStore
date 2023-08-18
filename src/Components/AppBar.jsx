import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
const AppBar = ({title, navigation}) => {
    return(
        <View style={BarStyle.appBar}>
        <TouchableOpacity
          style={BarStyle.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Back</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          {title}
        </Text>
      </View>
    );
}
const BarStyle = StyleSheet.create({
    appBar: {
        width: '100%',
        height: 70,
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        position: 'relative',
        elevation: 10,
      },
      backButton: {
        width: 49,
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        left: 10,
      },
});

export default AppBar;