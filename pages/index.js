import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

const Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   // fetch data how you like
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  // Fetch data from an API

  // Just for practice, ideally we should refactor to avoid duplications

  const client = await MongoClient.connect(
    'mongodb+srv://testing_next:JMjjpcAfBKLpsgLD@cluster0.1dkjz.mongodb.net/meetups?retryWrites=true&w=majority'
  );

  const db = await client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  const mappedMeetups = meetups.map((meetup) => ({
    title: meetup.title,
    address: meetup.address,
    image: meetup.image,
    id: meetup._id.toString(),
  }));

  client.close();

  return {
    props: {
      meetups: mappedMeetups,
    },
    revalidate: 10, // seconds on how the page should be regenerated incrementally
  };
};

export default Homepage;
