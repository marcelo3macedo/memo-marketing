import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    @media (max-width: 768px) {
        padding: 10px 0;
    }
`;

export const Picture = styled.img`
    max-width: 260px;

    @media (max-width: 768px) {
        max-width: 200px;
    }
`;

export const Title = styled.h2`
    padding: 0 10px;
    font-weight: bold;
`;