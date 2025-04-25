
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
    imageUrl: "https://i1.sndcdn.com/artworks-000099616911-xehlwz-t500x500.jpg",
    description: "Renowned Quran reciter from Kuwait"
  },
  {
    id: "2",
    name: "Abdul Rahman Al-Sudais",
    imageUrl: "https://theislamicinformation.com/wp-content/uploads/2023/08/Sheikh-Sudais-Appointed-as-Head-of-Religious-Affairs-of-the-Twin-Holy-Mosques.png",
    description: "Imam of the Grand Mosque in Mecca"
  },
  {
    id: "3",
    name: "Maher Al Muaiqly",
    imageUrl: "https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/artist/sheikh-maher-al-muaiqly-Y3iH2",
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
                  <AvatarImage src={reciter.imageUrl} alt={reciter.name} className="object-cover" />
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
