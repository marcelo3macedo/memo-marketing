import styled from 'styled-components';

export const Wrapper = styled.div`
background: rgb(119,154,158);
background: linear-gradient(7deg, rgba(119,154,158,1) 0%, rgba(158,211,218,1) 28%, rgba(178,227,233,1) 100%);
`;

export const Container = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Picture = styled.img`
    max-width: 600px;
`;
