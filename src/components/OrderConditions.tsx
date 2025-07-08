import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const OrderConditions = () => {
  const conditions = [
    {
      icon: "CalendarDays",
      title: "Минимальный срок",
      description: "Оформление заказа возможно минимум за 3 дня",
    },
    {
      icon: "Zap",
      title: "Срочный заказ",
      description: "За 1-2 дня +10% от стоимости заказа",
    },
    {
      icon: "CreditCard",
      title: "Предоплата",
      description: "50% от стоимости заказа",
    },
    {
      icon: "Truck",
      title: "Доставка",
      description: "Бесплатно от 6000 ₽, иначе 500 ₽",
    },
  ];

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-amber-900">Условия заказа</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {conditions.map((condition, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon
              name={condition.icon as any}
              className="w-5 h-5 text-amber-600 mt-1"
            />
            <div>
              <p className="font-medium text-amber-900">{condition.title}</p>
              <p className="text-sm text-gray-600">{condition.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default OrderConditions;
