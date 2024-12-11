import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ overflow: 'hidden', textAlign: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgb(5, 5, 5)' }}>
      <Head>
        <title>NovaEdge Media</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/minimalist_logo.jpg" />
      </Head>
      <img
        src="/detailed_logo.jpg"
        alt="NovaEdge Media detailed logo"
        style={{ margin: '0 auto 30px auto', borderRadius: '100%' }}
        height="340"
        width="340"
      />
      <div style={{ fontSize: '35px', color: 'aliceblue', fontFamily: 'Helvetica', fontWeight: 'bolder' }}>
        We will be online soon.
      </div>
    </div>
  );
}
