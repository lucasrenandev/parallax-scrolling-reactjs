import styled from "styled-components";
import image01 from "../../assets/01.jpg"
import image02 from "../../assets/02.jpg"
import image03 from "../../assets/03.jpg"
import image04 from "../../assets/04.jpg"

export const Section = styled.section`
    padding: 100px 15%;
`
export const Header = styled.header`
    text-align: center;
`
export const H2 = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1.8rem;
    letter-spacing: 0.5px;
`
export const Paragraph = styled.p`
    color: #9bacc4;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.9;
`
export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    align-items: center;
    gap: 1.5rem;
    margin-top: 5rem;

    .box {
        position: relative;
        height: 300px;
        border-radius: 10px;
        transition: all 0.5s ease;

        &:hover {
            transform: translateY(20px);
            opacity: 0.6;
            cursor: pointer;
        }
    }
`
export const Box1 = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${image01});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Box2 = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${image02});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Box3 = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${image03});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Box4 = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 75%, #000 100%), url(${image04});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
export const Text = styled.p`
    color: #fff;
    position: absolute;
    bottom: 22px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
`