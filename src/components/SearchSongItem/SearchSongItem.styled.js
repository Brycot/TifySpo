import styled from 'styled-components';

export const SongContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    gap: 16px;
    & img {
        width: 40px;
        height: 40px;
    }
    & .SongText {
        width: 100%;
        height: 100%;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }
    & .songDuration {
        font-size: 0.875rem;
    }
`;

export const Artist = styled.a`
    font-size: 0.875rem;
    color: #b3b3b3;
    text-decoration: none;
    margin-right: 4px;
    &:hover {
        color: #eeee;
        text-decoration: underline;
    }
`;
