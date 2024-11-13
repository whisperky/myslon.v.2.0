// components/DetailedCard.tsx
import {
  Flex,
  Text,
  Icon,
  Button,
  Image,
  Divider,
  Grid,
} from "@chakra-ui/react";
import { FaEye, FaComment, FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export const DetailedCard: React.FC = () => {
  return (
    <Flex
      direction="column"
      h="100%"
      w="100%"
      borderRadius="lg"
      overflow="hidden"
      bg="#FFFFFF14"
      color="white"
      boxShadow="lg"
    >
      <Flex direction="column" p={6}>
        {/* Top Stats Section */}
        <Flex justifyContent="space-between" mb={4}>
          <Flex align="center" gap="2">
            <Icon as={FaEye} />
            <Text fontSize="sm" color="gray.400">
              26.5M
            </Text>
          </Flex>
          <Flex align="center" gap="2">
            <Icon as={FaComment} />
            <Text fontSize="sm" color="gray.400">
              49K
            </Text>
          </Flex>
          <Flex align="center" gap="2">
            <Icon as={FaStar} />
            <Text fontSize="sm" color="gray.400">
              8.87
            </Text>
          </Flex>
          <Button
            variant="outline"
            size="sm"
            colorScheme="yellow"
            borderColor="yellow.500"
            _hover={{ bg: "yellow.600", color: "black" }}
          >
            Rate
          </Button>
        </Flex>

        {/* Divider */}
        <Divider borderColor="gray.600" mb={4} />

        {/* Title and Description */}
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          TITLE
        </Text>
        <Text fontSize="sm" color="gray.300" mb={4} lineHeight="1.6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;
        </Text>

        {/* Call to Action Buttons */}
        <Grid templateColumns="repeat(2, 1fr)" gap="10px" mt={4} mb={6}>
          <Button
            bg="black"
            color="white"
            _hover={{ bg: "gray.800" }}
            borderRadius="full"
            h="46px"
          >
            First Episode
          </Button>
          <Button
            bg="linear-gradient(114.03deg, #E5A13C -126.62%, #51351D 137.63%)"
            color="white"
            _hover={{
              bg: "linear-gradient(114.03deg, #E5A13C -126.62%, #51351D 237.63%)",
            }}
            rightIcon={<FiArrowRight />}
            borderRadius="full"
            h="46px"
          >
            Continue Reading
          </Button>
        </Grid>
      </Flex>

      <Flex position="relative" h="100%" w="100%">
        {/* Bottom Image */}
        <Image
          position="absolute"
          top="0"
          bottom="0"
          src="/img/detail_img_1.png" // Replace with actual image URL
          alt="Cover Art"
          h="100%"
          borderRadius="md"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};
