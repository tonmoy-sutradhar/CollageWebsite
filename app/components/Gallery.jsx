// export default function Gallery() {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-2">College Gallery</h2>
//       <div className="grid grid-cols-3 gap-2">
//         {[1, 2, 3, 4, 5, 6].map((n) => (
//           <img
//             key={n}
//             src={`/gallery/${n}.jpg`}
//             alt="Gallery"
//             className="w-full h-32 object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function Gallery() {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold mb-4">College Gallery</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {[1015, 1039, 1043, 1062, 1074, 1084].map((n) => (
//           <div
//             key={n}
//             className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
//           >
//             <img
//               src={`https://picsum.photos/id/${n}/600/400`}
//               alt={`Campus view ${n}`}
//               className="w-full h-48 md:h-56 object-cover"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function Gallery() {
  const universityImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "University campus with historic buildings",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Students walking on university campus",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "University library interior",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "Graduation ceremony",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "University classroom lecture",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
      alt: "University laboratory research",
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
        University Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {universityImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div className="p-3 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
