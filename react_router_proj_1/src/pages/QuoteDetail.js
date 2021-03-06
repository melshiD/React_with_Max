import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const {quoteId} = params; //ok, why is the app not rendering single quotes!
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

    useEffect( () => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        )
    }

    if(error){
        return <p className="centered">{error}</p>
    }

    if(!loadedQuote.text){
        return <p>No quote found</p>
    }

    console.log(match)
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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