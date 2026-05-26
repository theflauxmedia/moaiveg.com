import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "moai-outlet-banner-dismissed";
const SHOW_DELAY_MS = 4000;

const OutletBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      return;
    }

    const timer = window.setTimeout(() => {
      setShowBanner(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <>
      <style>{`
        @keyframes outlet-banner-fade-in {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes outlet-banner-breathe {
          0%, 100% {
            box-shadow:
              0 0 18px rgba(255, 255, 255, 0.45),
              0 0 36px rgba(255, 255, 255, 0.28),
              0 0 56px rgba(255, 255, 255, 0.14);
            transform: scale(1);
          }
          50% {
            box-shadow:
              0 0 28px rgba(255, 255, 255, 0.7),
              0 0 52px rgba(255, 255, 255, 0.45),
              0 0 80px rgba(255, 255, 255, 0.22);
            transform: scale(1.015);
          }
        }

        .outlet-banner-glow {
          animation: outlet-banner-breathe 2.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .outlet-banner-glow {
            animation: none;
            box-shadow:
              0 0 20px rgba(255, 255, 255, 0.4),
              0 0 40px rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
      <aside
        className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none"
        style={{ animation: "outlet-banner-fade-in 0.6s ease-in forwards", opacity: 0 }}
        aria-label="MOAI new outlet announcement"
        role="dialog"
        aria-modal="false"
      >
        <div className="outlet-banner-glow relative w-full max-w-[380px] rounded-xl sm:max-w-[420px] md:max-w-3xl lg:max-w-4xl pointer-events-auto">
        <div className="relative overflow-hidden rounded-xl border border-[#FED6AB]/45 bg-[#004F00] shadow-elegant royal-border">
          <button
            type="button"
            onClick={handleDismiss}
            className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#FED6AB]/50 bg-[#004F00]/90 text-[#FED6AB] backdrop-blur-sm transition-smooth hover:border-[#FED6AB] hover:bg-[#004F00] hover:text-white"
            aria-label="Close announcement"
          >
            <X className="h-4 w-4" aria-hidden />
          </button>

          <img
            src="/banners/Desktop.jpg"
            alt="MOAI Restaurant opening soon in new locations — stay tuned"
            className="hidden w-full h-auto object-cover md:block"
          />
          <img
            src="/banners/Mobile.jpg"
            alt="MOAI Restaurant new outlet coming soon"
            className="block w-full h-auto object-cover md:hidden"
          />
        </div>
        </div>
      </aside>
    </>
  );
};

export default OutletBanner;
