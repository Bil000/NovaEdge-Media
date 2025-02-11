export const metadata = {
  title: "NovaEdge Media",
  keywords: "Facebook Ads Management, Instagram Ads Optimization, Google Ads Campaigns, YouTube Ads Targeting, TikTok Ads Strategy, LinkedIn Ads Solutions, Paid Advertising Services, PPC Campaign Management, Social Media Ad Campaigns, AI-Powered Ad Campaigns, Retargeting Ads Strategies, Conversion-Focused Advertising, AI Marketing Solutions, AI Advertising Optimization, AI-Powered Marketing Assistant, AI Models for Marketing, Machine Learning in Marketing, Predictive Analytics for Ads, AI Campaign Automation, Data-Driven Marketing Strategies, Social Media Management Services, Social Media Content Creation, Paid Social Media Ads, SMMA for Businesses, Social Media Growth Strategies, Cross-Platform Social Media Marketing, Digital Marketing Strategies, Online Marketing Campaigns, Marketing Automation Services, Content Marketing Solutions, Multi-Channel Marketing, Branding and Digital Presence, High-Converting Ad Copy, Persuasive Ad Copywriting, SEO-Friendly Copywriting Services, Copywriting for Social Media, Custom Website Design, Responsive Website Development, SEO-Optimized Websites, Landing Page Design for Ads, Website Development for Marketing Agencies, Real Estate Marketing Solutions, E-commerce Ad Campaigns, Small Business Digital Marketing, AI Marketing for Startups, ROI-Focused Marketing, Marketing Growth Strategies, Performance Marketing Services, Full-Service Marketing Agency, Novaedgemedia, nova edge media, novaedge media, Artificial inteligence, AI, digital marketing, marketing, social media",
  icons: {
    icon: '/favicon-16x16.png',  // 16x16 icon for general use
    shortcut: '/favicon-32x32.png',  // 32x32 icon for shortcuts
    apple: '/apple-touch-icon.png',  // Apple touch icon (180x180)
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',  // Link to the site manifest
      },
    ],
  },
}
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function Home() {
  return (
    <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'rgb(5, 5, 5)' }}>
      <div style={{ fontSize: '50px', color: 'aliceblue', fontFamily: 'Helvetica', fontWeight: 'bolder', marginTop: "50px" }}>
        We will be online soon.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%' }}>
      <iframe
        width="540"
        height="1000"
        src="https://07998811.sibforms.com/serve/MUIFAIY8Ap03JBQGbP1XZ1COqTmodXyPTeupXGtOcBrY1tNMtUREfmIU8GC0mVES_HDva8EXooMDWLgqAjvXDv-MbXsa0sReGYKpE8h8brKUIKTQceN-CQxrYcgDbWWcIfl6PKC3TNmbpqcSdat5th9zxTwEK8LvmI3EJ85wlFqvPmmQb6u8kC4U8iuxKbtZk8jEsjpdQ4ET-4IS"
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        style={{ maxWidth: '100%', overflow: "none" }}
      ></iframe>
    </div>
    </div>
  );
}
