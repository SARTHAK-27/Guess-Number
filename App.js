import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./Screens/GameScreen";
import StartGameScreen from "./Screens/StartGameScreen";
import GameOverScreen from "./Screens/GameOverScreen";

export default function App() {

const [userNumber, setUserNumber] = useState();
const [guessrounds, setGuessrounds] = useState(0);

const configureNewGameHandler = () => {
  setGuessrounds(0);
  setUserNumber(null);
};

const startGameHandler = (selectedNumber) => {
  setUserNumber(selectedNumber);
};

const gameoverHandler = (numofrounds) => {
  setGuessrounds(numofrounds);
};

let content = <StartGameScreen onstartgame={startGameHandler} />;

if (userNumber && guessrounds <= 0) {
  content = <GameScreen userchoice={userNumber} onGameOver={gameoverHandler} />;
} else if (guessrounds > 0) {
  content = (
    <GameOverScreen
      roundsNumber={guessrounds}
      userNumber={userNumber}
      onRestart={configureNewGameHandler}
    />
  );
}

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
