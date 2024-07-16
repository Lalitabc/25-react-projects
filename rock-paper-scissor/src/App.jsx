import RPSContainer from './Components/RPSContainer';
import './App.css'
import { useState } from 'react';
function App() {

  let [userScore, setUserScore] = useState(0);
  let [compScore, setCompScore] = useState(0);
  let [userWin,setUserWin] = useState(false)
  let [draw,setDraw] = useState(false)
  let [startGame,setStartGame] = useState(true)


  const reset=()=>{
    setUserScore(0)
    setCompScore(0)
    setDraw(false)
    setStartGame(false)
    setStartGame(true)
  }
  function compSelectFunc() {
    setStartGame(false)
    let selectsArr = ["rock", "paper", "scissor"];
    let slectIdx = Math.floor(Math.random() * 3);

    return selectsArr[slectIdx];
  }

  function rpsClickerHandle(rpsName) {

    let compSelect = compSelectFunc();
    setUserWin(false)
    setDraw(false)

    if (rpsName === compSelect) {
       
      setDraw(true);
    } else {

      if (rpsName === 'rock' && compSelect === 'paper') {
        compScore++;
        setCompScore(compScore);
      } else if (rpsName === 'rock' && compSelect === 'scissor') {
        userScore++;
        setUserScore(userScore);
        setUserWin(true);

      } else if (rpsName === 'paper' && compSelect === 'rock') {

        userScore++;
        setUserScore(userScore);
        setUserWin(true);

      } else if (rpsName === 'paper' && compSelect === 'scissor') {

        compScore++;
        setCompScore(compScore);

      } else if (rpsName === 'scissor' && compSelect === 'rock') {
        compScore++;
        setCompScore(compScore);
      } else if (rpsName === 'scissor' && compSelect === 'paper') {
        userScore++;
        setUserScore(userScore);
        setUserWin(true);
      }

    }


  }


  return (
    <>

      <RPSContainer
        rpsClickerHandle={rpsClickerHandle}
        userScore={userScore}
        compScore={compScore}
        userWin={userWin}
        draw={draw}
        startGame={startGame}
        reset={reset}
      ></RPSContainer>

    </>
  )
}

export default App
