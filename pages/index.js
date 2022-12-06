import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>Junior Jarvis</title>
      </Head>
      <div className="container">
        
        <div className="prompt-container">
          <textarea placeholder="ask me anything, your junior jarvis..." className="prompt-box" />
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://github.com/aaqibsheikh"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <p>@aaqibsheikh</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
