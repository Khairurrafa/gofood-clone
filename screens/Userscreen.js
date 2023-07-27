import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Userscreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown : true
      })
    }, [navigation])


  return (
    <SafeAreaView>
      <Text>Userscreen</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("settingscreen")}}>
        <Text>setting</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Userscreen