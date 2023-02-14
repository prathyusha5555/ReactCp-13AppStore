import './index.css'

const TabItem = props => {
  const {tabDetails, changeActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTab = () => {
    changeActiveTabId(tabId)
  }
  const activeTabClass = isActive ? 'active-button' : ''

  return (
    <li>
      <button
        className={`tab-content-button ${activeTabClass}`}
        onClick={onClickTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
