import React, { useState } from "react";

const Schedule = () => {
  // Ссылки на разные курсы
  const urls = {
    firstCourse:
      "https://docs.google.com/spreadsheets/d/1SZxYMnyEgPgMIyFvcisNarYN0pZjZxQ4/preview?hl=ru&pli=1&gid=123456789", // Замените `gid` на реальный для 1 курса
  };

  const [selectedCourse, setSelectedCourse] = useState("firstCourse");

  return (
    <div style={{ padding: "20px" }}>
      <iframe
        src={urls[selectedCourse]}
        style={{
          width: "100%",
          height: "80vh",
          border: "none",
        }}
        title="College Schedule"
      ></iframe>
    </div>
  );
};

export default Schedule;
