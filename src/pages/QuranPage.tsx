
import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { fetchSurahs } from "@/services/quranApi";
import { useQuery } from "@tanstack/react-query";
import AudioPlayer from "@/components/AudioPlayer";
import Reciters from "@/components/Reciters";

const QuranPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  
  const { data: surahs, isLoading } = useQuery({
    queryKey: ['surahs'],
    queryFn: fetchSurahs
  });
  
  const filteredSurahs = surahs?.filter(surah => 
    surah.englishName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    surah.number.toString().includes(searchQuery)
  ) ?? [];

  return (
    <div className="min-h-screen flex flex-col bg-background pb-20">
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
          {isLoading ? (
            [...Array(9)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardHeader>
                  <div className="h-8 bg-muted rounded"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-muted rounded w-24"></div>
                </CardContent>
              </Card>
            ))
          ) : (
            filteredSurahs.map((surah) => (
              <Card 
                key={surah.number} 
                className="hover:border-primary transition-colors cursor-pointer"
                onClick={() => setSelectedSurah(surah.number)}
              >
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <span className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {surah.number}
                    </span>
                  </div>
                  <CardTitle>{surah.englishName}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Verses: {surah.numberOfAyahs}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
      
      {selectedSurah && (
        <div className="container py-8">
          <h2 className="text-2xl font-semibold mb-6">Available Reciters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Reciters />
          </div>
        </div>
      )}
      
      <AudioPlayer />
      
      <footer className="border-t mt-auto">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IslamicAudio | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default QuranPage;
