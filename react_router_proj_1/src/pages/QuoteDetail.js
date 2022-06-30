import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
    { id: 'q1', author: 'Winston Churchill', text: 'Success if not final; failure is not fatal:' },
    { id: 'q2', author: 'David Melsheimer', text: 'Sidevoid Crack!' },
    { id: 'q3', author: 'Maximilian', text: 'learning react is fun' },
    { id: 'q4', author: 'Max', text: 'Learning react is great!' },
    { id: 'q5', author: 'Winston Churchill', text: 'We will fight them...' },
]

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    let quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
    if (!quote) {
        quote = {};
        quote.text = "no quote found";
        quote.author = "Seriously, we didn't find it";
    }
    console.log(match)
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={match.path} exact>
            <div className="centered">
                <Link className='btn--flat' to={`${match.url}/comments`}>
                    Open Comments
                </Link>
            </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment >
    )
};

export default QuoteDetail;