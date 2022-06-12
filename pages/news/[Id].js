import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  console.log(router.query.Id);
  return <h1>
  </h1>
}

export default DetailPage;