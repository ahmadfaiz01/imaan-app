
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Reciter {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
}

const reciters: Reciter[] = [
  {
    id: "1",
    name: "Mishary Rashid Alafasy",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    description: "Renowned Quran reciter from Kuwait"
  },
  {
    id: "2",
    name: "Abdul Rahman Al-Sudais",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "Imam of the Grand Mosque in Mecca"
  },
  {
    id: "3",
    name: "Maher Al Muaiqly",
    imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    description: "Distinguished reciter from Saudi Arabia"
  }
];

const Reciters = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Featured Reciters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {reciters.map((reciter) => (
            <Card key={reciter.id} className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader className="space-y-4">
                <Avatar className="h-24 w-24 mx-auto">
                  <AvatarImage src={reciter.imageUrl} alt={reciter.name} />
                  <AvatarFallback>{reciter.name[0]}</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <CardTitle className="text-center text-lg">{reciter.name}</CardTitle>
                  <p className="text-sm text-muted-foreground text-center">{reciter.description}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reciters;
