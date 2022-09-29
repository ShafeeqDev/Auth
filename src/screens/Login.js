import {StyleSheet, View, StatusBar, SafeAreaView, Linking} from 'react-native';
import {
  Pressable,
  Input,
  Stack,
  Box,
  Center,
  Button,
  Image,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  Divider,
  Modal,
  FormControl,
} from 'native-base';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Lock, Mail, Key, User, Eye, EyeOff} from 'react-native-feather';
import * as Animatable from 'react-native-animatable';
import {colors} from '../assets/colors/colors';
// import AppLink from 'react-native-app-link';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/Action/authActions';

export const Login = ({navigation}) => {
 const dispatch = useDispatch()
  const [data, setData] = useState({
    Email: null,
    password: null,

    isValidEmail: true,
    isInValidPassword: false,
  });

  const [show, setShow] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  // const Auth = useSelector(state => state.auth.isAuthenticated)
  
  const isValidEmail = emial => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('REGIX: ' + emial);
    return re.test(emial);
  };
  const validatePassord = text => {
    if (text.trim().length >= 7) {
      setData({
        ...data,
        isInValidPassword: false,
        password: text,
      });
    } else {
      setData({
        ...data,
        isInValidPassword: true,
      });
    }
  };
  const handeSubmit = () => {
    console.log('Pressed',data.Email,data.password);
    if((data.Email === null || data.Email === undefined ) && (data.password === null || data.password === undefined) ){

        setData(
        {
          ...data,
          isValidEmail : false,
          isInValidPassword: true,
        }
        )
    }
    else if(data.Email === null ||data.Email === undefined){

      setData(
      {
        ...data,
        isValidEmail : false,
      }
      )
  }
  else if(data.password === null || data.password === undefined){

    setData(
    {
      ...data,
      isInValidPassword: true,
    }
    )}
    else{
      dispatch(login(data.Email,data.password,'2371204730157'))
      
      // console.log('+++++++++++++++++++++++++++',data.Email,data.password)

    }
  }
  return (
    <>
      <SafeAreaView style={styles.AreaView}>
        <Stack bg={colors.mainColor} flex={1}>
          <Animatable.View
            animation="bounceIn"
            duration={3000}
            delay={1000}
            style={{}}>
            <Flex
              style={styles.border}
              height={hp('30%')}
              borderColor="white"
              justify="center"
              align="center">
              <Image
                source={require('../assets/images/Geysital.png')}
                alt="Alternate Text"
                size={['xl', '2xl']}
              />

              <Text fontSize={['2xl', '4xl']} color="white" bold>
                Geysital{' '}
              </Text>
            </Flex>
          </Animatable.View>

          <Animatable.View
            animation="fadeInUpBig"
            duration={2500}
            iterationDelay={1}
            style={{
              flex: 1,
            }}>
            <Stack flex={1} bg="#ffffff" p="4%" borderTopRightRadius={70}>
              <Stack style={styles.border} space={8} w={'100%'}>
                <Text bold color={colors.mainColor} fontSize={['3xl', '5xl']}>
                  Login
                </Text>

                <Stack space={[4, 12]}>
                  <HStack space={2}>
                    <Box flexDirection="row" alignItems="flex-end">
                      <Mail stroke="black" fill="#fff" width={25} height={25} />
                    </Box>

                    <Input
                 
                      variant="underlined"
                      placeholder="Email"
                      w="90%"
                      onChangeText={t =>
                        t !== null && isValidEmail(t)
                          ? setData({
                              ...data,
                              isValidEmail: true,
                              Email: t,
                            })
                          : setData({ isValidEmail: false })
                      
                      }
                    />
                  </HStack>

                  {data.isValidEmail === false ? (
                    <Text color={'#FF0000'}>Invalid Email !!!</Text>
                  ) : null}

                  <HStack space={2}>
                    <Box flexDirection="row" alignItems="flex-end">
                      <Lock stroke="black" fill="#fff" width={25} height={25} />
                    </Box>

                    <Input
                      type={show ? 'password' : 'text'}
                      variant="underlined"
                      placeholder="Password"
                      w="90%"
                      onChangeText={text => validatePassord(text)}
                      InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                          <Icon
                            as={
                              show ? (
                                <EyeOff
                                  stroke="black"
                                  fill="#fff"
                                  width={20}
                                  height={20}
                                />
                              ) : (
                                <Eye
                                  stroke="black"
                                  fill="#fff"
                                  width={20}
                                  height={20}
                                />
                              )
                            }
                          />
                        </Pressable>
                      }
                    />
                  </HStack>
                  {data.isInValidPassword ? (
                    <Text color={'#FF0000'}>InValid password</Text>
                  ) : null}
                </Stack>
              </Stack>

              <Stack space={2}>
                <HStack justifyContent="flex-end">
                  <Text
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                    italic
                    bold
                    fontSize={['sm', 'xl']}
                    color={colors.textColor1}
                    mt={['2%', '4%']}>
                    Forgot Password?
                  </Text>
                </HStack>

                <Stack
                  space={[3, 10]}
                  style={styles.border}
                  justifyContent="space-between">
                  <Button
                    onPress={() => handeSubmit()}
                    mx="3"
                    mt={['1%', '3%']}
                    colorScheme="darkBlue">
                    LogIn
                  </Button>

                  <Center>
                    <Text
                      italic
                      bold
                      color={colors.mainColor}
                      fontSize={['md', '2xl']}>
                      OR
                    </Text>
                  </Center>
                  <Center>
                    <Text
                      onPress={() => navigation.navigate('Signup')}
                      color={colors.mainColor}
                      bold
                      fontSize={['md', '2xl']}>
                      New to Geysital?{' '}
                      <Text fontSize={['md', '2xl']} color={colors.textColor1}>
                        Register
                      </Text>
                    </Text>
                  </Center>
                </Stack>
              </Stack>
              <Flex flex={1} justify="flex-end" align="center">
                <Box borderColor="white" style={styles.border}>
                  <Text color={colors.mainColor} bold fontSize={['md', '2xl']}>
                    FAQs and Operations Guide{' '}
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Animatable.View>
        </Stack>
      </SafeAreaView>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        justifyContent="center"
        size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Forgot Password?</Modal.Header>
          <Modal.Body>
            Enter email and we'll send a new passsword to your email .
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              colorScheme="darkBlue"
              onPress={() => {
                setModalVisible(false);
              }}>
              Proceed
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  AreaView: {
    flex: 1,
  },
  container: {
    flex: 1,

    // borderWidth: 1,
    // borderColor: 'red',
    padding: 15,
  },
  GeysitalLogo: {
    width: 100,
    height: 100,
  },
  border: {
    // borderWidth: 1,
  },
});
