function InquiriesPage() {
  return <div>InquiriesPage</div>
}

export default InquiriesPage

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/inquiries/board',
      permanent: false,
    },
  }
}
