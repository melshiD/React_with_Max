//Only included in server-side bundle
import {MongoClient} from 'mongodb';
import credentials from '../credentials';
import Head from 'next/head';

//Included in client bundle
import { Fragment } from 'react';
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
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="browse these fantastic meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     //fetch from api, run serverside code here, it never runs on server and not on client
//     return{
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }

export async function getStaticProps(){
    const {password, username} = credentials();
    const client = await MongoClient.connect(
        `mongodb+srv://${username}:${password}@cluster0.fjg9ckv.mongodb.net/meetups?retryWrites=true&w=majority`
        );
    const db = client.db('meetups');

    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        //need to map through and condition object from mongodb to be usable
        props: {
            meetups: meetups.map(meetup => ({
               title: meetup.title,
               address: meetup.address,
               image: meetup.image,
               id: meetup._id.toString()
            }))
        },
        revalidate: 3600
        //sets number of seconds that page is re-pregenerated on server after deployment
    };
}

export default HomePage;