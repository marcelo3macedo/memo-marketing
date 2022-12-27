import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--pallete03);
    padding: 80px 0;
    text-align: center;

    @media (max-width: 768px) {
        padding: 80px 20px;
    }
`;

export const Container = styled.div`
    max-width: var(--maxWidth);
    margin: auto;
    min-height: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Picture = styled.img`
    max-width: 250px;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const PictureFull = styled.img`
    max-width: 1000px;
    padding: 20px 0;
    border-radius: 80px;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;


export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: auto;
`;

export const Title = styled.h2`
    text-align: left;
    color: var(--pallete01);
`;

export const SubTitle = styled.h4`
    color: var(--pallete01);
    text-align: justify;
    max-width: 50%;
    line-height: 30px;
`;
