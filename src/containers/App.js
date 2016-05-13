
import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} = React;
import TabBarItemIOS from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux'
import Search from '../components/Search';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Results from '../components/Results';
import favoritesTab from '../assets/images/TabBar-Favorite-Icon@3x.png'
import activeFav from '../assets/images/TabBar-Favorite-Icon-Active@3x.png'
import searchTab from '../assets/images/TabBar-House-Icon@3x.png'
import activeSearch from '../assets/images/TabBar-House-Icon-Active@3x.png'

const scenes = Actions.create(
  <Scene key="root" >
<<<<<<< 1c661f4e5b019c7a1d9a97015f7b0c1f7453c2c6
    <Scene type="replace" key="Signup" initial={true} component={Signup} />
    <Scene type="replace" key="Login" direction="horizontal" component={Login} />
    <Scene type="replace" key="Favorites" component={Search}/>
    <Scene type="replace" key="Search" component={Search} />
=======
    <Scene type="push" key="Search" initial={true} direction='horizontal' component={Search} duration={100} title='Search' />
    <Scene type="push" key="SignUp"component={Signup} direction='horizontal' duration={100} title='Signup' />
    <Scene type="push" key="Results" component={Results} direction='horizontal' duration={100} title='Results'backTitle="Search" panHandlers={null}/>
    <Scene type="push" key="Login"  direction='horizontal' component={Login} title='Login'backTitle="Signup" />
>>>>>>> testing routes
  </Scene>
);


const App = () => (
 <View style={{ flex: 1 }}>
  <StatusBar
    hidden={false}
    showHideTransition="slide"
    animated={true}
  />
  <Router scenes={scenes} />
  <View style={styles.tabbar}>

    <TabBarIOS  style={{ flex:1 }}>
      <TabBarIOS.Item
      title="Favorites"
      onPress={()=> Actions.Results()}
      icon={favoritesTab}
      selectedIcon={activeFav}>
    </TabBarIOS.Item>
  </TabBarIOS >

  </View>
 </View>
)


const styles = StyleSheet.create({
  tabbar: {
    width: 375,
    height: 49,
    shadowColor: 'black',
     shadowOffset: { height: -2, width: 0 },
     shadowOpacity: 0.05,
     shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default App;
