
import { StyleSheet, Text, View, SafeAreaView, Pressable, Button } from 'react-native';
import React from 'react'
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Loginscreen = () => {
    const  navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
      
    }, [navigation])
  return (
    <SafeAreaView className='bg-green-500 flex-1 items-center justify-start '>
        <Pressable title="" onPress={() => {navigation.navigate("homescreen")}} className="w-[25px] h-[25px] border-[6px] absolute border-white left-8 top-12 border-t-0 border-r-0 rotate-45">
        </Pressable>
      <View className="w-[140px] h-[140px] bg-white rounded-full rounded-br-none flex justify-center items-center rotate-45 mt-[120px]">
        <View className="w-[50px] h-[50px] bg-green-500 rotate-45 rounded-full"></View>
      </View>
      <Text className="text-white font-bold text-3xl mt-[60px]">gofood-clone</Text>
      <View className="absolute bottom-8">
        <Pressable className="bg-white px-[65px] py-3 mb-4 rounded-[50px]">
          <Text className="text-lg font-semibold">masuk</Text>
        </Pressable>
        <Pressable className="bg-white px-[65px] py-3 mb-4 rounded-[50px]">
          <Text className="text-lg font-semibold">daftar</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default Loginscreen