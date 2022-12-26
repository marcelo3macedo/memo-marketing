import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--secondary50);
`;

export const Container = styled.main`
    max-width: var(--maxWidth);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;