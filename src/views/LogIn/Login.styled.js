import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100vh;
    filter: blur(8px);
    background: linear-gradient(
            0deg,
            rgba(2, 0, 36, 0) 0%,
            rgba(51, 0, 255, 0.1) 100%
        ),
        url("https://i.imgur.com/E6iUHl5.png");
    background-size: cover;
    position: absolute;
    top: 0;
    z-index: -3;
`;

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;

        width: 400px;
        height: 500px;
        border-radius: 14px;
        background-color: #121212;
    }
    & div svg {
        color: white;
    }
`;

export const ButtonLogin = styled.button`
    padding: 12px 100px;
    border-radius: 30px;
    background-color: white;
    color: #121212;
    letter-spacing: 1.4px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    user-select: none;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        background-color: #7c7c7c;
    }
`;
