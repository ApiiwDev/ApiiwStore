import {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import EnvLogo from '../Image/Envelope.png';
import ChartLogo from '../Image/chart.png';
import BarLogo from '../Image/bars.png';
import BellLogo from '../Image/bell.png';
import ProfileLogo from '../Image/profile.png';
import SettingLogo from '../Image/settings.png';
import TransactionLogo from '../Image/transaksi.png';

const Nav = ({navigation}) => {
  const [value, setValue] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const EnterEnvelope = () => {
    navigation.navigate('Mail');
  };
  const EnterChart = () => {
    navigation.navigate('Chart');
  };
  const EnterMenu = () => {
    setShowMenu(!showMenu);
  };

  const HandleSearch = () => {
    navigation.navigate('Search', { searchTerm: value });
  };

  return (
    <View style={NavStyle.nav}>
      <View style={NavStyle.search}>
        <TextInput
          placeholder="🔎 Cari di ApiiwStore"
          value={value}
          onChangeText={e => setValue(e)}
          onSubmitEditing={HandleSearch}
          placeholderTextColor={'white'}
          style={{color: 'white'}}
        />
      </View>
      <View style={NavStyle.menu}>
        <TouchableOpacity style={NavStyle.button} onPress={EnterEnvelope}>
          <Image source={EnvLogo} style={{width: 25, height: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={NavStyle.button} onPress={EnterChart}>
          <Image source={ChartLogo} style={{width: 25, height: 25}} />
        </TouchableOpacity>
        <TouchableOpacity style={NavStyle.button} onPress={EnterMenu}>
          <Image source={BarLogo} style={{width: 35, height: 35}} />
        </TouchableOpacity>
      </View>
      {showMenu ? <Menu navigation={navigation} func={setShowMenu}/> : ''}
    </View>
  );
};
const Menu = ({navigation, func}) => {
  const EnterNotif = () => {
    navigation.navigate('Notification');
    func(false);
  };
  const EnterTransaction = () => {
    navigation.navigate('Transaction');
    func(false);
  };
  const EnterSettings = () => {
    navigation.navigate('Settings');
    func(false);
  };
  const EnterProfile = () => {
    navigation.navigate('Profile');
    func(false);
  };
  return (
    <View style={NavStyle.style}>
      <TouchableOpacity style={NavStyle.buttonMenu} onPress={EnterNotif}>
        <Image source={BellLogo} style={{width: 25, height: 25}} />
        <Text style={{color: 'white', fontWeight: 'bold'}}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={NavStyle.buttonMenu} onPress={EnterTransaction}>
        <Image source={TransactionLogo} style={{width: 25, height: 25}} />
        <Text style={{color: 'white', fontWeight: 'bold'}}>Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={NavStyle.buttonMenu} onPress={EnterSettings}>
        <Image source={SettingLogo} style={{width: 25, height: 25}} />
        <Text style={{color: 'white', fontWeight: 'bold'}}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={NavStyle.buttonMenu} onPress={EnterProfile}>
        <Image source={ProfileLogo} style={{width: 25, height: 25}} />
        <Text style={{color: 'white', fontWeight: 'bold'}}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
const NavStyle = StyleSheet.create({
  nav: {
    backgroundColor: 'black',
    width: '100%',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 5,
  },
  search: {
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
    width: 150,
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
  },
  buttonMenu: {
    width: '90%',
    height: 35,
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  style: {
    width: 150,
    height: 170,
    backgroundColor: 'black',
    position: 'absolute',
    right: 0,
    top: 80,
    elevation: 10,
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    padding: 5,
    gap: 3,
  },
});
export default Nav;
