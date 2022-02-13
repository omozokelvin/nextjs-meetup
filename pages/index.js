import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://image.cnbcfm.com/api/v1/image/105833938-1554408195028gettyimages-882012696.jpeg?v=1596136810&w=630&h=354',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup'
  },
  {
    id: 'm2',
    title: 'The second Meetup',
    image: 'https://media.istockphoto.com/photos/the-city-of-dreams-new-york-citys-skyline-at-twilight-picture-id599766748?k=20&m=599766748&s=612x612&w=0&h=lZ8gpCQQifxd0V7zOwFFkFym9bnZ6TBQkWafAHnc-D4=',
    address: 'Some address 10, 12345 Some City',
    description: 'This is the second meetup'
  }
]

const Homepage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS}/>
}

export default Homepage;