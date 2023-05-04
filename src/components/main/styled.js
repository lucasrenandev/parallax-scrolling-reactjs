import styled from "styled-components";

export const Main = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }

    &::before {
        position: absolute;
        content: '';
        bottom: 0;
        width: 100%;
        min-height: 1400px;
        z-index: 1000;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 80%, #000 100%);
    }
`
export const FirstImage = styled.img`

`
export const LastImage = styled.img`
    z-index: 10;
`
export const H1 = styled.h1`
    position: relative;
    text-align: center;
    padding-top: 205px;
    font-family: 'Caveat Brush', cursive;
    font-size: 12rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 12px;
    z-index: 2;
`