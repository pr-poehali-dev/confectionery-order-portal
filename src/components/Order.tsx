import OrderForm from "./OrderForm";
import OrderConditions from "./OrderConditions";
import OrderImportantInfo from "./OrderImportantInfo";

const Order = () => {
  return (
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
            <OrderForm />

            <div className="space-y-6">
              <OrderConditions />
              <OrderImportantInfo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
