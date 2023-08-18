import {View} from 'react-native';
import AppBar from '../Components/AppBar';
import { Component } from 'react';
class Settings extends Component {
    constructor(props){
        super(props);
        this.navigation = props.navigation;
    }
  render() {
    return (
      <View style={{flex: 1}}>
        <AppBar navigation={this.navigation} title={'Settings'} />
      </View>
    );
  }
}
export default Settings;
