import React, { useState } from 'react';
import { StyleSheet, FlatList, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ToDoItem from '../components/ToDoItem';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
// import { useHeaderHeight } from


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState([{
    id: '1',
    content: 'Buy milk',
    isCompleted: false
  }, {
    id: '2',
    content: 'Buy cereal',
    isCompleted: false
  }, {
    id: '3',
    content: 'Pour milk',
    isCompleted: false
  }]);

  const createNewItem = (idx: number) => {
    const newTodos = [...todos];
    newTodos.splice(idx, 0, {
      id: (idx+1).toString() ,
      content: '',
      isCompleted: false
    })
    setTodos(newTodos);
  }

  // const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      >
      <View style={styles.container}>
        <TextInput 
          value={title}
          onChangeText={setTitle}
          placeholder={'Title'}
          style={styles.title}
        />

        <FlatList 
          data={todos}
          renderItem={({ item, index }) => <ToDoItem todo={item} onSubmit={() => createNewItem(index + 1)} />}
          style={{ width: '100%' }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    // backgroundColor: 'red',
    width: '100%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
