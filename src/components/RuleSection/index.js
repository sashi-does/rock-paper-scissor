import Popup from 'reactjs-popup'
import './index.css'

const RuleSection = () => (
  <div className="popup">
    <Popup
      trigger={
        <button type="button" className="button">
          RULES
        </button>
      }
      modal
      nested
    >
      {close => (
        <div className="modal">
          <button type="button" className="close" onClick={close}>
            &times;
          </button>

          <div className="content">
            <img
              className="rules"
              alt="rules"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default RuleSection
