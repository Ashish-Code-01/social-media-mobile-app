import { View, Text } from 'react-native'
import React from 'react'

const searchUserPreview = ({ userId, name, avatar }) => {
    return (
        <View style={{ width: "90%", padding: 20, marginTop: "20" }}>
            <img src={avatar} alt="user logo" />
            <Text style={{ color: "white" }}>{name}</Text>
        </View>
    )
}