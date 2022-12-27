import styled from 'styled-components';

export const Wrapper = styled.button`
    border-radius: 10px;
    border: none;
    background: none;
    color: var(--secondary10);
    
    &:hover {
        cursor: pointer;
        opacity: var(--opacity);
    }
`;

export const TextValue = styled.h4`
    font-weight: normal;
`;