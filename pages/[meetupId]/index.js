import { MongoClient } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      image="https://media.istockphoto.com/photos/the-city-of-dreams-new-york-citys-skyline-at-twilight-picture-id599766748?k=20&m=599766748&s=612x612&w=0&h=lZ8gpCQQifxd0V7zOwFFkFym9bnZ6TBQkWafAHnc-D4="
      title="First Meetup"
      address="Some street"
      description="This is some meetups"
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://testing_next:JMjjpcAfBKLpsgLD@cluster0.1dkjz.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = await client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  //fetch data for a single meetup
  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://media.istockphoto.com/photos/the-city-of-dreams-new-york-citys-skyline-at-twilight-picture-id599766748?k=20&m=599766748&s=612x612&w=0&h=lZ8gpCQQifxd0V7zOwFFkFym9bnZ6TBQkWafAHnc-D4=',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some street',
        description: 'This is some meetups',
      },
    },
  };
}

export default MeetupDetailPage;
