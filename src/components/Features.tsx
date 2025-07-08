import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Truck",
      title: "Бесплатная доставка",
      description: "От 6000 ₽ в черте города",
    },
    {
      icon: "Clock",
      title: "Быстрое изготовление",
      description: "Минимум 3 дня на заказ",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Только свежие продукты",
    },
    {
      icon: "Heart",
      title: "С любовью",
      description: "Каждый торт — произведение искусства",
    },
  ];

  return (
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
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon as any}
                  className="w-8 h-8 text-amber-600"
                />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
