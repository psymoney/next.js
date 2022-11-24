import Layout from "components/Layout"
import SubLayout from "components/SubLayout"
import {useRouter} from "next/router"


export default function UserInfo() {
  const router = useRouter()
  const { username, info } = router.query

  return (
    <>
      <h1 className="title">{username}'s {info}</h1>
      <input type="text" value={username}/>
      <input type="text" value={info}/>
    </>
  )
}

UserInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>
        {page}
      </SubLayout>
    </Layout>
  )
}