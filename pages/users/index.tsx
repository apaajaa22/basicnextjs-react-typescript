import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

interface UsersProps {
  dataUsers: Array<any>
}
function index(props : UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((res) => (
        <div className={styles.card} key={res.id} onClick={() => router.push(`/users/${res.id}`)}>
          <p>{res.name}</p>
          <p>{res.email}</p>
        </div>
      ))}
    </Layout>
  );
}

export default index;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
