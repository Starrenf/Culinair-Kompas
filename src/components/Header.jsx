import {
    Box,
    Heading,
    HStack,
    VStack,
    Link as ChakraLink,
    IconButton,
    useDisclosure,
  } from "@chakra-ui/react";
  import { Link, useLocation } from "react-router-dom";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import { motion, AnimatePresence } from "framer-motion";
  
  const MotionVStack = motion(VStack);
  
  function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const location = useLocation();
  
    const isActive = (path) => location.pathname === path;
  
    const linkStyle = (path) => ({
      color: isActive(path) ? "yellow.300" : "white",
      fontWeight: isActive(path) ? "extrabold" : "bold",
      textDecoration: isActive(path) ? "underline" : "none",
      _hover: { textDecoration: "underline" },
    });
  
    return (
      <Box as="header" bg="blue.600" py={4} px={6} boxShadow="md">
        <HStack spacing={4} align="center" justify="space-between">
          {/* Titel */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
  <img src="/images/logo.jpg" alt="Logo" style={{ height: "40px" }} />
  <Heading
    size="lg"
    color="white"
    letterSpacing="wide"
    fontWeight="extrabold"
    _hover={{ textDecoration: "underline" }}
  >
    Culinair Kompas
  </Heading>
</Link>
  
          {/* Desktop menu */}
          <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
            <ChakraLink as={Link} to="/" {...linkStyle("/")}>
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/over-ons" {...linkStyle("/over-ons")}>
  Over ons
</ChakraLink>
            <ChakraLink as={Link} to="/recepten" {...linkStyle("/recepten")}>
              Recepten
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" onClick={onClose} {...linkStyle("/contact")}>
  Contact
</ChakraLink>

          </HStack>
  
          {/* Hamburger button */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            color="white"
            _hover={{ bg: "blue.500" }}
          />
        </HStack>
  
        {/* Mobile menu */}
        <AnimatePresence>
  {isOpen && (
    <MotionVStack
      as="nav"
      spacing={6}
      mt={4}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      align="start"
      display={{ md: "none" }}
    >
      <ChakraLink
        as={Link}
        to="/"
        onClick={onClose}
        {...linkStyle("/")}
        py={2}
        px={1}
        width="100%"
      >
        Home
      </ChakraLink>

      <ChakraLink
        as={Link}
        to="/recepten"
        onClick={onClose}
        {...linkStyle("/recepten")}
        py={2}
        px={1}
        width="100%"
      >
        Recepten
      </ChakraLink>

     

      <ChakraLink
        as={Link}
        to="/contact"
        onClick={onClose}
        {...linkStyle("/contact")}
        py={2}
        px={1}
        width="100%"
      >
        Contact
      </ChakraLink>

      <ChakraLink
        as={Link}
        to="/over-ons"
        onClick={onClose}
        {...linkStyle("/over-ons")}
        py={2}
        px={1}
        width="100%"
      >
        Over ons
      </ChakraLink>
    </MotionVStack>
  )}
</AnimatePresence>

      </Box>
    );
  }
  
  export default Header;
  