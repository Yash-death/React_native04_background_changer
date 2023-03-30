import { AppRegistry, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const[randomBackground,setrandomBackground] = useState("#ffffff")
  const[randomBackgroundButton,setrandomBackgroundButton] = useState("#000")
  const[randomSquareColor,setrandomSquareColor]=useState("#fff")
  const[randomCircleColor,setrandomCircleColor]=useState("#000")
  const[randomovalColor,setrandomovalColor]=useState("#000")
  const[randomreactangleColor,setrandomreactangleColor]=useState("#000")
  const generateColor = () =>{
    const hexRange = "0123456789ABCDEF"
    let color = "#"
    let Btncolor ="#"
    let circlecolor="#"
    let squarecolor="#"
    let ovalcolor = "#"
    let reactanglecolor= "#"

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*16)]
      Btncolor += hexRange[Math.floor(Math.random()*16)]
      squarecolor  += hexRange[Math.floor(Math.random()*16)]
      circlecolor  += hexRange[Math.floor(Math.random()*16)]
      ovalcolor  += hexRange[Math.floor(Math.random()*16)]
      reactanglecolor  += hexRange[Math.floor(Math.random()*16)]
    }
    setrandomBackground(color)
    setrandomBackgroundButton(Btncolor)
    setrandomSquareColor(squarecolor)
    setrandomCircleColor(circlecolor)
    setrandomovalColor(ovalcolor)
    setrandomreactangleColor(reactanglecolor)
  }
  
  return (
   <>
   <StatusBar backgroundColor={randomBackground}/>
   <View style={[styles.Container,{backgroundColor : randomBackground}]}>
    <View style={styles.direction}>
    <View style={[styles.circle,{backgroundColor : randomCircleColor}]}/>
    <View style={[styles.circle,{backgroundColor : randomCircleColor}]}/>
    </View>
    <View style={styles.direction}>
    <View style={[styles.oval,{backgroundColor : randomovalColor}]}/>
    </View>
    <View style={styles.direction}>
    <View style={[styles.reactangle,{backgroundColor : randomreactangleColor}]}>
    <View style={[styles.square,{backgroundColor : randomSquareColor}]}/>
    </View>
    </View>
    
    <TouchableOpacity onPress={generateColor} >
      <View style={styles.ButtonCOntainer}>
      <View style={[styles.ActionButton,{backgroundColor : randomBackgroundButton}]}>
        <Text style={styles.ActionButtonText}>Press me</Text>
        </View>
      </View>
    </TouchableOpacity>
   </View>
   </>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    // justifyContent:'flex-end'
    justifyContent:'space-evenly'
  },
  direction:{
   flexDirection:'row',
   alignSelf:'center'
  },
  square:{
    width: 180,
    height: 180,
    backgroundColor: "red",
    // margin:12,
    alignSelf:'center',
  },
  circle:{
    width:150,
    height:150,
    borderRadius:150/2,
    backgroundColor:"red",
    margin : 12
  },
  oval: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    transform: [{ scaleX: 2 }],
    marginVertical:12,
    marginHorizontal:4
  }, 
  reactangle: {
    width: 150 * 2,
    height: 200,
    backgroundColor: "red",
    margin:12,
    flex:1,
    justifyContent:'center'

  },
  ButtonCOntainer:{
    alignItems:'center',

  },
  ActionButton:{
    borderRadius:60,
    backgroundColor:"#6a1bbb",
    paddingHorizontal:30,
    paddingVertical:20,
    marginVertical:20
  },
  ActionButtonText:{
    fontSize:20,
    color:"#fff",
    textTransform:"uppercase",
    fontWeight:'bold'
  }
})

AppRegistry.registerComponent('Appname', () => App);