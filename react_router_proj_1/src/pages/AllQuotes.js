import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = [
    {id: 'q1', author: 'Winston Churchill', text: 'Success if not final; failure is not fatal:'},
    {id: 'q2', author: 'David Melsheimer', text: 'Sidevoid Crack!'},
    {id: 'q3', author: 'Maximilian', text: 'learning react is fun'},
    {id: 'q4', author: 'Max', text: 'Learning react is great!'},
    {id: 'q5', author: 'Winston Churchill', text: 'We will fight them...'},
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_DATA}/>
};

export default AllQuotes;