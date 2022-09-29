import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {
  Lock,
  Mail,
  Phone,
  Plus,
  Home,
  Database,
  User,
  Eye,
  EyeOff,
  Settings,
} from 'react-native-feather';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
const GensetHome = () => {
  const _renderIcon = (routeName, selectedTab) => {

    switch (routeName) {
      case 'Monitering':
        return (<>
          <Home
            // name={icon}
            size={25}
            color={routeName === selectedTab ? 'blue' : 'gray'}
          />
         <Text>
          Monitering
         </Text>
          </>
    
        );
        break;
      case 'Setting':
        return (<>
          <Settings
            // name={icon}
            size={25}
            color={routeName === selectedTab ? 'blue' : 'gray'}
          />
         <Text>
         Settings
         </Text>
          </>
    
        );
        break;
    }

    
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        strokeWidth={0.5}
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="Home"
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={() => Alert.alert('Click Action')}>
            < Plus
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          options={{headerShown: false}}
          name="Monitering"
          position="LEFT"
          component={() => (
            // <View style={{backgroundColor: '#BFEFFF', flex: 1}} />
            <></>
          )}
        />
        <CurvedBottomBar.Screen
          options={{headerShown: false}}
          name="Setting"
          component={() => (
            // <View style={{backgroundColor: '#FFEBCD', flex: 1}} />
          <></>
            )}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};
export default GensetHome;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
