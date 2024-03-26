import React, { useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const WriteEditor = ({title, body, onChangeTitle, onChangeBody}) => {
   const bodyRef = useRef();

   return (
      <View style={styles.block}>
         <TextInput
            placeholder="제목을 입력하세요"
            style={styles.titleInput}
            returnKIeyType="next"
            onChangeText={onChangeTitle}
            value={title}
         />
         <TextInput
            placeholder="내용을 입력하세요"
            style={styles.bodyInput}
            multiline={true}
            textAlignVertical='top'
            onChangeText={onChangeBody}
            value={body}
            onSubmitEditing={() => {bodyRef.current.focus()}}
         />
      </View>
   );
};

const styles = StyleSheet.create({
   block: {
      flex: 1,
      padding: 16,
   },
   titleInput: {
      paddingVertical: 0,
      fontSize: 18,
      marginBottom: 16,
      color: '#263238',
      fontWeight: 'bold',
   },
   bodyInput: {
      flex: 1,
      fontSize: 16,
      paddingVertical: 0,
      color: '#263238',
   },
});

export default WriteEditor;