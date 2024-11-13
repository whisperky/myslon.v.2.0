// components/ChapterCard.tsx
import { Flex, Image, Text } from "@chakra-ui/react";
import { FaComment } from "react-icons/fa";
import { format } from "date-fns";

interface HomeChapterCardProps {
  chapterNumber: number;
  title: string;
  date: Date;
  commentsCount: number;
  thumbnailUrl: string;
}

export const HomeChapterCard: React.FC<HomeChapterCardProps> = ({
  chapterNumber,
  title,
  date,
  commentsCount,
  thumbnailUrl,
}) => {
  return (
    <Flex
      width="100%"
      bg="#FFFFFF14"
      color="white"
      rounded="lg"
      pr="35px"
      className="flex items-center space-x-4"
    >
      <Image
        src={thumbnailUrl}
        alt={`Thumbnail for ${title}`}
        h="88px"
        roundedLeft="lg"
        objectFit="cover"
      />
      <Flex flex="1" flexDirection="column">
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
      </Flex>
      <Flex alignItems="center" className="space-x-6" color="#FFFFFF80">
        <Text fontSize="sm">{format(date, "MMM dd, yyyy")}</Text>
        <Flex alignItems="center" className="space-x-1" color="#FFFFFF80">
          <FaComment size="14" />
          <Text fontSize="sm">{commentsCount}</Text>
        </Flex>
        <Text fontSize="sm" fontWeight="bold" color="white">
          #{chapterNumber}
        </Text>
      </Flex>
    </Flex>
  );
};
