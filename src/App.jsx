
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import BeachDetail from "./pages/BeachDetail.jsx";
import About from "./pages/About.jsx";
import LoadingPage from "./components/LoadingPage.jsx";

const queryClient = new QueryClient();

// Create a loading wrapper component that will show loading state during route changes
const LoadingWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Show loading for at least 300ms to prevent flashing
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  return (
    <>
      {isLoading && <LoadingPage />}
      {children}
    </>
  );
};

// Check if we're running on GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');

const AppRoutes = () => (
  <LoadingWrapper>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/beach/:beachName" element={<BeachDetail />} />
      <Route path="/about" element={<About />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </LoadingWrapper>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Use HashRouter for GitHub Pages deployment, BrowserRouter otherwise */}
      {isGitHubPages ? (
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      ) : (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
