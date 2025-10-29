import './index.css'

const LanguageFilterItem = props => {
  const {each, key, activeTab, clickedTabItem} = props
  const {language, id} = each
  const clickedButton = () => {
    clickedTabItem(id)
  }
  const renderClassName = () => {
    switch (activeTab) {
      case key === activeTab:
        return 'normalButton'
      default:
        return 'styledButton'
    }
  }

  return (
    <li key={id}>
      <button
        type="button"
        className={renderClassName()}
        onClick={clickedButton}
      >
        <h1>{language} </h1>
      </button>
    </li>
  )
}
export default LanguageFilterItem
