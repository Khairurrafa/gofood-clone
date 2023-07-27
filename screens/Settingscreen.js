import { View, Text, Pressable, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Settingscreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown : false
        })

    }, [navigation])
  return (
    <SafeAreaView>
      <Text>Settingscreen</Text>
      <Pressable onPress={()=>{navigation.navigate("userscreen")}}>
        <Text>go back</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Settingscreen