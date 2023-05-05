import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useToast,
  Radio,
  RadioGroup,
  Stack,
  Center,
} from "@chakra-ui/react";

const Form1 = (state, change) => {
  console.log(state);
//   const handleChange = () => {
//     change();
//   };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        ABOUT YOU
      </Heading>

      <FormControl mr="5%">
        <FormLabel htmlFor="first-name" fontWeight={"normal"}>
          First name
        </FormLabel>
        <Input
          value={state.firstName}
          onChange={() => change}
          id="first-name"
          placeholder="First name"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="last-name" fontWeight={"normal"}>
          Last name
        </FormLabel>
        <Input id="last-name" placeholder="First name" />
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        SELECT THE WHEEL
      </Heading>
      <Center>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="2">
              2-Wheeler
            </Radio>
            <Radio colorScheme="green" value="4">
              4-Wheeler
            </Radio>
          </Stack>
        </RadioGroup>
      </Center>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Center>
        <Heading w="100%" textAlign={"center"} fontWeight="normal">
          Social Handles
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: "gray.800",
                }}
                color="gray.500"
                rounded="md"
              >
                http://
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
          </FormControl>

          <FormControl id="email" mt={1}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              About
            </FormLabel>
            <Textarea
              placeholder="you@example.com"
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: "sm",
              }}
            />
            <FormHelperText>
              Brief description for your profile. URLs are hyperlinked.
            </FormHelperText>
          </FormControl>
        </SimpleGrid>
      </Center>
    </>
  );
};

const Form4 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        SELECT THE WHEEL
      </Heading>
      <Center>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="2">
              2-Wheeler
            </Radio>
            <Radio colorScheme="green" value="4">
              4-Wheeler
            </Radio>
          </Stack>
        </RadioGroup>
      </Center>
    </>
  );
};

const Form5 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        SELECT THE WHEEL
      </Heading>
      <Center>
        <RadioGroup defaultValue="2">
          <Stack spacing={5} direction="row">
            <Radio colorScheme="red" value="2">
              2-Wheeler
            </Radio>
            <Radio colorScheme="green" value="4">
              4-Wheeler
            </Radio>
          </Stack>
        </RadioGroup>
      </Center>
    </>
  );
};

const initialValue = {
  firstName: "",
  lastName: "",
};

const BookingPage = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [state, setState] = useState(initialValue);
  const handleChange = (e) => {
    setState(e.target.value);
  };
  console.log(state);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? (
          <Form1 values={state} change={handleChange} />
        ) : step === 2 ? (
          <Form2 />
        ) : step === 3 ? (
          <Form3 />
        ) : step === 4 ? (
          <Form4 />
        ) : (
          <Form5 />
        )}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 20);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 5}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 5) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 20);
                  }
                }}
                colorScheme="teal"
                variant="outline"
                // disabled={false}
              >
                Next
              </Button>
            </Flex>
            {step === 5 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default BookingPage;
