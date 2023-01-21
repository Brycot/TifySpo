import styled from "styled-components";

export const Primary = styled.li`
    list-style: none;
    padding: 0 8px;
    & a {
        display: flex;
        align-items: center;
        gap: 16px;

        height: 40px;
        padding: 0 16px;

        color: #b3b3b3;
        font-size: 0.875rem;
        text-decoration: none;
        font-weight: 700;

        user-select: none;

        transition: all .5s ease;
    }
    & a:hover {
        color: white;
    }
`;
