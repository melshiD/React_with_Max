import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'awesome meetup',
        image: 'https://picsum.photos/1200/1300',
        address: 'First of 1st One South St.',
        description: 'this is a fantastic place to meetup'
    },
    {
        id: 'm2',
        title: 'Here we go',
        image: 'https://picsum.photos/1200/1301',
        address: 'Second st.',
        description: 'here we are!'
    },
    {
        id: 'm3',
        title: 'creepy meetup',
        image: 'https://picsum.photos/1201/1300',
        address: '1456 Southish St.',
        description: 'Better than all the meetups'
    }
];

function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}

export async function getStaticProps(){
    //fetch data from an api
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 3600
        //sets number of seconds that page is re-pregenerated on server after deployment
    };
}

export default HomePage;