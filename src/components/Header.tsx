import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="ChefHat" className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-900">CONFECTIONERY</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#menu"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Меню
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#order"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Заказать
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700">
            <Icon name="Phone" className="w-4 h-4 mr-2" />
            Позвонить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
