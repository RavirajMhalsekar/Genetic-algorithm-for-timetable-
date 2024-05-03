we are making a timetable generator for our college

the frontend is done using nextjs 14 using Typescript and Tailwindcss
the database we are using is the Appwrite cloud database and it has the following collections and attributes


aim of the project: using all the data from the database we have to generate the timetable for the entire college

current task: we have to create the genetic algorithm to generate the timetables using data from all the tables mentioned above 

from the UI when we send data to the algorithm these are all the values that will be passed to the algorithm

first, the room data will store info about all the rooms available for each department 


constraints:
[done] subjects scheduled from the selected subjects list only
[done] labs should be assigned to practical subjects
[done] exact number of lectures, tutorials and  practicals per week
[done] rooms only from that department should be allocated
[done] create faculty timetable
[] workshop subject to be assigned only if there is any workshop available(check the workshop schedule)
[] add meetings from meeting info to faculty timetables 
[] no room clashes with other classes in the same day for same timeSlot
[] while practicals are scheduled then all the practical batches must be allocated to separate labs
[] if a teacher teaches  more than one subject then don't assign her to another class if she is already assigned to a class for that timeSlot (assign teachers according to their availability)
[] if a subject has split then pair it with another subject which also has a split and add them in one cell in the output
[] if subject has openElective="YES" then combine all the open elective subjects into 1 cell but assign different class for each
[] handle combining different department students for professional and open elective
