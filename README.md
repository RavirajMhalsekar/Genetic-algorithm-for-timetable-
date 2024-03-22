we are making a timetable generator for our college

the frontend is done using nextjs 14 using Typescript and Tailwindcss
the database we are using is the Appwrite cloud database and it has the following collections and attributes

room {
name: string
capacity: integer 
} 
 lab {
name: string
subject: string
department: string
capacity: integer
}
 faculty {
name: string
designation: string
department: string
shortName: string
}
subject {
name: string
code: string
lecture: integer
practical: integer
tutorial: integer
semester: integer
department: string
split: string
shortName: string
}
meetingInfo{
name: string
day: enum[Monday,Tuesday,Wednesday,Thursday,Friday,Saturday ]
time: string (eg. 09:30AM)
}
workshop{
day: enum[Monday,Tuesday,Wednesday,Thursday,Friday,Saturday ]
startTime: string (eg. 09:30AM)
endTime: string (eg. 09:30AM)
}

we have created a dashboard to interact with the database
all the tables mentioned above store the respective data


aim of the project: using all the data from the database we have to generate the timetable for the entire college

current task: we have to create the genetic algorithm to generate the timetables using data from all the tables mentioned above 

from the UI when we send data to the algorithm these are all the values that will be passed to the algorithm

first, the room data will store info about all the rooms available for each department 



