import { useRouter } from 'next/router'

function DetailPage() {
    const router = useRouter();

    const routeInput = router.query.newsId;

    console.log(routeInput);
    return <h1>The Important Details Page</h1>
}

export default DetailPage;