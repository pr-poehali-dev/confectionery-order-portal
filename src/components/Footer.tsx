import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Icon name="ChefHat" className="w-6 h-6" />
            <span className="text-xl font-bold">CONFECTIONERY</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-amber-200">
              © 2024 Confectionery. Все права защищены.
            </p>
            <p className="text-amber-300 text-sm mt-1">
              Сделаем вкусным ваш праздник
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
