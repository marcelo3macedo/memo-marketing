import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--dark80);
    padding: 10px 0;
`;

export const Container = styled.main`
    max-width: var(--maxWidth);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
`;

export const Picture = styled.img`
    max-width: 80px;    
`;

export const Info = styled.div`
    
`;

export const Title = styled.h4`
    color: var(--secondary10);
    padding-bottom: 10px;   
`;

export const Item = styled.h4`
    font-weight: normal;
    color: var(--secondary10);
    padding: 5px 0;
`;

export const Copyright = styled.div`
    text-align: center;
    padding: 40px 0 10px 0;
`;

export const Message = styled.h5`
    color: var(--secondary10);    
`;