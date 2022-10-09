import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native'

interface CheckboxProps {
    isChecked: boolean,
    onPress: () => void
}

export default function Checkbox(props: CheckboxProps) {
    const {isChecked, onPress} = props;
    const checked = isChecked ? 'checkbox-marked-outline' : 'checkbox-blank-outline';
    return (
        <Pressable onPress={onPress}>
            <MaterialCommunityIcons name={checked} size={24} color="black" />
        </Pressable>
    )
}

// export default Checkbox