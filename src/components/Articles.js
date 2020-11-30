import React, { useState, useEffect } from 'react';
import { getArticles} from '../../src/apiProvider/apiProvider';
import { sort } from '../helpers/sortDate';
import ArticlesListItem from '../components/ArticleListItem/ArticleListItem';
import * as ui from './ArticlesUI';
import Checkbox from './Checkbox/Checkbox';
import ErrorPage from './Error/Error';

const Articles = () => {

  const [articlesList, setArticlesList] = useState([]);
  const defaultArticleType = 'fashion';

  const [backendError, setBackendError] = useState({'backendError': false});

  useEffect(() => {
    updateArticlesList(defaultArticleType);
  }, []);

  const updateArticlesList = (articleType) => {
    getArticles(articleType).then((res) => {
      setArticlesList(res.data.articles);
      setBackendError(false);
    }).catch(function (error) {
        console.log(error);
        setBackendError(true);
    });
  }

  const sortByDate = () => {
    sort(articlesList);
    const sortedArticles = sort(articlesList);;
    setArticlesList(sortedArticles);
  }

  const getBothArticlesTypes = () => {
    let articlesList = [];
    getArticles('sports').then((res) => {
      articlesList = res.data.articles;
      getArticles('fashion').then((res) =>{
        articlesList = articlesList.concat(res.data.articles);
        console.log('concatenated articles', articlesList);
        setArticlesList(articlesList);
        setBackendError(false);
      }).catch(function(error) {
        setBackendError(true)
      })
    }).catch(function (error) {
        setBackendError(true);
    });

  }

  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    if (checkedItems.fashion && checkedItems.sports) {
      getBothArticlesTypes();
    } else if (checkedItems.fashion) {
      updateArticlesList('fashion');
    } else if (checkedItems.sports) {
      updateArticlesList('sports');
    }
 }, [checkedItems]);
 

  const handleChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const checkboxes = [
    {
      name: "fashion",
      key: "checkBox1",
      label: "Fashion"
    },
    {
      name: "sports",
      key: "checkBox2",
      label: "Sports"
    }
  ];

  return (
    <ui.Container>
      { 
      backendError ? (
      <ErrorPage>
      </ErrorPage> ) : (<ui.Container>
      <ui.SortingContainer>
        <ui.SortButton onClick={sortByDate}>Sort by date</ui.SortButton>
      </ui.SortingContainer>
    <ui.ArticlesContainer>
    <ui.FiltersContainer>
      <ui.CheckboxesText>
        Data source
      </ui.CheckboxesText>
      <ui.Checkboxes>
      {checkboxes.map(item => (
        <label key={item.key}>
          <Checkbox
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleChange}
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
  );
}

export default Articles;
