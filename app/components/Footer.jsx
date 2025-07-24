// // export default function Footer() {
// //   return (
// //     <footer className="bg-gray-200 text-center p-4 mt-4">
// //       © 2025 CollegeBook. All rights reserved.
// //     </footer>
// //   );
// // }
// import Link from "next/link";
// import Image from "next/image";

// const UniversityFooter = () => {
//   return (
//     <footer className="bg-university-dark-blue text-white mt-auto">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* University Branding */}
//           <div className="space-y-4">
//             <div className="flex items-center">
//               <Image
//                 src="/university-logo.svg"
//                 alt="University Logo"
//                 width={50}
//                 height={50}
//               />
//               <div className="ml-3">
//                 <h2 className="text-xl font-bold">UNIVERSITY NAME</h2>
//                 <p className="text-university-gold text-sm">
//                   Excellence in Education
//                 </p>
//               </div>
//             </div>
//             <p className="text-sm opacity-80">
//               A leading institution dedicated to innovation, research, and
//               academic excellence since 1950.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-university-gold pb-2">
//               Quick Links
//             </h3>
//             <ul className="space-y-2">
//               {[
//                 ["About", "/about"],
//                 ["Academics", "/academics"],
//                 ["Admissions", "/admissions"],
//                 ["Research", "/research"],
//                 ["Campus Life", "/campus-life"],
//                 ["News & Events", "/news"],
//               ].map(([title, url]) => (
//                 <li key={title}>
//                   <Link
//                     href={url}
//                     className="hover:text-university-gold transition-colors"
//                   >
//                     {title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Information */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-university-gold pb-2">
//               Contact Us
//             </h3>
//             <address className="not-italic space-y-2">
//               <p>123 University Avenue</p>
//               <p>Academic City, AC 12345</p>
//               <div className="pt-2">
//                 <p>
//                   Phone:{" "}
//                   <a
//                     href="tel:+11234567890"
//                     className="hover:text-university-gold"
//                   >
//                     (123) 456-7890
//                   </a>
//                 </p>
//                 <p>
//                   Email:{" "}
//                   <a
//                     href="mailto:info@university.edu"
//                     className="hover:text-university-gold"
//                   >
//                     info@university.edu
//                   </a>
//                 </p>
//               </div>
//             </address>
//           </div>

//           {/* Social & Newsletter */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-university-gold pb-2">
//               Connect With Us
//             </h3>
//             <div className="flex space-x-4 mb-6">
//               {["facebook", "twitter", "instagram", "linkedin", "youtube"].map(
//                 (platform) => (
//                   <a
//                     key={platform}
//                     href={`https://${platform}.com/university`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-university-blue p-2 rounded-full hover:bg-university-gold transition-colors"
//                     aria-label={platform}
//                   >
//                     <span className="sr-only">{platform}</span>
//                     {/* Replace with actual icons */}
//                     <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
//                   </a>
//                 )
//               )}
//             </div>

//             <div>
//               <h4 className="font-medium mb-2">University Newsletter</h4>
//               <form className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-3 py-2 text-gray-700 rounded-l focus:outline-none w-full"
//                 />
//                 <button
//                   type="submit"
//                   className="bg-university-gold text-university-dark-blue px-4 py-2 rounded-r font-medium hover:bg-opacity-90"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="border-t border-gray-700 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
//           <div>
//             &copy; {new Date().getFullYear()} University Name. All rights
//             reserved.
//           </div>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <Link href="/privacy-policy" className="hover:text-university-gold">
//               Privacy Policy
//             </Link>
//             <Link href="/accessibility" className="hover:text-university-gold">
//               Accessibility
//             </Link>
//             <Link href="/terms" className="hover:text-university-gold">
//               Terms of Use
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default UniversityFooter;
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const UniversityFooter = () => {
  return (
    <footer className="bg-[#002147] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* University Branding */}
          <div className="space-y-4">
            <div className="flex items-center">
              {/* <div className="relative w-16 h-16">
                <Image
                  src="/university-logo.png"
                  alt="University Logo"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                />
              </div> */}
              <div className="ml-3">
                <h2 className="text-xl font-bold">PRESTIGE UNIVERSITY</h2>
                <p className="text-[#FFD700] text-sm">
                  Excellence in Education
                </p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              A leading institution dedicated to innovation, research, and
              academic excellence since 1950.
            </p>

            {/* Accreditation Badges */}
            <div className="flex space-x-3 pt-2">
              {/* <div className="relative w-16 h-16">
                <Image
                  src="/accreditation-badge.png"
                  alt="Educational Accreditation"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div> */}
              {/* <div className="relative w-16 h-16">
                <Image
                  src="/quality-badge.png"
                  alt="Quality Education Certified"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFD700] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                ["About", "/about"],
                ["Academics", "/academics"],
                ["Admissions", "/admissions"],
                ["Research", "/research"],
                ["Campus Life", "/campus-life"],
                ["News & Events", "/news"],
                ["Alumni", "/alumni"],
                ["Careers", "/careers"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    href={url}
                    className="hover:text-[#FFD700] transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#FFD700] rounded-full mr-2"></span>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFD700] pb-2">
              Contact Us
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#FFD700] mt-1 mr-3 flex-shrink-0" />
                <p>
                  123 Academic Avenue
                  <br />
                  Knowledge City, KC 54321
                </p>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-[#FFD700] mr-3" />
                <a href="tel:+11234567890" className="hover:text-[#FFD700]">
                  (123) 456-7890
                </a>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-[#FFD700] mr-3" />
                <a
                  href="mailto:info@prestige-university.edu"
                  className="hover:text-[#FFD700]"
                >
                  info@prestige-university.edu
                </a>
              </div>

              {/* Campus Map */}
              <div className="pt-2">
                <div className="relative h-32 rounded-lg overflow-hidden border-2 border-[#FFD700]">
                  <Image
                    src="/campus-map-thumbnail.jpg"
                    alt="Campus Map"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <span className="bg-[#FFD700] text-[#002147] px-3 py-1 rounded text-sm font-medium">
                      Campus Map
                    </span>
                  </div>
                </div>
              </div>
            </address>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-[#FFD700] pb-2">
              Connect With Us
            </h3>

            {/* Social Media */}
            <div className="flex space-x-3 mb-6">
              {[
                {
                  icon: <FaFacebookF size={18} />,
                  url: "https://facebook.com/prestigeuniv",
                  label: "Facebook",
                },
                {
                  icon: <FaTwitter size={18} />,
                  url: "https://twitter.com/prestigeuniv",
                  label: "Twitter",
                },
                {
                  icon: <FaInstagram size={18} />,
                  url: "https://instagram.com/prestigeuniv",
                  label: "Instagram",
                },
                {
                  icon: <FaLinkedinIn size={18} />,
                  url: "https://linkedin.com/school/prestigeuniv",
                  label: "LinkedIn",
                },
                {
                  icon: <FaYoutube size={18} />,
                  url: "https://youtube.com/prestigeuniversity",
                  label: "YouTube",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00539B] p-3 rounded-full hover:bg-[#FFD700] hover:text-[#002147] transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-medium mb-3">University Newsletter</h4>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#FFD700] text-[#002147] font-semibold px-4 py-2 rounded hover:bg-opacity-90 transition-opacity"
                >
                  Subscribe to Updates
                </button>
              </form>
            </div>

            {/* Mobile App Badges */}
            <div className="mt-6">
              {/* <h4 className="font-medium mb-2">University App</h4> */}
              <div className="flex space-x-3">
                {/* <a href="#" className="block">
                  <div className="relative w-32 h-10">
                    <Image
                      src="/play-store-badge.png"
                      alt="Get on Google Play"
                      fill
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Prestige University. All rights
            reserved.
            <span className="mx-2">|</span>
            <Link href="/privacy" className="hover:text-[#FFD700]">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/accessibility" className="hover:text-[#FFD700]">
              Accessibility Statement
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Accredited by: Tonmoy Sutradhar</span>
            {/* <div className="relative w-16 h-6">
              <Image
                src="/accreditation-logo.png"
                alt="Higher Education Accreditation"
                fill
                sizes="64px"
                className="object-contain"
              />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniversityFooter;
