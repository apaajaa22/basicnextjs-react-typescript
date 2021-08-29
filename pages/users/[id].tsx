/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import Layout from '../../components/Layout';

interface User {
  id: number,
  name: string,
  email: string
}
interface userDetailProps {
  user: User
}
function userDetail(props: userDetailProps) {
  const { user } = props;
  return (
    <Layout pageTitle="User Detail">
      <p>{user.name}</p>
      <p>{user.email}</p>
    </Layout>
  );
}

export default userDetail;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: String
  }
}
export async function getStaticProps(context: GetStaticProps) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
}
