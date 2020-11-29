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

  const initialCheckboxesState = {
    fashionCheckbox: true,
    sportsCheckbox: false
  };
  const [checkboxState, setCheckboxState] = useState(initialCheckboxesState)

  useEffect(() => {
    getArticles(defaultArticleType).then((res) => {
      console.log(res.data);
      setArticlesList(res.data.articles);
      setBackendError(false);
    }).catch(function (error) {
        console.log(error);
        setBackendError(true);
    });
  }, []);

  const sortByDate = () => {
    sort(articlesList);
    const sortedArticles = sort(articlesList);;
    setArticlesList(sortedArticles);
  }

  const onCheckboxClicked = (checkBoxType) => {
    getArticles(checkBoxType).then((res) => {
      setArticlesList(res.data.articles);
      setBackendError(false);
    }).catch(function (error) {
        setBackendError(true);
    });
  }

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
      <Checkbox
          title="Fashion"
          onClick={
            v => {
              setCheckboxState({ fashionCheckbox: v })
              onCheckboxClicked('fashion');
            }
          }
          checked={checkboxState.fashionCheckbox}
        />
        <Checkbox
          title="Sports"
          onClick={v => {
            setCheckboxState({ sportsCheckbox: v })
            onCheckboxClicked('sports');
          }}
          checked={checkboxState.sportsCheckbox}
        />
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
