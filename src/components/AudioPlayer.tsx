
import React from "react";
import { Card } from "@/components/ui/card";
import { Volume2, SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AudioPlayerProps {
  title?: string;
  reciter?: string;
}

const AudioPlayer = ({ title = "No track selected", reciter = "Unknown Reciter" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-muted rounded"></div>
          <div>
            <h4 className="text-sm font-medium">{title}</h4>
            <p className="text-xs text-muted-foreground">{reciter}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button 
            onClick={() => setIsPlaying(!isPlaying)} 
            size="icon" 
            className="h-8 w-8 rounded-full"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Volume2 className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AudioPlayer;
