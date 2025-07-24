export default function Reviews() {
  const reviews = [
    { name: "Tonmoy", review: "AIUB has a great research environment!" },
    { name: "Rafi", review: "Love the events at NSU!" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
      <ul>
        {reviews.map((r, idx) => (
          <li key={idx} className="border p-2 rounded my-1">
            <strong>{r.name}:</strong> {r.review}
          </li>
        ))}
      </ul>
    </div>
  );
}
