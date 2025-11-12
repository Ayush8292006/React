import React from "react";

import Card from "./components/Card";
import User from "./components/User";

// ✅ Move jobs OUTSIDE the App component
export const jobs = [
  {
    id: 1,
    company: "Amazon",
    position: "Senior UI/UX Designer",
    type: "Part-Time",
    level: "Senior Level",
    salary: "$120/yr",
    location: "Mumbai, India",
    posted: "5 days ago",
  },
  {
    id: 2,
    company: "Google",
    position: "Frontend Developer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$90k/yr",
    location: "Bangalore, India",
    posted: "2 days ago",
  },
  {
    id: 3,
    company: "Microsoft",
    position: "Software Engineer",
    type: "Full-Time",
    level: "Junior Level",
    salary: "$85k/yr",
    location: "Hyderabad, India",
    posted: "1 week ago",
  },
  {
    id: 4,
    company: "Adobe",
    position: "Product Designer",
    type: "Remote",
    level: "Mid Level",
    salary: "$110k/yr",
    location: "Remote",
    posted: "3 days ago",
  },
  {
    id: 5,
    company: "Netflix",
    position: "Backend Developer",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$150k/yr",
    location: "Remote",
    posted: "1 day ago",
  },
  {
    id: 6,
    company: "Meta",
    position: "Data Scientist",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$160k/yr",
    location: "Gurugram, India",
    posted: "6 days ago",
  },
  {
    id: 7,
    company: "TCS",
    position: "Software Tester",
    type: "Contract",
    level: "Junior Level",
    salary: "$45k/yr",
    location: "Pune, India",
    posted: "4 days ago",
  },
  {
    id: 8,
    company: "Infosys",
    position: "DevOps Engineer",
    type: "Full-Time",
    level: "Mid Level",
    salary: "$100k/yr",
    location: "Chennai, India",
    posted: "3 days ago",
  },
  {
    id: 9,
    company: "Wipro",
    position: "Cloud Architect",
    type: "Full-Time",
    level: "Senior Level",
    salary: "$140k/yr",
    location: "Noida, India",
    posted: "7 days ago",
  },

];

const App = () => {
  return (
    <div className="parent">
     

      {jobs.map((elem) => {
        return <Card key={elem.id} data={elem} />;
      })}
    </div>
  );
};

export default App;
