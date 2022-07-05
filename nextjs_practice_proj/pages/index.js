import { useEffect, useState } from "react";
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
    },
]

function HomePage(props) {
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        //send http request
        setLoadedMeetups(DUMMY_MEETUPS);
    }, []);
    return (
            <MeetupList meetups={loadedMeetups} />
    )
}

export default HomePage;