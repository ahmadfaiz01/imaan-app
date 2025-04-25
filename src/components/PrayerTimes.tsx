
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Timer } from "lucide-react";

interface PrayerTime {
  name: string;
  time: string;
}

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLocation("New York, US");
      setPrayerTimes([
        { name: "Fajr", time: "5:23 AM" },
        { name: "Dhuhr", time: "12:10 PM" },
        { name: "Asr", time: "3:45 PM" },
        { name: "Maghrib", time: "6:32 PM" },
        { name: "Isha", time: "8:05 PM" }
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="w-full neo-card animate-fade-in">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Timer className="h-5 w-5 animate-bounce-slow text-neoYellow" />
          <CardTitle className="text-xl font-medium">Prayer Times</CardTitle>
        </div>
        <CardDescription className="flex justify-between">
          {!loading ? (
            <>
              <span className="animate-fade-in">{location}</span>
              <span className="animate-fade-in">{getCurrentTime()}</span>
            </>
          ) : (
            <Skeleton className="h-4 w-full" />
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-20" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {prayerTimes.map((prayer, index) => (
              <div 
                key={prayer.name} 
                className="flex justify-between p-2 rounded-lg transition-all hover:bg-accent animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="font-medium text-neoGreen">{prayer.name}</span>
                <span className="text-primary">{prayer.time}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrayerTimes;
