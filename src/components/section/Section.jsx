import { Section, Header, H2, Paragraph,
Main, Box1, Box2, Box3, Box4, Text } from "./styled";

export default function section() {
    return(
        <Section>
            <Header>
                <H2>Photography</H2>
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque, asperiores voluptates quas qui dolor iusto atque distinctio, velit ullam soluta accusantium ab a tempora, sed quos odit!</Paragraph>
            </Header>

            <Main>
                <Box1 className="box">
                    <Text>Like</Text>
                </Box1>

                <Box2 className="box">
                    <Text>Comment</Text>
                </Box2>

                <Box3 className="box">
                    <Text>Share&</Text>
                </Box3>

                <Box4 className="box">
                    <Text>Subscribe</Text>
                </Box4>
            </Main>
        </Section>
    )
}