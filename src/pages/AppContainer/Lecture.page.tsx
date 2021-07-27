import React from "react";
import { useParams } from "react-router-dom";

interface Props {}

interface RouteParams {
  lectureNumber: string;
  batchNumber: string;
}

const Lecture: React.FC<Props> = (props) => {
  const { lectureNumber, batchNumber } = useParams<RouteParams>();
  return (
    <div>
      Showing details of lecture #{lectureNumber} of batch #{batchNumber}
    </div>
  );
};

Lecture.defaultProps = {};

export default React.memo(Lecture);
