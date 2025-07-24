export default function ResearchPapers() {
  const links = [
    { title: "AI in Education", url: "#" },
    { title: "Green Energy", url: "#" },
    { title: "Data Security", url: "#" },
  ];
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Research Papers</h2>
      <ul className="list-disc pl-6">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} className="text-blue-600 underline">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
