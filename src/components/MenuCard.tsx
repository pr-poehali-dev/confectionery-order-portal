import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
  onOrder: (item: MenuItem) => void;
}

const MenuCard = ({ item, onOrder }: MenuCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
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
        <Button
          className="w-full bg-amber-600 hover:bg-amber-700"
          onClick={() => onOrder(item)}
        >
          <Icon name="ShoppingCart" className="w-4 h-4 mr-2" />
          Заказать
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuCard;
