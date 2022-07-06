import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function NewMeetupPage() {
    const router = useRouter();
    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', 
        {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    }

    return (
        <Fragment>
        <Head>
            <title>Add a React Meetup</title>
            <meta name="description" content="browse these fantastic meetups" />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    )
}

export default NewMeetupPage;