import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

const AllQuotes = () => {
    const {sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect( () => {
        sendRequest()
    }, [sendRequest]);

    if(status === 'pending'){
        return(
            <div className='centered pending'>
                <LoadingSpinner />
            </div>
        );
    }

    if(error){
        return <p className='centered focused'>{error}</p>
    }
    if(status === 'complete' && (!loadedQuotes || loadedQuotes.length === 0)){
        return <NoQuotesFound />
    }
    return <QuoteList quotes={loadedQuotes}/>
};

export default AllQuotes;