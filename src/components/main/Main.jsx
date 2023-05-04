import { Main, FirstImage, LastImage, H1 } from "./styled";
import firstImage from "../../assets/first.jpg"
import lastImage from "../../assets/last.png"
import { useEffect } from "react";

export default function main() {
    useEffect(() => {
        const firstImage = document.getElementById("first-image")
        const lastImage = document.getElementById("last-image")
        const title = document.getElementById("title")

        window.addEventListener("scroll", () => {
            const scrollValue = window.scrollY

            firstImage.style.top = scrollValue * 0.7 + "px"
            lastImage.style.bottom = scrollValue * 0.5 + "px"
            title.style.top = scrollValue * 1 + "px"
        })
        
    }, [])

    return(
        <Main>
            <FirstImage src={firstImage} id="first-image" alt="First image"/>
            <LastImage src={lastImage} id="last-image" alt="Last image"/>
            <H1 id="title">Parallax</H1>
        </Main>
    )
}