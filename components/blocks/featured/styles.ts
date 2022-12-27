import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
    padding: 120px 0;

    @media (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const Container = styled.div`
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Picture = styled.img`
    width: 45%;
    padding: 0 20px;
    margin: auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;
