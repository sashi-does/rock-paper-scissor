import Score from '../Score'
import './index.css'

const TopSection = props => {
  const {score} = props
  return (
    <div className="top-section">
      <h1 className="top-heading">Rock Paper Scissors</h1>
      <div className="score-board">
        <p className="score-heading">Score</p>
        <Score>{score}</Score>
      </div>
    </div>
  )
}

export default TopSection
