
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  reciter: string;
  type: "recitation" | "nasheed";
  imageUrl: string;
}

const featuredItems: ContentItem[] = [
  {
    id: "1",
    title: "Surah Al-Fatiha",
    reciter: "Mishary Rashid Alafasy",
    type: "recitation",
    imageUrl: "https://via.placeholder.com/300x300?text=Surah+Al-Fatiha"
  },
  {
    id: "2",
    title: "Surah Yaseen",
    reciter: "Abdul Rahman Al-Sudais",
    type: "recitation",
    imageUrl: "https://via.placeholder.com/300x300?text=Surah+Yaseen"
  },
  {
    id: "3",
    title: "Tala' al-Badru 'Alayna",
    reciter: "Sami Yusuf",
    type: "nasheed",
    imageUrl: "https://via.placeholder.com/300x300?text=Nasheed"
  },
  {
    id: "4",
    title: "Surah Ar-Rahman",
    reciter: "Maher Al Muaiqly",
    type: "recitation",
    imageUrl: "https://via.placeholder.com/300x300?text=Surah+Ar-Rahman"
  }
];

const FeaturedContent = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-6">Featured Content</h2>
        
        <Carousel className="w-full">
          <CarouselContent>
            {featuredItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <Card>
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="icon" className="rounded-full">
                          <Play className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.reciter}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-4 pt-0">
                    <span className="text-sm text-muted-foreground capitalize">{item.type}</span>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 md:-left-6" />
          <CarouselNext className="-right-4 md:-right-6" />
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedContent;
