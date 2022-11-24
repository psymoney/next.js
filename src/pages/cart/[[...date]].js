import Layout from "components/Layout";
import SubLayout from "components/SubLayout";
import {useRouter} from "next/router";
import Link from "next/link";

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      <h1 className="title">CartDateSlug {JSON.stringify(date)}</h1>
      <Link href="/cart/2022/06/25">to 2022/6/25</Link>
      <br/>
      <button onClick={() => router.push('/cart/2022/06/25')}>to 2022/06/25</button>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>
        {page}
      </SubLayout>
    </Layout>
  )
}