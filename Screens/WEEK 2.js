import * as React from 'react';
import {View, Button,Text,StyleSheet, ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';


const WEEK2 = ({navigation}) => {
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
          fontWeight: 'bold',}}>
           BIBLE PASSAGE: Mathew 25 v 14 to 30{"\n"}
           MEMORY VERSE: Mathew 25 v 15 {"\n"}</Text>
           </View>
           
         <View style={{
    
        }}><Text style={{color: colors.text,
          fontSize: 30,
          flex: 0.4,
              alignItems: 'center',
              marginLeft: '5%',
              marginRight: '5%',
          justifyContent: 'center'}}><Text style={{fontSize: 35,
            fontWeight: 'bold', justifyContent: 'center'}}>CENTRAL THEME {"\n"}
        BE AN ACTIVE CHRISTIAN {"\n"}
        MAIN POINT FROM THE PASSAGE {"\n"}{"\n"}</Text>
        (1) One reason for the failure of modern churches is that they become a one man affair .The per-setter leaves the work of evangelism, preaching, teaching and visitation to the pastor. This is not God's order. {"\n"}{"\n"}
        (2)at Pentecost, they were one hundred and twenty praying but only eleven of them could be called 'pastors’, that is the eleven disciples .There were women also present. When persecution came, the pastors stayed in Jerusalem and the laymen were the one who went out preaching. (Act’s 8 v 4).It is therefore the duty of every church members to be active for Christmas. {"\n"}{"\n"}
        (3) When he ascended on high, he lad the captivity captive and gave gifts unto man ( Eph. 4 v 8)the holy spirit took up the parable of the talent which the Lord stated in (math 25 v 14 to 30)and gave further details {"\n"}{"\n"}
        (4) The parable presented goods as a talent to trade with (math 25 v 16)further details in Ephesians Indicate that "the Lord of talent (gifts)are for the work of the ministry ,perfecting the Saints and for edifying the body of Christmas.( Eph. 4 v 14,math 25 v 19) provides that "the Lord of the servants cometh reckoned with them "this means that the Lord Jesus Christ will surely return and request from every believer details of his goods/talents which he bestowed on them {"\n"}{"\n"}
        (5) However the record in verse 24 laced with excuses for non-performance. One of the excuses was fair. The servant said I was afraid verse 25 therefore he hide the talent in the earth, his record was also different "thou wicked and slothful servant "the punishment was severe verse 26 to 30 {"\n"}{"\n"}
        (6) This parable points out the need for faithfulness in little. Such faithfulness will multiply the little to become great. It also identify whoever that fail to use his gifts as a wicked fellow verse 26 .that means wasters of God's gifts will occupy the same position in hell with other wicked fellows (psalm 9 v 17,math 25 v 30) {"\n"}{"\n"}
        <Text style={{fontSize: 25,
        fontWeight: 'bold', justifyContent: 'center'}}>{"\n"}QUESTION FOR DISCUSSION</Text> {"\n"}{"\n"}
        (1) What are the different between faithful and wicked servant?{"\n"}{"\n"}
        (2) What can you do for Jesus?{"\n"}{"\n"} 
        (3) How can a Christian be active in the church?  </Text>    
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
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 1')} title='Back'></Button>
             <Button  color= '#217aff' onPress ={() => navigation.navigate('WEEK 3')} title='Next '></Button>
             </View>
      
        </ScrollView>
          );
        }
        const styles = StyleSheet.create({
            title: {
              fontSize: 35,
              fontWeight: 'bold',
          
            },
            titles: {
              fontSize: 30,
              justifyContent: 'center'
            },
            bottomCenter: {
                flex: 1,
                justifyContent: 'flex-end'
          
            }
          }); 
          export default WEEK2