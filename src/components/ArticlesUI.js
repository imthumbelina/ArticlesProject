import styled from "styled-components";
import { mediumFont, smallFont, lightGrey, fontFamily, largeFont } from '../theme/theme';

// Styled component named StyledButton

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: ${mediumFont};
  font-family: ${fontFamily};
  flex: 80%;
`;

export const ArticlesListContainer = styled.div`
  flex: 80%;
  @media (max-width: 800px) {
    flex: 100%;
}
`;

export const FiltersContainer = styled.div`
  flex: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  @media (max-width: 800px) {
    flex: 50%;
    height: 15%;
}
`;

export const SortingContainer = styled.p`
  font-size: ${largeFont};
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media (max-width: 800px) {
    flex: 50%;
  }
`;

export const ArticlesList = styled.div`
`;

export const SortButton = styled.button`
  border: 2px solid grey;
  border-radius: 20px;
  font-size: ${mediumFont};
  margin: 0.5em;
  padding: 0.25em 1em;
`;

export const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CheckboxesText = styled.div`
  font-size: ${largeFont};
`