import Layout from '@components/Layout'
import Head from 'next/head'

function GalleryPage() {
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>
      Your COntent
    </>
  )
}

GalleryPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Gallery">{page}</Layout>
}

export default GalleryPage
