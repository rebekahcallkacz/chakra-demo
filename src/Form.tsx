import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Form() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onFormSubmit = () => {
    console.log("you submitted!");
    console.log(email);
    console.log(password);
    // POST REQUEST HERE
    setEmail("");
    setPassword("");
  };
  return (
    <Box>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Input>
        <FormLabel>Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Input>
      </FormControl>
      <Button variant="solid" title="login" onClick={onFormSubmit}>
        Login
      </Button>
    </Box>
  );
}

export default Form;
