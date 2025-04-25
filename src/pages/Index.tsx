
import Header from "@/components/Header";
import AyatOfTheDay from "@/components/AyatOfTheDay";
import PrayerTimes from "@/components/PrayerTimes";
import FeaturedContent from "@/components/FeaturedContent";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AyatOfTheDay />
          <PrayerTimes />
        </div>
      </section>
      
      {/* Featured Content */}
      <FeaturedContent />
      
      {/* Recent Content */}
      <section className="container py-8">
        <h2 className="text-2xl font-semibold mb-6">Recent Recitations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* This would be populated with actual content */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
              <div className="h-48 bg-muted"></div>
              <div className="p-4">
                <h3 className="font-medium">Surah Title</h3>
                <p className="text-sm text-muted-foreground">Reciter Name</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="border-t mt-auto">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IslamicAudio | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Index;
