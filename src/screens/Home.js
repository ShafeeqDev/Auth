import { StyleSheet, View, StatusBar, SafeAreaView, Linking } from 'react-native'
import { Pressable, Input, Stack, Box, Center, Button, Image, Text, HStack, VStack, Flex, Icon, Divider, Modal, FormControl,Skeleton } from "native-base";
import React, { useState } from 'react';
import { Lock, Mail, Key, User, Eye, EyeOff } from 'react-native-feather';
import * as Animatable from 'react-native-animatable';
import { colors } from '../assets/colors/colors';

const Home = () => {
  return (
    <>
     <Center w="100%">
      <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }} p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton startColor="amber.300" />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </HStack>
        </VStack>
      </HStack>
    </Center>
     <Center w="100%">
      <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }} p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton startColor="amber.300" />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </HStack>
        </VStack>
      </HStack>
    </Center> 
    <Center w="100%">
      <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }} p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton startColor="amber.300" />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </HStack>
        </VStack>
      </HStack>
    </Center>
    <Center w="100%">
      <HStack w="90%" maxW="400" borderWidth="1" space={8} rounded="md" _dark={{
      borderColor: "coolGray.500"
    }} _light={{
      borderColor: "coolGray.200"
    }} p="4">
        <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
        <VStack flex="3" space="4">
          <Skeleton startColor="amber.300" />
          <Skeleton.Text />
          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
          </HStack>
        </VStack>
      </HStack>
    </Center>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})