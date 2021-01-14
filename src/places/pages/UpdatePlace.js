import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./PlaceForm.css";

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

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );
  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>could not find place</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="enter valid address"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="enter valid address desc"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="Submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
