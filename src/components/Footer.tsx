import { Heart } from "lucide-react";
import logo from "figma:asset/17b5d1b868fd6daa6c5881e6c3409d4acf1ca5ff.png";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="O.A Chocolate" className="w-20 h-20 mb-6" />
          
          <h3 className="text-2xl text-white mb-2">
            O.A <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">Chocolate</span>
          </h3>
          <p className="text-white/60 mb-6 max-w-md">
            شوكولاتة بلجيكية فاخرة من ماركة Callebaut
            <br />
            طبيعية 100% - صنع بحب في مصر 🇪🇬
          </p>

          <div className="flex items-center gap-2 text-white/60 mb-8">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current text-red-500" />
            <span>by O.A Chocolate</span>
          </div>

          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          <p className="text-white/40">© 2025 O.A Chocolate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
