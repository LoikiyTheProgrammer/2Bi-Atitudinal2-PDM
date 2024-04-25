import React from 'react'
import styles from '../../constants/styleSignIn'
import { SafeAreaView, View, Text, Image, TextInput, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation()

    return (
        <SafeAreaView  style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerImageBox}>
                    <Image style={styles.headerImage} source={require('../../assets/logoFoda.png')}/>
                </View>
            </View>

            <View style={styles.mainContent}>
                <Text style={styles.titleSignIn}>Login to your Account</Text>
                <br></br>
                <TextInput style={styles.Input} placeholder=" E-mail" keyboardType="email-address">
                </TextInput>
                <br></br>
                <TextInput style={styles.Input} placeholder=" Password" secureTextEntry={true}>
                </TextInput>
                <br></br>
                <Pressable style={styles.navButton} onPress={ () => navigation.navigate('SignUp')}>
                    <Text style={styles.navButtonText}>SignIn</Text>
                </Pressable>
                <br></br>
                <br></br>
                <Text>-Or sing in with-</Text>
                <View style={styles.galleryImageLine}>
                    <View style={styles.galleryImageBox1}>
                        <Image style={styles.galleryImage} source={require('../../assets/logoFoda.png')}/>
                    </View>

                    <View style={styles.galleryImageBox2}>
                        <Image style={styles.galleryImage} source={require('../../assets/logoFoda.png')}/>
                    </View>

                    <View style={styles.galleryImageBox3}>
                        <Image style={styles.galleryImage} source={require('../../assets/logoFoda.png')}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}