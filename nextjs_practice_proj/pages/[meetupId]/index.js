import Head from 'next/head';
import {MongoClient, ObjectId} from 'mongodb';
import credentials from '../../credentials';

import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
        <MeetupDetail 
            image = {props.meetupData.image}
            title = {props.meetupData.title}
            address={props.meetupData.address}
            description={props.meetupData.description}
        />
        </Fragment>
    )
}

//WHEN YOU SIT BACK DOWN, DEPLOY THE APP

export async function getStaticPaths(){
    const {password, username} = credentials();
    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.fjg9ckv.mongodb.net/meetups?retryWrites=true&w=majority`);

    const database = client.db();
    const meetupsCollection = database.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return{
        fallback: true,
        paths: meetups.map(meetup => ({ params: { meetupId: meetup._id.toString() } }))
    };
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    const {password, username} = credentials();
    const client = await MongoClient.connect(`mongodb+srv://${username}:${password}@cluster0.fjg9ckv.mongodb.net/meetups?retryWrites=true&w=majority`);

    const database = client.db();
    const meetupsCollection = database.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

    console.log(selectedMeetup);
    //fetch data for single meetup
    return{
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}

export default MeetupDetails;