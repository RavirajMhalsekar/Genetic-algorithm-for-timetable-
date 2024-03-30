import React from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const getTimeslots = (year) => {
  if (year === "FE" || year === "SE") {
    return [
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 1:00", // Lunch break
      "1:00 - 2:00",
      "2:00 - 3:00",
      "3:00 - 4:00",
      "4:00 - 5:00",
    ];
  } else if (year === "TE" || year === "BE") {
    return [
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 11:15", // Tea break
      "11:15 - 12:15",
      "12:15 - 1:15",
      "1:15 - 2:00", // Lunch break
      "2:00 - 3:00",
      "3:00 - 4:00",
      "4:00 - 5:00",
    ];
  }
};

const getPracticalBatches = (practical_batch) => {
  const batches = [];
  for (let i = 1; i <= practical_batch; i++) {
    batches.push(`P${i}`);
  }
  return batches;
};

const DisplayOutput = ({
  bestTimetable,
  facultyTimetables,
  showClassTimetables,
  setShowClassTimetables,
}) => {
  const handleTimetableToggle = (type) => {
    setShowClassTimetables(type === "class");
  };

  return (
    <div>
      <nav className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 rounded ${
            showClassTimetables ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTimetableToggle("class")}
        >
          Class Timetables
        </button>
        <button
          className={`px-4 py-2 rounded ${
            !showClassTimetables ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTimetableToggle("faculty")}
        >
          Faculty Timetables
        </button>
      </nav>

      {showClassTimetables && bestTimetable.length > 0
        ? bestTimetable.map((timetableForClass, index) => (
            <div key={index} className="p-3">
              <h2 className="mt-5 mb-5">
                Class : {timetableForClass.year} {timetableForClass.department},
                Division : {timetableForClass.div} {"  , "}
                practical batch : {timetableForClass.practical_batch}
              </h2>
              <table className="table-auto w-full text-center border-2">
                <thead>
                  <tr>
                    <th></th>
                    {getTimeslots(timetableForClass.year).map((slot, index) => (
                      <th key={index} className="bg-slate-300">
                        {slot}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border-2">
                  {timetableForClass.timetable.map(
                    (dailySchedule, dayIndex) => (
                      <tr key={dayIndex}>
                        <td className="border-2 bg-slate-300">
                          {daysOfWeek[dayIndex]}
                        </td>
                        {dailySchedule.map((slot, timeslotIndex) => (
                          <td
                            className={`border-2 min-w-32 max-w-40 h-16 ${
                              slot.type === "break" ? "bg-gray-200" : ""
                            }`}
                            key={timeslotIndex}
                          >
                            {slot.type === "break"
                              ? `Break (${slot.startTime} - ${slot.endTime})`
                              : slot.type === "empty"
                              ? ""
                              : slot.type && slot.subject
                              ? `${slot.subject.name} ${
                                  slot.subject.faculty
                                    ? slot.subject.faculty.shortName
                                    : ""
                                } ${
                                  slot.type === "lecture"
                                    ? `(L${slot.instanceCount})`
                                    : slot.type === "tutorial"
                                    ? `(T${slot.instanceCount})`
                                    : slot.type === "practical"
                                    ? ""
                                    : ""
                                } (${slot.room ? slot.room.name : ""})`
                              : ""}
                          </td>
                        ))}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <div className="flex gap-5 object-contain">
                <table className="table-auto mt-4 border-2">
                  <thead>
                    <tr>
                      <th className="bg-slate-300">Subjects</th>
                      <th className="bg-slate-300">Faculty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetableForClass.subject.map((subject, index) => (
                      <tr key={index}>
                        <td className="border-2">
                          {subject.code} : {subject.name}
                        </td>
                        <td className="border-2">
                          {subject.faculty.shortName} - {subject.faculty.name}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <table className="table-auto mt-4 border-2">
                  <thead>
                    <tr>
                      <th colSpan={2} className="bg-slate-300">
                        Practical Batches
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getPracticalBatches(timetableForClass.practical_batch).map(
                      (batch, index) => (
                        <tr key={index}>
                          <td className="border-2 min-w-24">{batch}</td>
                          <td className="border-2 min-w-24"></td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        : Object.entries(facultyTimetables).map(
            ([facultyName, facultyTimetable], index) => (
              <div key={index} className="p-3">
                <h2 className="mt-5 mb-5">{facultyName}</h2>
                <table className="table-auto w-full text-center border-2">
                  <thead>
                    <tr>
                      <th></th>
                      {getTimeslots("TE").map((slot, index) => (
                        <th key={index} className="bg-slate-300">
                          {slot}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="border-2">
                    {daysOfWeek.map((day, dayIndex) => (
                      <tr key={dayIndex}>
                        <td className="border-2 bg-slate-300">{day}</td>
                        {getTimeslots("TE").map((timeslot, timeslotIndex) => (
                          <td
                            className="border-2 min-w-32 max-w-40 h-16"
                            key={timeslotIndex}
                          >
                            {facultyTimetable
                              .filter(
                                (slot) =>
                                  slot.day === dayIndex + 1 &&
                                  timeslot.includes(slot.timeslot)
                              )
                              .map((slot, slotIndex) => (
                                <div key={slotIndex}>
                                  {slot.subject} ({slot.class}) ({slot.room})
                                </div>
                              ))}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
    </div>
  );
};

export default DisplayOutput;
