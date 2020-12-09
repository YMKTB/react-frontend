import React from 'react';
import PlaceItem from '../components/PlaceItem';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES =[
    {
        id : 'p1',
        title : 'a building',
        description : 'none desc...',
        imageUrl : 'https://i12.haber7.net//haber/haber7/photos/2017/24/RMNu7_1497686337_1889.jpg',
        adress: 'tr no:112',
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
        adress: 'tr no:112',
        location:{
           lat: 40,
           lng: 40 
        },
        creator:'u1'
    }

]

const UserPlaces = props => {
    return <PlaceList items={DUMMY_PLACES}></PlaceList>
};


export default UserPlaces;