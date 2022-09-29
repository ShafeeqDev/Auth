import React, {useEffect} from 'react';
import { View ,StyleSheet,ActivityIndicator,Text ,Pressable} from 'react-native';
import { loadUser } from '../../store/Action/authActions';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';
const SplashScreen = ({navigation}) => {
const dispatch = useDispatch()
  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    let userToken = await AsyncStorage.getItem('userToken');
    console.log('++++++++++++++++++++++TOKEN 13 IN SplACE sCREEN',userToken);
    if (userToken) {
      await dispatch(loadUser(userToken));
      navigation.navigate('APP');
    } else {
      navigation.navigate('Auth');
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    }
  

  return (
    <>
      <View style={styles.container}>
        <View>
          <ActivityIndicator color={'red'} />
        </View>
      </View>
  
    </>
  );
};

export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
