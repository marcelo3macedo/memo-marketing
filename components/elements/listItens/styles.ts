import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {        
        flex-direction: column;
    }
`;

export const Container = styled.div`
    padding: 15px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    svg {
        margin: 20px 0;
        fill: var(--pallete01);
    }
`;

export const Title = styled.h3`
    padding: 10px 0;
    color: var(--pallete01);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SubTitle = styled.h4`
    padding: 15px 0;
    font-weight: normal;
    line-height: 25px;
    color: var(--pallete01);
`;

export const Actions = styled.div`
    padding: 20px 0;
`;

export const Info = styled.div`
    padding: 0 20px;
    text-align: center;
`;