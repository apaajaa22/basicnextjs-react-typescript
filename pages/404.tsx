import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);
  return (
    <div>
      <h1 className="title-not-found">Ooopss... Halaman tidak tersedia</h1>
    </div>
  );
}

export default Custom404;
