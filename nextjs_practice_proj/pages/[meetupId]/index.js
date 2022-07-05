import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail 
            image='https://picsum.photos/300'
            title='first Meetup!'
            address='meetup address 334N'
            description='this is a meetup, hardcoded yall'
        />
    )
}

export default MeetupDetails;