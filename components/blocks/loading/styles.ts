import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete01);
    min-height: 100vH;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    text-align: center;
    max-width: var(--maxWidth);
    margin: auto;
    padding: 0 20px;
`;

export const Picture = styled.img`
    max-width: 260px;
`;