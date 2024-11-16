import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import { RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const { coordinate, error, getLocation, isLoading } = useGeolocation();

  console.log(coordinate);

  const handleRefresh = () => {
    getLocation();
    if (coordinate) {
      // reload weather data
    }
  };

  return (
    <div className="space-y-4">
      {/* Favorite Cities */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          // onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* Current and Hourly weather */}
    </div>
  );
};

export default WeatherDashboard;
