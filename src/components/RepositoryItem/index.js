import './index.css'

const RepositoryItem = props => {
  const {each, key} = props
  const {issuesCount, name, forksCount, id, starsCount, avatarUrl} = each
  return (
    <li className="gitListItem" key={id}>
      <img className="avatarUrl" src={avatarUrl} alt={name} />
      <h1 className="name">{name} </h1>
      <div className="iconContainer">
        <img
          alt="stars"
          className="iconsImg"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p>{starsCount} </p>
      </div>
      <div className="iconContainer">
        <img
          className="iconsImg"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
        />
        <p>{forksCount} </p>
      </div>{' '}
      <div className="iconContainer">
        <img
          alt="open issues"
          className="iconsImg"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p>{issuesCount} </p>
      </div>
    </li>
  )
}
export default RepositoryItem
