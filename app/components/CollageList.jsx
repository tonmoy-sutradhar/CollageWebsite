// import CollegeCard from "./CollageCard";

// export default function CollegeList() {
//   const colleges = [
//     {
//       id: 1,
//       name: "AIUB",
//       admission: "Aug 1",
//       events: 4,
//       research: 12,
//       sports: 6,
//     },
//     {
//       id: 2,
//       name: "NSU",
//       admission: "Sep 1",
//       events: 3,
//       research: 15,
//       sports: 5,
//     },
//     {
//       id: 3,
//       name: "BRACU",
//       admission: "Jul 25",
//       events: 2,
//       research: 10,
//       sports: 4,
//     },
//   ];

//   return (
//     <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {colleges.map((college) => (
//         <CollegeCard key={college.id} data={college} />
//       ))}
//     </div>
//   );
// }
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
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400", // Added image URL
    },
    {
      id: 2,
      name: "NSU",
      admission: "Sep 1",
      events: 3,
      research: 15,
      sports: 5,
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400", // Added image URL
    },
    {
      id: 3,
      name: "BRACU",
      admission: "Jul 25",
      events: 2,
      research: 10,
      sports: 4,
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400", // Added image URL
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
