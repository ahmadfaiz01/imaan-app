
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface PrayerTime {
  name: string;
  time: string;
}

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [location, setLocation] = useState<string>("");
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real implementation, this would use geolocation and fetch from an API
    // For now, we'll use placeholders
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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Prayer Times</CardTitle>
        <CardDescription className="flex justify-between">
          {!loading ? (
            <>
              <span>{location}</span>
              <span>{getCurrentTime()}</span>
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
            {prayerTimes.map((prayer) => (
              <div key={prayer.name} className="flex justify-between">
                <span className="font-medium">{prayer.name}</span>
                <span>{prayer.time}</span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PrayerTimes;
