import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="bg-amber-50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-amber-900">{review.name}</CardTitle>
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
  );
};

export default ReviewCard;
