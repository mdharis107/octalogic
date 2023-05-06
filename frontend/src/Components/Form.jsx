import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [wheel, setWheel] = useState("");
  const [vehicle, setVehicle] = useState("car");
  const [model, setModel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [progress, setProgress] = useState(20);
  const toast = useToast();
  const [data, setData] = useState([]);
  const evenLengthData = data.filter((ele) => ele.length % 2 == 0);
  // console.log(evenLengthData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(FirstName, wheel, vehicle, model, startDate, endDate);
    console.log(wheel, vehicle);
  };

  useEffect(() => {
    if (wheel == 2) {
      axios.get("http://localhost:8080/api/bikes").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } else {
      axios.get("http://localhost:8080/api/cars").then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    }
  }, [wheel]);

  const handleNextStep = () => {
    if (
      !FirstName == "" &&
      !LastName == ""
      // !startDate == "" &&
      // !endDate === "" &&
      // !wheel == ""
    ) {
      setStep((prevStep) => prevStep + 1);
      setProgress(progress + 20);
    } else {
      toast({
        title: "Error going to Next",
        description: "Fill all the Details",
        status: "warning",
        duration: 9000,
        isClosable: true,
      });
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
            <Stack w={"80%"} m={"auto"} alignItems={"center"} spacing={4}>
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
                <Button
                  colorScheme="teal"
                  variant={"outline"}
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack alignItems={"center"}>
          {step === 2 && (
            <Stack alignItems={"center"} spacing={4}>
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
                <Button colorScheme="teal" onClick={handlePreviousStep}>
                  Previous
                </Button>
                <Button
                  colorScheme="teal"
                  variant={"outline"}
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack alignItems={"center"}>
          {step === 3 && (
            <Stack alignItems={"center"} spacing={4}>
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
                  {wheel == 2
                    ? data?.map((ele) => {
                        // console.log(data.length);
                        return (
                          <HStack key={ele._id} spacing={4}>
                            <Radio value={ele.type}>{ele.type}</Radio>
                          </HStack>
                        );
                      })
                    : data.slice(1, 3).map((ele) => {
                        // console.log(data.length);
                        return (
                          <HStack key={ele._id} spacing={4}>
                            <Radio value={ele.type}>{ele.type}</Radio>
                          </HStack>
                        );
                      })}
                </RadioGroup>
              </FormControl>

              <HStack spacing={4}>
                <Button colorScheme="teal" onClick={handlePreviousStep}>
                  Previous
                </Button>
                <Button
                  colorScheme="teal"
                  variant={"outline"}
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </HStack>
            </Stack>
          )}
        </Stack>

        <Stack alignItems={"center"}>
          {step === 4 && (
            <Stack alignItems={"center"} spacing={4}>
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
                  {wheel == 2
                    ? data?.map((ele) => {
                        // console.log(data.length);
                        return (
                          <HStack key={ele._id} spacing={4}>
                            <Radio value={ele.model}>{ele.model}</Radio>
                          </HStack>
                        );
                      })
                    : data.map((ele) => {
                        // console.log(data.length);
                        return (
                          <HStack key={ele._id} spacing={4}>
                            <Radio value={ele.model}>{ele.model}</Radio>
                          </HStack>
                        );
                      })}
                </RadioGroup>
              </FormControl>

              <HStack spacing={4}>
                <Button colorScheme="teal" onClick={handlePreviousStep}>
                  Previous
                </Button>
                <Button
                  colorScheme="teal"
                  variant={"outline"}
                  onClick={handleNextStep}
                >
                  Next
                </Button>
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
              <Center>
                <HStack spacing={4}>
                  <Button colorScheme="teal" onClick={handlePreviousStep}>
                    Previous
                  </Button>
                  <Button colorScheme="red" type="submit">
                    Submit
                  </Button>
                </HStack>
              </Center>
            </Stack>
          )}
        </Stack>
      </form>
    </Box>
  );
};
