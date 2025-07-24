import Navbar from "./components/Navbar";
import Search from "./components/Search";
import CollegeList from "./components/CollageList";
import Gallery from "./components/Gallery";
import ResearchPapers from "./components/ReSearchPapers";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <CollegeList />
      <Gallery />
      <ResearchPapers />
      <Reviews />
      <Footer />
    </div>
  );
}
