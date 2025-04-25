
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Ayat {
  text: string;
  translation: string;
  surah: string;
  ayat: number;
}

const AyatOfTheDay = () => {
  const [ayat, setAyat] = useState<Ayat | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, this would fetch from an API
    // For now, we'll use a placeholder
    setTimeout(() => {
      setAyat({
        text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ",
        translation: "And We have certainly made the Qur'an easy for remembrance, so is there any who will remember?",
        surah: "Al-Qamar",
        ayat: 17
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Ayat of the Day</CardTitle>
        <CardDescription>
          {!loading && ayat ? `${ayat.surah} ${ayat.ayat}` : <Skeleton className="h-4 w-40" />}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-4 w-40 mx-auto mt-2" />
          </div>
        ) : (
          <>
            <p className="text-2xl text-right font-arabic mb-4">{ayat?.text}</p>
            <p className="text-sm text-muted-foreground text-center">{ayat?.translation}</p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default AyatOfTheDay;
