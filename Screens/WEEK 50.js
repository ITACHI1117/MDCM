import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK50 = ({navigation}) => {
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
          fontWeight: 'bold',}}>  {"\n"}
           BIBLE PASSAGE: Mark 16:15-20 {"\n"}
           MEMORY VERSE: 1 Corin. 9:16{"\n"}</Text>
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
        PREACHNG OF THE GOSPLE{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: Shortly after the baptism and wilderness of Jesus Christ, His early ministry started with the preaching of the gospel and ended with the commissioning of the disciples for the same assignment (Mark 1:9-14, Matt 28:18-20). Without doubt this must have been an issue top most in the heart of Jesus Christ for all generations.{"\n"}{"\n"}
          2: It is a must for all believers, Math 28:18-20. The Gospel of the lord Jesus Christ is the power of the wisdom of God 1 Cor. 1:24. It is a curse not to preach the gospel 1 Cor. 9:16. Soul wining task is eer 1 John 2:1-2{"\n"}{"\n"}
          3: The messages of the gospel are:{"\n"}{"\n"}
          -God created and own all souls Ezik. 18:4{"\n"}
          - All souls have sinned against God Rom 3:23{"\n"}{"\n"}
          -Soul which repent his or her sin shall obtain mercy Prov. 28:13 1 John 1:8-10{"\n"}{"\n"}
          -Souls which fails to repent will receive wages of sin which is death Rom 6:23{"\n"}{"\n"}
          -Eternal life is the reward for those who accept the lord Jesus as their savior Rom 6:23{"\n"}{"\n"}
          -The blood of Jesus alone (new Covenant) can wash the sin of the whole world. Heb. 9:14{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}</Text>
  1: Why is the preaching of the gospel mandatory for believers?{"\n"}{"\n"}
  2: Give the outline of the simple message of the word of the gospel.{"\n"}{"\n"}
  3: eer</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 49')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 51')} title='Next '></Button>
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
export default WEEK50