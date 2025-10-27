import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FutureInnovators from "./pages/FutureInnovators";
import LineFollowerRobot from "./pages/LineFollowerRobot";
import RaceOBot from "./pages/RaceOBot";
import RoboRugby from "./pages/RoboRugby";
import Registration from "./pages/Registration";
import ThankYou from "./pages/ThankYou";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/events/future-innovators" element={<FutureInnovators />} />
          <Route path="/events/line-follower-robot" element={<LineFollowerRobot />} />
          <Route path="/events/race-o-bot" element={<RaceOBot />} />
          <Route path="/events/robo-rugby" element={<RoboRugby />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
