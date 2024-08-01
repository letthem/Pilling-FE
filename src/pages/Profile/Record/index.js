import { PLFrame } from "../../../components/PLFrame";
import TopBar from "../../../components/TobBar";
import RecordItem from "./RecordItem";
import { RecordWrapper } from "./styles";

const records = [
  {
    pillName: "위스콘 더블액션 현탁액",
    tags: ["속쓰림", "감기"],
  },
  {
    pillName: "타이레놀",
    tags: ["두통", "발열"],
  },
];

const Record = () => {
  return (
    <PLFrame>
      <TopBar topBarName={"나의 복용기록"} />
      <RecordWrapper>
        {records.map((record, index) => (
          <RecordItem
            key={index}
            pillName={record.pillName}
            tags={record.tags}
          />
        ))}
      </RecordWrapper>
    </PLFrame>
  );
};

export default Record;
