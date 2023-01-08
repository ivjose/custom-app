import Layout from '@components/Layout'
import Head from 'next/head'

function UserManagementPage() {
  return (
    <>
      <Head>
        <title>User Management</title>
      </Head>
      Your COntent
    </>
  )
}

UserManagementPage.getLayout = function getLayout(page: JSX.Element) {
  return <Layout title="User Management">{page}</Layout>
}

export default UserManagementPage
