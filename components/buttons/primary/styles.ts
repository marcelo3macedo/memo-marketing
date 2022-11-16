import styled from 'styled-components';

export const Wrapper = styled.button`
    border-radius: 10px;
    border: none;
    background: var(--secondaryDark);
    color: var(--textSecondary100);

    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const TextValue = styled.h4`
    padding: 15px 40px;
    font-weight: bold;
    letter-spacing: 1px;
`;