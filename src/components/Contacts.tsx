import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { contactInfo, workingHours } from "@/data/contacts";

const Contacts = () => {
  const contactItems = [
    {
      icon: "Phone",
      title: "Телефон",
      value: contactInfo.phone,
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: contactInfo.whatsapp,
    },
    {
      icon: "Mail",
      title: "Email",
      value: contactInfo.email,
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: contactInfo.address,
    },
  ];

  return (
    <section id="contacts" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">Контакты</h3>
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
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon
                      name={item.icon as any}
                      className="w-5 h-5 text-amber-600"
                    />
                    <div>
                      <p className="font-medium text-amber-900">{item.title}</p>
                      <p className="text-gray-700">{item.value}</p>
                    </div>
                  </div>
                ))}
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
                    {workingHours.weekdays}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-700">Суббота</span>
                  <span className="font-medium text-amber-900">
                    {workingHours.saturday}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-gray-700">Воскресенье</span>
                  <span className="font-medium text-amber-900">
                    {workingHours.sunday}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
