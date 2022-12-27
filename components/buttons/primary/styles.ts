import styled from 'styled-components';

export const Wrapper = styled.button`
    padding: 10px;
    border-radius: 30px;
    border: none;
    background: var(--pallete04);
    color: var(--pallete01);

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const TextValue = styled.h4`
    padding: 15px 30px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;

    @media (max-width: 768px) {
        padding: 15px 15px;
    }
`;