import { PillName, RecordItemWrapper, TagItem, TagList } from "./styles";

const RecordItem = ({ pillName, tags }) => {
  return (
    <RecordItemWrapper>
      <PillName>{pillName}</PillName>
      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>{tag}</TagItem>
        ))}
      </TagList>
    </RecordItemWrapper>
  );
};

export default RecordItem;
