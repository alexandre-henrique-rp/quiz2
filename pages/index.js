import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head';



export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:title" content="Quiz Caverna do Dragão" />
        <meta property="og:type" content="game" />
        <meta property="og:description" content="Venha testar seus conhecimentos Sobre a animeção Caverna do Dragão" />
        <meta property="og:url" content="https://caverna-do-drago-quiz.alexandre-herique.vercel.app/" />
        <meta property="og:image" content="https://i.pinimg.com/originals/04/2f/4a/042f4af66eaca08be86f2bc87144f623.jpg" />
        <title>Quiz - Caverna do Dragão</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Alexandre-herique" />
    </QuizBackground>
  );
}
