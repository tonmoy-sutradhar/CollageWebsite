// import Link from "next/link";

// export default function CollegeCard({ data }) {
//   return (
//     <div className="border p-4 rounded shadow hover:shadow-md">
//       <img
//         src="/college.jpg"
//         alt="College"
//         className="w-full h-40 object-cover rounded"
//       />
//       <h2 className="text-xl font-bold mt-2">{data.name}</h2>
//       <p>Admission: {data.admission}</p>
//       <p>Events: {data.events}</p>
//       <p>Research: {data.research}</p>
//       <p>Sports: {data.sports}</p>
//       <Link href={`/college/${data.id}`}>
//         <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
//           Details
//         </button>
//       </Link>
//     </div>
//   );
// }
import Link from "next/link";

export default function CollegeCard({ data }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md">
      {/* Updated to use dynamic image URL */}
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{data.name}</h2>
      <p>Admission: {data.admission}</p>
      <p>Events: {data.events}</p>
      <p>Research: {data.research}</p>
      <p>Sports: {data.sports}</p>
      <Link href="https://www.northsouth.edu/#">
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Details
        </button>
      </Link>
    </div>
  );
}
