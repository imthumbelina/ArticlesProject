import React from 'react';
import * as ui from './ArticleListItemUI';

const ArticlesListItem = (props) => {
  return (
    <ui.ListItemContainer>
      <ui.ImageContainer>
        <ui.Image src={props.article.image}></ui.Image>
      </ui.ImageContainer>
      <ui.ArticleContentContainer>
        <ui.ArticleHeader>
          <ui.ArticleTitle>
            {props.article.title}
          </ui.ArticleTitle>
          <ui.ArticleDate>
            {props.article.date}
          </ui.ArticleDate>
        </ui.ArticleHeader>
        <ui.ArticleText>
          {props.article.preamble}
        </ui.ArticleText>
      </ui.ArticleContentContainer>
    </ui.ListItemContainer>
  );
}

export default ArticlesListItem;
