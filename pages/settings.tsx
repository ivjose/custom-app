import Layout from '@components/Layout'
import Head from 'next/head'

function SettingsPage() {
  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      Your COntent
    </>
  )
}

SettingsPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Settings">{page}</Layout>
}
export default SettingsPage
