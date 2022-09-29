import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import {
  Select,
  CheckIcon,
  WarningOutlineIcon,
  FormControl,
  Pressable,
  Input,
  Stack,
  Box,
  Center,
  Button,
  ScrollView,
  Image,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  Tooltip
} from 'native-base';
import {
  Lock,
  Mail,
  Phone,
  Home,
  Database,
  User,
  Eye,
  EyeOff,
} from 'react-native-feather';
import { colors } from '../assets/colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

//Start
export const Signup = ({ navigation }) => {


  //state for input fields validation
  const [data, setData] = useState({

    // input fields
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    city: "",
    boardId: "",
    geyserId: "",

    // validation
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirmPassword: true,

    isValidPhone: true,
    isValidAddress: true,
    isValidCity: true,
    isValidBoardId: true,
    isValidGeyserId: true,

  });
  //state for both show and hide password
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  //list of cities
  const cities = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'Peshawar',
    'Quetta',
    'Multan',
    'Faisalabad',
    'Gujranwala',
    'Sialkot',
    'Rawalpindi',
    'Sargodha',
    'Bahawalpur',
    'Sahiwal',
  ];
  // console.log("********",data.isInvalidEmail)
  const validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validateNumber = Number => {
    let re = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    return re.test(Number);
  };


  const EmailCheckMethod = (Email) => {

    Email !== "" && validateEmail(Email)
      ? setData({
        ...data,
        isValidEmail:true,
        email: Email,
      })
      : setData({ isValidEmail: false })

  } 
  const registerCheck = () => {


    if (
      (data.email === "" || data.email === undefined) && (data.password === "" || data.password === undefined)
      && (data.confirmPassword === "" || data.confirmPassword === undefined) && (data.fullName === "" || data.fullName === undefined)
      && (data.phone === "" || data.phone === undefined) && (data.address === "" || data.address === undefined)
      && (data.city === "" || data.city === undefined) && (data.boardId === "" || data.boardId === undefined)
      && (data.geyserId === "" || data.geyserId === undefined)) {
      setData(
        {
          ...data,
          isValidName: false,
          isValidEmail: false,
          isValidPassword: false,
          isValidConfirmPassword: false,
          isValidPhone: false,
          isValidAddress: false,
          isValidCity: false,
          isValidBoardId: false,
          isValidGeyserId: false,

        }
      )


    }



else if(data.fullName === null || data.fullName === undefined){
  setData(
    {
      ...data,
      isValidName: false,
    }
  )
}
else if(data.email === null || data.email === undefined){
  setData(
    {
      ...data,
      isValidEmail: false,
    }
  )
}
else if(data.password === null || data.password === undefined){
  setData(
    {
      ...data,
      isValidPassword: false,
    }
  )
}
else if(data.confirmPassword === null || data.confirmPassword === undefined){
  setData(
    {
      ...data,
      isValidConfirmPassword: false,
    }
  )
}
 else if(data.phone === null || data.phone === undefined){
  setData(
    {
      ...data,
      isValidPhone: false
    }
  )
} 

   





  }


  console.log("fullName:", data.fullName)
  console.log("email:", data.email)
  console.log("password:", data.password)
  console.log("confirmPassword:", data.confirmPassword)
  console.log("phone:", data.phone)
  console.log("address:", data.address)
  console.log("city:", data.city)
  console.log("boardId:", data.boardId)
  console.log("geyserId:", data.geyserId)

  //End
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
              height={hp('25%')}
              borderColor="white"
              justify="center"
              align="center">
              <Image
                source={require('../assets/images/Geysital.png')}
                alt="Alternate Text"
                size={['lg', '2xl']}
              />

              <Text fontSize={['2xl', '4xl']} color="white" bold>
                Geysital{' '}
              </Text>
            </Flex>
          </Animatable.View>

          <Animatable.View
            animation="fadeInUpBig"
            duration={2000}
            iterationDelay={1}
            style={{
              flex: 1,
            }}>
            <Stack flex={1} bg="white" p="4%" borderTopRightRadius={70}>
              <Text bold color={colors.mainColor} fontSize="3xl">
                Register
              </Text>
              <Text bold color={colors.black} fontSize="sm">
                Fill All The Fields
              </Text>
              {/* input fields stack */}
              <VStack style={styles.border} w="100%">
                <ScrollView style={styles.border} w={'100%'} h={['60%', '70%']}>
                  <Stack w={"100%"} space={[4, 6]}>
                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <User
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        variant="underlined"
                        placeholder="Enter Full Name i.e min 2 characters"
                        w="85%"
                        onChangeText={val =>
                          val !== "" ? setData({ ...data, isValidName: true, fullName: val }) : setData({ isValidName: false })
                        }
                      />
                    </HStack>

                    <Stack  >
                      {data.isValidName === false ? (
                        <Text color={'#FF0000'}>Enter Full Name </Text>
                      ) : null}
                    </Stack>



                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Mail
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        variant="underlined"
                        type="email-address"
                        placeholder="Email"
                        w="85%"

                        onChangeText={t =>
                          EmailCheckMethod(t)
                        }
                      />
                    </HStack>
                    <Stack  >
                      {data.isValidEmail === false ? (
                        <Text color={'#FF0000'}>Enter Valid Email </Text>
                      ) : null}
                    </Stack>


                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Lock
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        type={show ? 'password' : 'text'}
                        variant="underlined"
                        placeholder="Password"
                        w="85%"

                        onChangeText={val =>

                          val.length >= 8 ? setData({ ...data, isValidPassword: true, password: val }) : setData({ isValidPassword: false })
                        }
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

                    <Stack  >
                      {data.isValidPassword === false ? (
                        <Text color={'#FF0000'}>Enter Valid Password </Text>
                      ) : null}
                    </Stack>
                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Lock
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
                      </Box>
                      <Tooltip label="Passwords Must Match" openDelay={500}>
                      <Input
                        type={show1 ? 'password' : 'text'}
                        variant="underlined"
                        placeholder="Confirm Password"
                        w="85%"

                        onChangeText={val =>

                          val.length >= 8 ? setData({ ...data, isValidConfirmPassword: true, confirmPassword: val }) : setData({ isValidConfirmPassword: false })
                        }
                        InputRightElement={
                          <Pressable onPress={() => setShow1(!show1)}>
                            <Icon
                              as={
                                show1 ? (
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
                            </Tooltip>
                    </HStack>

                    <Stack  >
                      {data.isValidConfirmPassword === false ? (
                        <Text color={'#FF0000'}>Enter Valid Password </Text>
                      ) : null}
                    </Stack>
                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Phone
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        variant="underlined"
                        placeholder="Phone No"
                        keyboardType='phone-pad'
                        w="85%"

                        onChangeText={
                          val =>val !=="" && validateNumber(val)? 
                            setData({
                              ...data,
                              isValidPhone: true,
                              phone: val,
                            })
                            : setData({ isValidPhone: false })


                        }

                      />
                    </HStack>

                    <Stack  >
                      {data.isValidPhone === false ? (
                        <Text color={'#FF0000'}>Enter Valid Number </Text>
                      ) : null}
                    </Stack>

                    <Select
                      w="100%"
                      accessibilityLabel="Choose City"
                      placeholder="Choose One City"
                      _selectedItem={{
                        bg: 'teal.600',
                        endIcon: <CheckIcon size={5}
                        />

                      }}
                      onValueChange={itemValue => setData({
                        ...data,
                        city: itemValue,
                      })}
                      mt="1">
                      {cities.map((item, index) => (
                        <Select.Item key={index} label={item} value={item}



                        />
                      ))

                      }
                    </Select>

                    <Stack  >
                      {data.isValidCity === false ? (
                        <Text color={'#FF0000'}>Please make a selection </Text>
                      ) : null}
                    </Stack>


                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Home
                          stroke="black"
                          fill="#fff"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        variant="underlined"
                        placeholder="Address"
                        w="85%"
                        onChangeText={val =>
                          val !== null ? setData({ ...data, isValidAddress: true, address: val }) : setData({ isValidAddress: false })
                        }

                      />
                    </HStack>


                    <Stack  >
                      {data.isValidAddress === false ? (
                        <Text color={'#FF0000'}>Please Add Address </Text>
                      ) : null}
                    </Stack>

                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Database
                          stroke="black"
                          fill="#0000"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        variant="underlined"
                        placeholder="Board-Id"
                        w="85%"
                        onChangeText={
                          val =>
                            val !== null ? setData({ ...data, isValidBoardId: true, boardId: val }) : setData({ isValidBoardId: false })
                        }
                      />
                    </HStack>


                    <Stack  >
                      {data.isValidBoardId === false ? (
                        <Text color={'#FF0000'}>write proper board Id </Text>
                      ) : null}
                    </Stack>
                    <HStack space={2}>
                      <Box flexDirection="row" alignItems="flex-end">
                        <Database
                          stroke="black"
                          fill="#0000"
                          width={25}
                          height={25}
                        />
                      </Box>

                      <Input
                        variant="underlined"
                        placeholder="Geyser-Id"
                        w="85%"
                        onChangeText={val =>
                          val !== null ? setData({ ...data, isValidGeyserId: true, geyserId: val }) : setData({ isValidGeyserId: false })
                        }
                      />
                    </HStack>

                    <Stack  >
                      {data.isValidGeyserId === false ? (
                        <Text color={'#FF0000'}>write proper Geyser Id </Text>
                      ) : null}
                    </Stack>

                  </Stack>
                </ScrollView>
              </VStack>

              <VStack space={2}>
                <HStack>
                  <Text fontSize={['sm', 'lg']}>
                    By signing you agree to our{' '}
                    <Text
                      italic
                      bold
                      fontSize={['xs', 'sm']}
                      color="blue.900"
                      mt={'2%'}>
                      Privacy Policy & Terms and Conditions{' '}
                    </Text>
                  </Text>
                </HStack>

                <Stack
                  space={3}
                  style={styles.border}
                  justifyContent="space-between">
                  <Button
                  isDisabled={data.password===data.confirmPassword?false:true}
                    onPress={registerCheck}

                    mx="3" colorScheme="darkBlue">
                    Continue
                  </Button>
                </Stack>
              </VStack>


              <Flex flex={1} justify="flex-end" align="center">
                <Box borderColor="white" style={styles.border}>
                  <Text
                    onPress={() => navigation.navigate('Login')}
                    color="blueGray.900"
                    bold
                    fontSize={['md', 'lg']}>
                    Already a User?
                    <Text fontSize={['md', 'lg']} color="blue.900">
                      {""} Login
                    </Text>
                  </Text>



                </Box>
              </Flex>
            </Stack>
          </Animatable.View>
        </Stack>
      </SafeAreaView>
    </>
  )

}

const styles = StyleSheet.create({
  AreaView: {
    flex: 1,
  },

  GeysitalLogo: {
    width: 100,
    height: 100,
  },
  border: {
    // borderWidth: 1,
  },
});