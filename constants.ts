
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
    description: 'Kuhinja je srce doma, kjer se ustvarjajo spomini in nepozabni trenutki z najdražjimi.',
    fullDescription: 'Kuhinja je srce doma, kjer se ustvarjajo spomini in nepozabni trenutki z najdražjimi. Nudimo celovito rešitev – od 3D izrisa, natančne izdelave do montaže. Možne so vse vrste izvedb kuhinj iz najboljših materialov po izbiri stranke in z vrhunskim okovjem. Posebnost: materiali, na katerih se ne vidijo prstni odtisi (pulti brez vidnih sledi uporabe).',
    benefits: [
      '3D izris in strokovno svetovanje',
      'Garancija na okovje Blum',
      'Razne izvedbe kuhinjskih pultov (Kerrock, Compact, kamniti...)',
      'Popoln izkoristek kotov in predalov',
      'Materiali brez vidnih prstnih odtisov in odpornost na vlago'
    ],
    icon: ChefHat,
    image: 'slike/belakuhinja1.jpg'
  },
  {
    id: 'omare',
    title: 'Omare',
    description: 'Funkcionalne in estetske omare po meri z možnostjo izbire med vgradnimi omarami, klasičnimi omarami in skritimi prehodi.',
    fullDescription: 'Izdelujemo vse vrste omar po meri. Uporabnikom omogočamo popolno prilagoditev med klasičnimi omarami in vgradnimi omarami z dodatnimi možnostmi ter funkcijami po želji stranke.',
    subcategories: [
      {
        id: 'vgradne',
        title: 'Vgradne omare',
        description: 'Pozabite na neizkoriščene kote in prah na vrhu omar. Naše vgradne omare so prilagojene vašemu prostoru do milimetra natančno. Idealne so za spalnice, hodnike, mansarde (poševnine) in garderobne sobe. Možnost vgradnje skritih prehodov (omare kot prehod / omare kot vrata).',
        benefits: [
          '100% izkoristek prostora (od tal do stropa)',
          'Tiho in mehko zapiranje vrat in predalov',
          'Prilagojene rešitve za vsak prostor'
        ]
      },
      {
        id: 'klasicne',
        title: 'Klasične omare',
        description: 'Prostostoječe garderobne in shranjevalne omare, prilagojene vašemu stilu bivanja. Poljubna razporeditev polic, predalov in obešalnikov ter izbira modernih ali klasičnih profilov.',
        benefits: [
          'Prilagodljiva notranja postavitev elementov',
          'Možnost poljubnega prestavljanja v prostoru',
          'Kakovostni naravni furnirji in trpežni dekorji'
        ]
      },
      {
        id: 'skriti-prehodi',
        title: 'Skriti prehodi (omara kot vrata)',
        description: 'Inovativna rešitev, kjer del omare deluje kot skrivni prehod ali prehodna vrata v utility, spalnico, shrambo ali garderobo – popolnoma zlite z linijo pohištva brez vidnih rež ali okovja.',
        benefits: [
          'Nevidna integracija prehoda v pohištveni niz',
          'Ojačano skrito nosilno okovje z mehkim zapiranjem',
          'Estetska čistost prostora brez odvečnih vratnih podbojev'
        ]
      }
    ],
    benefits: [
      '100% izkoristek prostora (od tal do stropa)',
      'Tiho in mehko zapiranje vrat in predalov',
      'Prilagojene rešitve za vsak prostor',
      'Možnost vgradnje skritih prehodov (omara kot vrata)'
    ],
    icon: Archive,
    image: 'slike/belaomara.jpg'
  },
  {
    id: 'mize',
    title: 'Mize po meri',
    description: 'Jedilna miza je več kot le kos pohištva; je prostor, kjer se zbere družina.',
    fullDescription: 'Jedilna miza je več kot le kos pohištva; je prostor, kjer se zbere družina. V našem podjetju močno zagovarjamo mize iz masivnega lesa zaradi njihove trajnosti, topline in naravnega videza, hkrati pa se popolnoma prilagodimo individualnim željam in zahtevam stranke.',
    benefits: [
      'Izbran masiven les (hrast, oreh, jesen) ali dekorji lesnih plošč',
      'Unikatni naravni robovi ali čiste ravne linije',
      'Zaščita z vrhunskimi olji ali laki',
      'Masivna lesena ali prašno barvana kovinska podnožja'
    ],
    icon: Table,
    image: 'slike/Okroglamiza1.webp'
  },
  {
    id: 'okna',
    title: 'Okna',
    description: 'Visoko kakovostna lesena okna profilov 68 mm, 78 mm, 92 mm in več ter možnost nepovratnih eko subvencij.',
    fullDescription: 'Izdelujemo visoko kakovostna lesena okna profilov 68 mm, 78 mm, 92 mm in več. Nudimo različne izvedbe: klasična, škatlasta, drsne stene, polkna itd.. Vgrajujemo kakovostne premaze in vrhunsko okensko okovje.',
    specialNotice: {
      title: 'Eko subvencije (Eko sklad)',
      description: 'Ob nakupu lesenih oken ima vsaka stranka možnost prijave za eko subvencije (Eko sklad) in pridobitve nepovratnih finančnih sredstev.',
      badge: 'Eko sklad subvencija'
    },
    benefits: [
      'Hiša lažje »diha« z naravnim lesom',
      'Les daje topel in estetski videz (okna so »oči hiše«)',
      'Življenjska doba ob pravilni negi presega 50 let',
      'Možnost pridobitve nepovratnih finančnih sredstev Eko sklada'
    ],
    icon: AppWindow,
    image: 'slike/okna1.jpg'
  },
  {
    id: 'vrata',
    title: 'Vrata',
    description: 'Vhodna in notranja vrata po meri z visoko varnostjo, odlično izolativnostjo in modernimi poravnanimi linijami.',
    fullDescription: 'Izdelujemo vrhunska vhodna in notranja vrata po meri, prilagojena specifikam vašega prostora in arhitekturi objekta.',
    subcategories: [
      {
        id: 'vhodna-vrata',
        title: 'Vhodna vrata',
        description: 'Poudarek na visoki varnosti, zanesljivosti, dobri izolativnosti in estetiki. Izdelana iz skrbno izbranega lesa, z večtočkovnim varnostnim zaklepanjem ter odlično toplotno in zvočno zaščito.',
        benefits: [
          'Visoka varnost in protivlomna zanesljivost',
          'Vrhunska toplotna in zvočna izolativnost',
          'Unikatni modeli s kombinacijami stekla in estetskih profilov'
        ]
      },
      {
        id: 'notranja-vrata',
        title: 'Notranja vrata',
        description: 'Razne izvedbe notranjih vrat, vključno z vrati, poravnanimi z zidem (poravnana/skrita vrata z nevidnimi aluminijastimi podboji), z uporabo najboljšega okovja in materialov po želji stranke.',
        benefits: [
          'Vrata poravnana z zidem (nevidni skriti podboji)',
          'Magnetne ključavnice za neslišno zapiranje',
          'Skrita nastavljiva nasadila in vrhunska zvočna izolacija'
        ]
      }
    ],
    benefits: [
      'Možnost izbire med vhodnimi in notranjimi vrati',
      'Izvedba vrat poravnanih z zidem (skrita vrata)',
      'Visoka zvočna in toplotna izolativnost',
      'Kakovostno okovje in magnetne ključavnice'
    ],
    icon: DoorOpen,
    image: 'slike/Vratazsteklom1.webp'
  },
  {
    id: 'stopnice',
    title: 'Stopnice',
    description: 'Masivne lesene stopnice in obloge betona unikatnih oblik in estetske dovršenosti.',
    fullDescription: 'Stopnice so arhitekturni element, ki povezuje dom. Specializirani smo za oblačenje betonskih stopnic v masivni les ter izdelavo samonosnih lesenih konstrukcij unikatnih oblik in estetske dovršenosti. Poskrbimo za varnost z izdelavo ograj (les, inox, steklo) in po želji vgradimo LED osvetlitev v pohodne ploskve, kar poskrbi za prijetno vzdušje in zaokrožen ambient.',
    benefits: [
      'Oblačenje betonskih stopnic v masivni les',
      'Samonosne in lebdeče konstrukcije unikatnih oblik',
      'Integrirana diskretna LED osvetlitev v stopnicah',
      'Kombinacije z ograjami (les, steklo, inox) za estetsko dovršenost'
    ],
    icon: Layers,
    image: 'slike/stopnice1.jpg'
  },
  {
    id: 'oprema-stanovanj',
    title: 'Opremljanje celotnih objektov',
    description: 'S pohištvom in strokovno montažo lahko celostno opremimo vaše stanovanje ali hišo po vaših željah (od A do Ž).',
    fullDescription: 'S pohištvom in strokovno montažo lahko celostno opremimo vaše stanovanje ali hišo po vaših željah. To je najboljša odločitev, saj vam ni treba iskati več različnih izvajalcev – poskrbimo za vse na enem mestu (od A do Ž).',
    benefits: [
      'Vse na enem mestu (od A do Ž) pri enem zaupanja vrednem izvajalcu',
      'Brez usklajevanja več različnih obrtnikov in brez nepotrebnega stresa',
      'Popolna stilsko usklajena podoba celotnega bivalnega prostora',
      'Natančna izmera, 3D načrtovanje, lastna izdelava in strokovna montaža'
    ],
    icon: Layers,
    image: 'slike/belakuhinja.jpg'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Pogovor',
    description: 'Osebno prisluhnemo vašim željam in vam svetujemo na podlagi dolgoletnih izkušenj.',
  },
  {
    number: '02',
    title: 'Izmera',
    description: 'Natančna izmera na objektu/prostoru, da bo vse stalo na svojem mestu.',
  },
  {
    number: '03',
    title: 'Načrtovanje',
    description: 'Priprava 3D izrisa, kjer vidite končni rezultat še pred začetkom izdelave, da si lahko prostor lažje predstavljate.',
  },
  {
    number: '04',
    title: 'Izdelava',
    description: 'V naši delavnici vsak kos lesa obdelamo z največjo skrbnostjo in natančnostjo s pomočjo sodobnih strojev.',
  },
  {
    number: '05',
    title: 'Montaža',
    description: 'Strokovna in čista montaža, po kateri za seboj pustimo le vrhunski izdelek in nasmeh.',
  },
];

export const GALLERY_IMAGES: ProjectImage[] = [
  // KUHINJE
  { id: 1, url: 'slike/belakuhinja.jpg', title: 'Svetla moderna kuhinja', category: 'kuhinje' },
  { id: 2, url: 'slike/belakuhinja1.jpg', title: 'Kuhinja z otokom in vgradnimi aparati', category: 'kuhinje' },
  { id: 3, url: 'slike/sivakuhinja.jpg', title: 'Moderna siva kuhinja z Blum okovjem', category: 'kuhinje' },
  { id: 4, url: 'slike/sivakuhinja1.jpg', title: 'Kuhinjski ambient z LED razsvetljavo', category: 'kuhinje' },
  { id: 5, url: 'slike/sivakuhinja2.jpg', title: 'Funkcionalna kotna kuhinja po meri', category: 'kuhinje' },
  { id: 6, url: 'slike/sivakuhinja3.jpg', title: 'Detajli kuhinjskih front brez prstnih odtisov', category: 'kuhinje' },
  { id: 7, url: 'slike/sivakuhinjaglavna1.jpg', title: 'Izvedba kuhinje z jedilnim pultom', category: 'kuhinje' },
  { id: 8, url: 'slike/Temnakuhinja1.jpg', title: 'Elegantna temna kuhinja', category: 'kuhinje' },
  { id: 9, url: 'slike/Temnakuhinja2.jpg', title: 'Temna kuhinja s premijskim pultom', category: 'kuhinje' },
  { id: 10, url: 'slike/Temnakuhinja3.jpg', title: 'Izkoristek predalov in kotov v kuhinji', category: 'kuhinje' },
  { id: 11, url: 'slike/belorjavakuhinja.jpg', title: 'Kombinacija toplega lesa in bele elegance', category: 'kuhinje' },

  // OMARE
  { id: 12, url: 'slike/belaomara.jpg', title: 'Vgradni garderobni sistem od tal do stropa', category: 'omare', subcategory: 'vgradne' },
  { id: 13, url: 'slike/Belaomara1.jpeg', title: 'Vgradna omara z maksimalnim izkoristkom', category: 'omare', subcategory: 'vgradne' },
  { id: 14, url: 'slike/Belaomara2.png', title: 'Drsna vrata za spalnico ali hodnik', category: 'omare', subcategory: 'vgradne' },
  { id: 15, url: 'slike/Belaomara3.jpeg', title: 'Notranja osvetlitev in predali omare', category: 'omare', subcategory: 'vgradne' },
  { id: 16, url: 'slike/Rjavaomara1.jpg', title: 'Garderobna omara v toplem lesnem dekorju', category: 'omare', subcategory: 'klasicne' },
  { id: 17, url: 'slike/Rjavaomara2.jpg', title: 'Klasična prostostoječa omara po meri', category: 'omare', subcategory: 'klasicne' },  
  { id: 19, url: 'slike/omara1.jpg', title: 'Prilagojena omara za mansardni prostor', category: 'omare', subcategory: 'vgradne' },  
  { id: 20, url: 'slike/omara2.jpg', title: 'Omara s tihim zapiranjem vrat', category: 'omare', subcategory: 'vgradne' },  
  { id: 21, url: 'slike/omara3.jpg', title: 'Garderobni sestav z integriranim prehodom', category: 'omare', subcategory: 'skriti-prehodi' },  

  // MIZE
  { id: 22, url: 'slike/Okroglamiza1.webp', title: 'Masivna okrogla miza iz hrasta', category: 'mize' },
  { id: 23, url: 'slike/Okroglamiza2.webp', title: 'Mizna plošča z naravno toplino lesa', category: 'mize' },
  { id: 24, url: 'slike/Okroglamiza3.jpeg', title: 'Miza po meri z zaščitnim oljnim premazom', category: 'mize' },
  { id: 25, url: 'slike/robmize.webp', title: 'Detajl obdelanega masivnega roba', category: 'mize' },

  // OKNA
  { id: 26, url: 'slike/okna1.jpg', title: 'Lesena okna po meri z visoko toplotno izolacijo', category: 'okna' },
  { id: 27, url: 'slike/okna2.jpg', title: 'Detajl lesenega okenskega profila in okovja', category: 'okna' },

  // VRATA
  { id: 31, url: 'slike/vrata1.jpg', title: 'Notranja vrata po meri', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 32, url: 'slike/notranjastilnavrata.jpg', title: 'Stilna notranja vrata', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 33, url: 'slike/notranjastilnavrata1.jpg', title: 'Bela lakirana notranja vrata', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 34, url: 'slike/Starinskavrata1.jpg', title: 'Vhodna masivna vrata z visoko varnostjo', category: 'vrata', subcategory: 'vhodna-vrata' },
  { id: 35, url: 'slike/Starinskavrata2.jpg', title: 'Vhodna vrata z zanesljivo izolativnostjo', category: 'vrata', subcategory: 'vhodna-vrata' },
  { id: 36, url: 'slike/vrata2.jpg', title: 'Moderna notranja vrata s skritim podbojem', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 37, url: 'slike/kljukaodvrat.jpg', title: 'Vrhunska kljuka in magnetna ključavnica', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 38, url: 'slike/stokodvrat.jpg', title: 'Natančna izdelava vratnega podboja', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 39, url: 'slike/vrata5.jpg', title: 'Notranja vrata poravnana s steno', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 40, url: 'slike/vrata3.jpg', title: 'Notranja vrata z zasteklitvijo', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 41, url: 'slike/kljukaodvrat1.jpg', title: 'Detajl premijskega okovja', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 42, url: 'slike/kljukaodvrat2.jpg', title: 'Strokovna montaža okovja', category: 'vrata', subcategory: 'notranja-vrata' },
  { id: 43, url: 'slike/vrata4.jpg', title: 'Furnirana notranja vrata z mehkih zapiranjem', category: 'vrata', subcategory: 'notranja-vrata' },

  // STOPNICE
  { id: 44, url: 'slike/stopnice1.jpg', title: 'Hrastove masivne stopnice unikatnih oblik', category: 'stopnice' },
  { id: 45, url: 'slike/stopnice2.jpg', title: 'Samonosne lesene stopnice', category: 'stopnice' },
  { id: 46, url: 'slike/stopnice3.jpg', title: 'Stopnice z varnostno ograjo', category: 'stopnice' },
  { id: 47, url: 'slike/stopnice4.jpg', title: 'Estetsko dovršene moderne stopnice', category: 'stopnice' },
  { id: 48, url: 'slike/stopnice5.jpg', title: 'Natančna obloga betonskih stopnic v les', category: 'stopnice' }
];
