import React, { FC, useState } from "react";
import styled from "styled-components";

import { Input } from "../atoms/input";
import { Button } from "../atoms/button";
import { Loader } from "../atoms/loader";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Form: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string | null>(null);

  const resetFormState = () => {
    setName("");
    setAge(null);
    setIsSubmitting(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    console.log("Submitting Name: ", name, " Age: ", age);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    resetFormState();
  };

  return (
    <Container>
      <Wrapper>
        <Loader isLoading={isSubmitting}>
          <Label htmlFor="name">
            Name
            <Input
              data-cy="name"
              id="name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
          </Label>
          <Label htmlFor="age">
            Age
            <Input
              id="age"
              data-cy="age"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAge(e.target.value)
              }
            />
          </Label>
          <Button data-cy="submitForm" onClick={handleSubmit}>Submit</Button>
        </Loader>
      </Wrapper>
    </Container>
  );
};
