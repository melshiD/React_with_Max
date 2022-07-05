import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
    return (
        <Fragment>
        <h1>The News Page</h1>
        <ul>
            <li>
                <Link href="news/someDetail" >Nextjs is amazing</Link>
            </li>
            <li>Seriously, it is amazing</li>
        </ul>
        </Fragment>
    )
}

export default NewsPage;