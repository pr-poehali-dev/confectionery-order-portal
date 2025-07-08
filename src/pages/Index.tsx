import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Order from "@/components/Order";
import Contacts from "@/components/Contacts";
import { MenuItem } from "@/types";

const Index = () => {
  const handleOrder = (item: MenuItem) => {
    // Здесь можно добавить логику для обработки заказа
    // Например, прокрутить к форме заказа или открыть модальное окно
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <Header />
      <Hero />
      <Features />
      <Menu onOrder={handleOrder} />
      <Reviews />
      <Order />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
