import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--secondary30);
    padding: 80px 0;  

    @media (max-width: 768px) {
        padding: 80px 20px;  
    }
`;

export const Container = styled.div`
    text-align: center;
    max-width: var(--maxWidth);
    margin: auto;
`;

export const Title = styled.h1`
`;
