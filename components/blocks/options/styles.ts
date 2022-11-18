import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--secondary30);
    padding: 80px 0;  
`;

export const Container = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Picture = styled.img`
    max-width: 350px;
    margin: auto;
`;
