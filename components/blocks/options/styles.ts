import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--secondary30);
    padding: 80px 0;  

    @media (max-width: 768px) {
        padding: 60px 20px;
    }
`;

export const Container = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;

export const Picture = styled.img`
    max-width: 350px;
    margin: auto;

    @media (max-width: 768px) {
        max-width: 200px;
        padding: 20px 0;
    }
`;
