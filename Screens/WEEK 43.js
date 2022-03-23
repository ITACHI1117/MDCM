import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK43 = ({navigation}) => {
  const { colors } = useTheme();
        return ( 
              <ScrollView>
        <View style={{
          
    
          
    
          
        }}><Text 
           
           
        style={{color: colors.text,
          fontSize: 40,
          flex: 0.6,
          justifyContent: 'center',
          marginTop: "0%",
          marginLeft: '5%',
          marginRight: '5%',
          fontWeight: 'bold',}}>{"\n"}
           BIBLE PASSAGE: Eph. 2:4-9{"\n"}
           MEMORY VERSE: Gal 2:21{"\n"}</Text>
           </View>
           
         <View style={{

    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME{"\n"}{"\n"}
        THE DESCRIPTION OF GRACE{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: The doctrine of grace is the center piece of our faith and Christians. It is by the grace of God that we are what we are, i.e. – Christians (Cor. 15:10) it is grace that has declared us righteous before God Almighty not our works (Titus 3:7, Eph. 2:8-9) our Lord Jesus came and fulfilled all the law and enacted a new order, called GRACE (1 John 11:17). May the Holy Spirit give us understanding as we study this very important doctrine?{"\n"}{"\n"}
        2: The following has been attracted to believer through Christ{"\n"}{"\n"}
  - We are saved by grace Eph. 2:5{"\n"}{"\n"}
  - We are quickened because of grace Eph. 2:5{"\n"}{"\n"}
  - We are raised together from dead with eer Eph. 2:5{"\n"}{"\n"}
  - We are made to sit him heavenly place by grace Eph. 2:8{"\n"}{"\n"}
  - We obtain Devine kindness by grace Eph. 2:7{"\n"}{"\n"}
  - We obtain the gift of God by grace Eph. 2:8{"\n"}{"\n"}
  - We become people of faith by grace Eph. 2:8{"\n"}{"\n"}
  - We are able to live good life by grace Eph. 2:10{"\n"}{"\n"}
  - We are able to fulfill God’s plan by grace Eph. 2:11{"\n"}{"\n"}
  3: How does grace come?{"\n"}{"\n"}
  -Through Jesus Christ Rom 5:8{"\n"}{"\n"}
  -Faith in Jesus Christ Rom 2:8{"\n"}{"\n"}
  -The law and work does not bring grace to us Rom 8:3{"\n"}{"\n"}
  -Grace does what the law cannot do{"\n"}{"\n"}
  4: What is grace?{"\n"}{"\n"}
  -It is the ability to be holy Rom 3:24-25{"\n"}{"\n"}
  -It is the ability to live righteously Titus 2:11-12{"\n"}{"\n"}
  -it is the ability to deny ungodliness{"\n"}{"\n"}
  -Devine grace also means favor, mercy, and kindness{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"} {"\n"}</Text>
  1: What is Grace?{"\n"}{"\n"}
  2: What is the difference between grace and law?{"\n"}{"\n"}
  3: How does grace come?
  4: Mention some ways whereby believers has been attracted through grace?</Text>    
        </View>
        <View
        style={{display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
        marginTop: '2%',
            }}>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 42')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 44')} title='Next '></Button>
             </View>
        </ScrollView>
          );
        }
        const styles = StyleSheet.create({
            title: {
              fontSize: 40,
              fontWeight: 'bold',
          
            },
            titles: {
              fontSize: 35,
              justifyContent: 'center'
            },
            bottomCenter: {
                flex: 1,
                justifyContent: 'flex-end'
          
            }
          }); 
export default WEEK43