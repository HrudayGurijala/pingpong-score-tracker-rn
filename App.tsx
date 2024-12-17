import { ScrollView, StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [player1Name,setPlayer1Name] = useState('');
  const [player2Name,setPlayer2Name] = useState('');
  const [player1Points,setPlayer1Points] = useState(0);
  const [player2Points,setPlayer2Points] = useState(0);
  const [player1SetPoints,setPlayer1SetPoints] = useState(0);
  const [player2SetPoints,setPlayer2SetPoints] = useState(0);
  const [turnTextBox, setTurnTextBox] = useState('Player 1\'s serve');
  const [mode,setMode] = useState('Play Duos');
  const [turns,setTurns] = useState(2);

  const gameMode = () =>{
    resetGame();
    if(mode === 'Play Duos'){
      setTurns(4);
      setMode('Play Singles');
    }else{
      setTurns(2);
      setMode('Play Duos');
    }
  };


  const playerTurn = (player1:string, player2:string, play1Points:number, play2Points:number,nturns:number)=>{
    if((play1Points + play2Points) % (nturns * 2) < nturns){
      if(!player1){
        setTurnTextBox('Player 1\'s serve');
      }
      else{
        setTurnTextBox(`${player1}'s serve`);
      }
    }else{
      if(!player2){
        setTurnTextBox('Player 2\'s serve');
      }else{
        setTurnTextBox(`${player2}'s serve`);
      }
    }
  };

  const showAlertAtEleven = (playerName:string) => {
    Alert.alert('Set completed.', `${playerName} has won the set!`, [
      { text: 'OK', onPress: () => console.log('Alert closed') },
    ]);
  };

  const onPlayer1 = () => {
    setPlayer1Points((prevCount) => {
    const newCount = prevCount + 1;
    playerTurn(player1Name, player2Name, newCount, player2Points,turns);
      if (prevCount >= 10) {
        showAlertAtEleven(player1Name);
        setPlayer1SetPoints(count => count + 1);
        resetSet();
        return 0;
      }
      return prevCount + 1;
    });
  };
  const onPlayer2 = () => {
    setPlayer2Points((prevCount) => {
      const newCount = prevCount + 1;
      playerTurn(player1Name, player2Name, player1Points, newCount,turns);
      if (prevCount >= 10) {
        showAlertAtEleven(player2Name);
        setPlayer2SetPoints(count => count + 1);
        resetSet();
        return 0;
      }
      return prevCount + 1;
    });
  };
  const player1Dec = ()=>setPlayer1Points((count) => (count > 0 ? count - 1 : 0));
  const player2Dec = ()=>setPlayer2Points((count) => (count > 0 ? count - 1 : 0));

  const resetSet = ()=>{
    setPlayer1Points(0);
    setPlayer2Points(0);
  };

  const resetGame = () => {
    setPlayer1Name('');
    setPlayer2Name('');
    setPlayer1Points(0);
    setPlayer2Points(0);
    setPlayer1SetPoints(0);
    setPlayer2SetPoints(0);
    setTurnTextBox('Player 1\'s serve');
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.heading}>Ping Pong Score</Text>
      </View>
      <View style={styles.scoreBoard}>
            <View style={[styles.playerScore,styles.playerOne]}>
              <View>
                <TextInput style={styles.name} maxLength={10} placeholder="Enter player"value={player1Name} onChangeText={(text)=>setPlayer1Name(text)} placeholderTextColor={'#ffffff'}/>
              </View>
              <View style={styles.pointContainer}>
                <TouchableOpacity onPress={onPlayer1}>
                  <Text style={styles.points} >{player1Points}</Text>
                </TouchableOpacity>
                  <View style={styles.setPoints}>
                    <Text style={styles.setPointsText}>{player1SetPoints}</Text>
                  </View>
              </View>
            </View>

            <View style={[styles.playerScore,styles.playerTwo]}>
              <View>
                <TextInput style={styles.name} maxLength={10} placeholder="Enter player"value={player2Name} onChangeText={(text)=>setPlayer2Name(text)} placeholderTextColor={'#ffffff'}/>
              </View>
              <View style={styles.pointContainer}>
                <TouchableOpacity onPress={onPlayer2}>
                <Text style={styles.points}>{player2Points}</Text>
                </TouchableOpacity>
                <View style={styles.setPointsTwo}>
                  <Text style={styles.setPointsText}>{player2SetPoints}</Text>
                </View>
              </View>
            </View>
      </View>
      <View style={styles.ControlComm}>
          <View style={styles.decrementContainer}>
            <TouchableOpacity onPress={player1Dec}>
            <Text style={styles.decrement}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.turn}>
            <Text style={styles.turnText}>{turnTextBox}</Text>
          </View>
          <View style={styles.decrementContainer}>
          <TouchableOpacity onPress={player2Dec}>
            <Text style={styles.decrement}>-</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.featureContainer}>
      <TouchableOpacity onPress={resetGame}>
        <View style={styles.reset}>
          <Text style={styles.resetText}>Reset</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={gameMode}>
      <View style={styles.mode}><Text style={styles.modeText}>{mode}</Text></View>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

//#d4e7f5
//#fe5f56
//#05c5f5
//#fefffe

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fefffe',
  },
  navbar: {
    backgroundColor: '#d4e7f5',
    color: '#42515a',
    paddingVertical: 20,
  },
  heading: {
    paddingHorizontal:15,
    color: '#42515a',
    fontSize: 40,
    fontWeight: '500',
  },
  scoreBoard:{
    margin:30,
    marginTop:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:15,
  },
  playerScore:{
    height:300,
    width:175,
    // backgroundColor:'#f0f0f0',
    borderRadius:10,
    flex:1,
    backgroundColor:'#cad5e2',
    elevation:4,
  },
  playerTwo:{
    backgroundColor: '#fe5f56',
  },
  playerOne:{
    backgroundColor:'#05c5f5',
  },
  name:{
    margin:7,
    padding:10,
    borderBottomWidth: 3,
    borderColor:'#ffffff',
    fontSize:25,
    color:'#ffffff',
  },
  pointContainer:{
    backgroundColor:'transparent',
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
    paddingBottom:60,
    color:'#fffdff',
  },
  setPoints:{
    height:80,
    width:80,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#335773',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  setPointsTwo:{
    height:80,
    width:80,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#335773',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
  },
  setPointsText:{
    fontWeight:'bold',
    fontSize:25,
    color:'#fffdff',
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
    backgroundColor:'#fe5f56',
    elevation:5,
  },
  turn:{
    width:200,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  turnText:{
    fontSize:25,
    padding:5,
    color:'#335773',
    fontStyle:'italic',
    fontWeight:'bold',
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
    elevation:5,
  },
  resetText:{
    fontSize:20,
    fontWeight:'bold',
  },
  modeText:{
    fontSize:20,
    fontWeight:'bold',
  },
  mode:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:100,
    width:150,
    backgroundColor:'#f0f0f0',
    borderRadius:10,
    elevation:5,
  },
})