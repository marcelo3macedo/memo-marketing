import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 20px 0;
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: var(--pallete03);

    @media (max-width: 768px) {
        line-height: 40px;
    }
`;

export const TitleFeatured = styled.h1`
    text-transform: uppercase;
    color: var(--pallete04);
    padding: 0 20px;

    @media (max-width: 768px) {
        line-height: 40px;
    }
`;

export const SubTitle = styled.h3`
    padding: 30px 0;
    font-weight: normal;
    color: var(--pallete03);
`;

export const Actions = styled.div`
    padding: 20px 0;

    @media (max-width: 768px) {        
        text-align: center;
    }
`;

export const TitleArea = styled.div`    
    
`;

export const Row = styled.div`    
    display: flex;
`;