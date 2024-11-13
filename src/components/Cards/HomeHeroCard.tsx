import {
  Flex,
  Image,
  Text,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  Box,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

interface HeroCardProps {
  title: string;
  imageUrl: string;
  rating: number;
}

export const HomeHeroCard: React.FC<HeroCardProps> = ({
  title,
  imageUrl,
  rating,
}) => {
  // Convert rating to an array of 5 stars
  const stars = Array(5).fill(0);

  return (
    <Flex
      direction="column"
      bg="black"
      color="white"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      p={4}
      textAlign="center"
      w="100%"
    >
      {/* Image Section */}
      <Flex position="relative" w="100%" h="100%">
        <Flex position="relative" w="100%">
          <Flex
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            bg="linear-gradient(191.79deg, rgba(229, 161, 60, 0) 27.87%, rgba(229, 161, 60, 0.84) 82.98%, #51351D 104.35%)"
            borderRadius="md"
          />
          <Image
            src={imageUrl}
            alt={title}
            borderRadius="md"
            w="100%"
            maxH="350px"
            objectFit="fill"
          />
        </Flex>
        <Flex
          position="absolute"
          bottom="0"
          width="100%"
          bgGradient="linear(to-t, rgba(0,0,0,0.7), rgba(0,0,0,0))"
          py={3}
          px={4}
          borderBottomRadius="md"
        >
          <Text fontWeight="700" fontSize="22px" textAlign="left">
            {title}
          </Text>
        </Flex>
      </Flex>

      {/* Star Ratings */}
      <Flex justifyContent="center" mt={4}>
        {stars.map((_, index) => (
          <Icon
            as={FaStar}
            key={index}
            color={index < Math.floor(rating) ? "yellow.400" : "gray.500"}
            w={5}
            h={5}
            mx={1}
          />
        ))}
      </Flex>

      {/* Circular Rating */}
      <Flex justifyContent="center" mt={4}>
        <Box position="relative">
          <CircularProgress
            value={(rating / 5) * 100}
            size="60px"
            thickness="5px"
            color="yellow.400"
            trackColor="gray.700"
          >
            <CircularProgressLabel color="yellow.400" fontWeight="bold">
              {rating.toFixed(1)}
            </CircularProgressLabel>
            <Icon
              as={FaStar}
              position="absolute"
              w="12px"
              h="12px"
              top="calc(50% - 6px)"
              left="calc(50% - 6px)"
              color="yellow.400"
              transform={`rotate(${
                (rating / 5) * 360 - 90
              }deg) translateX(25px)`}
              transformOrigin="center center"
            />
          </CircularProgress>
        </Box>
      </Flex>
    </Flex>
  );
};
