import Head from 'next/head'

import Login from '@modules/Login'

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main className="h-full">
        <Login />
      </main>
    </>
  )
}

export default LoginPage
