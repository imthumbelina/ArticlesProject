import React, { useState, useEffect } from 'react'
import { getArticles } from '../../apiProvider/apiProvider'
import { sort } from '../../helpers/sortDate'
import ArticlesListItem from '../ArticleListItem/ArticleListItem'
import * as ui from './ArticlesPageUI'
import Checkbox from '../Checkbox/Checkbox'
import ErrorPage from '../Error/Error'

const checkboxesConfiguration = [
  {
    name: 'fashion',
    key: 'checkBox1',
    label: 'Fashion'
  },
  {
    name: 'sports',
    key: 'checkBox2',
    label: 'Sports'
  }
]

const ArticlesPage = () => {
  const [articlesList, setArticlesList] = useState([])
  const [backendError, setBackendError] = useState(false)
  const [checkedItems, setCheckedItems] = useState({})

  const defaultArticleType = 'fashion'

  useEffect(() => {
    updateArticlesList(defaultArticleType)
  }, [])

  useEffect(() => {
    if (checkedItems.fashion && checkedItems.sports) {
      getBothArticlesTypes()
    } else if (checkedItems.fashion) {
      updateArticlesList('fashion')
    } else if (checkedItems.sports) {
      updateArticlesList('sports')
    }
  }, [checkedItems])

  const updateArticlesList = (articleType) => {
    getArticles(articleType).then((res) => {
      setArticlesList(res.data.articles)
      setBackendError(false)
    }).catch(function (error) {
      console.log(error)
      setBackendError(true)
    })
  }

  const sortByDate = () => {
    sort(articlesList)
    const sortedArticles = sort(articlesList)
    setArticlesList(sortedArticles)
  }

  const getBothArticlesTypes = () => {
    let articlesList = []

    getArticles('sports').then((res) => {
      articlesList = res.data.articles

      getArticles('fashion').then((res) => {
        articlesList = articlesList.concat(res.data.articles)
        setArticlesList(articlesList)
        setBackendError(false)
      }).catch(function (error) {
        console.log(error)
        setBackendError(true)
      })
    }).catch(function (error) {
      console.log(error)
      setBackendError(true)
    })
  }

  const handleCheckboxChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    })
  }

  return (
    <ui.Container>
      { backendError ? (
        <ErrorPage></ErrorPage>)
        : (<ui.Container>
          <ui.ArticlesContainer>
            <ui.SortingContainer>
              <ui.SortButton onClick={sortByDate}>Sort by date</ui.SortButton>
            </ui.SortingContainer>
            <ui.FiltersContainer>
              <ui.CheckboxesText>
                Data source
              </ui.CheckboxesText>
              <ui.Checkboxes>
                {checkboxesConfiguration.map(item => (
                  <label key={item.key}>
                    <Checkbox
                      name={item.name}
                      checked={checkedItems[item.name]}
                      onChange={handleCheckboxChange}
                    />
                    {item.label}
                  </label>
                ))}
              </ui.Checkboxes>
            </ui.FiltersContainer>
            <ui.ArticlesListContainer>
            {articlesList.map((article) =>
              <ArticlesListItem
                key={article.id}
                article={article}/>
            )}
            </ui.ArticlesListContainer>
          </ui.ArticlesContainer>
        </ui.Container>)}
    </ui.Container>
  )
}

export default ArticlesPage
