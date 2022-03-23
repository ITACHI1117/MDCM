import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

const WEEK37 = ({navigation}) => {
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
          fontWeight: 'bold',}}>WEEK 37{"\n"}
           BIBLE PASSAGE: Colos 3:12-13{"\n"}
           MEMORY VERSE: Eph 4:32{"\n"}</Text>
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
        FORGIVING ONE ANOTHER{"\n"}{"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        1: To forgive means to pardon, to wave any negative feeling or desire for punishment (Matt 18:25-27). In other words forgiveness is the intentional and voluntary process by which the offended undergoes a change in feeling and attitude regarding offences, let go of negative emotion such as vengefulness bitterness, malice, etc. with an increased ability to wish the offender well. Luke 17:3{"\n"}{"\n"}
             2: Why should we forgive?
In our dealing as humans there is tendency to step on one another toes, but we must learn to forgive one another even as God forgive us (Mark 11 25-26){"\n"}{"\n"}
     -Forgiveness is a command from God Luke 17 3-4, Col 3:13{"\n"}{"\n"}
     -It’s a condition for answered prayers by God Jam 5:16, Matt 5:24-25{"\n"}{"\n"}
     -It is the one who forgive that God defends Rom 12:19{"\n"}{"\n"}
     -its helps to gain our brethren Matt 18:15{"\n"}{"\n"}
     -UN-forgiveness lead to bitterness Prov. 17:22{"\n"}{"\n"}
     -UN-forgiveness open the door for demonic attack Eccl 10:8, 1 Sam 18:8-11,{"\n"}{"\n"}
     -Forgiving one another is a condition for us to make heaven Heb. 12:14{"\n"}{"\n"}
     3: Evidence of Forgiveness{"\n"}{"\n"}
     -You won’t seek revenge Rom 9:19 Gen 45:4-5{"\n"}{"\n"}
     - You will always seek peace Rom 12:18{"\n"}{"\n"}
     -You will so eer and pray for you offender Rom12:20 Matt 5:44{"\n"}{"\n"}
     -You won’t keep record of wrong doing Heb. 8:12 eer 31:34{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION{"\n"}{"\n"}</Text>
  1: What offence as a believer you can’t just forgive{"\n"}{"\n"}
  2: Why should believer forgive?{"\n"}{"\n"}
  3: What is the evidence of forgiveness?</Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 36')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 38')} title='Next '></Button>
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
export default WEEK37