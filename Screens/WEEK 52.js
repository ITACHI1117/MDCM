import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK52 = ({navigation}) => {
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
           BIBLE PASSAGE: 1 Thess. 4:13-18 {"\n"}
           MEMORY VERSE: 1 Cor. 15:51{"\n"}</Text>
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
        RAPTURE DECRIBED{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: The second coming of Christ prophesied by Daniel in Daniel 7:133 is a second biblical eer . The return shall be in two stages. The first is to receive unto himself his church. This is popularly called the rapture 1 Thess. 4:15-17. The second stage is Christ coming with his saints to set up the millennium eer (1 Thess. 3:13). May the Holy Spirit himself guide use onto all truth in Jesus name{"\n"}{"\n"}
          2: What is rapture it is the sudden eer up or sudden disappearance of the eer and faithfully saints from the earth to meet with our lord and savior in the air. 1 Thess. 4:17. It is translation or translocation of believer 1 Cor. 15:51-55 Rapture shall be sudden as the twinkle of an eye 1 Cor. 15:52{"\n"}{"\n"}
  3: When is rapture?{"\n"}{"\n"}
  -The time of rapture is not known by any man Matt 24:42{"\n"}{"\n"}
  -Only God knows the secret time Matt 24:36 however the biblical clue indicates that it shall precede the tribulation 1 Thess. 1:10, 5:9{"\n"}{"\n"}
  4: What will happen at the rapture? The trumpet of God shall sound 1 Cor. 15:52, 1 Thess. 4:16. The dead in Christ shall rise first John 5:25, 1 Thess. 4:16. Saints which are alive shall be caught up to meet our lord in the air 1 Thess. 4:17 the dead in Christ and saints who are left shall have glorified or eer bodies and live forever 1 Cor. 15:51-54 Phil 3:20-21. There shall be extraordinary changes on the earth 1Thess 5:2-3 Matt 24:40-41. The sudden eer produced by such disappearance shall give birth to the chaos.{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: Describe rapture?{"\n"}{"\n"}
  2: What will happen at rapture?{"\n"}{"\n"}
  3: What do you understand by the teaching?{"\n"}</Text>    
        </View>
        <View>
             <Button onPress ={() => navigation.navigate('WEEK 51')} title='Previous Page'></Button>
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
export default WEEK52