import { Flex, Image, Text } from "@chakra-ui/react";
import { ImageSlider } from "../ImageSlider";

export const HighlightsContainer = () => {
  const images = [
    "/img/temp_story/1-1.jpg",
    "/img/temp_story/1-2.jpg",
    "/img/temp_story/1-3.jpg",
    "/img/temp_story/1-4.jpg",
    "/img/temp_story/1-5.jpg",
    "/img/temp_story/2-1.jpg",
    "/img/temp_story/2-2.jpg",
    "/img/temp_story/2-3.jpg",
    "/img/temp_story/2-4.jpg",
    "/img/temp_story/2-5.jpg",
  ];

  return (
    <Flex
      w="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      py={8}
      borderTop="2px solid transparent"
      sx={{
        borderImage: "linear-gradient(to right, #000000, #EEA22D, #000000) 1",
      }}
    >
      <Text fontSize="22px" fontWeight="800" color="white" mb={8}>
        EPIC HIGHLIGHTS
      </Text>
      <ImageSlider images={images} />
    </Flex>
  );
};
