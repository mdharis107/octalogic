import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  Progress,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [wheel, setWheel] = useState("2");
  const [vehicle, setVehicle] = useState("car");
  const [model, setModel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [progress, setProgress] = useState(20);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FirstName, wheel, vehicle, model, startDate, endDate);
  };

  const handleNextStep = () => {
    if (
      !FirstName == "" ||
      !LastName == "" ||
      !startDate == "" ||
      !endDate === "" ||
      wheel == ""
    ) {
      setStep((prevStep) => prevStep + 1);
      setProgress(progress + 20);
    }
    return;
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
    setProgress(progress - 20);
  };

  return (
    <Box
      borderWidth="1px"
      rounded="lg"
      shadow="1px 1px 3px rgba(0,0,0,0.3)"
      maxWidth={800}
      p={6}
      m="10px auto"
    >
      <Progress
        hasStripe
        value={progress}
        mb="5%"
        mx="5%"
        isAnimated
      ></Progress>

      <form onSubmit={handleSubmit}>
        <Stack>
          {step === 1 && (
            <Stack spacing={4}>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Your Name
              </Heading>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                />
                <FormErrorMessage>First name is required</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                />
                <FormErrorMessage>Last name is required</FormErrorMessage>
              </FormControl>

              <HStack spacing={4}>
                <Button onClick={handleNextStep}>Next</Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack>
          {step === 2 && (
            <Stack spacing={4}>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Choose the wheels for your Vehicle
              </Heading>
              <FormControl as="fieldset">
                <FormLabel as="legend">Number of Wheels</FormLabel>
                <RadioGroup
                  onChange={setWheel}
                  value={wheel}
                  name="wheels"
                  defaultValue="2"
                >
                  <HStack spacing={4}>
                    <Radio value="2">2</Radio>
                    <Radio value="4">4</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <HStack spacing={4}>
                <Button onClick={handlePreviousStep}>Previous</Button>
                <Button onClick={handleNextStep}>Next</Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack>
          {step === 3 && (
            <Stack spacing={4}>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Choose your type of Vehicle
              </Heading>
              <FormControl as="fieldset">
                <FormLabel as="legend">Type of Vehicle</FormLabel>
                <RadioGroup
                  onChange={setVehicle}
                  name="vehicleType"
                  defaultValue="car"
                  value={vehicle}
                >
                  <HStack spacing={4}>
                    <Radio value="car">Car</Radio>
                    <Radio value="motorcycle">Motorcycle</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <HStack spacing={4}>
                <Button onClick={handlePreviousStep}>Previous</Button>
                <Button onClick={handleNextStep}>Next</Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack>
          {step === 4 && (
            <Stack spacing={4}>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Choose your desired Model
              </Heading>
              <FormControl as="fieldset">
                <FormLabel as="legend">Specific Model</FormLabel>
                <RadioGroup
                  onChange={setModel}
                  name="vehicleModel"
                  defaultValue="toyota"
                  value={model}
                >
                  <HStack spacing={4}>
                    <Radio value="toyota">Toyota</Radio>
                    <Radio value="honda">Honda</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <HStack spacing={4}>
                <Button onClick={handlePreviousStep}>Previous</Button>
                <Button onClick={handleNextStep}>Next</Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack>
          {step === 5 && (
            <Stack spacing={4}>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                User Registration
              </Heading>
              <FormControl>
                <FormLabel>Date Range</FormLabel>
                <Input
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  name="startDate"
                />
                <Input
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  type="date"
                  name="endDate"
                />
              </FormControl>

              <HStack spacing={4}>
                <Button onClick={handlePreviousStep}>Previous</Button>
                <Button type="submit">Submit</Button>
              </HStack>
            </Stack>
          )}
        </Stack>
      </form>
    </Box>
  );
};
