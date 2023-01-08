import Layout from '@components/Layout'
import Head from 'next/head'

function ReportsPage() {
  return (
    <>
      <Head>
        <title>Reports</title>
      </Head>
      Your COntent
    </>
  )
}

ReportsPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Reports">{page}</Layout>
}

export default ReportsPage
