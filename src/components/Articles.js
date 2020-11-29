import React, { useState, useEffect } from 'react';
import { getArticles} from '../../src/apiProvider/apiProvider'; 
import ArticlesListItem from '../components/ArticleListItem/ArticleListItem';
import * as ui from './ArticlesUI';
const Articles = () => {

  const [articlesList, setArticlesList] = useState([]);
  const defaultArticleType = 'fashion';

  useEffect(() => {
    getArticles(defaultArticleType).then((res) => {
      console.log(res.data);
      setArticlesList(res.data.articles);
    }).catch(function (error) {
        console.log(error);
    });
  }, []);

  console.log('articles', articlesList);
  return (
    <ui.Container>
    <ui.FiltersContainer>
      Data sources
    </ui.FiltersContainer>
    <ui.ArticlesContainer>
      <ui.SortingContainer>
        <ui.SortButton>Sort by date</ui.SortButton>
      </ui.SortingContainer>
        {articlesList.map((article) => 
           <ArticlesListItem 
            key={article.id} 
            article={article}/>
        )}
    </ui.ArticlesContainer>
    </ui.Container>
  );
}

export default Articles;
