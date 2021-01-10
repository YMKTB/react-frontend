import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "a building",
    description: "none desc...",
    imageUrl:
      "https://i12.haber7.net//haber/haber7/photos/2017/24/RMNu7_1497686337_1889.jpg",
    address: "tr no:112",
    location: {
      lat: 40,
      lng: 40,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "another building",
    description: "none desc...",
    imageUrl:
      "https://i12.haber7.net//haber/haber7/photos/2017/24/RMNu7_1497686337_1889.jpg",
    address: "tr no:112",
    location: {
      lat: 40,
      lng: 40,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>could not find place</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="enter valid address"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="enter valid address desc"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="Submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
