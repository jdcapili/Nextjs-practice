import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Script from 'next/script';
import Layout from "@/components/layout";

export default function FirstPost() {
    return <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        {/* <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        /> */}
        <Image
            src="/images/sleeping-cubone.png"
            height={144}
            width={144}
            alt="eepy"
        />
        <h1>First Post</h1>
        <h2><Link href="/">Back to Home</Link></h2>
    </Layout>
}