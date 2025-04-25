
import Header from "@/components/Header";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const surahs = [
  { number: 1, name: "Al-Fatiha", nameArabic: "الفاتحة", verses: 7 },
  { number: 2, name: "Al-Baqarah", nameArabic: "البقرة", verses: 286 },
  { number: 3, name: "Ali 'Imran", nameArabic: "آل عمران", verses: 200 },
  { number: 4, name: "An-Nisa", nameArabic: "النساء", verses: 176 },
  { number: 5, name: "Al-Ma'idah", nameArabic: "المائدة", verses: 120 },
  // Add more surahs as needed
];

const QuranPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredSurahs = surahs.filter(surah => 
    surah.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    surah.number.toString().includes(searchQuery)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">The Holy Quran</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search for surah by name or number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSurahs.map((surah) => (
            <Card key={surah.number} className="hover:border-primary transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <span className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    {surah.number}
                  </span>
                  <span className="text-xl font-arabic">{surah.nameArabic}</span>
                </div>
                <CardTitle>{surah.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Verses: {surah.verses}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <footer className="border-t mt-auto">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IslamicAudio | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default QuranPage;
