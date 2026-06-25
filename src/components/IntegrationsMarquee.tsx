import Reveal from "./Reveal";
import {
  GoogleAdsLogo,
  MetaLogo,
  LinkedInLogo,
  HubSpotLogo,
  ShopifyLogo,
  MailchimpLogo,
  StripeLogo,
  NotionLogo,
  ZapierLogo,
  SlackLogo,
  KlaviyoLogo,
  SegmentLogo,
} from "./BrandLogos";

type Integration = {
  name: string;
  Logo: React.FC<{ className?: string }>;
  color: string;
};

const integrations: Integration[] = [
  { name: "Google Ads", Logo: GoogleAdsLogo, color: "#4285F4" },
  { name: "Meta", Logo: MetaLogo, color: "#0467DF" },
  { name: "LinkedIn", Logo: LinkedInLogo, color: "#0A66C2" },
  { name: "HubSpot", Logo: HubSpotLogo, color: "#FF7A59" },
  { name: "Shopify", Logo: ShopifyLogo, color: "#95BF47" },
  { name: "Mailchimp", Logo: MailchimpLogo, color: "#FFE01B" },
  { name: "Stripe", Logo: StripeLogo, color: "#635BFF" },
  { name: "Notion", Logo: NotionLogo, color: "#000000" },
  { name: "Slack", Logo: SlackLogo, color: "#4A154B" },
  { name: "Zapier", Logo: ZapierLogo, color: "#FF4A00" },
  { name: "Klaviyo", Logo: KlaviyoLogo, color: "#1F9B91" },
  { name: "Segment", Logo: SegmentLogo, color: "#52BD83" },
];

export default function IntegrationsMarquee() {
  const row = [...integrations, ...integrations];
  return (
    <section aria-label="Integrations" className="border-y border-[#e3eaea] bg-[#F6F8F8]">
      <Reveal className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 lg:px-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-[#7d8d8d]">
          Officially integrated · Built on trust
        </p>

        <div
          className="relative mt-6 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <ul className="marquee-track flex w-max items-center gap-8 pr-8">
            {row.map((item, i) => (
              <li
                key={`${item.name}-${i}`}
                className="flex items-center gap-2.5 whitespace-nowrap"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white ring-1 ring-[#e3eaea]"
                  style={{ color: item.color }}
                >
                  <item.Logo className="h-5 w-5" />
                </span>
                <span className="text-sm font-bold text-[#5b6b6b]">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
