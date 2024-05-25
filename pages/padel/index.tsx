import PadelBracket from "@/components/padel-bracket";
import DefaultLayout from "@/layouts/default";

export default function Padel() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className="font-nexa text-6xl text-custom-dark-green font-bold text-center">
            Padel Toernooi
          </h1>
          <h2 className="font-sweetBold text-xl md:text-4xl text-custom-orange tracking-widest">FAMILIA</h2>
        </div>
        <div className="mt-6 md:mt-10 mb-6 md:mb-10 text-custom-blue text-center md:max-w-4xl">
          <p className="text-2xl font-sweetRegular">Zaterdag 2 December</p>
          <p className="text-xl font-sweetRegular mt-1">
            <span className="p-0.5 bg-custom-orange rounded-full text-white pb-2 px-2">
              14.45PM
            </span>
            <span className=""> tot </span>
            <span className="p-0.5 bg-custom-orange rounded-full text-white pb-2 px-2">
              17.30PM
            </span>
          </p>
          <p className="mt-4 font-sweetBold tracking-widest">
            Jagtlustkade 12B, 2171 AG Sassenheim
          </p>
        </div>
        <hr className="h-1 w-full bg-custom-dark-green mt-4 rounded-full"/>
        <PadelBracket />
      </section>
    </DefaultLayout>
  );
}
