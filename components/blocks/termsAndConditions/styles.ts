import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
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

export const Title = styled.h2`
`;

export const Elements = styled.div`
    padding: 10px 0;
`;


