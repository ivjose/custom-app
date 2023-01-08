import Layout from '@components/Layout'
import Head from 'next/head'

function BoardPage() {
  return (
    <>
      <Head>
        <title>Board</title>
      </Head>
      Your COntent
    </>
  )
}

BoardPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Board">{page}</Layout>
}

export default BoardPage
