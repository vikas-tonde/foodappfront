import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from 'next/head';
import { useEffect, useState } from 'react'
import cookieCutter from 'cookie-cutter';
import Script from "next/script";
import { useRouter } from 'next/router';
import Login from './login'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  const router = useRouter();
  function isLoggedIn() {
    try {
      if (cookieCutter.get('jwt') === "" || cookieCutter.get('jwt') === undefined) {
        router.push("/login");
        return false
      }
      return true;
    } catch (error) {
      return false;
    }
  }
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  }

  if (Component.name == 'Login' || Component.name == 'Register' || Component.name == 'Home' || isLoggedIn()) {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Food Bank | {Component.name}</title>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
//   else if(!isLoggedIn())
//   console.log(isLoggedIn());
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <title>Food Bank | Login</title>
//         <link
//           async
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
//         />
//         <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//         <script src="https://kit.fontawesome.com/a1c4c0eac6.js" crossOrigin="anonymous"></script>
//       </Head>

//       <Login />
//     </>
//   )



// }

export default MyApp
