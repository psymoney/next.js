import Link from 'next/link'

export async function getServerSideProps() {
  console.log('server')

  return {
    props: { time: new Date().toISOString() }
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">
        !!!{time}
      </h1>
      <h1><Link href="/csr">csr</Link></h1>
      <h1><Link href="/ssg">ssg</Link></h1>
      <h1><Link href="/isr">isr</Link></h1>
    </>
  )
}
