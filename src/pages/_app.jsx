import App from 'next/app'
import '../styles/index.css'

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
          }

          * {
            margin: 0;
          }

          a {
            color: white;
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
         
          @keyframes cityDown {
            0% {top: 150px;}
          
            100% {top: 300px;}
          }

          @keyframes cityUp {
            0%{top: 300px}

            100%{top: 150px}

          }

          @keyframes waterUp {

            0%{height: 50vh}

            50%{height: 65vh}

            100%%{height: 50vh}
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
