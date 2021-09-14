import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {headsCount, tailsCount} = this.state
    let currentHeadsCount = headsCount
    let currentTailsCount = tailsCount
    let coinImg = ''
    if (tossResult === 0) {
      currentHeadsCount += 1
      coinImg = HEADS_IMG_URL
    } else {
      currentTailsCount += 1
      coinImg = TAILS_IMG_URL
    }
    this.setState({
      tossResultImage: coinImg,
      headsCount: currentHeadsCount,
      tailsCount: currentTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="coinToss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="coin-img" />
          <button type="button" className="btn" onClick={this.onTossClick}>
            Toss Coin
          </button>
          <div className="tossResult-container">
            <p className="result">Total:{total}</p>
            <p className="result">Heads:{headsCount}</p>
            <p className="result">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
