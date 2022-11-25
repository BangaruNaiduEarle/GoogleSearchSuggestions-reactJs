// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {listItem, onClickArrowBtn} = props
  const {suggestion, id} = listItem

  const onclickButton = () => {
    onClickArrowBtn(suggestion)
  }

  return (
    <li className="list-item-styles">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onclickButton}
      />
    </li>
  )
}

export default SuggestionItem
