import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

import db from '../../db.json'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }: any) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="https://cdn.auth0.com/blog/react-js/react.png" />
        <link rel="apple-touch-icon" href="https://cdn.auth0.com/blog/react-js/react.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <NextSeo
        title="Jiu-jitsu Quiz"
        description="Desafie e responda perguntas sobre o Jiu-jitsu!"
        canonical="https://jiujitsuquiz.vercel.app"
      />
        <GlobalStyle />
        {/* // eslint-disable-next-line react/prop-types */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}