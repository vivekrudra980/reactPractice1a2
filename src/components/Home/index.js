import {Component} from 'react'
import TabItem from '../TabItem'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  makeActive = id => {
    this.setState({activeTabId: id})
  }

  getGreetings = id => {
    const activeItem = languageGreetingsList.find(item => item.id === id)
    return activeItem
  }

  render() {
    const {activeTabId} = this.state
    const {imageUrl, imageAltText} = this.getGreetings(activeTabId)

    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="list">
          {languageGreetingsList.map(tab => (
            <TabItem
              key={tab.id}
              details={tab}
              makeActive={this.makeActive}
              isActive={tab.id === activeTabId}
            />
          ))}
        </ul>
        <img className="image" src={imageUrl} alt={imageAltText} />
      </div>
    )
  }
}
export default Home
