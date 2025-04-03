import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NovaEdge Media | The AI Revolutionizing Marketing",
  description: "Novaedge Media is the best AI-software for digital marketing campaigns, what are you waiting for? get started today!",
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
  initialScale: 1
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{backgroundColor:"rgb(9, 12, 18)", fontFamily:"helvetica", color:"#FFFFFF", display: "flex", justifyContent: "center",  scrollbarWidth: "none"}}        
      >
        <style>
          {`
          body {
            margin: 0;
            height: 100vh;
            overflow: hidden;
          }

          .scroll-container {
            overflow: auto;         
          }

          /* Hide the scrollbar */
          .scroll-container::-webkit-scrollbar {
            width: 8px;             
            height: 8px;            
            background-color: transparent;  
          }

          /* Style the scrollbar thumb (the part you can drag) */
          .scroll-container::-webkit-scrollbar-thumb {
            background-color: #888; /* Thumb color */
            border-radius: 10px;     /* Round the thumb edges */
          }

          /* Optional: Add hover effect for the thumb */
          .scroll-container::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
          `}
        </style>        
        <div className="w-full scroll-container md:pt-2">
           {children}
        </div>     
      </body>
    </html>
  );
}
