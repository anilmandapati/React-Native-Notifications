import React from 'react';
import {
 Text,
 View,
 Button,
} from 'react-native';
import { pushNotifications } from './services';

const AppContainer = () => {
 const handleOnPress = () => {
//    alert('Hello');  
   console.log('notifications');
   setTimeout(() => {
    pushNotifications.localNotification();
   }, 600);
 };

 return (
   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text>
       Press the button to see push Notification
     </Text>
     <Button
       title={'Press Me'}
       onPress={handleOnPress}/>
   </View>
 );
};

export default AppContainer;