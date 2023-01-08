import Layout from '@components/Layout'
import Head from 'next/head'

function ProfilePage() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      Your COntent
    </>
  )
}

ProfilePage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="Profile">{page}</Layout>
}

export default ProfilePage
