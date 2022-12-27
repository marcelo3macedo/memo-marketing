import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
    padding: 10px 0px;
`;

export const Container = styled.main`
    max-width: var(--maxWidth);
    padding: 0 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;