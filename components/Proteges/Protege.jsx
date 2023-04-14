"use client";
import ReactMarkdown from "react-markdown";

import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Divider,
  Button,
  Flex,
} from "@chakra-ui/react";

import { FaHeart } from "react-icons/fa";

import Image from "next/image";

function Protege({ protege }) {
  const image = protege.attributes.Image.data.attributes.url;
  return (
    <Card maxW="xl" color="gray.600">
      <CardBody>
        <Flex align="center" direction="column">
          <Image
            src={image}
            alt="Picture of the author"
            width={270}
            height={300}
            style={{ borderRadius: "10px" }}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {protege.attributes.Name} {protege.attributes.Surname}
            </Heading>

            <ReactMarkdown>{protege.attributes.Description}</ReactMarkdown>
          </Stack>
        </Flex>
      </CardBody>
      <Divider color="gray.300" />
      <CardFooter>
        <Flex direction={"column"} align="center" gap="1">
          <Heading as="h3" size="sm">
            Chcesz pomoc?
          </Heading>
          <Text fontSize="sm">Wpłać dowolną kwotę na konto:</Text>

          <Text fontSize="sm">
            Fundacja Everest, ul. Wielka 67, 53-340 Wrocław
          </Text>
          <Text fontWeight="500">41 1140 1140 0000 3822 7400 1006</Text>
          <Text fontSize="sm" textAlign="center">
            W tytule wpisując: na leczenie i rehabilitację -{" "}
            {protege.attributes.Name} {protege.attributes.Surname}
          </Text>

          <Button
            size="sm"
            rightIcon={<FaHeart size={20} ml={"20px"} />}
            bg={"red.600"}
            fontSize={"lg"}
            mt="4"
            textTransform={"uppercase"}
            letterSpacing={3}
            color={"white"}
            _hover={{ bg: "red.500" }}
          >
            Wesprzyj
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
}

export default Protege;
