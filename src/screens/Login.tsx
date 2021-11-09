import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
import { onLogin } from '../redux/actions/userAction';
import { ApplicationState } from '../redux/reducers';
import { useNavigation } from '../utils/useNavigation';
import Home from './Home';


const screens: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {user, error} = useSelector((state: ApplicationState) => state.userReducer);
    const { token } = user;
    const {navigate} = useNavigation();

    const onTapLogin = () => {
        dispatch(onLogin(email, password))
    };

    useEffect(() => {
        if(token !== undefined) {
            // navigate to Profile or Home page
            navigate('Home');
        } else {
          // do nothing
        }
        
        // console.log('Recieved User Data' + token)
    }, [user]);

  return <KeyboardAvoidingView style={styles.container}>
      <View style={styles.navigation}></View>
      <View style={styles.body}>
          <View style={styles.loginView}>
           <TextField placeholder="Email ID" onTextChange ={setEmail} />
           <TextField placeholder="Password" onTextChange={setPassword} isSecure={true} />
           <Button title="Login" onTap={onTapLogin} />
           {token !== undefined && (
               <Text style={{marginLeft: 20, marginRight: 20}}>
                   {JSON.stringify(user)}
               </Text>
           )}
      </View>
      </View>
      <View style={styles.footer}></View>
  </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    navigation: {
        flex: 2,
        backgroundColor: '#cecece',
    },
    body: {
        flex:9,
    },
    loginView: {
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        height: 400,
    },
    footer: {
        flex: 1,
        backgroundColor: '#cecece',
        top: 700,
        height: 100,
    }
})

export default screens;
