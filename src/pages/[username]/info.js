import Layout from "components/Layout";
import SubLayout from "components/SubLayout";

export default function UserInfo() {
  return (
    <>
      <h1 className="title">User Info</h1>
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