import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ArrowRightCircleIcon, TicketIcon } from 'react-native-heroicons/solid'

const Voucher = () => {
  return (
    <TouchableOpacity className="mx-auto px-3 mt-8 w-[90%] py-[16px] rounded-2xl border-2 border-gray-300 flex flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-center space-x-2">
        <TicketIcon color="#FF8400" size={35} />
        <Text className="font-semibold text-gray-800">3 promos are available!</Text>
        </View>

        <ArrowRightCircleIcon color="#D2001A" size={35} />
        
    </TouchableOpacity>
  )
}

export default Voucher