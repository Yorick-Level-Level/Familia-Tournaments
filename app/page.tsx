import { IconMapper } from "@/components/atoms/Icons/Component";
import Metatags from "@/components/molecules/MetaTags/Component";
import TournamentDetails from "@/components/molecules/TournamentDetails/Component";
import TournamentBracket from "@/components/organisms/TournamentBracket/Component";

export default function Home() {
  return (
    <>
      <Metatags />    
      <main className="flex min-h-screen flex-col items-center p-10 md:p-24">
        <div className="flex flex-row items-center gap-2">
          <span className="w-8 h-8 md:w-16 md:h-16">
            {IconMapper('ball')}
          </span>
          <h1 className="font-nexa text-2xl md:text-6xl text-custom-blue">PADEL TOERNOOI</h1>
        </div>
        <h2 className="font-sweetBold text-xl md:text-4xl text-custom-orange tracking-widest">FAMILIA</h2>
        <hr className="h-1 w-full bg-custom-blue mt-4 rounded-full"/>
        <TournamentDetails />
        <hr className="h-1 w-full bg-custom-blue rounded-full"/>
        <TournamentBracket />
      </main>
    </>
  )
}
