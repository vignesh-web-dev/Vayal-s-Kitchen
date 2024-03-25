import Head from "next/head";

function HeadSEO(props) {
  return (
    <div>
      <Head>
        <meta
          property="og:title"
          content={`Vayals Indian Kitchen - ${props.content}`}
        />
      </Head>
    </div>
  );
}

export default HeadSEO;
