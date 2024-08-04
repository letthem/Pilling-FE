import { PillName, RecordItemWrapper, TagItem, TagList } from "./styles";

const RecordItem = ({ pillName, tags }) => {
  const truncateName = (name) => {
    return name.length > 20 ? `${name.substring(0, 20)}...` : name;
  };

  return (
    <RecordItemWrapper>
      <PillName>{truncateName(pillName)}</PillName>
      <TagList>
        {tags.map((tag, index) => (
          <TagItem key={index}>{tag}</TagItem>
        ))}
      </TagList>
    </RecordItemWrapper>
  );
};

export default RecordItem;
