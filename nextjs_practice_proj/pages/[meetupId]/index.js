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

export async function getStaticPaths(){
    return{
        fallback: true,
        paths: [
            { params: {
                meetupId: 'm1'
            }
        },
            { params: {
                meetupId: 'm2'
            }
        }
        ]
    };
}

export async function getStaticProps(context){
    const meetupId = context.params.meetupId;

    //fetch data for single meetup
    return{
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://picsum.photos/300',
                title: 'First Meetup',
                address: 'Meetup St. 5 Kingsington',
                desctiption: 'this is a meetup'
            }
        }
    }
}

export default MeetupDetails;

//WHEN YOU SIT BACK DOWN, LEARNA BOUT GETSTATICPATHS
