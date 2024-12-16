import { ScrollView, StyleSheet, Text, View,TextInput } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [player1Name,setPlayer1Name] = useState('')
  const [player2Name,setPlayer2Name] = useState('')
  const [player1Points,setPlayer1Points] = useState(0)
  const [player2Points,setPlayer2Points] = useState(0)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.heading}>Score Tracker </Text>
      </View>
      <View style={styles.scoreBoard}>
            <View style={[styles.playerScore,styles.playerOne]}>
              <View>
                <TextInput style={styles.name} placeholder='player 1'value={player1Name} onChangeText={(text)=>setPlayer1Name(text)}/>
              </View>
              <View style={styles.pointContainer}>
                <Text style={styles.points}>0</Text>
                <View style={styles.setPoints}>
                  <Text style={styles.setPointsText}>2</Text>
                </View>
              </View>
            </View>

            <View style={[styles.playerScore,styles.playerTwo]}>
              <View>
                <TextInput style={styles.name} placeholder='player 2'value={player2Name} onChangeText={(text)=>setPlayer2Name(text)}/>
              </View>
              <View style={styles.pointContainer}>
                <Text style={styles.points}>0</Text>
                <View style={styles.setPointsTwo}>
                  <Text style={styles.setPointsText}>2</Text>
                </View>
              </View>
            </View>
      </View>
      <View style={styles.ControlComm}>
          <View style={styles.decrementContainer}>
            <Text style={styles.decrement}>-</Text>
          </View>
          <View style={styles.turn}>
            <Text style={styles.turnText}>player</Text>
          </View>
          <View style={styles.decrementContainer}>
            <Text style={styles.decrement}>-</Text>
          </View>
      </View>
      <View style={styles.featureContainer}>
      <View style={styles.reset}>
        <Text style={styles.resetText}>Reset</Text>
      </View>
      <View style={styles.mode}><Text style={styles.modeText}>Duos</Text></View>
      </View>
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  navbar:{
    backgroundColor: '#ff0000',
    color: '#ffffff',
  },
  heading:{
    color: '#ffffff',
    fontSize: 50,
    fontWeight:500,
  },
  scoreBoard:{
    margin:30,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:15,
  },
  playerScore:{
    height:300,
    width:175,
    backgroundColor:'#f0f0f0',
    borderRadius:10,
    flex:1,
  },
  playerTwo:{

  },
  playerOne:{

  },
  name:{
    padding:15,
    borderBottomWidth: 5,

  },
  pointContainer:{
    backgroundColor: '#f0f0f0',
    padding: 0,
    justifyContent:'center',
    borderRadius:10,
    height:'auto',
    position: 'relative',
    display:'flex',
    flex:1,
    alignItems:'center',
  },
  points:{
    fontWeight: 'bold',
    fontSize: 100,
    paddingBottom:50,
  },
  setPoints:{
    height:80,
    width:80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  setPointsTwo:{
    height:80,
    width:80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  setPointsText:{
    fontWeight:'bold',
    fontSize:25,
  },
  ControlComm:{
    marginHorizontal:30,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
  },
  decrementContainer:{
    alignItems:'center',
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius: 35,
    backgroundColor:'red',
  },
  turn:{
    width:200,
    borderWidth:1,
    height:50,
    borderRadius:10,
  },
  turnText:{
    fontSize:25,
    padding:5,
  },
  decrement:{
    fontSize:50,
    fontWeight:'bold',
    color:'white',
  },
  featureContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:20,
    gap:20,
  },
  reset:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:150,
    backgroundColor:'#f0f0f0',
    borderRadius:10,
  },
  resetText:{
    fontSize:20,
    fontWeight:'bold'
  },
  modeText:{
    fontSize:20,
    fontWeight:'bold'
  },
  mode:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:150,
    backgroundColor:'#f0f0f0',
    borderRadius:10,
  }
})