import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import Icon from "@/components/ui/icon";
import { OrderForm as OrderFormType } from "@/types";
import { validateOrderForm } from "@/utils/orderUtils";

const OrderForm = () => {
  const [orderForm, setOrderForm] = useState<OrderFormType>({
    date: "",
    weight: "",
    filling: "",
    design: "",
    phone: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateOrderForm(orderForm)) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    alert("Заказ оформлен! Мы свяжемся с вами для подтверждения.");
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="text-amber-900">Оформить заказ</CardTitle>
        <CardDescription>
          Заказ считается оформленным после внесения предоплаты 50%
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
  );
};

export default OrderForm;
