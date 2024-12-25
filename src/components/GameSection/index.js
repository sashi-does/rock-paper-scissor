import {Component} from 'react'
import TopSection from '../TopSection'
import './index.css'

const GameConstants = {
  rock: 'ROCK',
  scissors: 'SCISSORS',
  paper: 'PAPER',
  initial: '',
}

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    testId: 'rockButton',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    testId: 'scissorsButton',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    testId: 'paperButton',
  },
]

class GameSection extends Component {
  state = {active: '', score: 0, gameStatus: '', oppActive: ''}

  getResult = () => {
    const {active} = this.state
    const idx = Math.floor(Math.random() * 3)
    const opponentChoice = choicesList[idx].id

    if (active === GameConstants.rock) {
      if (opponentChoice === GameConstants.rock) {
        this.setState({gameStatus: 'IT IS DRAW', oppActive: GameConstants.rock})
      } else if (opponentChoice === GameConstants.paper) {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: 'YOU LOSE',
          oppActive: GameConstants.paper,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: 'YOU WON',
          oppActive: GameConstants.scissors,
        }))
      }
    } else if (active === GameConstants.paper) {
      if (opponentChoice === GameConstants.rock) {
        this.setState(prevState => ({
          gameStatus: 'YOU WON',
          oppActive: GameConstants.rock,
          score: prevState.score + 1,
        }))
      } else if (opponentChoice === GameConstants.paper) {
        this.setState({
          gameStatus: 'IT IS DRAW',
          oppActive: GameConstants.paper,
        })
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: 'YOU LOSE',
          oppActive: GameConstants.scissors,
        }))
      }
    } else if (active === GameConstants.scissors) {
      if (opponentChoice === GameConstants.rock) {
        this.setState(prevState => ({
          gameStatus: 'YOU LOSE',
          oppActive: GameConstants.rock,
          score: prevState.score - 1,
        }))
      } else if (opponentChoice === GameConstants.paper) {
        this.setState(prevState => ({
          gameStatus: 'YOU WON',
          oppActive: GameConstants.paper,
          score: prevState.score + 1,
        }))
      } else {
        this.setState({
          gameStatus: 'IT IS DRAW',
          oppActive: GameConstants.scissors,
        })
      }
    }
  }

  onClickChoice = id => {
    this.setState({active: id}, this.getResult)
  }

  onClickPlayAgain = () => {
    this.setState({active: GameConstants.initial})
  }

  renderImages = () => {
    const {active, oppActive, gameStatus} = this.state
    return (
      <div className="result-container">
        <div className="you-opp">
          <div>
            <h1>YOU</h1>
            {choicesList.map(eachItem => {
              if (eachItem.id === active) {
                return (
                  <img
                    key={eachItem.id}
                    className="result-img"
                    src={eachItem.imageUrl}
                    alt="your choice"
                  />
                )
              }
              return null
            })}
          </div>
          <div>
            <h1>OPPONENT</h1>
            {choicesList.map(eachItem => {
              if (eachItem.id === oppActive) {
                return (
                  <img
                    key={eachItem.id}
                    className="result-img"
                    src={eachItem.imageUrl}
                    alt="opponent choice"
                  />
                )
              }
              return null
            })}
          </div>
        </div>
        <p>{gameStatus}</p>
        <button
          onClick={this.onClickPlayAgain}
          className="play-button"
          type="button"
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {active, score} = this.state

    return (
      <div className="main-section">
        <TopSection score={score} />
        {active === '' ? (
          <div className="buttons-align">
            {choicesList.map(eachItem => (
              <button
                key={eachItem.id}
                onClick={() => this.onClickChoice(eachItem.id)}
                className="choice-button"
                type="button"
                data-testid={eachItem.testId}
              >
                <img
                  className="choice-image"
                  alt={eachItem.id}
                  src={eachItem.imageUrl}
                />
              </button>
            ))}
          </div>
        ) : (
          this.renderImages()
        )}
      </div>
    )
  }
}

export default GameSection
