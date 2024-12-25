import React from 'react'

const GameContext = React.createContext({
  choicesList: [
    {
      id: 'ROCK',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
    },
    {
      id: 'SCISSORS',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
    },
    {
      id: 'PAPER',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
    },
  ],
})

export default GameContext
