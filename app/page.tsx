 
import Image from "next/image";

const plats = [
  {
    nom: "Briques",
    images: ["/Briques1.jpeg", "/Briques2.jpeg"],
    description: "Délicieuses feuilles croustillantes garnies de thon, œuf ou viande hachée, spécialité incontournable de la cuisine tunisienne.",
    prix: "3.50€ l'unité",
  },
  {
    nom: "Couscous",
    images: ["/Couscous1.jpeg", "/Couscous2.jpeg"],
    description: "Le plat emblématique du Maghreb, semoule fine accompagnée de légumes, viande ou poulet, parfumé aux épices.",
    prix: "8€",
  },
  {
    nom: "Fricassés",
    images: ["/Fricassés1.jpeg", "/Fricassés2.jpeg"],
    description: "Petits pains frits garnis de thon, œuf, olives et harissa sur demande, parfaits pour un encas savoureux.",
    prix: "3€ l'unité",
  },
  {
    nom: "Mloukhia",
    images: ["/Mloukhia.jpeg"],
    description: "Ragoût vert foncé à base de corète, mijoté longuement avec de la viande, riche en saveurs et en traditions.",
    prix: "7€",
  },
  {
    nom: "Salade Mechouiya",
    images: ["/Salade mechouiya.jpeg"],
    description: "Salade grillée de poivrons, tomates et oignons, relevée à l'huile d'olive.",
    prix: "4€",
  },
  {
    nom: "Tagines",
    images: ["/Tagines1.jpeg", "/Tagines2.jpeg"],
    description: "Tagines tunisiennes cuite au four, garnie de pomme de terre, persil, fromage rapé, oeuf, fondante et parfumée au poulet ou viande hachée.",
    prix: "2.50€ l'unité",
  },
  {
    nom: "Haricots",
    images: ["/Haricot1.jpeg", "/Haricot2.jpeg"], // À compléter avec le nom de l'image si disponible, exemple: ["/Haricots.jpeg"]
    description: "Plat mijoté de haricots blancs à la sauce tomate, souvent accompagné de viande ou poulet.",
    prix: "7€",
  },
  {
    nom: "Riz",
    images: ["/Riz1.jpeg", "/Riz2.jpeg"], // À compléter avec le nom de l'image si disponible, exemple: ["/Riz.jpeg"]
    description: "Riz blanc parfumé aux épices, cuisiné avec légumes, poulet, viandes selon la tradition tunisienne.",
    prix: "8€",
  },
   {
    nom: "Petits pois",
    images: ["/petitpois1.jpeg"], // À compléter avec le nom de l'image si disponible, exemple: ["/PetitsPois.jpeg"]
    description: "Délicieux ragoût de petits pois cuisinés à la tunisienne, souvent accompagné de viande ou poulet.",
    prix: "7€",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-100 to-yellow-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 flex flex-col items-center py-10 px-4">
      <header className="mb-12 text-center flex flex-col items-center">
        <div className="mb-4">
          <Image
            src="/favicon - title.jpeg"
            alt="Logo Hanene Food"
            width={100}
            height={100}
            className="rounded-full shadow-lg border-4 border-orange-200 dark:border-yellow-300 object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-700 dark:text-yellow-300 drop-shadow-lg mb-4">Hanene Food</h1>
        <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-200 max-w-2xl mx-auto">
          Découvrez nos spécialités culinaires tunisiennes, préparées avec passion et authenticité.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-8xl">
        {plats.map((plat) => (
          <div key={plat.nom} className="bg-white/80 dark:bg-zinc-800/80 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="flex gap-2 mb-4">
              {plat.images.map((img, idx) => (
                <div key={img} className="relative w-32 h-32 rounded-xl overflow-hidden border-2 border-orange-200 dark:border-yellow-400 shadow">
                  <Image
                    src={img}
                    alt={plat.nom + " photo " + (idx + 1)}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-orange-800 dark:text-yellow-200 mb-1">{plat.nom}</h2>
            <p className="text-xl font-extrabold text-black dark:text-white mb-2">{plat.prix}</p>
            <p className="text-zinc-700 dark:text-zinc-100 text-center text-base">{plat.description}</p>
          </div>
        ))}
      </section>
      <a
        href="https://wa.me/33651519626"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Commander sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.05C13.416 27.632 14.692 28 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.17 0-2.314-.203-3.393-.604l-.242-.088-4.65 1.217 1.24-4.527-.158-.234C7.21 18.13 6.5 16.594 6.5 15c0-5.238 4.262-9.5 9.5-9.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5zm5.25-7.25c-.287-.144-1.7-.84-1.963-.936-.263-.096-.454-.144-.646.144-.192.287-.74.936-.907 1.129-.168.192-.335.216-.622.072-.287-.144-1.213-.447-2.31-1.425-.854-.76-1.43-1.698-1.598-1.985-.168-.287-.018-.443.127-.587.13-.13.287-.335.431-.503.144-.168.192-.287.288-.479.096-.192.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.14-.233-.56-.47-.484-.646-.492-.168-.007-.36-.009-.552-.009-.192 0-.504.072-.768.36-.263.287-1.01.984-1.01 2.4 0 1.416 1.034 2.785 1.178 2.978.144.192 2.037 3.12 4.938 4.254.69.276 1.228.44 1.647.563.692.22 1.323.189 1.82.115.555-.082 1.7-.693 1.94-1.363.24-.67.24-1.244.168-1.363-.072-.12-.263-.192-.55-.336z"/>
        </svg>
        Commander sur WhatsApp
      </a>
      <footer className="mt-16 text-zinc-500 dark:text-zinc-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Hanene Food. Tous droits réservés.
      </footer>
    </div>
  );
}
// ...existing code...
