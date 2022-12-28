import styled from 'styled-components';

export const Wrapper = styled.div`
    border-bottom: 2px solid var(--neutral60);

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Container = styled.main`
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;