import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Picture = styled.img`
    max-width: 150px;
`;

export const Title = styled.h5`
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 40px;
`;