import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";

const POSTER_DELAY_MS = 800;
const MINIMIZE_MS = 380;

// In-memory flag: resets on refresh/full page load, but survives SPA
// navigation, so the poster only auto-opens once per visit.
let posterAutoShown = false;

const OutletBanner = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showCapsule, setShowCapsule] = useState(posterAutoShown);
  const [minimizing, setMinimizing] = useState(false);

  // Show the poster first on fresh visit / refresh; if the user already
  // saw it this page load (navigated away and back), show only the capsule.
  useEffect(() => {
    if (posterAutoShown) {
      setShowCapsule(true);
      return;
    }

    const timer = window.setTimeout(() => {
      posterAutoShown = true;
      setShowPopup(true);
    }, POSTER_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const minimizeToCapsule = () => {
    if (minimizing) return;
    setMinimizing(true);
    window.setTimeout(() => {
      setShowPopup(false);
      setMinimizing(false);
      setShowCapsule(true);
    }, MINIMIZE_MS);
  };

  const reopenPoster = () => {
    setShowCapsule(false);
    setShowPopup(true);
  };

  useEffect(() => {
    if (!showPopup) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") minimizeToCapsule();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPopup, minimizing]);

  return (
    <>
      <style>{`
        @keyframes capsule-drop-in {
          0% {
            opacity: 0;
            transform: translate(-50%, -24px) scale(0.7);
          }
          60% {
            opacity: 1;
            transform: translate(-50%, 4px) scale(1.04);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        /* Rotating golden border glow */
        @keyframes capsule-border-spin {
          to { --capsule-angle: 360deg; }
        }

        @property --capsule-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .outlet-capsule-ring {
          background: conic-gradient(
            from var(--capsule-angle, 0deg),
            rgba(254, 214, 171, 0) 0%,
            rgba(254, 214, 171, 0.25) 12%,
            #FED6AB 25%,
            rgba(255, 240, 220, 1) 32%,
            #FED6AB 40%,
            rgba(254, 214, 171, 0.25) 52%,
            rgba(254, 214, 171, 0) 65%
          );
          animation: capsule-border-spin 3.2s linear infinite;
        }

        /* Shimmer sweep across the text */
        @keyframes capsule-shimmer {
          0%, 55% { background-position: 130% 0; }
          85%, 100% { background-position: -30% 0; }
        }

        .outlet-capsule-text {
          background: linear-gradient(
            100deg,
            #ffffff 40%,
            #FED6AB 50%,
            #ffffff 60%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: capsule-shimmer 3.5s ease-in-out infinite;
        }

        /* Periodic attention nudge */
        @keyframes capsule-nudge {
          0%, 86%, 100% { transform: translate(-50%, 0) scale(1); }
          90% { transform: translate(-50%, 0) scale(1.06); }
          94% { transform: translate(-50%, 0) scale(0.99); }
          97% { transform: translate(-50%, 0) scale(1.03); }
        }

        /* Ambient glow breathing */
        @keyframes capsule-glow {
          0%, 100% {
            box-shadow:
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 0 18px rgba(254, 214, 171, 0.25),
              0 0 42px rgba(254, 214, 171, 0.12);
          }
          50% {
            box-shadow:
              0 8px 32px rgba(0, 0, 0, 0.4),
              0 0 26px rgba(254, 214, 171, 0.5),
              0 0 64px rgba(254, 214, 171, 0.25);
          }
        }

        @keyframes capsule-sparkle-twinkle {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.6; transform: scale(0.82) rotate(20deg); }
        }

        .outlet-capsule {
          animation:
            capsule-drop-in 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
            capsule-nudge 5s ease-in-out 2s infinite;
        }

        .outlet-capsule-inner {
          animation: capsule-glow 2.8s ease-in-out infinite;
        }

        .outlet-capsule-sparkle {
          animation: capsule-sparkle-twinkle 2.2s ease-in-out infinite;
        }

        @keyframes popup-zoom-in {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes popup-backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes popup-backdrop-out {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        /* Poster shrinks up into the capsule spot under the navbar */
        @keyframes popup-minimize {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(calc(-50vh + 7rem)) scale(0.06);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .outlet-capsule { animation: none; opacity: 1; transform: translate(-50%, 0); }
          .outlet-capsule-inner { animation: none; }
          .outlet-capsule-ring { animation: none; }
          .outlet-capsule-sparkle { animation: none; }
          .outlet-capsule-text {
            animation: none;
            -webkit-text-fill-color: #ffffff;
          }
        }
      `}</style>

      {/* Glassy capsule pill — scrolls away with the page */}
      {showCapsule && (
        <button
          type="button"
          onClick={reopenPoster}
          className="outlet-capsule group absolute left-1/2 top-[5.5rem] sm:top-24 z-40 rounded-full p-[1.5px] transition-transform duration-200 hover:scale-110 active:scale-95"
          style={{ opacity: 0, transform: "translate(-50%, -24px) scale(0.7)" }}
          aria-haspopup="dialog"
          aria-label="MOAI coming soon in Koramangala. Tap to see the announcement"
        >
          {/* Rotating golden ring */}
          <span className="outlet-capsule-ring absolute inset-0 rounded-full" aria-hidden />

          <span className="outlet-capsule-inner relative flex items-center gap-2 rounded-full bg-gradient-to-b from-[#0a3d0a]/95 to-black/80 px-4 py-2 backdrop-blur-xl sm:gap-2.5 sm:px-5 sm:py-2.5">
            <Sparkles
              className="outlet-capsule-sparkle h-3.5 w-3.5 flex-shrink-0 text-[#FED6AB] sm:h-4 sm:w-4"
              aria-hidden
            />
            <span className="flex flex-col items-start leading-tight">
              <span className="outlet-capsule-text whitespace-nowrap text-xs font-semibold tracking-wide sm:text-sm">
                Coming soon in Koramangala
              </span>
              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[#FED6AB]/80 sm:text-[10px]">
                Tap to peek
              </span>
            </span>
          </span>
        </button>
      )}

      {/* Poster popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          style={{
            animation: minimizing
              ? `popup-backdrop-out ${MINIMIZE_MS}ms ease-out forwards`
              : "popup-backdrop-in 0.25s ease-out forwards",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="MOAI new outlet announcement"
          onClick={minimizeToCapsule}
        >
          <div
            className="relative w-full max-w-[380px] sm:max-w-[420px] md:max-w-3xl lg:max-w-4xl"
            style={{
              animation: minimizing
                ? `popup-minimize ${MINIMIZE_MS}ms cubic-bezier(0.5, 0, 0.75, 0) forwards`
                : "popup-zoom-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-xl border border-[#FED6AB]/45 bg-[#004F00] shadow-elegant royal-border">
              <button
                type="button"
                onClick={minimizeToCapsule}
                className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#FED6AB]/50 bg-[#004F00]/90 text-[#FED6AB] backdrop-blur-sm transition-smooth hover:border-[#FED6AB] hover:bg-[#004F00] hover:text-white"
                aria-label="Minimize announcement"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>

              <img
                src="/banners/Desktop.jpg"
                alt="MOAI Restaurant opening soon in Koramangala, stay tuned"
                width="1200"
                height="400"
                className="hidden h-auto w-full object-cover md:block"
              />
              <img
                src="/banners/Mobile.jpg"
                alt="MOAI Restaurant opening soon in Koramangala, stay tuned"
                width="400"
                height="500"
                className="block h-auto w-full object-cover md:hidden"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OutletBanner;
