import { useRef, useState } from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { EpicImage } from "@/components/Images";

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (currentIndex < images.length - 5) {
      setCurrentIndex((prev) => prev + 1);
      sliderRef.current?.scrollTo({
        left: (currentIndex + 1) * 300,
        behavior: "smooth",
      });
    }
    console.log("currentIndex", currentIndex);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      sliderRef.current?.scrollTo({
        left: (currentIndex - 1) * 300,
        behavior: "smooth",
      });
    }
    console.log("currentIndex", currentIndex);
  };

  const handleDrag = (deltaX: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= deltaX;
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    onSwiping: (eventData) => {
      handleDrag(eventData.deltaX);
      setIsDragging(true);
    },
    onSwiped: () => setIsDragging(false),
    trackMouse: true,
  });

  return (
    <Flex
      position="relative"
      alignItems="center"
      width="100%"
      overflow="hidden"
    >
      {/* Left Arrow */}
      <IconButton
        aria-label="Previous"
        icon={<FaChevronLeft />}
        onClick={handlePrev}
        bg="rgba(0,0,0,0.5)"
        color="white"
        size="lg"
        borderRadius="full"
        _hover={{ bg: "rgba(0,0,0,0.7)" }}
        disabled={currentIndex === 0}
      />
      {/* Slider Container */}
      <Flex
        {...handlers}
        ref={sliderRef}
        overflow="auto"
        flexGrow="1"
        mx="auto"
        scrollBehavior="smooth"
        style={{
          display: "flex",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        css={{
          "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for Chrome, Safari
        }}
      >
        {/* Map through images in pairs */}
        {Array.from({ length: Math.ceil(images.length / 2) }, (_, i) => {
          const firstIndex = i * 2;
          const secondIndex = firstIndex + 1;
          return (
            <Flex
              position="relative"
              key={firstIndex}
              minW="450px" // Doubled the width to accommodate two images
              h="370px"
              flex="0 0 auto"
              scrollSnapAlign="start"
              borderRadius="md"
              zIndex="3"
            >
              {/* First image */}
              {images[firstIndex] && (
                <EpicImage
                  w="265px"
                  src={images[firstIndex]}
                  alt={`Slide ${firstIndex}`}
                  top="0px"
                  left="-20px"
                  zIndex={images.length - firstIndex}
                />
              )}

              {/* Second image (if exists) */}
              {images[secondIndex] && (
                <EpicImage
                  w="225px"
                  src={images[secondIndex]}
                  alt={`Slide ${secondIndex}`}
                  top="20px"
                  right="0px"
                  zIndex={images.length - secondIndex}
                />
              )}
            </Flex>
          );
        })}
      </Flex>
      {/* Right Arrow */}
      <IconButton
        size="lg"
        bg="rgba(0,0,0,0.5)"
        icon={<FaChevronRight />}
        color="white"
        borderRadius="full"
        aria-label="Next"
        onClick={handleNext}
        disabled={currentIndex === images.length - 5}
        _hover={{ bg: "rgba(0,0,0,0.7)" }}
      />

      <Flex
        position="absolute"
        bottom="0px"
        w="100%"
        h="100px"
        bg="transparent"
        backdropFilter="blur(10px)"
        zIndex="2"
      />
      <Flex
        position="absolute"
        bottom="40px"
        w="96%"
        mx="2%"
        h="2px"
        bg="red"
        zIndex="1"
      />
      <Flex
        position="absolute"
        bottom="10px"
        w="96%"
        mx="2%"
        h="2px"
        bg="red"
        zIndex="1"
      />
    </Flex>
  );
};
