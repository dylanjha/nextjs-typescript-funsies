import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '@mux-elements/mux-audio'

const Home: NextPage = () => {

  useEffect(() => {
    //
    // import this client side b/c ES modules on the server are no-bueno
    // https://github.com/vercel/next.js/issues/9890
    //
    // import('@mux/mux-video');
  }, [])

  return (
    <div>
      <Head>
        <title>mux-video element</title>
      </Head>

      <main>
        <mux-audio
          playback-id="vDpm5ygrRJgfIEPNIc02IJR4Trf3z00AiP"
          controls
          autoplay
          debug
          env-key="cqtqt2jfbq235huvso0djbn56"
        >
        </mux-audio>

      </main>
      <style jsx>{`
        main {
          padding: 60px;
        }
        :global(mux-video) {
          width: 100%;
          max-width: 500px;
        }
      `}
      </style>
    </div>
  )
}

export default Home
