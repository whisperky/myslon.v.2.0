import { Flex, Image, Text, Grid } from "@chakra-ui/react";

import { FButton, GradButton } from "@/components/Buttons";
import { HomeChapterContainer } from "@/components/Containers";
import { AdCard } from "@/components/Cards/AdCard";

export const Container = () => {
  return (
    <Flex
      minH="100vh"
      direction="column"
      backgroundColor="#121318"
      pt="75px"
      alignItems="center"
    >
      <Flex position="relative" direction="column" width="60%">
        <Image
          src="img/mystery_babylon.gif"
          alt="mystery_babylon"
          width="100%"
        />
        <Flex
          position="absolute"
          gap="10px"
          bottom="-170px"
          left="50%"
          transform="translateX(-50%)"
          direction="column"
          alignItems="center"
          justifyContent="center"
          zIndex="3"
        >
          <Text
            fontSize="16px"
            color="white"
            textAlign="center"
            fontWeight="400"
          >
            Mystery Babylon is a dark fantasy where a guild of outcasts fights
            against corrupt kings and demons to restore balance to a broken
            world.
          </Text>
          <Grid templateColumns="1fr 1fr" gap="37px" my="6">
            <GradButton fontSize="14px" p="6" outlines>
              READ MORE
            </GradButton>
            <GradButton fontSize="11px" p="6" outlines>
              <Image src="img/icons/patreon.png" h="4" blendMode="luminosity" />{" "}
              SUPPORT US ON PATREON
            </GradButton>
          </Grid>{" "}
          <Flex
            gap={4}
            px={4}
            borderRadius="lg"
            className="justify-center items-center"
          >
            <FButton
              label="Webtoon"
              icon={<Image src="img/icons/webtoon.png" h="6" />}
              onClick={() => console.log("Webtoon button clicked")}
            />
            <FButton
              label="GlobalComic"
              icon={<Image src="img/icons/globalcomic.png" h="6" />}
              onClick={() => console.log("GlobalComic button clicked")}
            />
          </Flex>
          <Text
            fontSize="16px"
            color="white"
            textAlign="center"
            fontWeight="400"
            pt="4"
          >
            Note: Voice acting is not present on these platforms
          </Text>
        </Flex>

        <Flex
          position="absolute"
          width="120%"
          height="200%"
          top="-70%"
          left="-10%"
          zIndex="2"
          className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent from-0% via-transparent via-40% to-[#121318] to-55%"
        />
      </Flex>

      <HomeChapterContainer />

      <AdCard w="70%" h="150px" mx="auto" mt={8} zIndex={3} />
    </Flex>
  );
};
