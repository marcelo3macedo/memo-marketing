import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 60px 0;
    background: var(--pallete01);
    border-radius: 60px;

    @media (max-width: 768px) {
        border-radius: 10px;
    }
`;

export const Container = styled.div`
    
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
    border-bottom: 2px solid var(--neutral60);
`;

export const Body = styled.div`
    
`;

export const Description = styled.h4`
    width: 40%;

    @media (max-width: 768px) {
        width: 25%;
        padding: 0 10px;
    }
`;

export const Option = styled.h3`
    width: 30%;
    padding: 5px 0;
    text-align: center;
    text-transform: uppercase;


    @media (max-width: 768px) {
        width: 35%;
    }
`;

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    
    h4 {
        font-weight: normal;
    }
`;

export const Footer = styled.div`
    width: 100%;
`;

export const Action = styled.div`
    padding: 10px 0;

    @media (max-width: 768px) {
        padding: 0 10px;
    }
`;