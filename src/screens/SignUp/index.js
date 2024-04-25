import React from 'react'
import styles from '../../constants/styleSignUp'
import { SafeAreaView,TextInput,Text,View } from 'react-native'

export default function SignUp() {

    return (
        <SafeAreaView>
            <TextInput style={styles.emailInput} placeholder=" UserName" keyboardType="Name">
                </TextInput>
            <TextInput style={styles.emailInput} placeholder=" E-mail" keyboardType="email-address">
                </TextInput>
                <TextInput style={styles.senhaInput} placeholder=" Password" secureTextEntry={true}>
                </TextInput>
        </SafeAreaView>
    )
}