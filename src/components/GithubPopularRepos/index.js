import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import RepositoryItem from '../RepositoryItem'

import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTab: languageFiltersData[0].id,
    isLoading: false,
    listItems: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({
      isLoading: true,
    })
    const {activeTab} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTab}`

    const response = await fetch(apiUrl)

    if (response.ok) {
      const fetchedData = await response.json()
      const formatData = fetchedData.popular_repos.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        name: eachItem.name,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
      }))
      console.log(formatData)
      this.setState({
        listItems: formatData,
        isLoading: false,
      })
    }
  }

  fetchNewData = async () => {
    this.setState({
      isLoading: true,
    })
    const {activeTab} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    const response = await fetch(apiUrl)

    if (response.ok) {
      const fetchedData = await response.json()
      const formatData = fetchedData.popular_repos.map(eachItem => ({
        avatarUrl: eachItem.avatar_url,
        name: eachItem.name,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
      }))
      console.log(formatData)
      this.setState({
        listItems: formatData,
        isLoading: false,
      })
    }
  }

  clickedTabItem = id => {
    this.setState({activeTab: id}, this.fetchNewData)
  }

  renderLoader = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading, listItems, activeTab} = this.state
    return (
      <div>
        <h1 className="heading">Popular</h1>
        <ul>
          {' '}
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              each={each}
              key={each.id}
              activeTab={activeTab === each.id}
              clickedTabItem={this.clickedTabItem}
            />
          ))}
        </ul>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <ul className="gitList">
            {' '}
            {listItems.map(each => (
              <RepositoryItem each={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
