import Rock from './images/rock.png'
import Paper from './images/paper.png'
import Scissor from './images/scissor.png'
import styles from './RPSContainer.module.css'
import { useState } from 'react'
const RPSContainer = ({ rpsClickerHandle, userScore, compScore, draw, userWin, startGame ,reset}) => {


    return (<>
        <div className={`${styles.container}`}>
            <div className={`${styles.header}`}>
                <h1>Rock Paper Scissors</h1>
            </div>

            <div className={`${styles.rps}`}>

                <div className={`${styles.choice}`} id="rock" onClick={(e) => rpsClickerHandle(e.target.parentNode.id)}> <img className={`${styles.img}`} src={Rock} alt="Rock" /></div>
                <div className={`${styles.choice}`} id="paper" onClick={(e) => rpsClickerHandle(e.target.parentNode.id)}><img className={`${styles.img}`} src={Paper} alt="Paper" /></div>
                <div className={`${styles.choice}`} id="scissor" onClick={(e) => rpsClickerHandle(e.target.parentNode.id)}><img className={`${styles.img}`} src={Scissor} alt="Scissor" /></div>

            </div>
            <div className={`${styles.winnerCount}`}>
                <div className={`${styles.userWinCount}`}>
                    <p>{userScore}</p>
                    <p>You</p>
                </div>
                <div className={`${styles.compWinCount}`}>
                    <p>{compScore}</p>
                    <p>Comp</p>
                </div>
            </div>
            <div className={`${styles.winAndreset}`}>
                <div className={`${styles.displayWin} ${startGame ? styles.startGameActive : draw ? styles.drawActive : userWin ? styles.userWinActive : styles.compWinActive}`}>
                    {startGame ? "Start Game" : draw ? "Game Draw!" : userWin ? "You Win" : "Comp Win"}
                    {/* wining dispaly */}

                </div>
                <button className={`${styles.reset}`} onClick={reset}>Reset</button>
            </div>

        </div>


    </>)

}

export default RPSContainer;