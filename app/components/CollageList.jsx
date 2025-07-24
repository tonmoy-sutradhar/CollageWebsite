// import CollegeCard from "./CollegeCard";
import CollegeCard from "./CollageCard";

export default function CollegeList() {
  const colleges = [
    {
      id: 1,
      name: "AIUB",
      admission: "Aug 1",
      events: 4,
      research: 12,
      sports: 6,
    },
    {
      id: 2,
      name: "NSU",
      admission: "Sep 1",
      events: 3,
      research: 15,
      sports: 5,
    },
    {
      id: 3,
      name: "BRACU",
      admission: "Jul 25",
      events: 2,
      research: 10,
      sports: 4,
    },
  ];

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {colleges.map((college) => (
        <CollegeCard key={college.id} data={college} />
      ))}
    </div>
  );
}
