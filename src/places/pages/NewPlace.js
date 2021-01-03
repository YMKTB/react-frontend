import React, { useCallback } from "react";
import "./NewPlace.css";

import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="enter title. error message!!!!"
        onInput={titleInputHandler}
      ></Input>
      <Input
        id="description"
        element="textarea"
        label="Desciption"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="enter description error message!!!!"
        onInput={descriptionInputHandler}
      ></Input>
    </form>
  );
};

export default NewPlace;
