import { View, Text, Button } from 'react-native'
import React from 'react'
import analytics from '@react-native-firebase/analytics';

const App = () => {

  const predefinedFunc = async()=>{
    console.log('predefinedFunc');
    await analytics().logLogin({
      method:'facebook'
    });
  }

  const customFunc = async()=>{
    console.log('customFunc');
    await analytics().logEvent('rojkharido_react_native',{
      id:'sufhsidu_39847923',
      item:'product 1',
      description:['sports','cricket'],
      sizes:'9'
    })
  }

  return (
    <View
    style={{
      backgroundColor:'white',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }}>
      
      
    <Button title='Predefined Button' onPress={predefinedFunc} />
    <View style={{margin:16}}></View>
    <Button title='Custom Button' onPress={customFunc} />

    </View>
  )
}

export default App