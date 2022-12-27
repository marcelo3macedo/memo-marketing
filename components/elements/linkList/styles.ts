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

export const Title = styled.h4`
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 40px;
    color: var(--pallete03);

    &.featured {
        color: var(--pallete02);
    }
`;