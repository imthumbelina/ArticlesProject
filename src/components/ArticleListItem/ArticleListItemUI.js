import styled from "styled-components";
import { mediumFont, smallFont, lightGrey, fontFamily, largeFont } from '../../theme/theme';

export const ListItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
`;

export const ImageContainer = styled.div`
    flex: 20%;

    @media (max-width: 800px) {
        flex: 40%;
      }
`;

export const ArticleContentContainer = styled.div`
    flex: 80%;
    box-sizing: border-box;

    @media (max-width: 800px) {
        flex: 60%;
      }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const ArticleHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: ${largeFont};
    flex-wrap: wrap;
    @media (max-width: 800px) {
        font-size: ${mediumFont}
    }
`;

export const ArticleText = styled.div`

    @media (max-width: 800px) {
        display: none;
      }
`;

export const ArticleTitle = styled.div`
    flex: 75%;
    @media (max-width: 800px) {
        flex: 100%;
    }
`;

export const ArticleDate = styled.div`  
    display: flex;
    justify-content: start;
    flex 25%;
    @media (max-width: 800px) {
        font-size: ${smallFont};
    }
`;