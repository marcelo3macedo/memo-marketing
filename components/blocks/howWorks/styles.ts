import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--secondary60);  
    padding: 80px 0;
    text-align: center;
`;

export const Container = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
`;

export const Picture = styled.img`
    max-width: 500px;
`;

export const PictureFull = styled.img`
    max-width: 800px;
    padding: 20px 0;
`;

export const Title = styled.h1`
    text-align: center;
`;

