"use client";
import {
  Box,
  Button,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";

import { EmailIcon } from "@chakra-ui/icons";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      fontSize={"xl"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pt="10"
    >
      <Container as={Stack} maxW={"8xl"} pt={4} pb={8} px={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box w="200px">
              <Image src={"logo.png"} alt="logo" ml="-14px" />
              {/* <Logo color={useColorModeValue("gray.700", "white")} /> */}
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Fundacja Everest. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontSize={"md"} fontWeight={500}>
              Fundacja Everest
            </Text>
            <Text fontSize={"md"}>ul. Wielka 67</Text>
            <Text fontSize={"md"}>53-340 Wrocław</Text>
            <Text fontSize={"md"}>NIP: 8943043429</Text>
            <spacer></spacer>
            <Text fontSize={"md"} fontWeight={500}>
              Numer konta: 41 1140 1140 0000 3822 7400 1006
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Masz pytania ?</ListHeader>
            <Stack direction={"column"}>
              <Link href="/contact">
                <Button leftIcon={<EmailIcon />} px={6} bg={"gray.200"}>
                  Napisz do nas
                </Button>
              </Link>
              <Text fontSize={"md"}>ewa@fundacjaeverest.pl</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
