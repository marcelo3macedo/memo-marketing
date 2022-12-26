import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 500px;

    @media (max-width: 768px) {
        padding: 40px 0;
    }
`;

export const Title = styled.h1`
    text-transform: uppercase;
`;

export const SubTitle = styled.h3`
    padding: 15px 0;
    font-weight: normal;
`;

export const Actions = styled.div`
    padding: 20px 0;
`;