import React from 'react';
import PlaceList from '../components/PlaceList';
import {useParams} from 'react-router-dom';
const DUMMY_PLACES =[
    {
        id : 'p1',
        title : 'a building 1',
        description : 'none desc...',
        imageUrl : 'https://i12.haber7.net//haber/haber7/photos/2017/24/RMNu7_1497686337_1889.jpg',
        address: 'tr no:112',
        location:{
           lat: 40,
           lng: 40 
        },
        creator:'u1'
    },
    {
        id : 'p2',
        title : 'another building',
        description : 'none desc...',
        imageUrl : 'https://i12.haber7.net//haber/haber7/photos/2017/24/RMNu7_1497686337_1889.jpg',
        address: 'tr no:112',
        location:{
           lat: 40,
           lng: 40 
        },
        creator:'u2'
    }

];

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces}></PlaceList>
};


export default UserPlaces;