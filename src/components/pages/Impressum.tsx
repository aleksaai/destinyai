import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/utils/cn';
import NoiseTexture from '../ui/NoiseTexture';
import ImpressumParticles from './ImpressumParticles';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Gradient effects */}
        <div 
          className="absolute top-[10%] right-[10%] w-[800px] h-[800px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.15) 0%, rgba(29,211,176,0.05) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.7
          }}
        />
        <div 
          className="absolute -left-[20%] top-[40%] w-[600px] h-[600px]" 
          style={{
            background: 'radial-gradient(circle at center, rgba(29,211,176,0.1) 0%, rgba(29,211,176,0.03) 35%, rgba(0,0,0,0) 70%)',
            filter: 'blur(60px)',
            opacity: 0.5
          }}
        />
      </div>

      {/* Particles effect */}
      <ImpressumParticles />
      
      {/* Noise texture */}
      <NoiseTexture />

      {/* Header with back button */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center">
          <a
            href="/"
            className={cn(
              "flex items-center gap-2",
              "text-gray-400 hover:text-white",
              "transition-colors duration-200"
            )}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
            Impressum
          </h1>

          {/* Glass container for content */}
          <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-[1px]">
            <div className="rounded-lg bg-[#0D0D0D]/40 p-8 space-y-12">
              {/* Company Information */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>DestinyMedia GmbH</p>
                  <p>Kopernikusstraße 21</p>
                  <p>50126 Bergheim</p>
                  <p>Deutschland</p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                  Kontakt
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>Telefon: +49 151 41310845</p>
                  <p>E-Mail: support@destinymedia.de</p>
                </div>
              </section>

              {/* Management */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                  Vertreten durch
                </h2>
                <p className="text-gray-300">
                  Geschäftsführer (CEO): Aleksa Spalevic
                </p>
              </section>

              {/* Registration */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                  Registereintrag
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>Handelsregister: HRB 117785</p>
                  <p>Registergericht: Amtsgericht Köln</p>
                  <p>Umsatzsteuer-ID: DE366453463</p>
                </div>
              </section>

              {/* Content Responsibility */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="space-y-2 text-gray-300">
                  <p>Aleksa Spalevic</p>
                  <p>Willy-Brandt-Straße 1</p>
                  <p>50374 Erftstadt</p>
                  <p>Deutschland</p>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white via-[#1DD3B0] to-[#14A88C] bg-clip-text text-transparent">
                  Haftungsausschluss
                </h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-white font-medium mb-2">Haftung für Inhalte</h3>
                    <p className="leading-relaxed">
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Haftung für Links</h3>
                    <p className="leading-relaxed">
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Urheberrecht</h3>
                    <p className="leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Impressum;