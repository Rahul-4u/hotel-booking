import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../user/Authprovider";
import Banner from "../components/Banner";
import HotelMap from "../components/HotelMap";
import FeaturedRooms from "../components/FeaturedRooms";
import ClientReview from "../components/ClientReview";
import SpecialOffer from "../components/SpecialOffer"; // Import SpecialOffer
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <header>
        <Header />
        <section>
          <Banner />
        </section>
      </header>
      <main>
        <section>
          <SpecialOffer /> {/* Add the SpecialOffer component here */}
        </section>
        <section>
          <HotelMap />
        </section>
        <section>
          <FeaturedRooms />
        </section>
        <section>
          <ClientReview />
        </section>
        <section>
          <FAQ />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
