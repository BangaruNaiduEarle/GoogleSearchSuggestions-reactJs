// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachListItem =>
      eachListItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="BgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="search-container">
          <div>
            <div className="search-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-image"
              />

              <input
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="unOrder-listItems">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  listItem={eachItem}
                  onClickArrowBtn={this.onClickArrow}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
