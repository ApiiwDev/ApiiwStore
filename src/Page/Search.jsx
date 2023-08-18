import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import EnvLogo from '../Image/Envelope.png';
import ChartLogo from '../Image/chart.png';

const Search = ({navigation, route}) => {
  const { searchTerm } = route.params;
  const [value, setValue] = useState('');
  const HandleSearch = () => {
    navigation.navigate('Search', {searchTerm: value});
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.AppBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{color: 'white'}}>Back</Text>
        </TouchableOpacity>
        <View style={styles.searchInp}>
          <TextInput
            placeholder={`Hasil pencarian ${searchTerm}`}
            value={value}
            onChangeText={e => setValue(e)}
            onSubmitEditing={HandleSearch}
            placeholderTextColor={'white'}
            style={{color: 'white'}}
          />
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.button}>
            <Image source={EnvLogo} style={{width: 25, height: 25}}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={ChartLogo} style={{width: 25, height: 25}}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  AppBar: {
    width: '100%',
    height: 80,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInp: {
    backgroundColor: 'black',
    height: '50%',
    width: 200,
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 0,
    color: 'white',
    borderColor: '#57A99A',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  menu: {
    width: 'auto',
    height: '50%',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  }
});
export default Search;
