import styled from "styled-components";

export const Li = styled.li`
    height: 32px;
    & a {
        text-decoration: none;
        color: #b3b3b3;
    }
    & a:hover {
        transition: all .5s ease;
        color: white;
    }
    & a span {
        margin-block: 0px;
        font-size: 0.875rem;
        font-weight: 600;
        color: inherit;
    }
`;
