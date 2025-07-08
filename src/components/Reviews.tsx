import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
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
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
