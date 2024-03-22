// // import { v4 as uuidv4 } from "uuid";

// interface Course {
//   id: string;
//   name: string;
//   subject: string;
//   department: string;
//   capacity: number;
// }

// interface Lab {
//   name: string;
//   subject: string;
//   department: string;
//   capacity: number;
// }

// interface Workshop {
//   day: string;
//   startTime: string;
//   endTime: string;
// }

// interface Meeting {
//   name: string;
//   day: string;
//   time: string;
// }

// interface ClassDetails {
//   department: string;
//   year: string;
//   div: string;
//   strength: number;
//   practical_batch: number;
//   subject: {
//     name: string,
//     code: string,
//     lecture: number,
//     tutorial: number,
//     practical: number,
//     split: string,
//     openElective: string,
//     studentCount: number,
//     faculty: {
//       name: string,
//       shortName: string,
//     },
//   }[];
// }

// // Define the fitness function
// function fitnessFunction(
//   timetable: any,
//   classDetails: ClassDetails[],
//   courseList: Course[],
//   labList: Lab[],
//   workshop: Workshop[],
//   meeting: Meeting[]
// ): number {
//   let score = 0;
//   // Calculate the fitness score based on the number of clashes, rooms used, and faculty workload
//   return score;
// }

// // Define the initial population
// function initialPopulation(
//   classDetails: ClassDetails[],
//   courseList: Course[],
//   labList: Lab[],
//   workshop: Workshop[]
// ): any[] {
//   const population: any[] = [];
//   for (let i = 0; i < 100; i++) {
//     const timetable: any = {};
//     for (let j = 0; j < classDetails.length; j++) {
//       const classDetail: ClassDetails = classDetails[j];
//       timetable[classDetail.id] = Array(25).fill(null);
//       for (let k = 0; k < classDetail.subject.length; k++) {
//         const subject: any = classDetail.subject[k];
//         const room: Course | Lab =
//           subject.practical && labList
//             ? labList[Math.floor(Math.random() * labList.length)]
//             : courseList[Math.floor(Math.random() * courseList.length)];
//         const slot: number = Math.floor(Math.random() * 25);
//         timetable[classDetail.id][slot] = { subject, room };
//       }
//     }
//     population.push(timetable);
//   }
//   return population;
// }

// // Define the crossover function
// function crossover(parent1: any, parent2: any): any {
//   const offspring: any = {};
//   const midPoint = Math.floor(Math.random() * 25);
//   for (let i = 0; i < Object.keys(parent1).length; i++) {
//     const classDetail: ClassDetails = classDetails[i];
//     offspring[classDetail.id] = [];
//     for (let j = 0; j < 25; j++) {
//       if (j < midPoint) {
//         offspring[classDetail.id].push(parent1[classDetail.id][j]);
//       } else {
//         offspring[classDetail.id].push(parent2[classDetail.id][j]);
//       }
//     }
//   }
//   return offspring;
// }

// // Define the mutation function
// function mutate(timetable: any) {
//   const midPoint = Math.floor(Math.random() * 25);
//   const classDetails = Object.keys(timetable);
//   const classDetail1 =
//     classDetails[Math.floor(Math.random() * classDetails.length)];
//   const subject1 = timetable[classDetail1][midPoint];
//   const room1 = subject1.room;
//   const timeSlot = midPoint;
//   const classDetail2 =
//     classDetails[Math.floor(Math.random() * classDetails.length)];
//   const subject2 = timetable[classDetail2][Math.floor(Math.random() * 25)];
//   const room2 = subject2.room;
//   timetable[classDetail1][midPoint] = {
//     subject: subject2.subject,
//     room: room2,
//   };
//   timetable[classDetail2][timeSlot] = {
//     subject: subject1.subject,
//     room: room1,
//   };
// }

// // Define the selection function
// function selection(population: any[], fitnessValues: number[]): any {
//   const totalFitness = fitnessValues.reduce((a, b) => a + b, 0);
//   const fitnessSum = Array(population.length).fill(0);
//   let selected = [];
//   fitnessValues.forEach((fitness, i) => {
//     fitnessSum[i] = totalFitness -= fitness;
//     if (Math.random() < fitness / totalFitness) {
//       selected.push(population[i]);
//     }
//   });
//   return selected;
// }

// // Define the genetic algorithm
// function geneticAlgorithm(
//   classDetails: ClassDetails[],
//   courseList: Course[],
//   labList: Lab[],
//   workshop: Workshop[],
//   meeting: Meeting[]
// ): any[] {
//   const initialPopulation = initialPopulation(
//     classDetails,
//     courseList,
//     labList,
//     workshop
//   );
//   const fitnessValues = initialPopulation.map((timetable) =>
//     fitnessFunction(
//       timetable,
//       classDetails,
//       courseList,
//       labList,
//       workshop,
//       meeting
//     )
//   );
//   let population = selection(initialPopulation, fitnessValues);
//   for (let i = 0; i < 100; i++) {
//     for (let j = 0; j < population.length; j++) {
//       const parent1 = population[Math.floor(Math.random() * population.length)];
//       const parent2 = population[Math.floor(Math.random() * population.length)];
//       const offspring = crossover(parent1, parent2);
//       mutate(offspring);
//       population.push(offspring);
//     }
//     fitnessValues = population.map((timetable) =>
//       fitnessFunction(
//         timetable,
//         classDetails,
//         courseList,
//         labList,
//         workshop,
//         meeting
//       )
//     );
//     population = selection(population, fitnessValues);
//   }
//   return population;
// }
