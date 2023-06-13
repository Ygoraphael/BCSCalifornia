import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/Logo.png" />
        <title>BCS California</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout;