import { routes } from "@/shared/config";
import { ArrowUpRight, Container, SignalLink } from "@/shared/ui";

const instagram = "https://www.instagram.com/mma.kaufbeuren/";
const whatsapp = "https://wa.me/4915143227550";
const email = "mailto:mma.kaufbeuren@gmail.com";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container>
        <div className="px-4 pt-14 pb-14 sm:px-6 md:px-10 lg:px-[72px] lg:pt-[71px] lg:pb-[72px]">
          <p className="max-w-[760px] text-[32px] leading-tight font-semibold tracking-tight uppercase sm:text-[40px] lg:text-[48px] lg:leading-[58px]">
            Dein nächster Schritt
            <br />
            beginnt auf der Matte.
          </p>
          <div className="mt-8 lg:mt-[43px]">
            <SignalLink href={routes.trial}>Probetraining anfragen</SignalLink>
          </div>
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="w-full lg:w-[370px]">
              <p className="text-sm font-semibold tracking-[0.04em] uppercase">MMA / Kaufbeuren</p>
              <p className="mt-5 text-base text-muted">Kampfsport. Gemeinschaft. Fortschritt.</p>
            </div>
            <div className="w-full lg:w-[370px]">
              <p className="text-sm font-semibold tracking-[0.04em] uppercase">Kontakt & Anfahrt</p>
              <address className="mt-5 text-base leading-6 text-muted not-italic">
                Füssener Straße 83
                <br />
                87600 Kaufbeuren
                <br />
                <a href={email} className="break-words">
                  mma.kaufbeuren@gmail.com
                </a>
                <br />
                <a href={whatsapp} className="inline-flex items-center gap-2">
                  WhatsApp
                  <ArrowUpRight />
                </a>
              </address>
            </div>
            <div className="w-full lg:w-[370px]">
              <p className="text-sm font-semibold tracking-[0.04em] uppercase">Social</p>
              <a href={instagram} className="mt-5 inline-flex items-center gap-2 text-base text-muted">
                Instagram
                <ArrowUpRight />
              </a>
              <a href={instagram} className="mt-1 block text-base text-muted">
                @mma.kaufbeuren
              </a>
            </div>
          </div>
          <p className="mt-9 text-xs text-muted">© MMA Kaufbeuren / Impressum / Datenschutz</p>
        </div>
      </Container>
    </footer>
  );
}
