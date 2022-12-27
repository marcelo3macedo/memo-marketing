import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete02);
    padding: 80px 0;  

    @media (max-width: 768px) {
        padding: 40px 0;
    }    
`;

export const Container = styled.div`
    text-align: center;
    max-width: var(--maxWidth);
    margin: auto;
    padding: 0 20px;
`;

export const Title = styled.h1`
    color: var(--pallete01);
`;
