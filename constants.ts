
import { ChefHat, Archive, DoorOpen, Table, AppWindow, Layers } from 'lucide-react';
import { ServiceItem, ProcessStep, ProjectImage, TeamMember } from './types';

export const NAV_LINKS = [
  { name: 'Domov', href: 'domov' },
  { name: 'O nas', href: 'o-nas' },
  { name: 'Storitve', href: 'storitve' },
  { name: 'Galerija', href: 'galerija' },
  { name: 'Kontakt', href: 'kontakt' },
];

export const TEAM: TeamMember[] = [
  {
    id: 1,
    name: 'Kristjan Kosi',
    role: 'Ustanovitelj & Glavni mizar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Jože Kosi',
    role: 'Strokovna montaža',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'kuhinje',
    title: 'Kuhinje po meri',
    description: 'Vrhunska izdelava kuhinj, ki združujejo moderno estetiko in brezčasno funkcionalnost.',
    fullDescription: 'Kuhinja je srce doma, kjer se ustvarjajo spomini. Nudimo celovito rešitev – od svetovanja in 3D izrisa do natančne izdelave in montaže. Specializirani smo za moderne linije brez ročajev, rustikalne stile in inovativne rešitve za majhne prostore. Uporabljamo le najboljša okovja (Blum) in materiale, odporne na vlago in vročino.',
    benefits: ['Brezplačen 3D izris in svetovanje', 'Doživljenjska garancija na okovje Blum', 'Odporni pulti (Kerrock, Granit, Compact)', 'Popoln izkoristek kotov in predalov'],
    icon: ChefHat,
    image: 'slike/belakuhinja1.jpg'
  },
  {
    id: 'omare',
    title: 'Vgradne omare',
    description: 'Pametne rešitve za shranjevanje, od tal do stropa, ki izkoristijo vsak milimeter.',
    fullDescription: 'Pozabite na neizkoriščene kote in prah na vrhu omar. Naše vgradne omare so prilagojene vašemu prostoru do milimetra natančno. Idealne so za spalnice, hodnike, mansarde (poševnine) in garderobne sobe. Nudimo širok izbor polnil za drsna vrata – od stekla in ogledal do lesnih dekorjev.',
    benefits: ['100% izkoristek prostora (od tal do stropa)', 'Tiho in mehko zapiranje drsnih vrat', 'Prilagodljiva notranjost (košare, obešalniki, luči)', 'Rešitve za poševne mansardne strope'],
    icon: Archive,
    image: 'slike/belaomara.jpg'
  },
  {
    id: 'mize',
    title: 'Mize po meri',
    description: 'Unikatne masivne in moderne mize, ki postanejo osrednji prostor druženja.',
    fullDescription: 'Jedilna miza je več kot le kos pohištva; je prostor, kjer se zbere družina. Izdelujemo masivne mize iz hrasta, oreha in jesena z možnostjo epoksi smol ali klasičnih oljenih premazov. Nudimo tudi pisalne mize, klubske mizice in konferenčne mize s kovinskim ali lesenim podnožjem po vaši želji.',
    benefits: ['Izbran masiven les (Hrast, Oreh, Jesen)', 'Unikatni naravni robovi ali ravne linije', 'Zaščita z vrhunskimi olji ali laki', 'Izdelava kovinskih podnožij po meri'],
    icon: Table,
    image: 'slike/Okroglamiza1.webp'
  },
  {
    id: 'okna',
    title: 'Okna in police',
    description: 'Notranje in zunanje police ter obrobe oken za popoln zaključek vašega doma.',
    fullDescription: 'Okna dajo hiši pogled, police pa karakter. Izdelujemo masivne lesene notranje police, ki prostoru dodajo toplino, ter trpežne zunanje elemente. Prav tako nudimo obnovo oken, izdelavo lesenih špalet in okrasnih obrob, ki se stilsko ujemajo z vašim interierjem.',
    benefits: ['Masivne police po meri (tudi za ukrivljene stene)', 'Odpornost na vlago in temperaturne spremembe', 'Možnost lakiranja ali oljenja', 'Strokovna vgradnja brez poškodb fasade'],
    icon: AppWindow,
    image: 'slike/okna1.jpg'
  },
  {
    id: 'vrata',
    title: 'Vrata po meri',
    description: 'Vhodna in notranja vrata, ki zagotavljajo varnost, zvočno izolacijo in eleganco.',
    fullDescription: 'Vrata so prvi stik z vašim prostorom. Izdelujemo masivna vhodna vrata z visoko varnostno in toplotno zaščito ter elegantna notranja vrata (furnirana, barvana, masivna). Posebej smo ponosni na naša vrata s skritimi nasadili in magnetnimi ključavnicami za minimalističen videz.',
    benefits: ['Vrhunska zvočna izolacija', 'Skrita nasadila in magnetne ključavnice', 'Izdelava nadsvetlob in stranskih svetlob', 'Unikatni dizajni in kombinacije s steklom'],
    icon: DoorOpen,
    image: 'slike/Vratazsteklom1.webp'
  },
  {
    id: 'stopnice',
    title: 'Stopnice po meri',
    description: 'Eleganca in varnost v vsakem koraku. Masivne lesene stopnice in obloge betona.',
    fullDescription: 'Stopnice so arhitekturni element, ki povezuje dom. Specializirani smo za oblačenje betonskih stopnic v masivni les ter izdelavo samonosnih lesenih konstrukcij. Poskrbimo za varnost z izdelavo ograj (les, inox, steklo) in po želji vgradimo LED osvetlitev v pohodne ploskve.',
    benefits: ['Oblačenje betonskih stopnic v masivo', 'Samonosne in lebdeče konstrukcije', 'Integrirana LED osvetlitev', 'Kombinacije z leseno ali stekleno ograjo'],
    icon: Layers,
    image: 'slike/stopnice1.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Pogovor',
    description: 'Kristjan osebno prisluhne vašim željam in vam svetuje na podlagi dolgoletnih izkušenj.',
  },
  {
    number: '02',
    title: 'Izmera',
    description: 'Natančna izmera v vašem prostoru v Ormožu ali okolici, da bo vse stalo na svojem mestu.',
  },
  {
    number: '03',
    title: 'Načrtovanje',
    description: 'Priprava 3D modela, kjer vidite končni rezultat še pred začetkom izdelave.',
  },
  {
    number: '04',
    title: 'Ročna izdelava',
    description: 'V naši delavnici vsak kos lesa obdelamo z največjo skrbnostjo in natančnostjo.',
  },
  {
    number: '05',
    title: 'Montaža',
    description: 'Strokovna in čista montaža, po kateri za seboj pustimo le vrhunski izdelek in nasmeh.',
  },
];

export const GALLERY_IMAGES: ProjectImage[] = [
  { id: 1, url: 'slike/belakuhinja.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 2, url: 'slike/belakuhinja1.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 3, url: 'slike/sivakuhinja.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 4, url: 'slike/sivakuhinja1.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 5, url: 'slike/sivakuhinja2.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 6, url: 'slike/sivakuhinja3.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 7, url: 'slike/sivakuhinjaglavna1.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 8, url: 'slike/Temnakuhinja1.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 9, url: 'slike/Temnakuhinja2.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 10, url: 'slike/Temnakuhinja3.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },
  { id: 11, url: 'slike/belorjavakuhinja.jpg', title: 'Moderna kuhinja', category: 'kuhinje' },

  { id: 12, url: 'slike/belaomara.jpg', title: 'Vgradni garderobni sistem', category: 'omare' },
  { id: 13, url: 'slike/Belaomara1.jpeg', title: 'Omara od tal do stropa', category: 'omare' },
  { id: 15, url: 'slike/Belaomara3.jpeg', title: 'Notranja osvetlitev omare', category: 'omare' },
  { id: 16, url: 'slike/Rjavaomara1.jpg', title: 'Omara po meri', category: 'omare' },
  { id: 17, url: 'slike/Rjavaomara2.jpg', title: 'Omara po meri', category: 'omare' },  
  { id: 19, url: 'slike/omara1.jpg', title: 'Omara po meri', category: 'omare' },  
  { id: 20, url: 'slike/omara2.jpg', title: 'Omara po meri', category: 'omare' },  
  { id: 21, url: 'slike/omara3.jpg', title: 'Omara po meri', category: 'omare' },  

  { id: 22, url: 'slike/Okroglamiza1.webp', title: 'Masivna hrastova miza', category: 'mize' },
  { id: 23, url: 'slike/Okroglamiza2.webp', title: 'Okrogla miza po meri', category: 'mize' },
  { id: 24, url: 'slike/Okroglamiza3.jpeg', title: 'Miza z masivnim robom', category: 'mize' },
  { id: 25, url: 'slike/Okroglamiza(robmize)4.webp', title: 'Detajl roba mize', category: 'mize' },

  { id: 26, url: 'slike/okna1.jpg', title: 'Lesena okna in police', category: 'okna' },
  { id: 27, url: 'slike/okna2.jpg', title: 'Notranje police', category: 'okna' },

  { id: 31, url: 'slike/Vrata1.jpg', title: 'Notranja vrata', category: 'vrata' },
  { id: 32, url: 'slike/notranjastilnavrata.jpg', title: 'Stilna notranja vrata', category: 'vrata' },
  { id: 33, url: 'slike/notranjastilnavrata1.jpg', title: 'Bela notranja vrata', category: 'vrata' },
  { id: 34, url: 'slike/Starinskavrata1.jpg', title: 'Zunanja masivna vrata', category: 'vrata' },
  { id: 35, url: 'slike/Starinskavrata2.jpg', title: 'Rustikalna vrata', category: 'vrata' },
  { id: 36, url: 'slike/vrata2.jpg', title: 'Moderna notranja vrata', category: 'vrata' },
  { id: 37, url: 'slike/kljukaodvrat.jpg', title: 'Detajl kljuke', category: 'vrata' },
  { id: 38, url: 'slike/stokodvrat.jpg', title: 'Detajl podboja', category: 'vrata' },
  { id: 39, url: 'slike/vrata5.jpg', title: 'Vrata po meri', category: 'vrata' },
  { id: 40, url: 'slike/vrata3.jpg', title: 'Vrata z zasteklitvijo', category: 'vrata' },
  { id: 41, url: 'slike/kljukaodvrat1.jpg', title: 'Kvalitetno okovje', category: 'vrata' },
  { id: 42, url: 'slike/kljukaodvrat2.jpg', title: 'Montaža kljuke', category: 'vrata' },
  { id: 43, url: 'slike/vrata4.jpg', title: 'Vrata po meri', category: 'vrata' },

  { id: 44, url: 'slike/stopnice1.jpg', title: 'Hrastove stopnice', category: 'stopnice' },
  { id: 45, url: 'slike/stopnice2.jpg', title: 'Lebdeče stopnice', category: 'stopnice' },
  { id: 46, url: 'slike/stopnice3.jpg', title: 'Stopnice z ograjo', category: 'stopnice' },
  { id: 47, url: 'slike/stopnice4.jpg', title: 'Moderne stopnice', category: 'stopnice' },
  { id: 48, url: 'slike/stopnice5.jpg', title: 'Obloga betona', category: 'stopnice' },
];
