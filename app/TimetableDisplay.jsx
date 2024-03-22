import React from "react";

const TimetableDisplay = ({ timetable }) => {
  // This function could be further improved to dynamically generate column headers
  const workshopTimes = [
    { time: "MONDAY 2PM", duration: 3 },
    { time: "TUESDAY 9AM", duration: 4 },
    { time: "WEDNESDAY 2PM", duration: 3 },
    { time: "THURSDAY 9AM", duration: 4 },
    { time: "FRIDAY 2PM", duration: 3 },
  ];

  return (
    <div className="bg-gray-200 p-4">
      <table className="table-auto w-full text-center">
        <thead>
          <tr>
            <th></th>
            {workshopTimes.map((timeInfo, timeIndex) => (
              <th key={timeInfo.time} className="px-4 py-2">
                {timeInfo.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timetable.map((timeItem, timeIndex) => (
            <tr key={timeIndex}>
              <td className="border py-2">
                {timeItem.time.time} ({timeItem.time.subjects.length}
                classes)
              </td>
              {timeItem.subjects.map((subject, subjectIndex) => (
                <td
                  key={`${timeIndex}-${subjectIndex}`}
                  className="border py-2"
                >
                  {`${subject.room.name} ${
                    subject.faculty.name ? `, ${subject.faculty.name}` : ""
                  } ${subject.name}`}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimetableDisplay;
