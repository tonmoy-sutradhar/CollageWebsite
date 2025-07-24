// import Link from "next/link";

// function Navbar() {
//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between">
//       <div className="text-xl font-bold">CollegeBook</div>
//       <div className="space-x-4">
//         <Link href="/">Home</Link>
//         <Link href="https://www.aiub.edu">Colleges</Link>
//         <Link href="/admission">Admission</Link>
//         <Link href="/my-college">My College</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">CollegeBook</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>

        {/* Replace Link with regular anchor for external URLs */}
        <a
          href="https://www.aiub.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Colleges
        </a>

        <Link href="/admission">Admission</Link>
        <a
          href="https://www.aiub.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          My College
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
