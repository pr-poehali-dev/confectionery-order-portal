import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
            Сделаю вкусным <br />
            <span className="text-amber-600">ваш праздник</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Авторские торты, пирожные и десерты с индивидуальным подходом.
            Превращаем ваши мечты в кондитерские шедевры.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge
              variant="outline"
              className="text-amber-700 border-amber-300 bg-amber-50 px-4 py-2"
            >
              <Icon name="Heart" className="w-4 h-4 mr-2" />
              Начинки на любой вкус
            </Badge>
            <Badge
              variant="outline"
              className="text-amber-700 border-amber-300 bg-amber-50 px-4 py-2"
            >
              <Icon name="Gift" className="w-4 h-4 mr-2" />
              Премиальная упаковка
            </Badge>
            <Badge
              variant="outline"
              className="text-amber-700 border-amber-300 bg-amber-50 px-4 py-2"
            >
              <Icon name="Star" className="w-4 h-4 mr-2" />
              Индивидуальный подход
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
            >
              <Icon name="ShoppingCart" className="w-5 h-5 mr-2" />
              Сделать заказ
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3"
            >
              <Icon name="Eye" className="w-5 h-5 mr-2" />
              Посмотреть меню
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
