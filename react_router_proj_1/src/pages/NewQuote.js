import { useHistory } from 'react-router-dom';
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
    const {sendRequest, status} = useHttp(addQuote); //ok, this is gonna take some investigation!
    //WHEN YOU SIT BACK DOWN FINISH IMPLEMENTING THE QUOTE API
    const history = useHistory();
    const addQuoteHandler = quoteData => {
        console.log(quoteData);
        history.push('/quotes');

    }
    return <QuoteForm onAddQuote={addQuoteHandler} />
};

export default NewQuote;