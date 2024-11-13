import { useEffect, useState } from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { DetailedCard, HomeChapterCard } from "@/components/Cards";
import { HighlightsContainer, LVContainer } from "@/components/Containers";
import { AdCard } from "../Cards/AdCard";

export const HomeChapterContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 10;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array since we're setting up/cleaning up the event listener

  // Mock data array - replace this with your actual data source
  const chapters = Array.from({ length: 30 }, (_, index) => ({
    chapterNumber: 84 - index,
    title: `Chapter ${84 - index}`,
    date: new Date("2024-10-30"),
    commentsCount: 769,
    thumbnailUrl: "/img/examples/9.jpg",
  }));

  // Calculate pagination
  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chapters.slice(
    indexOfFirstChapter,
    indexOfLastChapter
  );
  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  return (
    <Flex
      position="relative"
      direction="column"
      width="70%"
      mx="auto"
      mt="220px"
      p="56px 50px"
      justifyContent="center"
      alignItems="center"
      borderRadius="xl"
      bg="#000000"
      zIndex={3}
    >
      <Text fontSize="22px" fontWeight="bold" mb="32px" color="white">
        CHAPTERS
      </Text>
      <Flex width="100%" gap="18px">
        <Flex flex={3} direction="column" gap="10px">
          {currentChapters.map((chapter) => (
            <HomeChapterCard
              key={chapter.chapterNumber}
              chapterNumber={chapter.chapterNumber}
              title={chapter.title}
              date={chapter.date}
              commentsCount={chapter.commentsCount}
              thumbnailUrl={chapter.thumbnailUrl}
            />
          ))}
        </Flex>
        <Flex flex={2}>
          <DetailedCard />
        </Flex>
      </Flex>

      {/* Styled Pagination Controls */}
      <Flex mt="68px" mb="96px" gap="10px" alignItems="center">
        <IconButton
          aria-label="Previous page"
          icon={<FaChevronLeft />}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          isDisabled={currentPage === 1}
          variant="ghost"
          _hover={{ bg: "gray.600" }}
          color="gray.400"
          borderRadius="full"
          size="sm"
        />

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isActive = currentPage === pageNumber;

          return (
            <Flex
              as="button"
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              width="32px"
              height="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="full"
              bg={isActive ? "white" : "gray.800"}
              color={isActive ? "black" : "white"}
              fontWeight={isActive ? "bold" : "normal"}
              _hover={{ bg: isActive ? "white" : "gray.700" }}
            >
              {pageNumber}
            </Flex>
          );
        })}

        <IconButton
          aria-label="Next page"
          variant="ghost"
          icon={<FaChevronRight />}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          isDisabled={currentPage === totalPages}
          _hover={{ bg: "gray.600" }}
          color="gray.400"
          borderRadius="full"
          size="sm"
        />
      </Flex>

      <HighlightsContainer />
      <LVContainer />

      {isDesktop && (
        <>
          <AdCard
            position="absolute"
            top="0"
            left="-20%"
            w="16%"
            h="600px"
            mx="2%"
            zIndex={3}
          />
          <AdCard
            position="absolute"
            top="0"
            right="-20%"
            w="16%"
            h="600px"
            mx="2%"
            zIndex={3}
          />
          <AdCard
            position="absolute"
            top="1200px"
            left="-20%"
            w="16%"
            h="600px"
            mx="2%"
            zIndex={3}
          />
          <AdCard
            position="absolute"
            top="1200px"
            right="-20%"
            w="16%"
            h="600px"
            mx="2%"
            zIndex={3}
          />
        </>
      )}
    </Flex>
  );
};
