import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman telah dipindahkan atau tidak tersedia.
          </p>
        </div>
        
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-gradient-to-r from-primary to-purple-500 hover:from-purple-500 hover:to-primary text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
        >
          Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
