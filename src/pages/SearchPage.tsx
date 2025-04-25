
import Header from "@/components/Header";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, BookOpen, Search } from "lucide-react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would trigger a search API call
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Search</h1>
        
        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search for recitations, nasheeds, reciters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
        
        <Tabs defaultValue="all">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="recitations">Recitations</TabsTrigger>
            <TabsTrigger value="nasheeds">Nasheeds</TabsTrigger>
            <TabsTrigger value="reciters">Reciters</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Top Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i}>
                    <div className="flex items-start p-4">
                      <div className="relative h-16 w-16 rounded overflow-hidden mr-3">
                        <img 
                          src={`https://via.placeholder.com/64x64?text=Item${i+1}`} 
                          alt={`Item ${i+1}`}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">Item Title {i+1}</h3>
                        <p className="text-sm text-muted-foreground">Reciter Name</p>
                        <p className="text-xs text-muted-foreground mt-1">Surah Name</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Recitations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={`https://via.placeholder.com/300x200?text=Recitation${i+1}`} 
                          alt={`Recitation ${i+1}`} 
                          className="w-full h-40 object-cover"
                        />
                        <Button variant="secondary" size="icon" className="absolute right-2 bottom-2 rounded-full">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Surah Title {i+1}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <span className="text-sm text-muted-foreground">Reciter Name</span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Nasheeds</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <Card key={i}>
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={`https://via.placeholder.com/300x200?text=Nasheed${i+1}`} 
                          alt={`Nasheed ${i+1}`} 
                          className="w-full h-40 object-cover"
                        />
                        <Button variant="secondary" size="icon" className="absolute right-2 bottom-2 rounded-full">
                          <Play className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-base">Nasheed Title {i+1}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0">
                      <span className="text-sm text-muted-foreground">Artist Name</span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="recitations">
            <p className="text-muted-foreground py-8 text-center">
              Enter a search term to find recitations
            </p>
          </TabsContent>
          
          <TabsContent value="nasheeds">
            <p className="text-muted-foreground py-8 text-center">
              Enter a search term to find nasheeds
            </p>
          </TabsContent>
          
          <TabsContent value="reciters">
            <p className="text-muted-foreground py-8 text-center">
              Enter a search term to find reciters
            </p>
          </TabsContent>
        </Tabs>
      </div>
      
      <footer className="border-t mt-auto">
        <div className="container py-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} IslamicAudio | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default SearchPage;
