// import { useState } from "react";
// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Radio,
//   RadioGroup,
//   Select,
// } from "@chakra-ui/react";
// import DateRangePicker from "./DateRangePicker";

// const StepForm = ({ steps }) => {
//   const [stepIndex, setStepIndex] = useState(0);
//   const [formData, setFormData] = useState({});
//   const [vehicleTypes, setVehicleTypes] = useState([]);
//   const [vehicleModels, setVehicleModels] = useState([]);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // TODO: submit form data
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//     if (name === "numWheels") {
//       fetchVehicleTypes(value);
//     }
//   };

//   const fetchVehicleTypes = async (numWheels) => {
//     // TODO: fetch vehicle types from database based on number of wheels
//     setVehicleTypes([]); // reset options
//   };

//   const fetchVehicleModels = async (vehicleType) => {
//     // TODO: fetch vehicle models from database based on vehicle type
//     setVehicleModels([]); // reset options
//   };

//   const handleVehicleTypeChange = (event) => {
//     const { value } = event.target;
//     setFormData({ ...formData, vehicleType: value });
//     fetchVehicleModels(value);
//   };

//   const handleNextStep = () => {
//     setStepIndex(stepIndex + 1);
//   };

//   const handlePreviousStep = () => {
//     setStepIndex(stepIndex - 1);
//   };

//   const currentStep = steps[stepIndex];

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <Flex flexDirection="column" alignItems="center">
//         {currentStep.fields.map((field) => {
//           if (field.type === "name") {
//             return (
//               <Flex key={field.name}>
//                 <FormControl mr={2}>
//                   <FormLabel>First Name</FormLabel>
//                   <Input
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel>Last Name</FormLabel>
//                   <Input
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </FormControl>
//               </Flex>
//             );
//           } else if (field.type === "numWheels") {
//             return (
//               <FormControl key={field.name}>
//                 <FormLabel>{field.label}</FormLabel>
//                 <RadioGroup
//                   name="numWheels"
//                   value={formData.numWheels}
//                   onChange={handleInputChange}
//                 >
//                   <Flex>
//                     {field.options.map((option) => (
//                       <Radio key={option} value={option}>
//                         {option}
//                       </Radio>
//                     ))}
//                   </Flex>
//                 </RadioGroup>
//               </FormControl>
//             );
//           } else if (field.type === "vehicleType") {
//             return (
//               <FormControl key={field.name}>
//                 <FormLabel>{field.label}</FormLabel>
//                 <Select
//                   name="vehicleType"
//                   value={formData.vehicleType}
//                   onChange={handleVehicleTypeChange}
//                 >
//                   {vehicleTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                 </Select>
//               </FormControl>
//             );
//           }

