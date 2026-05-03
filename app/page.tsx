import { HomeHero } from "@/components/sections/HomeHero";
import { Manifesto } from "@/components/sections/Manifesto";
import { HomeFeatures } from "@/components/sections/HomeFeatures";
import { HomeRegatta } from "@/components/sections/HomeRegatta";
import { HomeFacts } from "@/components/sections/HomeFacts";
import { HomeContact } from "@/components/sections/HomeContact";
import { PhotoCredit } from "@/components/ui/PhotoCredit";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Manifesto />
      <HomeFeatures />
      <HomeRegatta />
      <HomeFacts />
      <HomeContact />
      <PhotoCredit />
    </>
  );
}
