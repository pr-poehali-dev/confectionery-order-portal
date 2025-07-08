import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [orderForm, setOrderForm] = useState({
    date: "",
    weight: "",
    filling: "",
    design: "",
    phone: "",
    name: "",
  });

  const menuItems = [
    {
      id: 1,
      name: 'Торт "Классический"',
      description: "Нежный бисквит с кремом",
      price: 2500,
      weight: "1.5 кг",
      image: "/img/92c986e5-a7c5-4beb-af65-cc19db9746b3.jpg",
    },
    {
      id: 2,
      name: "Капкейки Premium",
      description: "Набор из 12 капкейков",
      price: 1800,
      weight: "12 шт",
      image: "/img/4a68b4e2-1077-4db1-9e23-1575ab9c5670.jpg",
    },
    {
      id: 3,
      name: "Макаруны",
      description: "Французские макаруны, 20 шт",
      price: 3200,
      weight: "20 шт",
      image: "/img/700c15cf-4721-4533-ba20-2327f9b67ad9.jpg",
    },
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "Заказывала торт на свадьбу. Все гости были в восторге! Очень вкусно и красиво.",
      rating: 5,
    },
    {
      name: "Михаил Сидоров",
      text: "Капкейки на день рождения дочери - просто сказка! Обязательно закажем еще.",
      rating: 5,
    },
    {
      name: "Елена Иванова",
      text: "Макаруны превзошли все ожидания. Качество на высшем уровне.",
      rating: 5,
    },
  ];

  const calculateDelivery = (price: number) => {
    return price >= 6000 ? "Бесплатно" : "500 ₽";
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки заказа
    alert("Заказ оформлен! Мы свяжемся с вами для подтверждения.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Icon name="ChefHat" className="w-8 h-8 text-amber-600" />
              <h1 className="text-2xl font-bold text-amber-900">
                CONFECTIONERY
              </h1>
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

      {/* Hero Section */}
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Почему выбирают нас
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Каждый заказ — это индивидуальный подход и внимание к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">
                Бесплатная доставка
              </h4>
              <p className="text-gray-600">От 6000 ₽ в черте города</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">
                Быстрое изготовление
              </h4>
              <p className="text-gray-600">Минимум 3 дня на заказ</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">
                Гарантия качества
              </h4>
              <p className="text-gray-600">Только свежие продукты</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">
                С любовью
              </h4>
              <p className="text-gray-600">
                Каждый торт — произведение искусства
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section
        id="menu"
        className="py-16 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Наше меню
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Авторские десерты, созданные с любовью и вниманием к деталям
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-shadow bg-white"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-900">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">
                      {item.price} ₽
                    </span>
                    <Badge variant="secondary">{item.weight}</Badge>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              Отзывы наших клиентов
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Нам доверяют самые важные моменты жизни
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-amber-50">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-amber-900">
                      {review.name}
                    </CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="w-4 h-4 text-amber-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section
        id="order"
        className="py-16 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Как сделать заказ
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Заполните форму, и мы свяжемся с вами для уточнения деталей
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">
                    Оформить заказ
                  </CardTitle>
                  <CardDescription>
                    Заказ считается оформленным после внесения предоплаты 50%
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleOrderSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={orderForm.name}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, name: e.target.value })
                        }
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        value={orderForm.phone}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, phone: e.target.value })
                        }
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="date">Дата мероприятия</Label>
                      <Input
                        id="date"
                        type="date"
                        value={orderForm.date}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, date: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="weight">Вес торта</Label>
                      <Select
                        onValueChange={(value) =>
                          setOrderForm({ ...orderForm, weight: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите вес" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1.5">1.5 кг</SelectItem>
                          <SelectItem value="2">2 кг</SelectItem>
                          <SelectItem value="2.5">2.5 кг</SelectItem>
                          <SelectItem value="3">3 кг</SelectItem>
                          <SelectItem value="other">Другой вес</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="filling">Начинка</Label>
                      <Select
                        onValueChange={(value) =>
                          setOrderForm({ ...orderForm, filling: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите начинку" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="chocolate">Шоколадная</SelectItem>
                          <SelectItem value="vanilla">Ванильная</SelectItem>
                          <SelectItem value="strawberry">Клубничная</SelectItem>
                          <SelectItem value="caramel">Карамельная</SelectItem>
                          <SelectItem value="other">Другая начинка</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="design">Пожелания по декору</Label>
                      <Textarea
                        id="design"
                        value={orderForm.design}
                        onChange={(e) =>
                          setOrderForm({ ...orderForm, design: e.target.value })
                        }
                        placeholder="Опишите желаемый декор и цветовую гамму"
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700"
                    >
                      <Icon name="Send" className="w-4 h-4 mr-2" />
                      Отправить заказ
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle className="text-amber-900">
                      Условия заказа
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CalendarDays"
                        className="w-5 h-5 text-amber-600 mt-1"
                      />
                      <div>
                        <p className="font-medium text-amber-900">
                          Минимальный срок
                        </p>
                        <p className="text-sm text-gray-600">
                          Оформление заказа возможно минимум за 3 дня
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Zap"
                        className="w-5 h-5 text-amber-600 mt-1"
                      />
                      <div>
                        <p className="font-medium text-amber-900">
                          Срочный заказ
                        </p>
                        <p className="text-sm text-gray-600">
                          За 1-2 дня +10% от стоимости заказа
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="CreditCard"
                        className="w-5 h-5 text-amber-600 mt-1"
                      />
                      <div>
                        <p className="font-medium text-amber-900">Предоплата</p>
                        <p className="text-sm text-gray-600">
                          50% от стоимости заказа
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Truck"
                        className="w-5 h-5 text-amber-600 mt-1"
                      />
                      <div>
                        <p className="font-medium text-amber-900">Доставка</p>
                        <p className="text-sm text-gray-600">
                          Бесплатно от 6000 ₽, иначе 500 ₽
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-amber-50">
                  <CardHeader>
                    <CardTitle className="text-amber-900">
                      Важно знать
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      При отмене заказа за 3 и менее дней до выдачи, предоплата
                      не возвращается. Минимальный вес торта — 1.5 кг.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Контакты
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Связь с нами</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900">Телефон</p>
                      <p className="text-gray-700">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon
                      name="MessageCircle"
                      className="w-5 h-5 text-amber-600"
                    />
                    <div>
                      <p className="font-medium text-amber-900">WhatsApp</p>
                      <p className="text-gray-700">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900">Email</p>
                      <p className="text-gray-700">info@confectionery.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-medium text-amber-900">Адрес</p>
                      <p className="text-gray-700">
                        г. Москва, ул. Кондитерская, д. 15
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900">Режим работы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Понедельник - Пятница</span>
                    <span className="font-medium text-amber-900">
                      9:00 - 20:00
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-700">Суббота</span>
                    <span className="font-medium text-amber-900">
                      10:00 - 18:00
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-700">Воскресенье</span>
                    <span className="font-medium text-amber-900">Выходной</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
