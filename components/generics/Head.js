/** LIBRARIES */
import Head from "next/head";

export default function HeadComponent({
  title,
  description,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
}) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />

      <meta name="description" content={description} />

      <meta
        property="og:image"
        content={ imageUrl }/>

      <meta
        property="og:image:secure_url"
        content={ imageUrl }/>

      <meta
        property="og:image:alt"
        content={ imageAlt }/>

      <meta
        property="og:image:width"
        content={ imageWidth }/>

      <meta
        property="og:image:height"
        content={ imageHeight }/>

      <meta
        property="og:image:type"
        content="image/png" />
    </Head>
  );
}
