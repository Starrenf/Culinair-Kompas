import {
  Box,
  Heading,
  VStack,
  Input,
  Textarea,
  Button,
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Naam is verplicht.";
    if (!formData.email) {
      tempErrors.email = "E-mailadres is verplicht.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Ongeldig e-mailadres.";
    }
    if (!formData.message.trim()) tempErrors.message = "Bericht is verplicht.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/mpwdqprv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (response.ok) {
      toast({
        title: "Bericht verzonden!",
        description: "Bedankt voor je bericht. We nemen snel contact op.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      minHeight="100vh"
      backgroundImage="url('/images/contact-bg.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={8}
    >
      <Box
        bg="whiteAlpha.900"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        maxW="600px"
        width="100%"
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="blue.700">
          Contact
        </Heading>

        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={errors.name}>
              <FormLabel>Naam</FormLabel>
              <Input
                name="name"
                placeholder="Je naam"
                value={formData.name}
                onChange={handleChange}
                isRequired
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel>E-mailadres</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Je e-mailadres"
                value={formData.email}
                onChange={handleChange}
                isRequired
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.message}>
              <FormLabel>Bericht</FormLabel>
              <Textarea
                name="message"
                placeholder="Je bericht"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                isRequired
              />
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              isDisabled={isSubmitting}
              leftIcon={isSubmitting ? <Spinner size="sm" /> : null}
            >
              {isSubmitting ? "Verzenden..." : "Verstuur"}
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default ContactPage;



