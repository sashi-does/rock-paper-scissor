import {Component} from 'react'
import GameSection from './components/GameSection'
import RuleSection from './components/RuleSection'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="main">
        <GameSection />
        <RuleSection />
      </div>
    )
  }
}

export default App
