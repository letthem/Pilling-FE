import React, { useEffect, useState } from "react";
import { PLFrame } from "../../../components/PLFrame";
import TopBar from "../../../components/TobBar";
import RecordItem from "./RecordItem";
import { RecordWrapper } from "./styles";
import { axiosInstance } from "../../../api/api";

const Record = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await axiosInstance.get("/schedules", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        const data = response.data;
        const formattedRecords = data.map((record) => ({
          pillName: record.medicine_name,
          tags: record.tags.map((tag) => tag.content),
        }));
        setRecords(formattedRecords);
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    };

    fetchRecords();
  }, []);

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
