import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import Layout from '../components/layout/layout';
import '../styles/globals.css';

//redux
//m_MightDelete:
import { Provider } from 'react-redux'
import store from '../redux/store'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        { <Toaster /> }
        {<Component {...pageProps} />}
      </Provider>
    </>
  )
}


export default MyApp
