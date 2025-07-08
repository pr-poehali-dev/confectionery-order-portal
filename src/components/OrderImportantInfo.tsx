import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrderImportantInfo = () => {
  return (
    <Card className="bg-amber-50">
      <CardHeader>
        <CardTitle className="text-amber-900">Важно знать</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">
          При отмене заказа за 3 и менее дней до выдачи, предоплата не
          возвращается. Минимальный вес торта — 1.5 кг.
        </p>
      </CardContent>
    </Card>
  );
};

export default OrderImportantInfo;
