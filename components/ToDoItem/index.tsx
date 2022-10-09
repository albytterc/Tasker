import React, { useState, useEffect, useRef } from 'react';
import Checkbox from '../Checkbox';
import { View, TextInput } from 'react-native';

interface ToDoItemProps {
    todo: {
        id: string,
        content: string,
        isCompleted: boolean
    },
    onSubmit: () => void
}

export default function ToDoItem({ todo, onSubmit }: ToDoItemProps) {
    const [isChecked, setChecked] = useState(false);
    const [content, setContent] = useState("");

    const input1 = useRef<any>(null);

    useEffect(() => {
        if (!todo) return
        
        setChecked(todo.isCompleted);
        setContent(todo.content);
    }, [todo])

    useEffect(() => {
        if (input1.current) {
            input1.current.focus();
        }
    }, [input1])

    const onKeyPress = ({ nativeEvent }) => {
        console.log(nativeEvent)
        console.log(content)
        if (nativeEvent.key === 'Backspace' && content === '') {
            console.warn('Delete item')
        }
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 3 }}>
            {/* Checkbox */}
            <Checkbox 
                isChecked={isChecked} 
                onPress={() => {setChecked(!isChecked)}} />
            {/* Text input */}
            <TextInput 
                ref={input1}
                value={content}
                onChangeText={setContent}
                style={{
                    flex: 1,
                    fontSize: 18,
                    marginLeft: 12
                }}
                multiline
                onSubmitEditing={onSubmit}
                blurOnSubmit
                onKeyPress={onKeyPress}
            />
        </View>
    );
}

// export default ToDoItem