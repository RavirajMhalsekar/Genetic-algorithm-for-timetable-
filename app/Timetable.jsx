"use client";
import { useState, useEffect } from "react";

const classDetails = [
  {
    department: "COMP",
    year: "FE",
    div: "A",
    strength: 88,
    practical_batch: 4,
    subject: [
      {
        name: "Mathematics II",
        code: "FE210",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Komal Paroolkar", shortName: "KP" },
      },
      {
        name: "Physics",
        code: "FE220",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Placida Periera", shortName: "PP" },
      },
      {
        name: "Computer Programming",
        code: "FE230",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Ramita Karpe", shortName: "RP" },
      },
      {
        name: "Introduction to Civil Engineering",
        code: "FE240",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Manasi Raut", shortName: "MR" },
      },
      {
        name: "Physics Lab",
        code: "FE250",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Placida Periera", shortName: "PP" },
      },
      {
        name: "Programming Lab",
        code: "FE260",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Engineering Graphics",
        code: "FE270",
        lecture: 1,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Marvin Fernandes", shortName: "MF" },
      },
      {
        name: "Workshop II",
        code: "FE280",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
    ],
  },
  {
    department: "COMP",
    year: "SE",
    div: "A",
    strength: 88,
    practical_batch: 4,
    subject: [
      {
        name: "Discrete Mathematical Structures",
        code: "CE410",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Adarsh Handa", shortName: "AKH" },
      },
      {
        name: "Microprocessors & Microcontrollers",
        code: "CE420",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Gauri Barve", shortName: "GPB" },
      },
      {
        name: "Formal Language and Automata Theory",
        code: "CE430",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Cynara Silveira", shortName: "CMF" },
      },
      {
        name: "Modern Algorithm Design Foundation ",
        code: "CE440",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Cassandra Fernandes", shortName: "CCF" },
      },
      {
        name: "Object Oriented Software Engineering",
        code: "CE450",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Lance D'Melo", shortName: "LDM" },
      },
      {
        name: "Modern Algorithm Design Foundation Lab",
        code: "CE460",
        lecture: 0,
        tutorial: 0,
        practical: 4,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Microprocessors & Microcontrollers Lab",
        code: "CE470",
        lecture: 0,
        tutorial: 0,
        practical: 4,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Economics for Engineers",
        code: "HM100",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        Split: "NO",
        department: "COMP",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Marvin Fernandes", shortName: "MF" },
      },
    ],
  },
  {
    department: "COMP",
    year: "TE",
    div: "A",
    strength: 80,
    practical_batch: 4,
    subject: [
      {
        name: "Modern Computer Networking",
        code: "CE610",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Vijay Kumar Pawar ", shortName: "VP" },
      },
      {
        name: "Artificial Intelligence",
        code: "CE620",
        lecture: 3,
        tutorial: 1,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Dr. Supriya Patil", shortName: "SP" },
      },
      {
        name: "Data Mining & Data Warehousing",
        code: "CE634",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Dr. Anusha Pai", shortName: "ARP" },
      },
      {
        name: "Cloud Computing & Applications ",
        code: "CE644",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Meghana Pai Kane ", shortName: "MPK" },
      },
      {
        name: "Data Science and Analytics ",
        code: "CEAM-03",
        lecture: 3,
        tutorial: 1,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "YES",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Ramita Karpe", shortName: "LRK" },
      },
      {
        name: "Computer Forensics and Cyber Security",
        code: "IT643",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "IT",
        Split: "NO",
        openElective: "YES",
        studentCount: 40,
        faculty: { name: "Ravina Rodrigues Quadros", shortName: "RNR" },
      },
      {
        name: "Computer Networks Lab ",
        code: "CE650",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        semester: 1,
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Supply Chain Management",
        code: "ME644",
        lecture: 4,
        tutorial: 0,
        practical: 0,
        department: "ME",
        Split: "NO",
        openElective: "YES",
        studentCount: 40,
        faculty: { name: "Pundalik Salkar", shortName: "PS" },
      },
      {
        name: "Artificial Intelligence Lab",
        code: "CE660",
        lecture: 0,
        tutorial: 0,
        practical: 2,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
      {
        name: "Technical Writing &   Professional Ethics",
        code: "HM200",
        lecture: 3,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Nadia Fernandes", shortName: "NF" },
      },
    ],
  },
  {
    department: "COMP",
    year: "BE",
    div: "A",
    strength: 80,
    practical_batch: 4,
    subject: [
      {
        name: "Cryptography Techniques for Network Security",
        code: "CE810",
        lecture: 1,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Louella Colaco", shortName: "LMC" },
      },
      {
        name: "Pattern Recognition",
        code: "CE822",
        lecture: 1,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: " Gayaksha Kandolkar", shortName: "GK" },
      },
      {
        name: "Internet of things",
        code: "CE821",
        lecture: 1,
        tutorial: 0,
        practical: 0,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "Vijaykumar Pawar", shortName: "VP" },
      },
      {
        name: "Project Work Phase II",
        code: "CE840",
        lecture: 0,
        tutorial: 0,
        practical: 10,
        department: "COMP",
        Split: "NO",
        openElective: "NO",
        studentCount: null,
        faculty: { name: "", shortName: "" },
      },
    ],
  },
];

const labs = [
  {
    name: "MECHlab1",
    subject: "sub1",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab2",
    subject: "sub2",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab3",
    subject: "sub3",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab4",
    subject: "sub4",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "MECHlab5",
    subject: "sub5",
    department: "MECH",
    capacity: 25,
  },
  {
    name: "COMPlab1",
    subject: "sub1",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab2",
    subject: "sub2",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab3",
    subject: "sub3",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab4",
    subject: "sub4",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "COMPlab5",
    subject: "sub5",
    department: "COMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab1",
    subject: "sub1",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab2",
    subject: "sub2",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab3",
    subject: "sub3",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab4",
    subject: "sub4",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ECOMPlab5",
    subject: "sub5",
    department: "ECOMP",
    capacity: 25,
  },
  {
    name: "ITlab1",
    subject: "sub1",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab2",
    subject: "sub2",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab3",
    subject: "sub3",
    department: "IT",
    capacity: 25,
  },
  {
    name: "ITlab4",
    subject: "sub4",
    department: "IT",
    capacity: 25,
  },
  {
    name: "lab5",
    subject: "sub5",
    department: "IT",
    capacity: 25,
  },
  {
    name: "Physics Lab",
    subject: "Physics",
    department: "general",
    capacity: 10,
  },
  {
    name: "Chemistry Lab",
    subject: "Chemistry",
    department: "general",
    capacity: 10,
  },
];

const workshops = [
  {
    day: "MONDAY",
    startTime: "2:00PM",
    endTime: "5:00PM",
  },
  {
    day: "TUESDAY",
    startTime: "9:00AM",
    endTime: "1:15PM",
  },
  {
    day: "WEDNESDAY",
    startTime: "2:00PM",
    endTime: "5:00PM",
  },
  {
    day: "THURSDAY",
    startTime: "9:00AM",
    endTime: "1:15PM",
  },
  {
    day: "FRIDAY",
    startTime: "2:00PM",
    endTime: "5:00PM",
  },
];

const meeting = [
  {
    name: "HOD Meeting",
    day: "THURSDAY",
    time: "3:00PM",
  },
  {
    name: "Faculty Meeting",
    day: "FRIDAY",
    time: "1:00PM",
  },
];

const rooms = [
  {
    name: "L01",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L02",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L03",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L04",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L05",
    capacity: 90,
    department: "MECH",
  },
  {
    name: "L11",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L12",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L13",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L14",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L15",
    capacity: 90,
    department: "ECOMP",
  },
  {
    name: "L21",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L22",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L23",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L24",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L25",
    capacity: 90,
    department: "COMP",
  },
  {
    name: "L31",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L32",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L33",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L34",
    capacity: 90,
    department: "IT",
  },
  {
    name: "L35",
    capacity: 90,
    department: "IT",
  },
];
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
// Define the genetic algorithm functions
const initializePopulation = (populationSize, classDetails) => {
  const population = [];
  for (let i = 0; i < populationSize; i++) {
    const timetable = [];
    for (const classDetail of classDetails) {
      const { department, year, div, strength, practical_batch, subject } =
        classDetail;
      const classTimetable = {
        department,
        year,
        div,
        strength,
        practical_batch,
        subject,
        timetable: generateRandomClassTimetable(classDetail),
      };
      timetable.push(classTimetable);
    }
    population.push(timetable);
  }
  return population;
};

const generateRandomClassTimetable = (classDetail) => {
  const { department, year, div, strength, practical_batch, subject } =
    classDetail;
  const classTimetable = [];

  // Keep track of instance counts for each subject and type
  const subjectInstanceCounts = subject.reduce((counts, subjectData) => {
    counts[subjectData.code] = {
      lecture: 0,
      tutorial: 0,
      practical: 0,
      lectureMax:
        subjectData.split === "YES"
          ? subjectData.lecture * 2
          : subjectData.lecture,
      tutorialMax: subjectData.tutorial * 2,
      practicalMax: subjectData.practical,
    };
    return counts;
  }, {});

  // Implement logic to generate a random timetable for the class
  for (let day = 0; day < 5; day++) {
    // 5 days in a week (Monday to Friday)
    const dailySchedule = [];
    for (let timeslot = 0; timeslot < getTimeslots(year).length; timeslot++) {
      const roomIndex = Math.floor(Math.random() * rooms.length);
      const room = rooms[roomIndex];

      const subjectIndex = Math.floor(Math.random() * subject.length);
      const subjectData = subject[subjectIndex];

      const type =
        subjectInstanceCounts[subjectData.code].lecture <
        subjectInstanceCounts[subjectData.code].lectureMax
          ? "lecture"
          : subjectInstanceCounts[subjectData.code].tutorial <
            subjectInstanceCounts[subjectData.code].tutorialMax
          ? "tutorial"
          : subjectInstanceCounts[subjectData.code].practical <
            subjectInstanceCounts[subjectData.code].practicalMax
          ? "practical"
          : null;

      const slot = {
        room,
        subject: type === null ? null : subjectData,
        type,
        instanceCount:
          type === null
            ? null
            : ++subjectInstanceCounts[subjectData.code][type], // Add instance count to the slot
        // Add other necessary information
      };

      // Add break slots
      if ((year === "TE" || year === "BE") && timeslot === 2) {
        slot.type = "break";
        slot.startTime = "11:00 AM";
        slot.endTime = "11:15 AM";
      } else if ((year === "TE" || year === "BE") && timeslot === 5) {
        slot.type = "break";
        slot.startTime = "1:15 PM";
        slot.endTime = "2:00 PM";
      } else if ((year === "FE" || year === "SE") && timeslot === 3) {
        slot.type = "break";
        slot.startTime = "12:00 PM";
        slot.endTime = "1:00 PM";
      }

      dailySchedule.push(slot);
    }
    classTimetable.push(dailySchedule);
  }

  return classTimetable;
};
const checkRoomDepartmentMatch = (timetable) => {
  for (const classTimeTable of timetable) {
    const { department, year, div, timetable } = classTimeTable;
    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        const { room, subject } = slot;

        if (
          subject &&
          subject.department !== room.department &&
          room.department !== department
        ) {
          return false;
        }
      }
    }
  }
  return true;
};

const checkLabDepartmentMatch = (timetable) => {
  for (const classTimeTable of timetable) {
    const { department, timetable } = classTimeTable;

    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        const { subject } = slot;

        if (
          subject &&
          subject.practical > 0 &&
          slot.room.department !== department
        ) {
          return false;
        }
      }
    }
  }
  return true;
};

const checkLabCountMatch = (timetable) => {
  for (const classTimetable of timetable) {
    const { practical_batch, department } = classTimetable;
    const labCount = labs.filter((lab) => lab.department === department).length;

    if (labCount < practical_batch) {
      return false;
    }
  }
  return true;
};

const checkRoomAllocation = (timetable, classDetails) => {
  for (const classTimeTable of timetable) {
    const { department, year, div, timetable } = classTimeTable;
    const classDetail = classDetails.find(
      (detail) =>
        detail.department === department &&
        detail.year === year &&
        detail.div === div
    );

    if (classDetail && classDetail.subject) {
      for (const dailySchedule of timetable) {
        for (const slot of dailySchedule) {
          const { room, subject } = slot;
          const { department: subjectDepartment } = subject;

          if (subjectDepartment === department) {
            // Subject department matches the class department
            if (room.department !== department) {
              // Room department does not match class department
              return false;
            }
          } else {
            // Subject department is different from class department
            if (room.department !== subjectDepartment) {
              // Room department does not match subject department
              return false;
            }
          }

          if (subject.practical > 0 && room.type !== "lab") {
            // Practical subject not assigned to a lab
            return false;
          }
        }
      }
    }
  }
  return true;
};

const checkLabAllocation = (timetable, classDetails) => {
  for (const classTimeTable of timetable) {
    const { department, practical_batch } = classTimeTable;
    const availableLabs = labs.filter((lab) => lab.department === department);

    if (availableLabs.length < practical_batch) {
      // Insufficient labs available for the class
      return false;
    }

    const labUsageCount = new Array(availableLabs.length).fill(0);

    for (const dailySchedule of classTimeTable.timetable) {
      for (const slot of dailySchedule) {
        const { subject, room } = slot;
        if (subject && subject.name.includes("Lab")) {
          // Add null check for subject
          let assignedLab = null;

          // Check for specific lab subjects
          if (subject.name === "Physics Lab") {
            assignedLab = labs.find(
              (lab) => lab.subject === "Physics" && lab.department === "general"
            );
          } else if (subject.name === "Chemistry Lab") {
            assignedLab = labs.find(
              (lab) =>
                lab.subject === "Chemistry" && lab.department === "general"
            );
          } else {
            // For other lab subjects
            const subjectDepartment = subject.department;
            const availableLabsForSubject = labs.filter(
              (lab) => lab.department === subjectDepartment
            );
            if (availableLabsForSubject.length > 0) {
              // Assign the first available lab
              assignedLab = availableLabsForSubject[0];
            }
          }

          if (assignedLab) {
            // Assign the specific lab
            slot.room = assignedLab;
          } else {
            // No available labs found for the subject, assign any available room
            const availableRoom = rooms.find(
              (room) =>
                !dailySchedule.some(
                  (otherSlot) => otherSlot.room.name === room.name
                )
            );
            if (availableRoom) {
              slot.room = availableRoom;
            } else {
              // No available rooms found
              return false;
            }
          }
        }
      }
    }

    if (labUsageCount.some((count) => count > 1)) {
      // A lab is assigned to multiple practical sessions simultaneously
      return false;
    }
  }
  return true;
};

const isRoomAvailable = (department, timeslot, timetable) => {
  const availableRooms = rooms.filter((room) => room.department === department);

  for (const classTimeTable of timetable) {
    const { timetable: classSchedule } = classTimeTable;
    const dailySchedule = classSchedule[timeslot.day - 1]; // Assuming day index starts from 1

    for (const slot of dailySchedule) {
      if (slot.room) {
        // Add null check for slot.room
        const roomIndex = availableRooms.findIndex(
          (room) => room.name === slot.room.name
        );
        if (roomIndex !== -1) {
          // Room is not available
          availableRooms.splice(roomIndex, 1);
        }
      }
    }
  }

  return availableRooms.length > 0;
};
const checkSubjectDistribution = (timetable, classDetails) => {
  for (const classTimeTable of timetable) {
    const { department, year, div, timetable } = classTimeTable;
    const classDetail = classDetails.find(
      (detail) =>
        detail.department === department &&
        detail.year === year &&
        detail.div === div
    );

    if (classDetail && classDetail.subject) {
      for (const subjectData of classDetail.subject) {
        const { lecture, tutorial, practical, split, code } = subjectData;
        let lectureCount = 0;
        let tutorialCount = 0;
        let practicalCount = 0;

        for (const dailySchedule of timetable) {
          for (const slot of dailySchedule) {
            if (slot.subject && slot.subject.code === code) {
              // Add null check for slot.subject
              if (slot.type === "lecture") {
                lectureCount++;
              } else if (slot.type === "tutorial") {
                tutorialCount++;
              } else if (slot.type === "practical") {
                practicalCount++;
              }
            }
          }
        }

        const expectedLectureCount = split === "YES" ? lecture * 2 : lecture;
        const expectedTutorialCount = tutorial * 2;
        const expectedPracticalCount = practical;

        if (
          lectureCount !== expectedLectureCount ||
          tutorialCount !== expectedTutorialCount ||
          practicalCount !== expectedPracticalCount
        ) {
          return false;
        }
        // Check subject distribution throughout the week
        const dayCounters = new Array(5).fill(0);
        for (const dailySchedule of timetable) {
          for (const slot of dailySchedule) {
            if (slot.subject && slot.subject.code === code) {
              // Add null check for slot.subject
              dayCounters[dailySchedule.dayIndex]++;
            }
          }
        }

        const minDayCount = Math.min(...dayCounters);
        const maxDayCount = Math.max(...dayCounters);

        if (maxDayCount - minDayCount > 1) {
          // Subject not evenly distributed throughout the week
          return false;
        }

        // Check for paired lectures for subjects with split = "YES"
        if (split === "YES") {
          for (const dailySchedule of timetable) {
            const pairedLectures = dailySchedule.filter(
              (slot) =>
                slot.subject &&
                slot.subject.split === "YES" &&
                slot.type === "lecture" // Add null check for slot.subject
            );

            if (pairedLectures.length % 2 !== 0) {
              // Odd number of paired lectures found
              return false;
            }
          }
        }
      }
    }
  }
  return true;
};

const checkBreakTimings = (timetable) => {
  for (const classTimeTable of timetable) {
    const { year, timetable } = classTimeTable;

    for (const dailySchedule of timetable) {
      if (year === "TE" || year === "BE") {
        const teaBreakSlot = dailySchedule.find(
          (slot) =>
            slot.startTime === "11:00 AM" &&
            slot.endTime === "11:15 AM" &&
            slot.type !== "break"
        );
        const lunchBreakSlot = dailySchedule.find(
          (slot) =>
            slot.startTime === "1:15 PM" &&
            slot.endTime === "2:00 PM" &&
            slot.type !== "break"
        );

        if (teaBreakSlot || lunchBreakSlot) {
          return false;
        }
      } else if (year === "FE" || year === "SE") {
        const lunchBreakSlot = dailySchedule.find(
          (slot) =>
            slot.startTime === "12:00 PM" &&
            slot.endTime === "1:00 PM" &&
            slot.type !== "break"
        );

        if (lunchBreakSlot) {
          return false;
        }
      }
    }
  }
  return true;
};

const areConsecutiveSlots = (slot1, slot2) => {
  const slot1StartTime = new Date(`2000-01-01T${slot1.startTime}`);
  const slot1EndTime = new Date(`2000-01-01T${slot1.endTime}`);
  const slot2StartTime = new Date(`2000-01-01T${slot2.startTime}`);

  return slot1EndTime.getTime() === slot2StartTime.getTime();
};

const checkInstructorRest = (timetable) => {
  const instructorTimetables = {};

  for (const classTimeTable of timetable) {
    const { timetable } = classTimeTable;
    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        if (slot.subject) {
          // Add null check for slot.subject
          const { faculty } = slot.subject;
          const { name } = faculty;

          if (!instructorTimetables[name]) {
            instructorTimetables[name] = [];
          }

          instructorTimetables[name].push(slot);
        }
      }
    }
  }

  for (const instructorName in instructorTimetables) {
    const instructorSlots = instructorTimetables[instructorName];
    let consecutiveHours = 0;

    for (let i = 0; i < instructorSlots.length; i++) {
      const currentSlot = instructorSlots[i];
      const nextSlot = instructorSlots[i + 1];

      if (nextSlot && areConsecutiveSlots(currentSlot, nextSlot)) {
        consecutiveHours++;
      } else {
        if (consecutiveHours >= 2) {
          return false;
        }
        consecutiveHours = 0;
      }
    }
  }

  return true;
};

const checkInstructorLoadBalance = (timetable) => {
  const instructorLoadCounts = {};

  for (const classTimeTable of timetable) {
    const { timetable } = classTimeTable;
    for (const dailySchedule of timetable) {
      for (const slot of dailySchedule) {
        if (slot.subject) {
          // Check if slot.subject is not undefined
          const { faculty } = slot.subject;
          const { name } = faculty;

          if (!instructorLoadCounts[name]) {
            instructorLoadCounts[name] = 0;
          }

          instructorLoadCounts[name]++;
        }
      }
    }
  }

  const loadValues = Object.values(instructorLoadCounts);
  const maxLoad = Math.max(...loadValues);
  const minLoad = Math.min(...loadValues);

  const loadDifference = maxLoad - minLoad;

  // Adjust the threshold based on your requirements
  const threshold = 5;

  if (loadDifference > threshold) {
    return false;
  }

  return true;
};
const checkRoomAvailability = (timetable) => {
  for (const classTimeTable of timetable) {
    const { department, timetable: classSchedule } = classTimeTable;

    for (const [dayIndex, dailySchedule] of classSchedule.entries()) {
      for (const slot of dailySchedule) {
        const { room, subject } = slot;
        const timeslot = {
          day: dayIndex + 1, // Assuming day index starts from 0
          // Add other necessary information about the timeslot
        };

        const subjectDepartment = subject
          ? subject.department || department
          : department;
        if (!isRoomAvailable(subjectDepartment, timeslot, timetable)) {
          return false;
        }
      }
    }
  }

  return true;
};
const evaluateFitness = (timetable) => {
  let fitnessScore = 0;
  const constraints = {
    roomDepartmentMatch: checkRoomDepartmentMatch(timetable),
    labDepartmentMatch: checkLabDepartmentMatch(timetable),
    labCountMatch: checkLabCountMatch(timetable),
    subjectDistribution: checkSubjectDistribution(timetable, classDetails),
    breakTimings: checkBreakTimings(timetable),
    instructorRest: checkInstructorRest(timetable),
    instructorLoadBalance: checkInstructorLoadBalance(timetable),
    roomAllocation: checkRoomAllocation(timetable, classDetails),
    labAllocation: checkLabAllocation(timetable, classDetails),
    roomAvailability: checkRoomAvailability(timetable), // Add this new constraint
  };

  for (const constraint in constraints) {
    if (constraints[constraint]) {
      fitnessScore++;
    }
  }

  return fitnessScore;
};

// Other genetic algorithm functions (selection, crossover, mutation, replacement, termination condition)

// Functional component for Next.js 13
const Timetable = () => {
  const [population, setPopulation] = useState([]);
  const [bestTimetable, setBestTimetable] = useState([]);

  useEffect(() => {
    const populationSize = 100; // Set the desired population size
    const maxGenerations = 1000; // Set the maximum number of generations

    let currentPopulation = initializePopulation(populationSize, classDetails);
    setPopulation(currentPopulation);

    const runGeneticAlgorithm = () => {
      let currentGeneration = 0;
      while (currentGeneration < maxGenerations) {
        // Implement the genetic algorithm loop
        // (selection, crossover, mutation, replacement, fitness evaluation)

        currentGeneration++;
      }

      // Find the best timetable from the final population
      const bestIndividual = currentPopulation.reduce((prev, curr) => {
        return evaluateFitness(prev) > evaluateFitness(curr) ? prev : curr;
      });
      setBestTimetable(bestIndividual);
    };

    runGeneticAlgorithm();
  }, []);

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const getPracticalBatches = (practical_batch) => {
    const batches = [];
    for (let i = 1; i <= practical_batch; i++) {
      batches.push(`P${i}`);
    }
    return batches;
  };
  return (
    <div>
      {bestTimetable.map((timetableForClass, index) => (
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
              {timetableForClass.timetable.map((dailySchedule, dayIndex) => (
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
                        : slot.type
                        ? `${slot.subject.name} ${
                            slot.subject.faculty.shortName
                          } ${
                            slot.type === "lecture"
                              ? `(L${slot.instanceCount})`
                              : slot.type === "tutorial"
                              ? `(T${slot.instanceCount})`
                              : slot.type === "practical"
                              ? ""
                              : ""
                          } (${slot.room.name})`
                        : ""}
                    </td>
                  ))}
                </tr>
              ))}
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
      ))}
    </div>
  );
};

export default Timetable;
