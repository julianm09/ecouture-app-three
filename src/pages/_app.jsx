import App from 'next/app'
import '../styles/index.css'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {


  return (
    <>
      <Component {...pageProps} />

      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Nunito:wght@300;400;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap');

          html,
          body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            font-family: Nunito;

            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none; 
          }

          *::-webkit-scrollbar {
            display: none;
          }

          * {
            margin: 0;
          }

          a {
            color: white;
          }

          img{
            max-width: none;

          }

          @keyframes blink {
            from {
              opacity: 0%;
            }

            50% {
              opacity: 100%;
            }

            to {
              opacity: 0%;
            }
          }

          @keyframes float {
            from {
              bottom: 35vh;
            }

            50% {
              bottom: 40vh;
            }

            to {
              bottom: 35vh;
            }
          }

          @keyframes waves {
            from {
              bottom: -5vh;
            }

            50% {
              bottom: 0vh;
            }

            to {
              bottom: -5vh;
            }
          }

          @keyframes waves-2 {
            from {
              bottom: -10vh;
            }

            50% {
              bottom: -20vh;
            }

            to {
              bottom: -10vh;
            }
          }

          @keyframes smoke {
            from {
              opacity: 0;
              bottom: -10vh;
            }
            30%{
              opacity: 100%;

            }


            to {
              bottom: 10vh;
              opacity: 0;
            }
          }

          @keyframes treedrop{
            0%{top: -50vh;}

            100%{top: 50vh;}
          }

          @keyframes waveDown {
            // 0%{bottom: -20vh;}


          @keyframes grass {
            from {
              opacity: 100%;
            }
        
            to {
              opacity: 0;
            }
          }


          @keyframes water-drop {
            from {
              opacity: 0;
              top: 100px;
            }
            30%{
              opacity: 100%;

            }

           

            to {
              top: 150px;
              opacity: 0;
            }
          }

            100%{bottom: -50vh;}
          }

        
          @keyframes waterUp {
            0%{bottom: -50vh}

            50%{bottom: 0vh}


            100%{bottom: -10vh}
          }

          @keyframes icegrow {
            0%{height: 50%}

            100%{height: 80%}
          }
         

          @keyframes oilFloat {
            from {
              bottom: 20vh;
            }

            50% {
              bottom: 25vh;
            }

            to {
              bottom: 20vh;
            }
          }

          @keyframes oilTwoFloat {
            from {
              bottom: 15vh;
            }

            50% {
              bottom: 25vh;
            }

            to {
              bottom: 15vh;
            }
          }

          @keyframes oilDrum {
            from {
              bottom: 31vh;
            }

            50% {
              bottom: 32vh;
            }

            to {
              bottom: 31vh;
            }
          }

          @keyframes stinkyFloatTwo {
            from {
              bottom: 30vh;
              opacity: 0%;
            }

            50% {
              opacity: 100%;
            }

            to {
              bottom: 100vh;
            }
          }

          @keyframes teeShirt {
            from{
              width: 350px;
              transform: rotate(0deg);
            }

            to{
              width: 0px;
              transform:rotate(360deg);
            }
          }

          @keyframes cotton {
            from{
              width: 0px;
              transform: rotate(360deg);
            }

            to{
              width: 350px;
              transform:rotate(0deg);
            }
          }


        `}
      </style>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
