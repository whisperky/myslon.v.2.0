import { useState } from "react";
import { Flex, Text, Image, Grid } from "@chakra-ui/react";
import { GradButton } from "../Buttons";
import { HomeHeroCard } from "../Cards";

export const LVContainer = () => {
  const [active, setActive] = useState<string | null>("bestMale");

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
      <Flex direction="column">
        <Text fontSize="22px" fontWeight="800" color="white" pt={24} mb={4}>
          Legends and Villains: Cast Your Judgment
        </Text>
        <Flex w="100%" alignItems="center" justifyContent="center" gap={4}>
          <Flex h="2px" bg="grey" flex={1} />
          <Image src="/img/icons/stars.png" alt="Stars" />
          <Flex h="2px" bg="grey" flex={1} />
        </Flex>
      </Flex>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        p="7px"
        border="1px solid #FFFFFF3D"
        borderRadius="xl"
      >
        <GradButton
          variant="ghost"
          visible={active === "bestMale"}
          onClick={() => setActive("bestMale")}
        >
          <Text fontSize="14px" fontWeight="700" color="white">
            Best Male Character
          </Text>
        </GradButton>
        <GradButton
          variant="ghost"
          visible={active === "bestFemale"}
          onClick={() => setActive("bestFemale")}
        >
          <Text fontSize="14px" fontWeight="700" color="white">
            Best Female Character
          </Text>
        </GradButton>
        <GradButton
          variant="ghost"
          visible={active === "mostEvil"}
          onClick={() => setActive("mostEvil")}
        >
          <Text fontSize="14px" fontWeight="700" color="white">
            Most Evil Character
          </Text>
        </GradButton>
      </Grid>

      <Text fontSize="16px" fontWeight="400" color="white" py={7}>
        &quot;The fate of the realm is in your hands! Who will claim the title
        of Champion? Cast your vote now and decide the greatest hero!&quot;
      </Text>

      <Grid templateColumns="repeat(3, 1fr)" gap={4} w="100%">
        <HomeHeroCard
          title="Student"
          imageUrl="/img/examples/1.jpg"
          rating={4.5}
        />
        <HomeHeroCard
          title="Ninja"
          imageUrl="/img/examples/6.jpg"
          rating={3.5}
        />
        <HomeHeroCard
          title="Warrior"
          imageUrl="/img/examples/7.jpg"
          rating={1.5}
        />
      </Grid>
    </Flex>
  );
};
