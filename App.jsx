import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/Page/Main';
import Chart from './src/Page/Chart';
import Mail from './src/Page/Mail';
import Notification from './src/Page/Notification';
import Profile from './src/Page/Profile';
import Settings from './src/Page/Settings';
import Transaction from './src/Page/Transaction';
import Search from './src/Page/Search';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Chart'>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }}/>
        <Stack.Screen name="Chart" component={Chart} options={{ headerShown: false }}/>
        <Stack.Screen name="Mail" component={Mail} options={{ headerShown: false }}/>
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;