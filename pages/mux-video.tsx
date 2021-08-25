import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '@mux/mux-video'

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
        <mux-video
          playback-id="DS00Spx1CV902MCtPj5WknGlR102V5HFkDe"
          controls
          autoplay
          muted
          debug
          env-key="cqtqt2jfbq235huvso0djbn56"
        >
        </mux-video>

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
