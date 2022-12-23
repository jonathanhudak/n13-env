import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App with ENV variables</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p style={{ color: 'limegreen', fontWeight: 'bold', fontSize: '3rem' }}>process.env.NEXT_PUBLIC_FOO={process.env.NEXT_PUBLIC_FOO}</p>
        <p style={{ color: 'limegreen', fontWeight: 'bold', fontSize: '3rem' }}>process.env.NEXT_PUBLIC_BAR={process.env.NEXT_PUBLIC_BAR}</p>
        <p style={{ color: 'limegreen', fontWeight: 'bold', fontSize: '3rem' }}>process.env.NEXT_PUBLIC_BAR={process.env.NEXT_PUBLIC_ZAZZ}</p>
        
        
        <code style={{ color: 'limegreen' }}>
          <pre>
        {`
          <p>process.env.NEXT_PUBLIC_FOO={process.env.NEXT_PUBLIC_FOO}</p>
          <p>process.env.NEXT_PUBLIC_BAR={process.env.NEXT_PUBLIC_BAR}</p>
          <p>process.env.NEXT_PUBLIC_BAR={process.env.NEXT_PUBLIC_ZAZZ}</p>
        `}
        </pre>
        </code>

        <p>
            <a style={{ color: 'magenta', textDecoration: 'underline' }} href="https://nextjs.org/docs/basic-features/environment-variables">https://nextjs.org/docs/basic-features/environment-variables</a>
        </p>
      </main>
    </div>
  )
}
