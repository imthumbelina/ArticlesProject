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
    padding: 1%;

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
    flex:0 0 25%;
`;

export const ArticleText = styled.div`
    flex:0 0 75%;
`;

export const ArticleTitle = styled.div`
`;

export const ArticleDate = styled.div`
`;