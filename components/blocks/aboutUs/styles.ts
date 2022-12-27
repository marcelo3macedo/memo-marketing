import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--dark80);
    padding: 80px 0;  
    
    @media (max-width: 768px) {
        padding: 80px 20px;
    }
`;

export const Container = styled.div`
    text-align: center;
    max-width: var(--maxWidth);
    margin: auto;
    padding: 0 20px;
`;

export const Title = styled.h1`
    color: var(--secondary10);
`;

export const Description = styled.h3`
    color: var(--secondary10);
    padding: 40px 0;
    font-weight: normal;
    text-align: justify;
    line-height: 55px;
    
`;

export const Action = styled.div`
    padding: 20px 0;
`;
