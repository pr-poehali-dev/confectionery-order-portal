import { menuItems } from "@/data/menuItems";
import { MenuItem } from "@/types";
import MenuCard from "./MenuCard";

interface MenuProps {
  onOrder: (item: MenuItem) => void;
}

const Menu = ({ onOrder }: MenuProps) => {
  return (
    <section
      id="menu"
      className="py-16 bg-gradient-to-br from-amber-50 to-orange-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-amber-900 mb-4">Наше меню</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Авторские десерты, созданные с любовью и вниманием к деталям
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} onOrder={onOrder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
