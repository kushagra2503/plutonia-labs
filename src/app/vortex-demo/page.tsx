import { Vortex } from "@/components/ui/vortex";
import { Navigation } from "@/components/navigation";

export default function VortexDemoPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen w-full">
        <Vortex containerClassName="min-h-screen">
          <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Vortex UI Demo
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-center mb-8">
              This is a demonstration of the Vortex UI component with animated particles and gradients.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Feature One</h3>
                <p>
                  The Vortex component creates an animated background with floating particles
                  and gradients that respond to movement.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Feature Two</h3>
                <p>
                  Customize colors, particle density, and animation speed to match your brand
                  and create the perfect atmosphere.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Feature Three</h3>
                <p>
                  Optimized for performance with CSS animations instead of heavy canvas operations,
                  ensuring smooth experiences on all devices.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Feature Four</h3>
                <p>
                  Easily integrate with any content by wrapping it with the Vortex component,
                  creating an immersive visual experience.
                </p>
              </div>
            </div>
          </div>
        </Vortex>
      </div>
    </>
  );
} 