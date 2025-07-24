import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="text-xl font-bold">CollegeBook</div>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/colleges">Colleges</Link>
        <Link href="/admission">Admission</Link>
        <Link href="/my-college">My College</Link>
      </div>
    </nav>
  );
}

export default Navbar;
