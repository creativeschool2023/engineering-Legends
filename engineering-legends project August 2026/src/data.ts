import { Engineer, Discipline, Organization, VoiceStory } from './types';

// ─── FIX #2 & #3: Centralized constants instead of hardcoded repeat strings ───

export const ERA_LABELS: Record<string, string> = {
  ancient:     'Ancient Times (3000 BC – 1st Century BC)',
  after_christ:'After Christ / Early AD Era (1st Century AD – 7th Century AD)',
  medieval:    'Medieval Times & Golden Age (8th Century AD – 17th Century AD)',
  modern:      'Modern Engineering (18th Century – Present)',
};

export const DISCIPLINE_CATEGORIES = {
  CORE:          'Core & Traditional',
  TECH:          'Technology & Information',
  ENV:           'Environmental & Sustainable',
  HEALTH:        'Health & Bio',
  EXTREME:       'Space, Ocean & Extreme',
  DESIGN:        'Design & Emerging',
} as const;

// ─────────────────────────────────────────────────────────────────────────────

export const engineers: Engineer[] = [
  {
    id: 'imhotep',
    plateId: 'B-IMHOTEP',
    name: 'Imhotep of Memphis',
    era: 'ancient',
    eraLabel: ERA_LABELS.ancient,
    lifespan: 'c. 2650 BC — c. 2600 BC',
    nationality: 'Ancient Egyptian',
    location: 'Memphis & Saqqara, Ancient Egypt',
    disciplines: ['Civil Engineering', 'Structural Design', 'Architecture'],
    accomplishments: ['The Step Pyramid of Djoser', 'Stone Column Architecture', 'Early Ashlar Masonry', 'Subterranean Vaulting'],
    quote: '"To construct permanently, one must replace the temporal reed and mud with the eternal mountain."',
    quoteContext: 'Imhotep pioneered the historical transition of primary structural materials from sun-dried mudbrick to cut limestone ashlar.',
    biography: {
      lead: 'Imhotep is revered as the first civil engineer, architect, and polymath in recorded human history. Serving as chancellor to Pharaoh Djoser, he completely revolutionized structural engineering by designing the Step Pyramid complex at Saqqara.',
      full: [
        'Before Imhotep, royal tombs were single-story mudbrick mastabas vulnerable to erosion and collapse. Imhotep conceptualized stacking six increasingly smaller stone mastabas atop one another, achieving an unprecedented structural elevation of 62.5 meters.',
        'He was the first engineer to utilize carved limestone columns to support structural roofs, inventing stone ashlar dressing techniques that increased surface-to-surface mechanical friction without requiring structural mortar.'
      ]
    },
    image: 'imhotep',
    technicalMetrics: [
      { label: 'Structural Base Area', value: '15,000', unit: 'SQ METERS', numberValue: 15000 },
      { label: 'Compressive Load Threshold', value: '12', unit: 'MPA LIMESTONE', numberValue: 12 },
      { label: 'Elevation Height Achieved', value: '62.5', unit: 'METERS', numberValue: 62.5 }
    ],
    blueprint: {
      title: 'The Djoser Step Monument',
      subtitle: 'Tiered Stone Ashlar Load Distribution System',
      concept: 'A series of six stacked limestone tiers distributing 850,000 tons of compressive dead load outward and downward directly into bedrock stratum.',
      principles: [
        'Ashlar block precision dressing increases surface friction, eliminating mortar failure points.',
        'Inward-sloping structural walls prevent lateral shearing and seismic buckling.',
        'Subterranean granite chamber network cut 28 meters directly into solid geotech stratum.'
      ],
      specs: [
        { label: 'Total Stone Mass', value: '850,000 tons' },
        { label: 'Settlement Tolerance', value: '0.04 mm/decade' },
        { label: 'Chamber Core Depth', value: '28 meters' },
        { label: 'Tectonic Rating', value: 'Magnitude 6.5 Richter' }
      ]
    }
  },
  {
    id: 'archimedes',
    plateId: 'B-ARCHIMEDES',
    name: 'Archimedes of Syracuse',
    era: 'ancient',
    eraLabel: ERA_LABELS.ancient,
    lifespan: 'c. 287 BC — c. 212 BC',
    nationality: 'Ancient Greek',
    location: 'Syracuse, Magna Graecia (Sicily)',
    disciplines: ['Mechanical Engineering', 'Mathematics', 'Hydrostatics'],
    accomplishments: ['The Archimedes Screw', 'Principle of Buoyancy', 'Compound Pulley Systems', 'War Claws & Catapults'],
    quote: '"Give me a place to stand on, and I will move the Earth."',
    quoteContext: 'Archimedes established that the largest mechanical tasks yield to fundamental physical leverage and statutory geometry.',
    biography: {
      lead: 'Archimedes of Syracuse was a legendary Greek mathematician, physicist, engineer, astronomer, and military designer who established the principles of hydrostatics, statics, and mechanical leverage.',
      full: [
        'He designed innovative machinery including helical screw pumps for bilge water removal and irrigation, compound block-and-tackle pulley systems capable of launching fully laden warships, and defensive claw engines that repelled Roman naval sieges.',
        'His mathematical formulation of fluid buoyancy (Archimedes Principle) remains the cornerstone of naval architecture and hydrostatic engineering.'
      ]
    },
    image: 'archimedes',
    technicalMetrics: [
      { label: 'Mechanical Advantage Factor', value: '15.0', unit: 'X RATIO', numberValue: 15 },
      { label: 'Hydrostatic Force Formula', value: 'F = ρgV', unit: 'BUOYANCY', numberValue: 1 },
      { label: 'Rotational Lift Velocity', value: '45', unit: 'RPM MAX', numberValue: 45 }
    ],
    blueprint: {
      title: 'The Archimedean Screw Pump',
      subtitle: 'Low-lift High-volume Fluid Displacement System',
      concept: 'A helical wooden thread surrounding a central shaft inside a cylindrical pipe. As the screw turns, water is raised sequentially in spiraling compartments against gravitational pull.',
      principles: [
        'Helical rotation converts rotational kinetic energy into hydrostatic potential energy.',
        'Low friction coefficient via pitch-sealed wood-bronze contact surfaces.',
        'Continuous fluid displacement along a 30-degree inclined plane.'
      ],
      specs: [
        { label: 'Displacement Rate', value: '150 liters/min' },
        { label: 'Optimum Shaft Angle', value: '30° to 45°' },
        { label: 'Screw Pitch Coefficient', value: '0.82' },
        { label: 'Structural Core Material', value: 'Cedar wood / bronze core' }
      ]
    }
  },
  {
    id: 'hero',
    plateId: 'B-HERO',
    name: 'Hero of Alexandria',
    era: 'after_christ',
    eraLabel: ERA_LABELS.after_christ,
    lifespan: 'c. 10 AD — c. 70 AD',
    nationality: 'Roman Greek',
    location: 'Library of Alexandria, Roman Egypt',
    disciplines: ['Thermodynamics', 'Pneumatics', 'Automata'],
    accomplishments: ['The Aeolipile (Steam Turbine)', 'Wind-wheel Organ', 'Automated Temple Doors', 'Syringe & Force Pumps'],
    quote: '"Air, fluid, and thermal expansion obey the same continuous pressure equations."',
    quoteContext: 'Hero laid the theoretical and practical blueprints for thermal reaction engines 1,700 years before the Industrial Revolution.',
    biography: {
      lead: 'Hero of Alexandria was an extraordinary mathematician and mechanical engineer who taught at the Library of Alexandria, inventing the Aeolipile—the world\'s first recorded steam turbine.',
      full: [
        'He pioneered pneumatic systems, automated theatrical stages driven by counterweights, self-opening temple doors using heat expansion, and the first wind-powered machinery.',
        'His seminal texts Pneumatica and Automata provided the foundational diagrams for centuries of European and Islamic mechanical engineers.'
      ]
    },
    image: 'hero',
    technicalMetrics: [
      { label: 'Turbine Reaction Velocity', value: '1500', unit: 'RPM MAX', numberValue: 1500 },
      { label: 'Pneumatic Pressure Limit', value: '1.2', unit: 'ATMOSPHERES', numberValue: 1.2 },
      { label: 'Kinetic Transfer Efficiency', value: '2.5', unit: '% REACTION', numberValue: 2.5 }
    ],
    blueprint: {
      title: 'The Aeolipile Reaction Engine',
      subtitle: 'First Thermal Steam Turbine Prototype',
      concept: 'Water heated in a sealed copper cauldron generates high-pressure steam that travels through vertical support tubes into a hollow sphere, escaping through dual angled nozzles to create reaction torque.',
      principles: [
        'Newtonian reaction dynamics applied via pressurized vapor exhaust.',
        'Thermal conduction across copper boiler vessel base.',
        'Rotary airtight plumbing joints with tallow lubrication.'
      ],
      specs: [
        { label: 'Boiler Vessel Capacity', value: '5.2 liters' },
        { label: 'Optimal Steam Temp', value: '115°C' },
        { label: 'Reaction Torque Output', value: '0.08 Nm' },
        { label: 'Nozzle Configuration', value: 'Dual 180° offset' }
      ]
    }
  },
  {
    id: 'al-khwarizmi',
    plateId: 'B-AL-KHWARIZMI',
    name: 'Muhammad al-Khwarizmi',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: 'c. 780 AD — c. 850 AD',
    nationality: 'Persian Abbasid',
    location: 'House of Wisdom, Baghdad',
    disciplines: ['Algorithmic Mathematics', 'Mathematical Geography', 'Astronomy'],
    accomplishments: ['Founding of Algebra', 'Decimal Numeral System', 'Zij al-Sindhind Astronomical Tables', 'World Map Coordinate Grid'],
    quote: '"When I considered what people generally want in calculating, I found that it always is a number."',
    quoteContext: 'Al-Khwarizmi established systematically repeatable mathematical procedures—giving birth to the word "algorithm".',
    biography: {
      lead: 'Muhammad ibn Musa al-Khwarizmi was a Persian polymath at the House of Wisdom in Baghdad whose book Al-Kitab al-mukhtasar fi hisab al-jabr wa\'l-muqabala founded the field of algebra.',
      full: [
        'He introduced the Hindu-Arabic decimal positional numeral system to the Western world, enabling complex calculations that replaced cumbersome Roman numerals.',
        'He calculated geographic coordinates for over 2,400 cities and land features across the known world, creating the most accurate global map grid of the 9th century.'
      ]
    },
    image: 'al-khwarizmi',
    technicalMetrics: [
      { label: 'Equation Standard Forms', value: '6', unit: 'STANDARD FORMS', numberValue: 6 },
      { label: 'Geographic Data Vertices', value: '2,402', unit: 'COORDINATES', numberValue: 2402 },
      { label: 'Computation Speed Gain', value: '10.0', unit: 'X VS ROMAN', numberValue: 10 }
    ],
    blueprint: {
      title: 'The Systematic Reduction Method',
      subtitle: 'Universal Algorithmic Polynomial Equations',
      concept: 'An algorithmic system for solving linear and quadratic equations by reduction (al-jabr) and balancing (al-muqabala) using geometric proofs.',
      principles: [
        'Positional Hindu-Arabic base-10 notation enables infinite digit precision.',
        'Geometric square completion proves quadratic roots visually.',
        'Systematic transformation rules eliminate negative terms.'
      ],
      specs: [
        { label: 'Base Numeral System', value: 'Hindu-Arabic Base-10' },
        { label: 'Proof Validation', value: 'Geometric square completion' },
        { label: 'Coordinate Accuracy', value: '0.25° latitude/longitude' },
        { label: 'Historical Influence', value: 'Foundation of modern CS' }
      ]
    }
  },
  {
    id: 'fatima-al-fihri',
    plateId: 'B-FATIMA-AL-FIHRI',
    name: 'Fatima al-Fihri',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: 'c. 800 AD — c. 880 AD',
    nationality: 'Moroccan Idrisid',
    location: 'Fez, Morocco',
    disciplines: ['Civil Engineering', 'Structural Design', 'Hydraulic Management'],
    accomplishments: ['University of al-Qarawiyyin (859 AD)', 'Subterranean Aqueduct Network', 'Monolithic Vaulting Arches', 'Courtyard Hydraulics'],
    quote: '"A foundation of brick and mortar built for truth will outlast any empire."',
    quoteContext: 'Fatima al-Fihri personally supervised the quarrying and construction of the world\'s oldest continually operating university.',
    biography: {
      lead: 'Fatima al-Fihri was an Arab visioner and civil engineer who founded the University of al-Qarawiyyin in Fez, Morocco in 859 AD—recognized by UNESCO and Guinness World Records as the oldest continually operating university in the world.',
      full: [
        'She inherited vast wealth and dedicated her entire fortune to quarrying raw stone from nearby hills and constructing a massive complex with prayer halls, library vaults, and courtyard fountains.',
        'She engineered an underground well and subterranean aqueduct network that supplied over 12 liters of clean water per second to thousands of scholars.'
      ]
    },
    image: 'fatima-al-fihri',
    technicalMetrics: [
      { label: 'Continuous Active Operation', value: '1,167', unit: 'YEARS ACTIVE', numberValue: 1167 },
      { label: 'Enclosure Structural Volume', value: '15,000', unit: 'CUBIC METERS', numberValue: 15000 },
      { label: 'Aqueduct Hydraulic Discharge', value: '12.0', unit: 'LITERS/SEC', numberValue: 12 }
    ],
    blueprint: {
      title: 'Al-Qarawiyyin Vault System',
      subtitle: 'Structural Load-Bearing Andalusian Arches',
      concept: 'Interlocking horseshoe arches and vaulted timber roofs engineered to distribute dead roof loads outward into reinforced masonry piers.',
      principles: [
        'Thrust line alignment through horseshoe arch centers eliminates lateral cracking.',
        'Atlas cedar timber trusses treated with resin oils to resist humidity and termite decay.',
        'Subterranean masonry cisterns fed by gravity hydraulic gradients.'
      ],
      specs: [
        { label: 'Assembly Capacity', value: '22,000 scholars' },
        { label: 'Arch Span Width', value: '4.2 meters' },
        { label: 'Cistern Well Depth', value: '8.5 meters' },
        { label: 'Structural Timber', value: 'Cured Atlas cedar wood' }
      ]
    }
  },
  {
    id: 'banu-musa',
    plateId: 'B-BANU-MUSA',
    name: 'Banu Musa Brothers',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: 'c. 800 AD — c. 873 AD',
    nationality: 'Persian Abbasid',
    location: 'House of Wisdom, Baghdad',
    disciplines: ['Automata', 'Mechanical Control', 'Mathematics'],
    accomplishments: ['Book of Ingenious Devices (850 AD)', 'Automated Musical Hydro-Sequencer', 'Trick Vessels & Siphons', 'Feedback Control Valves'],
    quote: '"By combining hydraulic pressure with revolving pegged drums, motion reproduces the nuance of human execution."',
    quoteContext: 'The three brothers created the first programmable automated music player in recorded history.',
    biography: {
      lead: 'The Banu Musa brothers (Jafar Muhammad, Ahmad, and Al-Hasan) were three brilliant Persian engineers and mathematicians at Baghdad\'s House of Wisdom who authored the Book of Ingenious Devices.',
      full: [
        'They invented over 100 mechanical devices including self-regulating oil lamps, automated float control valves, double-concentric siphons, and an automated water-driven organ with revolving cylinder pins—the ancestor of programmable music boxes and memory drums.'
      ]
    },
    image: 'banu-musa',
    technicalMetrics: [
      { label: 'Automata Mean Time Between Failures', value: '500+', unit: 'HOURS NON-STOP', numberValue: 500 },
      { label: 'Siphon Fluid Flow Rate', value: '150', unit: 'ML/SEC', numberValue: 150 },
      { label: 'Historical Programmable Music First', value: '1', unit: 'WORLD FIRST', numberValue: 1 }
    ],
    blueprint: {
      title: 'The Automated Hydro-Sequencer',
      subtitle: 'Water-Driven Programmable Musical Cylinder',
      concept: 'A water wheel rotates a heavy wooden cylinder equipped with movable brass pins that trip mechanical levers attached to air valves and water flutes in sequential rhythms.',
      principles: [
        'Hydro-mechanical energy converted to sequential binary pin triggers.',
        'Concentric float mechanisms maintain constant liquid head pressure.',
        'Interchangeable drum pin patterns change musical melodies.'
      ],
      specs: [
        { label: 'Sequencer Memory Capacity', value: '64 drum pins' },
        { label: 'Hydro-drive Efficiency', value: '78%' },
        { label: 'Component Metallurgy', value: 'Cast copper / zinc brass' },
        { label: 'Operating Duration', value: 'Continuous 12-hour loops' }
      ]
    }
  },
  {
    id: 'al-kindi',
    plateId: 'B-AL-KINDI',
    name: 'Al-Kindi (Abu Yusuf)',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: '801 AD — 873 AD',
    nationality: 'Arab Abbasid Caliphate',
    location: 'Kufa & Baghdad',
    disciplines: ['Cryptanalysis', 'Geometrical Optics', 'Metallurgical Engineering'],
    accomplishments: ['Discovery of Frequency Analysis', 'Damascus Steel Metallurgy Treatises', 'Geometrical Optics Curves', 'Cipher Decryption Engines'],
    quote: '"A secure cipher is a lock of letters, but letter frequency reveals the key hidden in plain sight."',
    quoteContext: 'Al-Kindi published Manuscript on Deciphering Cryptographic Messages, founding the science of cryptanalysis.',
    biography: {
      lead: 'Al-Kindi was an Arab polymath known as the "Father of Cryptanalysis". He discovered that letter frequency analysis could crack monoalphabetic substitution ciphers, fundamentally altering information security.',
      full: [
        'He also authored groundbreaking treatises on metallurgical engineering, categorizing steel types and forging temperature curves for legendary Damascus sword blades, and wrote extensively on geometrical optics and light refraction.'
      ]
    },
    image: 'al-kindi',
    technicalMetrics: [
      { label: 'Arabic Alphabet Character Map', value: '28', unit: 'CHARACTERS MAPPED', numberValue: 28 },
      { label: 'Decryption Speedup Factor', value: '20.0', unit: 'X VS BRUTE-FORCE', numberValue: 20 },
      { label: 'Optical Refraction Geometry', value: '1:1', unit: 'INCIDENT ANGLES', numberValue: 1 }
    ],
    blueprint: {
      title: 'The Frequency Analysis Grid',
      subtitle: 'Statistical Monogram Decryption Matrix',
      concept: 'A tabular matrix tabulating relative letter frequencies in a ciphertext against natural language statistical distributions to reveal substitution keys.',
      principles: [
        'Language phoneme frequency remains statistically invariant under monoalphabetic substitution.',
        'Bigram and trigram collocations resolve homophonic cipher ambiguities.',
        'Quantitative metallurgical forging curves optimize steel carbon contents.'
      ],
      specs: [
        { label: 'Ciphertext Sample Min', value: '350 words' },
        { label: 'Mapping Granularity', value: 'Monograms/bigrams/trigrams' },
        { label: 'Decryption Accuracy', value: '99.1%' },
        { label: 'Historical Domain', value: 'Birth of Cryptology' }
      ]
    }
  },
  {
    id: 'ibn-firnas',
    plateId: 'B-IBN-FIRNAS',
    name: 'Abbas ibn Firnas',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: '810 AD — 887 AD',
    nationality: 'Andalusian (Caliphate of Córdoba)',
    location: 'Córdoba, Al-Andalus (Spain)',
    disciplines: ['Aviation Science', 'Optics & Glassmaking', 'Astronomy'],
    accomplishments: ['First Controlled Glider Flight (875 AD)', 'Reading Stones (Correction Lenses)', 'Al-Maqata Water Clock', 'Armillary Planetarium'],
    quote: '"The air is a fluid of density and resistance; with wings of balanced span and feathers of silk, man too can ride the thermals."',
    quoteContext: 'Abbas ibn Firnas performed the world\'s first documented controlled glided flight off Jabal al-Arus in Córdoba.',
    biography: {
      lead: 'Abbas ibn Firnas was an Andalusian polymath, engineer, aviator, and astronomer who designed and flew a manned glided craft off the hills of Córdoba in 875 AD.',
      full: [
        'His glided aircraft featured a lightweight wooden framework supporting woven silk wings covered in bird feathers, achieving a gliding trajectory of over 150 meters before landing.',
        'He also invented silica glass cutting techniques, precision reading stones (precursors to eyeglasses), and constructed a room-sized planetarium with artificial thunder and lightning mechanisms.'
      ]
    },
    image: 'ibn-firnas',
    technicalMetrics: [
      { label: 'Glide Flight Trajectory', value: '150+', unit: 'METERS FLOWN', numberValue: 150 },
      { label: 'Wing Aspect Ratio', value: '6.2:1', unit: 'HIGH-LIFT COEFFICIENT', numberValue: 6.2 },
      { label: 'Silica Refractive Index', value: '1.54', unit: 'ND INDEX', numberValue: 1.54 }
    ],
    blueprint: {
      title: 'The Córdoba Feather-Silk Glider',
      subtitle: 'Symmetrical Monoplane Aero-Glider Frame',
      concept: 'An ultra-lightweight mountain cedar spar framework covered in high-density woven silk and real feathers, engineered to sail thermal updrafts via body weight shift control.',
      principles: [
        'Positive angle of attack creates aerodynamic lift according to air density differentials.',
        'Flexible wingtips provide lateral roll balance across wind gusts.',
        'High aspect ratio wings maximize lift-to-drag ratio.'
      ],
      specs: [
        { label: 'Wingspan Envelope', value: '5.8 meters' },
        { label: 'Glide Slope Ratio', value: '5:1 slope' },
        { label: 'Total Structural Mass', value: '22 kg' },
        { label: 'Main Spar Material', value: 'Aged mountain cedar wood' }
      ]
    }
  },
  {
    id: 'al-zahrawi',
    plateId: 'B-AL-ZAHRAWI',
    name: 'Al-Zahrawi (Albucasis)',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: '936 AD — 1013 AD',
    nationality: 'Andalusian (Caliphate of Córdoba)',
    location: 'El-Zahra, Córdoba, Al-Andalus',
    disciplines: ['Surgical Engineering', 'Biomedical Instruments', 'Metallurgy'],
    accomplishments: ['200+ Surgical Instrument Designs', 'Catgut Sutures', 'Bone Saw & Forceps Mechanics', 'Ligature Precision Tongs'],
    quote: '"Tools designed for human anatomy must combine surgical sharpness with mechanical absolute reliability."',
    quoteContext: 'Al-Zahrawi authored the 30-volume medical encyclopedia Kitab al-Tasrif, establishing surgical engineering.',
    biography: {
      lead: 'Al-Zahrawi is widely celebrated as the "Father of Modern Surgery". He engineered over 200 distinct surgical instruments, many of which remain fundamentally unchanged in modern operating rooms.',
      full: [
        'He invented dissolvable internal catgut sutures, surgical scalpels, bone saws, curettes, speculums, and lithotrites, providing precise engineering schematics and metallurgy guidelines for surgical grade steel.'
      ]
    },
    image: 'al-zahrawi',
    technicalMetrics: [
      { label: 'Engineered Surgical Tool Set', value: '200+', unit: 'DEVICES', numberValue: 200 },
      { label: 'Blade Steel Yield Strength', value: '35', unit: 'MPA STRUCTURAL', numberValue: 35 },
      { label: 'Procedure Precision Gain', value: '4.0', unit: 'X OVER MEDIEVAL', numberValue: 4 }
    ],
    blueprint: {
      title: 'The Surgical Catgut Suture',
      subtitle: 'Dissolvable Internal Tissue Anchorage System',
      concept: 'Purified animal intestine fibers twisted into high-tensile threads that provide mechanical wound closure before dissolving naturally inside human tissue.',
      principles: [
        'Enzymatic breakdown matches tissue healing rate over 10 to 14 days.',
        'High tensile knot strength resists internal hydrostatic organ pressures.',
        'Sterilization via herbal oils prevents post-operative infections.'
      ],
      specs: [
        { label: 'Dissolution Period', value: '10 - 14 days' },
        { label: 'Elongation Stretch', value: '12% max' },
        { label: 'Organic Thread pH', value: '8.2' },
        { label: 'Tissue Acceptance', value: '98.5% non-reactive' }
      ]
    }
  },
  {
    id: 'mariam-al-astrolabiya',
    plateId: 'B-MARIAM-AL-ASTROLABIYA',
    name: 'Mariam al-Astrolabiya',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: 'c. 940 AD — c. 990 AD',
    nationality: 'Syrian Hamdanid',
    location: 'Aleppo, Syria',
    disciplines: ['Precision Metal Engineering', 'Horology', 'Applied Astronomy'],
    accomplishments: ['Advanced Pocket Astrolabes', 'Precision Navigational Rings', 'Integrated Calendar Gear Systems', 'Stereographic Projections'],
    quote: '"The sky is an intricate puzzle of spheres, mirrored upon a hand-held plate of burnished brass."',
    quoteContext: 'Mariam\'s master craftsmanship in astrolabe precision engineering earned her royal appointments under Sayf al-Dawla.',
    biography: {
      lead: 'Mariam al-Astrolabiya was a 10th-century Syrian master engineer and astrolabe builder who worked in Aleppo, crafting precision navigational and astronomical analog computers.',
      full: [
        'She elevated astrolabe manufacturing into an exact engineering science, hand-engraving celestial coordinates, rete pointers, and hour rings onto brass plates with sub-millimeter tolerances.'
      ]
    },
    image: 'mariam-al-astrolabiya',
    technicalMetrics: [
      { label: 'Astrolabe Star Pointer Count', value: '42', unit: 'STAR MARKERS', numberValue: 42 },
      { label: 'Scale Graduation Precision', value: '0.1', unit: 'DEGREES PRECISION', numberValue: 0.1 },
      { label: 'Plate Radius Projection', value: '145', unit: 'MM PROJECTION', numberValue: 145 }
    ],
    blueprint: {
      title: 'The Handheld Brass Astrolabe',
      subtitle: 'Analog Vector Navigation & Celestial Computer',
      concept: 'A series of interchangeable brass plates (tympans) engraved with stereographic latitude projections, rotated beneath a cutaway brass star pointer (rete).',
      principles: [
        'Stereographic projection maps 3D celestial sphere onto 2D planar brass disc.',
        'Alidade sighting arm calculates solar and stellar angular altitude.',
        'High-density bronze-gold alloy resists thermal expansion inaccuracies.'
      ],
      specs: [
        { label: 'Star Pointers Engraved', value: '42 fixed stars' },
        { label: 'Rete Radius Span', value: '145 mm' },
        { label: 'Alloy Composition', value: 'Gold/copper/tin bronze' },
        { label: 'Latitude Calibrations', value: 'Aleppo, Damascus, Baghdad' }
      ]
    }
  },
  {
    id: 'ibn-al-haytham',
    plateId: 'B-IBN-AL-HAYTHAM',
    name: 'Ibn al-Haytham (Alhazen)',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: '965 AD — 1040 AD',
    nationality: 'Arab Fatimid Caliphate',
    location: 'Basra & Cairo',
    disciplines: ['Optics & Physics', 'Scientific Methodology', 'Astronomy'],
    accomplishments: ['The Camera Obscura', 'Intromission Theory of Vision', 'Law of Refraction Geometry', 'Empirical Scientific Method'],
    quote: '"The duty of the man who investigates the writings of scientists... is to make himself an enemy of all that he reads."',
    quoteContext: 'Ibn al-Haytham established the rigorous empirical scientific method in his masterpiece Kitab al-Manazir (Book of Optics).',
    biography: {
      lead: 'Ibn al-Haytham is universally recognized as the "Father of Modern Optics" and the founder of the modern scientific method.',
      full: [
        'He proved that light travels in straight lines and enters the eye (intromission theory), debunking ancient Greek emission theories. He constructed the first camera obscura darkroom to prove light projection physics through micro-apertures.'
      ]
    },
    image: 'ibn-al-haytham',
    technicalMetrics: [
      { label: 'Angular Optics Resolution', value: '0.05', unit: 'DEGREES RESOLUTION', numberValue: 0.05 },
      { label: 'Pinhole Projection Ratio', value: '1:1', unit: 'PROPORTIONALITY', numberValue: 1 },
      { label: 'Empirical Verification Standard', value: '100', unit: '% EMPIRICAL RIGOR', numberValue: 100 }
    ],
    blueprint: {
      title: 'The Camera Obscura Aperture',
      subtitle: 'Pinhole Light Projection Enclosure',
      concept: 'A completely light-sealed chamber with a micro-aperture hole that projects inverted, true-color optical images of external scenes onto a white receiving screen.',
      principles: [
        'Linear propagation of light rays through microscopic focal aperture.',
        'Inversion of optical image vector across focal plane point.',
        'High contrast ratios via absolute darkroom light absorption.'
      ],
      specs: [
        { label: 'Aperture Diameter', value: '1.2 mm' },
        { label: 'Focal Distance', value: 'Infinite plane' },
        { label: 'Screen Coating', value: 'Gypsum-coated flat lime' },
        { label: 'Light Isolation', value: '99.2% dark absorption' }
      ]
    }
  },
  {
    id: 'al-biruni',
    plateId: 'B-AL-BIRUNI',
    name: 'Al-Biruni (Abu Rayhan)',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: '973 AD — 1048 AD',
    nationality: 'Persian Ghaznavid Empire',
    location: 'Kath, Khwarazm & Ghazni',
    disciplines: ['Geodesy', 'Precision Instruments', 'Mineralogy'],
    accomplishments: ['Measurement of Earth Circumference', 'Hydrostatic Specific Gravity Flask', 'Mechanical Astrolabe Calendar', 'Earth Rotation Hypothesis'],
    quote: '"Rigor is the absolute standard; to measure the Earth, one must listen to the geometry of mountains and horizons."',
    quoteContext: 'Al-Biruni calculated Earth\'s radius at 6,339.6 km—within 0.7% of modern satellite measurements.',
    biography: {
      lead: 'Al-Biruni was a Persian polymath and geodesist who calculated Earth\'s radius and circumference using a novel trigonometric method from a mountain peak in Nandana (modern Pakistan).',
      full: [
        'He also invented hydrostatic balance flasks that measured the specific gravity of 18 precious gemstones and metals with astounding accuracy and proposed that Earth rotated on its axis.'
      ]
    },
    image: 'al-biruni',
    technicalMetrics: [
      { label: 'Earth Radius Measurement', value: '6,339.6', unit: 'KM RADIUS', numberValue: 6339.6 },
      { label: 'Geodesic Calculation Accuracy', value: '99.3', unit: '% ACCURACY', numberValue: 99.3 },
      { label: 'Specific Gravity Minerals', value: '18', unit: 'SPECIFIC GRAVITIES', numberValue: 18 }
    ],
    blueprint: {
      title: 'The Geodesic Horizon Quadrant',
      subtitle: 'Earth Circumference Trigonometric Engine',
      concept: 'A precision sighting quadrant used atop a mountain peak to measure the horizon dip angle, applying sine trigonometry to derive planetary radius.',
      principles: [
        'Dip angle θ between eye level and horizon is directly proportional to planetary radius R = h cosθ / (1 - cosθ).',
        'Hydrostatic displacement measures density differentials in liquid media.',
        'Gear train astrolabe computes lunar phases and solar calendar dates.'
      ],
      specs: [
        { label: 'Derivation Error', value: '<0.7% vs modern' },
        { label: 'Hydrostatic Balance Delta', value: '0.01 grams' },
        { label: 'Nandana Peak Elevation', value: '1,420 meters' },
        { label: 'Astrolabe Calendar Gears', value: '8 gear train wheels' }
      ]
    }
  },
  {
    id: 'al-jazari',
    plateId: 'B-AL-JAZARI',
    name: 'Al-Jazari (Badi al-Zaman)',
    era: 'medieval',
    eraLabel: ERA_LABELS.medieval,
    lifespan: '1136 AD — 1206 AD',
    nationality: 'Mesopotamian (Artuqid Dynasty)',
    location: 'Diyarbakir, Mesopotamia',
    disciplines: ['Mechanical Engineering', 'Automata Science', 'Hydraulics'],
    accomplishments: ['Crankshaft & Connecting Rod', 'Double-Acting Suction Pump', 'The Elephant Clock', 'Segmented Gearing'],
    quote: '"A device of water or gears must perform with complete repeatability; theory without execution is a wandering mind."',
    quoteContext: 'Al-Jazari is celebrated as the Father of Robotics for inventing the crankshaft mechanism.',
    biography: {
      lead: 'Al-Jazari was a Mesopotamian scholar, inventor, and mechanical engineer whose Book of Knowledge of Ingenious Mechanical Devices documented over 100 revolutionary mechanical inventions.',
      full: [
        'He invented the crankshaft and connecting rod mechanism—the most important mechanical translation component in human history—as well as double-acting suction pumps, segmented gear drives, and intricate water clocks.'
      ]
    },
    image: 'al-jazari',
    technicalMetrics: [
      { label: 'Hydro-Drive Efficiency', value: '85', unit: '% EFFICIENCY', numberValue: 85 },
      { label: 'Automata Programmable Pins', value: '4', unit: 'BITS/DRUM', numberValue: 4 },
      { label: 'Crankshaft Power Offset', value: '180°', unit: 'RECIPROCATION', numberValue: 180 }
    ],
    blueprint: {
      title: 'Double-Acting Suction Pump',
      subtitle: 'Reciprocating Piston Hydro-Engine',
      concept: 'A water wheel drives a sector-gear to alternate two opposing brass pistons back and forth in horizontal cylinders with one-way valves for continuous water displacement.',
      principles: [
        'Conversion of rotary motion to linear reciprocating motion via crankshaft.',
        'Alternating dual pistons create continuous upward fluid discharge.',
        'High tolerance metal sleeves minimize fluid bypass leakage.'
      ],
      specs: [
        { label: 'Maximum Suction Lift', value: '4.5 meters' },
        { label: 'Piston Bore Diameter', value: '110 mm' },
        { label: 'Discharge Flow Rate', value: '180 liters/min' },
        { label: 'Metallurgy Composition', value: 'Cast copper and zinc brass' }
      ]
    }
  },
  {
    id: 'james-watt',
    plateId: 'B-JAMES-WATT',
    name: 'James Watt',
    era: 'modern',
    eraLabel: ERA_LABELS.modern,
    lifespan: '1736 — 1819',
    nationality: 'Scottish',
    location: 'Greenock & Birmingham, United Kingdom',
    disciplines: ['Mechanical Engineering', 'Thermodynamics', 'Industrial Machinery'],
    accomplishments: ['Separate Steam Condenser (1769)', 'Sun and Planet Gear', 'Parallel Motion Linkage', 'Concept of Horsepower'],
    quote: '"Nature can be controlled by understanding her laws; condensing steam in a separate vessel preserves the thermal energy of the cylinder."',
    quoteContext: 'James Watt revolutionized thermal efficiency, sparking the Industrial Revolution.',
    biography: {
      lead: 'James Watt was a Scottish mechanical engineer and instrument maker whose separate condenser invention dramatically improved the efficiency of the Newcomen steam engine.',
      full: [
        'By avoiding the repeated heating and cooling of the main cylinder, Watt\'s steam engine reduced fuel consumption by 75%, making steam power viable for factories, mills, and transportation worldwide.',
        'He also introduced the unit "horsepower" to quantify mechanical power and invented the double-acting engine and centrifugal governor.'
      ]
    },
    image: 'james-watt',
    technicalMetrics: [
      { label: 'Thermal Efficiency Gain', value: '4.0', unit: 'X VS NEWCOMEN', numberValue: 4 },
      { label: 'Fuel Savings Factor', value: '75', unit: '% SAVINGS', numberValue: 75 },
      { label: 'Power Unit Name', value: '1.0', unit: 'WATT (SI UNIT)', numberValue: 1 }
    ],
    blueprint: {
      title: 'Separate Steam Condenser Engine',
      subtitle: 'High-Efficiency Thermodynamic Vapor Cycle',
      concept: 'A dedicated cold vessel connected to the main cylinder via a valve condenses exhaust steam rapidly, maintaining cylinder heat and preventing thermal energy waste.',
      principles: [
        'Isothermal expansion inside main cylinder reduces fuel consumption.',
        'Parallel motion linkage converts rotary beam motion into linear piston stroke.',
        'Centrifugal governor regulates steam throttle automatically.'
      ],
      specs: [
        { label: 'Boiler Operating Pressure', value: '1.5 - 2.0 bar' },
        { label: 'Condenser Temperature', value: '35°C' },
        { label: 'Mechanical Power Output', value: '20 HP (15 kW)' },
        { label: 'Cylinder Diameter', value: '1,270 mm' }
      ]
    }
  },
  {
    id: 'nikola-tesla',
    plateId: 'B-NIKOLA-TESLA',
    name: 'Nikola Tesla',
    era: 'modern',
    eraLabel: ERA_LABELS.modern,
    lifespan: '1856 — 1943',
    nationality: 'Serbian-American',
    location: 'Smiljan, Graz, New York, Colorado Springs',
    disciplines: ['Electrical Engineering', 'Electromagnetics', 'Power Systems'],
    accomplishments: ['Polyphase AC Induction Motor', 'AC Power Grid Transmission', 'Tesla Coil High Frequency', 'Wireless Energy Radio Foundations'],
    quote: '"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."',
    quoteContext: 'Tesla designed the polyphase alternating current power grid that lights the modern globe.',
    biography: {
      lead: 'Nikola Tesla was a visionary Serbian-American engineer and inventor who revolutionized electrical engineering by developing alternating current (AC) electricity generation and transmission.',
      full: [
        'He invented the AC induction motor, high-voltage Tesla coils, wireless radio remote control, and designed the world\'s first major hydroelectric power plant at Niagara Falls in 1895.',
        'His inventions formed the foundation of global high-voltage electrical grids, fluorescent lighting, and radio transmission.'
      ]
    },
    image: 'nikola-tesla',
    technicalMetrics: [
      { label: 'AC Transmission Voltage', value: '11,000', unit: 'VOLTS NIAGARA', numberValue: 11000 },
      { label: 'Induction Motor Efficiency', value: '92', unit: '% EFFICIENCY', numberValue: 92 },
      { label: 'Magnetic Flux Unit', value: '1.0', unit: 'TESLA (T)', numberValue: 1 }
    ],
    blueprint: {
      title: 'Polyphase AC Induction Motor',
      subtitle: 'Rotating Magnetic Field Electromechanical Converter',
      concept: 'Two or more out-of-phase alternating currents pass through stator windings, generating a rotating magnetic field that induces electric currents in a rotor without brush friction.',
      principles: [
        'Rotational magnetomotive force eliminates mechanical commutator wear.',
        'Induction torque generation scales seamlessly across high voltages.',
        'Polyphase current distribution minimizes copper conductor losses.'
      ],
      specs: [
        { label: 'Stator Phase Offset', value: '90° / 120° phase' },
        { label: 'Rotor Type', value: 'Squirrel-cage conductive bars' },
        { label: 'Operating Frequency', value: '60 Hz AC' },
        { label: 'System Efficiency', value: '92.5%' }
      ]
    }
  },
  {
    id: 'ada-lovelace',
    plateId: 'B-ADA-LOVELACE',
    name: 'Ada Lovelace',
    era: 'modern',
    eraLabel: ERA_LABELS.modern,
    lifespan: '1815 — 1852',
    nationality: 'British',
    location: 'London & Surrey, United Kingdom',
    disciplines: ['Software Architecture', 'Algorithmic Computation', 'Mechanical Computing'],
    accomplishments: ['First Computer Algorithm (1843)', 'Analytical Engine Notes', 'Concept of General-Purpose Computing'],
    quote: '"The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves."',
    quoteContext: 'Lovelace foresaw that computers could manipulate symbols beyond mere numerical calculation.',
    biography: {
      lead: 'Augusta Ada King, Countess of Lovelace, was an English mathematician and writer chiefly known for her work on Charles Babbage\'s mechanical general-purpose computer, the Analytical Engine.',
      full: [
        'In her 1843 translation and extensive "Notes", she published the first algorithm intended to be carried out by a machine—to calculate Bernoulli numbers—earning her recognition as the world\'s first computer programmer.',
        'She uniquely realized that computing machines could process music, graphics, and scientific data if represented symbolically.'
      ]
    },
    image: 'ada-lovelace',
    technicalMetrics: [
      { label: 'World First Algorithm Date', value: '1843', unit: 'YEAR PUBLISHED', numberValue: 1843 },
      { label: 'Bernoulli Computation Steps', value: '25', unit: 'EXECUTION LOOPS', numberValue: 25 },
      { label: 'Symbolic Abstraction First', value: '100', unit: '% CONCEPTUAL FIRST', numberValue: 100 }
    ],
    blueprint: {
      title: 'Analytical Engine Bernoulli Loop',
      subtitle: 'Punched Card Algorithmic Execution Matrix',
      concept: 'A sequence of punched cards specifying mathematical operations, memory variable registers, and conditional loop branches to compute complex mathematical series automatically.',
      principles: [
        'Separation of memory store from processing mill architecture.',
        'Conditional branching enables iterative loop subroutines.',
        'Symbolic variable encoding allows arbitrary numeric manipulation.'
      ],
      specs: [
        { label: 'Card Feed Mechanism', value: 'Jacquard punched card stream' },
        { label: 'Register Storage', value: '1,000 numbers of 50 digits' },
        { label: 'Branching Capability', value: 'Conditional IF / THEN loop' },
        { label: 'Historical Domain', value: 'Birth of Computer Science' }
      ]
    }
  },
  {
    id: 'brunel',
    plateId: 'B-IK-BRUNEL',
    name: 'Isambard Kingdom Brunel',
    era: 'modern',
    eraLabel: ERA_LABELS.modern,
    lifespan: '1806 — 1859',
    nationality: 'British',
    location: 'Portsmouth, London, Bristol',
    disciplines: ['Civil Engineering', 'Naval Architecture', 'Railway Engineering'],
    accomplishments: ['Clifton Suspension Bridge', 'Great Western Railway', 'SS Great Eastern (Iron Steamship)', 'Box Tunnel Engineering'],
    quote: '"I am producing a combination of small things, all forming one great whole, which will surpass anything hitherto attempted."',
    quoteContext: 'Brunel redesigned transport infrastructure with unprecedented scale and iron engineering.',
    biography: {
      lead: 'Isambard Kingdom Brunel was an English mechanical and civil engineer whose colossal projects transformed transport infrastructure during the Industrial Revolution.',
      full: [
        'He constructed the Great Western Railway, revolutionary iron-hulled steamships (SS Great Britain and SS Great Eastern), and famous suspension bridges including the Clifton Suspension Bridge across Avon Gorge.',
        'His daring tunnels, viaducts, and iron structures set enduring precedents for modern civil and marine engineering.'
      ]
    },
    image: 'brunel',
    technicalMetrics: [
      { label: 'Clifton Bridge Clear Span', value: '214', unit: 'METERS SPAN', numberValue: 214 },
      { label: 'SS Great Britain Iron Length', value: '98', unit: 'METERS HULL', numberValue: 98 },
      { label: 'Railway Track Gauge', value: '2,140', unit: 'MM BROAD GAUGE', numberValue: 2140 }
    ],
    blueprint: {
      title: 'Clifton Wrought-Iron Suspension Bridge',
      subtitle: 'Gravity-Anchored Cable-Stayed Suspension Structure',
      concept: 'A wrought-iron chain suspension bridge spanning 214 meters across the Avon Gorge, anchored into limestone cliff foundations with masonry towers.',
      principles: [
        'Wrought-iron bar chain links resist high tension loads without brittle fracture.',
        'Masonry support towers align vertical compressive load forces into rock.',
        'Deck trussing prevents aerodynamic flutter and oscillation.'
      ],
      specs: [
        { label: 'Main Span Length', value: '214 meters' },
        { label: 'Clearance Above Water', value: '75 meters' },
        { label: 'Iron Chain Mass', value: '1,500 tons' },
        { label: 'Foundation Anchor Depth', value: '21 meters in rock' }
      ]
    }
  },
  {
    id: 'margaret-hamilton',
    plateId: 'B-MARGARET-HAMILTON',
    name: 'Margaret Hamilton',
    era: 'modern',
    eraLabel: ERA_LABELS.modern,
    lifespan: '1936 — Present',
    nationality: 'American',
    location: 'Cambridge, MA, USA',
    disciplines: ['Software Engineering', 'Aerospace Computing', 'Fault Tolerant Systems'],
    accomplishments: ['Coined "Software Engineering"', 'Apollo Flight Computer Software Lead', 'Asynchronous Executive Scheduler', 'Priority Display Interrupts'],
    quote: '"There was no choice but to be pioneers; software was an essential part of the space mission, and failure was not an option."',
    quoteContext: 'Hamilton led the MIT team that developed on-board software for NASA\'s Apollo missions.',
    biography: {
      lead: 'Margaret Hamilton is a pioneering American computer scientist and systems engineer who led the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for NASA\'s Apollo space program.',
      full: [
        'Her asynchronous executive scheduler saved the Apollo 11 moon landing: when radar overload threatened to crash the Apollo Guidance Computer, her software prioritized critical landing tasks over background diagnostic tasks.',
        'She coined the term "software engineering" and established modern standards for fault-tolerant software systems and rigorous testing.'
      ]
    },
    image: 'margaret-hamilton',
    technicalMetrics: [
      { label: 'Apollo Software Lines of Code', value: '145,000', unit: 'ASM LINES', numberValue: 145000 },
      { label: 'Flight Computer Clock Speed', value: '2.048', unit: 'MHZ CLOCK', numberValue: 2.048 },
      { label: 'Mission Reliability Rating', value: '100', unit: '% ZERO IN-FLIGHT BUGS', numberValue: 100 }
    ],
    blueprint: {
      title: 'Apollo Guidance Computer Asynchronous Scheduler',
      subtitle: 'Real-Time Priority Task Execution Kernel',
      concept: 'An asynchronous real-time operating system kernel that schedules processes based on critical mission priority, interrupting non-essential tasks during CPU overload.',
      principles: [
        'Priority-based interrupt vectoring prevents task starvation during emergency spikes.',
        'Rope memory core wiring physically encodes flight software in copper wire loops.',
        'Asynchronous feedback loops recover automatically from sensor hardware overloads.'
      ],
      specs: [
        { label: 'ROM Storage Capacity', value: '36,864 words (72 KB)' },
        { label: 'RAM Storage Capacity', value: '2,048 words (4 KB)' },
        { label: 'Interrupt Vector Response', value: '<20 microseconds' },
        { label: 'Fault Recovery Time', value: '0.00 seconds (seamless)' }
      ]
    }
  },
  // ─── FIX #1: Nelson Jackson — Schema completely rewritten to match Engineer type ───
  {
    id: 'nelson-jackson',
    plateId: 'B-NELSON-JACKSON',
    name: 'Nelson Jackson',
    era: 'modern',
    eraLabel: ERA_LABELS.modern,
    lifespan: '1872 — 1955',
    nationality: 'American',
    location: 'Burlington, Vermont & Transcontinental USA',
    disciplines: ['Mechanical Engineering', 'Automotive Pioneering', 'Road Engineering'],
    accomplishments: [
      'First Transcontinental Automobile Trip (1903)',
      'Pioneer in Road Construction Advocacy',
      'Cross-Country Navigation Without Maps',
      'Early Automobile Reliability Engineering'
    ],
    quote: '"I believed it could be done, and I was willing to stake my reputation and my money on it."',
    quoteContext: 'Jackson became the first person to cross the United States by automobile in 1903, completing 4,500 miles in 63 days.',
    biography: {
      lead: 'Horatio Nelson Jackson was an American physician, adventurer, and mechanical pioneer who made history by becoming the first person to cross the United States by automobile in 1903.',
      full: [
        'On a $50 bet, Jackson set off from San Francisco in a 20-horsepower Winton touring car with mechanic Sewall Crocker. Covering over 4,500 miles of dirt tracks, riverbed paths, and open prairie without a reliable road map, they reached New York City in 63 days.',
        'His journey exposed the desperate need for national road infrastructure and directly accelerated the Good Roads Movement, laying political and engineering groundwork for the U.S. federal highway system.'
      ]
    },
    image: 'nelson-jackson',
    technicalMetrics: [
      { label: 'Total Distance Covered', value: '4,500', unit: 'MILES', numberValue: 4500 },
      { label: 'Journey Duration', value: '63', unit: 'DAYS', numberValue: 63 },
      { label: 'Engine Output', value: '20', unit: 'HORSEPOWER', numberValue: 20 }
    ],
    blueprint: {
      title: 'The 1903 Winton Touring Car',
      subtitle: 'Early Internal Combustion Automobile Drive System',
      concept: 'A 20-horsepower single-cylinder gasoline engine driving rear wheels via a chain transmission, mounted on a wooden chassis with steel leaf-spring suspension for rough terrain endurance.',
      principles: [
        'Internal combustion converts gasoline into mechanical torque via piston reciprocation.',
        'Chain drive transfers rotational power from engine crankshaft to rear axle.',
        'Steel leaf-spring suspension absorbs impact loads across unpaved terrain.'
      ],
      specs: [
        { label: 'Engine Displacement', value: 'Single-cylinder gasoline' },
        { label: 'Power Output', value: '20 HP' },
        { label: 'Transmission Type', value: 'Chain drive' },
        { label: 'Chassis Material', value: 'Ash wood / steel frame' }
      ]
    }
  },
,
  {
  "id": " nikola-tesla",
  "name": "Nikola Tesla",
  "discipline": "Electrical Engineering",
  "title": "Pioneering Inventor and Engineer",
  "period": "1856-1943",
  "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
  "bio": "Nikola Tesla was a Serbian-American inventor, electrical engineer, and futurist best known for his contributions to the development of the modern alternating current (AC) electricity system. He is widely recognized as one of the most important inventors and engineers of the 20th century.",
  "achievements": [
    "Developed the AC motor",
    "Improved the electric power distribution system"
  ],
  "contributions": [
    {
      "title": "Alternating Current System",
      "description": "Tesla's work on the AC system revolutionized the way electricity is transmitted and used, enabling the efficient transmission of power over long distances."
    }
  ]
}
,
  {
  "id": "nikola-tesla",
  "name": "Nikola Tesla",
  "discipline": "Electrical Engineering",
  "title": "Inventor and Engineer",
  "period": "1856-1943",
  "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
  "bio": "Nikola Tesla was a Serbian-American inventor, electrical engineer, and futurist best known for his contributions to the development of the modern alternating current electricity system. He emigrated to the United States in 1884 and worked for Thomas Edison in New York City before striking out on his own.",
  "achievements": [
    "Developed the AC system",
    "Hold over 300 patents in his name"
  ],
  "contributions": [
    {
      "title": "Alternating Current",
      "description": "Transformed the way electricity is transmitted and used worldwide"
    }
  ]
}
];

export const disciplinesData: Discipline[] = [
  // ─── Category: Core & Traditional ───
  {
    id: 'civil',
    name: 'Civil & Structural Engineering',
    category: DISCIPLINE_CATEGORIES.CORE,
    difficulty: 88,
    description: 'Design, construction, and structural maintenance of bridges, skyscrapers, dams, transit tunnels, and resilient urban infrastructure.',
    focusAreas: ['Load-Bearing Design', 'Geotechnical Mechanics', 'Seismic Dampeners', 'Urban Transit Networks'],
    specs: [{ label: 'Safety Factor Standard', value: '1.5 - 2.5x' }, { label: 'Primary Materials', value: 'Steel, Reinforced Concrete' }],
    iconName: 'Building2'
  },
  {
    id: 'mechanical',
    name: 'Mechanical Engineering',
    category: DISCIPLINE_CATEGORIES.CORE,
    difficulty: 90,
    description: 'Design and manufacturing of kinetic power systems, engines, robotics, thermodynamics, and fluid dynamics machinery.',
    focusAreas: ['Kinematic Chains', 'Thermodynamic Cycles', 'Fluid Dynamics', 'HVAC & Refrigeration'],
    specs: [{ label: 'Thermal Efficiency', value: 'Up to 60%' }, { label: 'Core Mechanism', value: 'Crankshafts & Gears' }],
    iconName: 'Settings'
  },
  {
    id: 'electrical',
    name: 'Electrical & Power Systems',
    category: DISCIPLINE_CATEGORIES.CORE,
    difficulty: 89,
    description: 'High-voltage grid distribution, electromagnetic fields, electrical generators, transformers, and renewable energy conversion.',
    focusAreas: ['Grid Transmission', 'Electromagnetics', 'Power Electronics', 'Substation Automation'],
    specs: [{ label: 'Grid Frequency', value: '50/60 Hz' }, { label: 'Voltage Range', value: 'Up to 765 kV' }],
    iconName: 'Zap'
  },
  {
    id: 'chemical',
    name: 'Chemical & Process Engineering',
    category: DISCIPLINE_CATEGORIES.CORE,
    difficulty: 89,
    description: 'Large-scale chemical reactors, catalytic refining, polymer synthesis, and industrial mass-transfer processes.',
    focusAreas: ['Reactor Kinetics', 'Mass Transfer', 'Refinery Catalysts', 'Polymerization'],
    specs: [{ label: 'Pressure Limits', value: '300+ bar' }, { label: 'Yield Efficiency', value: '>94%' }],
    iconName: 'FlaskConical'
  },
  {
    id: 'computer-hardware',
    name: 'Computer Hardware & Microprocessors',
    category: DISCIPLINE_CATEGORIES.CORE,
    difficulty: 95,
    description: 'Semiconductor logic gates, silicon lithography, microarchitecture, PCB routing, and high-frequency digital signal integrity.',
    focusAreas: ['Nanometer Lithography', 'Logic Gate Trees', 'RISC/CISC Architecture', 'Bus Bandwidth'],
    specs: [{ label: 'Transistor Gate Node', value: '3nm / 2nm GAA' }, { label: 'Clock Frequencies', value: 'Up to 6.0 GHz' }],
    iconName: 'Cpu'
  },

  // ─── Category: Technology & Information ───
  {
    id: 'software',
    name: 'Software Engineering & Systems',
    category: DISCIPLINE_CATEGORIES.TECH,
    difficulty: 91,
    description: 'Distributed cloud systems, microservice fault tolerance, compiler optimization, cryptographic protocols, and core OS kernels.',
    focusAreas: ['Distributed Consensus', 'Asynchronous I/O', 'Memory Safety', 'Cryptographic Hashing'],
    specs: [{ label: 'Uptime SLA', value: '99.999%' }, { label: 'Latency Target', value: '<5ms p99' }],
    iconName: 'Code'
  },
  {
    id: 'data-engineering',
    name: 'Data Engineering & Infrastructure',
    category: DISCIPLINE_CATEGORIES.TECH,
    difficulty: 87,
    description: 'Petabyte-scale distributed data pipelines, columnar storage engines, real-time streaming, and transactional database internals.',
    focusAreas: ['ETL Pipelines', 'Columnar Parquet Stores', 'Stream Processing', 'Distributed Locking'],
    specs: [{ label: 'Throughput', value: '1M+ events/sec' }, { label: 'Storage Scale', value: 'Petabyte tier' }],
    iconName: 'Database'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning Engineering',
    category: DISCIPLINE_CATEGORIES.TECH,
    difficulty: 95,
    description: 'Transformer neural network architectures, GPU cluster parallelism, weight quantization, and deep reinforcement learning.',
    focusAreas: ['Attention Mechanisms', 'FP8/INT4 Quantization', 'Distributed Tensor Parallelism', 'Loss Function Tuning'],
    specs: [{ label: 'Model Parameters', value: '70B - 1T+' }, { label: 'Compute Cluster', value: '10,000+ GPUs' }],
    iconName: 'Brain'
  },
  {
    id: 'network',
    name: 'Network & Telecommunications',
    category: DISCIPLINE_CATEGORIES.TECH,
    difficulty: 86,
    description: 'Subsea fiber-optic cables, 5G/6G beamforming arrays, BGP routing topologies, and satellite mesh communication constellations.',
    focusAreas: ['Subsea Fiber WDM', '5G NR Beamforming', 'BGP Path Routing', 'Low-Earth Orbit Mesh'],
    specs: [{ label: 'Fiber Speed', value: '800 Gbps per wavelength' }, { label: 'Latency', value: 'Sub-10ms wireless' }],
    iconName: 'Network'
  },

  // ─── Category: Environmental & Sustainable ───
  {
    id: 'environmental',
    name: 'Environmental & Climate Engineering',
    category: DISCIPLINE_CATEGORIES.ENV,
    difficulty: 88,
    description: 'Direct air carbon capture, industrial wastewater purification, toxic remediation, and climate risk mitigation systems.',
    focusAreas: ['Direct Air Capture', 'Contaminant Sorption', 'Hydrological Modeling', 'Desalination Plants'],
    specs: [{ label: 'Carbon Removal Target', value: 'Gigaton scale' }, { label: 'Water Purity', value: '99.99%' }],
    iconName: 'Wind'
  },
  {
    id: 'renewable-energy',
    name: 'Renewable & Battery Engineering',
    category: DISCIPLINE_CATEGORIES.ENV,
    difficulty: 92,
    description: 'Offshore wind turbine mechanics, perovskite solar photovoltaics, grid-scale solid-state battery energy storage.',
    focusAreas: ['Solid-State Electrolytes', 'Perovskite Photovoltaics', 'Offshore Turbines', 'Grid-Forming Inverters'],
    specs: [{ label: 'Solar Conversion Efficiency', value: '28.5%' }, { label: 'Energy Density', value: '450 Wh/kg' }],
    iconName: 'Sun'
  },
  {
    id: 'agricultural-food',
    name: 'Agricultural & Hydroponic Systems',
    category: DISCIPLINE_CATEGORIES.ENV,
    difficulty: 85,
    description: 'Vertical indoor farming, automated nutrient recirculation, cold-chain refrigeration logistics, and precision drip irrigation.',
    focusAreas: ['Controlled Environment Ag', 'Nutrient Dosing Loops', 'Cold-Chain Refrigeration', 'Crop Sensor Analytics'],
    specs: [{ label: 'Water Savings', value: '95% vs soil' }, { label: 'Yield Increase', value: '10x per sq meter' }],
    iconName: 'Sprout'
  },

  // ─── Category: Health & Bio ───
  {
    id: 'biomedical',
    name: 'Biomedical & Neural Devices',
    category: DISCIPLINE_CATEGORIES.HEALTH,
    difficulty: 94,
    description: 'Implantable cardiac pacemakers, brain-computer interfaces, prosthetic bionics, medical imaging magnets, and artificial organs.',
    focusAreas: ['Biocompatible Titanium', 'Neural Signal Amplification', 'Ultra-Low Power Circuits', 'MRI Magnet Design'],
    specs: [{ label: 'Implant Lifespan', value: '15+ years' }, { label: 'Signal Bandwidth', value: '1,024 channels' }],
    iconName: 'HeartPulse'
  },
  {
    id: 'biotechnology',
    name: 'Biotechnology & Genetic Engineering',
    category: DISCIPLINE_CATEGORIES.HEALTH,
    difficulty: 94,
    description: 'CRISPR gene-editing tools, bioreactor fermentation scaling, mRNA synthetic biological manufacturing, and protein folding.',
    focusAreas: ['CRISPR-Cas9 Editing', 'Bioreactor Fluid Dynamics', 'mRNA Lipid Nanoparticles', 'Protein Structure AI'],
    specs: [{ label: 'Editing Precision', value: '>99.2%' }, { label: 'Bioreactor Volume', value: '20,000 liters' }],
    iconName: 'Dna'
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical Process Engineering',
    category: DISCIPLINE_CATEGORIES.HEALTH,
    difficulty: 90,
    description: 'Sterile cleanroom HVAC, automated high-throughput drug tableting, chemical crystallization, and cold-chain vaccine formulation.',
    focusAreas: ['ISO Class 5 Cleanrooms', 'Continuous Crystallization', 'Lyophilization', 'Aseptic Filling'],
    specs: [{ label: 'Particle Count Standard', value: '<3,520 per m³' }, { label: 'Batch Purity', value: '99.99%' }],
    iconName: 'Pill'
  },

  // ─── Category: Space, Ocean & Extreme ───
  {
    id: 'aerospace',
    name: 'Aerospace & Rocket Propulsion',
    category: DISCIPLINE_CATEGORIES.EXTREME,
    difficulty: 96,
    description: 'Cryogenic rocket engine turbopumps, supersonic wing aerodynamics, orbital re-entry thermal shields, and satellite guidance.',
    focusAreas: ['Staged Combustion Turbopumps', 'Hypersonic Aerodynamics', 'PICA-X Heatshields', 'Star Tracker Guidance'],
    specs: [{ label: 'Specific Impulse (Isp)', value: '380+ seconds' }, { label: 'Chamber Pressure', value: '300 bar' }],
    iconName: 'Rocket'
  },
  {
    id: 'marine',
    name: 'Marine & Offshore Engineering',
    category: DISCIPLINE_CATEGORIES.EXTREME,
    difficulty: 91,
    description: 'Deepwater oil drilling platforms, autonomous underwater submersibles, icebreaker hull dynamics, and naval hydrodynamics.',
    focusAreas: ['Deepwater Mooring', 'Titanium Pressure Hulls', 'Cavitation-Resistant Props', 'Subsea Robotics'],
    specs: [{ label: 'Depth Rating', value: '11,000 meters' }, { label: 'Structural Steel Grade', value: 'HY-100 / Titanium' }],
    iconName: 'Anchor'
  },
  {
    id: 'nuclear',
    name: 'Nuclear & Fusion Engineering',
    category: DISCIPLINE_CATEGORIES.EXTREME,
    difficulty: 95,
    description: 'Generation IV fission reactors, Tokamak magnetic plasma confinement, neutron radiation shielding, and nuclear waste vitrification.',
    focusAreas: ['Tokamak Superconducting Coils', 'Neutron Shielding Alloys', 'Liquid Metal Coolants', 'Plasma Stability'],
    specs: [{ label: 'Plasma Temperature', value: '150 Million °C' }, { label: 'Magnetic Field Strength', value: '12 Tesla' }],
    iconName: 'Atom'
  },

  // ─── Category: Design & Emerging ───
  {
    id: 'robotics',
    name: 'Robotics & Mechatronics',
    category: DISCIPLINE_CATEGORIES.DESIGN,
    difficulty: 93,
    description: 'Bipedal humanoid motion synthesis, harmonic drive actuators, LiDAR SLAM spatial positioning, and real-time sensor fusion.',
    focusAreas: ['Harmonic Drive Torque', 'LiDAR SLAM Positioning', 'Inverse Kinematics', 'Impedance Control'],
    specs: [{ label: 'Joint Torque Density', value: '250 Nm/kg' }, { label: 'Control Loop Rate', value: '1,000 Hz' }],
    iconName: 'Bot'
  },
  {
    id: 'nanotechnology',
    name: 'Nanotechnology & Molecular Machines',
    category: DISCIPLINE_CATEGORIES.DESIGN,
    difficulty: 96,
    description: 'Carbon nanotube synthesis, atomic layer deposition, molecular rotors, and quantum dot semiconductor displays.',
    focusAreas: ['Atomic Layer Deposition', 'Carbon Nanotube Chiralities', 'Quantum Dot Crystals', 'Scanning Tunneling Probes'],
    specs: [{ label: 'Feature Scale', value: '0.5 to 10 nm' }, { label: 'Tensile Strength', value: '60 GPa' }],
    iconName: 'Sparkles'
  },
  {
    id: 'acoustical',
    name: 'Acoustical & Noise Engineering',
    category: DISCIPLINE_CATEGORIES.DESIGN,
    difficulty: 88,
    description: 'Architectural hall reverberation, active noise cancellation algorithms, acoustic dampening metamaterials, and sonar transducer design.',
    focusAreas: ['Raytracing Reverberation', 'Active Anti-Phase Cancellation', 'Phased Array Transducers', 'Anechoic Chamber Isolators'],
    specs: [{ label: 'Isolation Threshold', value: '-80 dB dampening' }, { label: 'Frequency Range', value: '5 Hz - 100 kHz' }],
    iconName: 'Volume2'
  }
];

export const organizationsData: Organization[] = [
  {
    id: 'wfeo',
    plateId: 'PLATE 01',
    name: 'World Federation of Engineering Organizations',
    shortName: 'WFEO',
    category: 'global',
    categoryLabel: 'Global Governance',
    location: 'Paris, France',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    established: '1968',
    members: '100+ National Member Organizations (30M+ Engineers)',
    description: 'The peak international body representing the engineering profession worldwide, operating under the auspices of UNESCO to advance global sustainable development goals.',
    focusAreas: ['UN SDG Alignment', 'Global Engineering Standards', 'Diversity & Inclusion', 'Disaster Risk Management'],
    website: 'https://www.wfeo.org'
  },
  {
    id: 'unesco-eng',
    plateId: 'PLATE 02',
    name: 'UNESCO Engineering for Sustainable Development',
    shortName: 'UNESCO-ENG',
    category: 'global',
    categoryLabel: 'Global Governance',
    location: 'Paris, France',
    coordinates: { lat: 48.8584, lng: 2.2945 },
    established: '1945',
    members: '193 Member States',
    description: 'Directs global policy, educational accreditation, and humanitarian engineering initiatives aimed at eradicating poverty and mitigating climate impacts.',
    focusAreas: ['Clean Water Access', 'Sustainable Infrastructure', 'Capacity Building', 'Girls in STEM'],
    website: 'https://en.unesco.org'
  },
  {
    id: 'incose',
    plateId: 'PLATE 03',
    name: 'International Council on Systems Engineering',
    shortName: 'INCOSE',
    category: 'global',
    categoryLabel: 'Global Systems',
    location: 'San Diego, USA',
    coordinates: { lat: 32.7157, lng: -117.1611 },
    established: '1990',
    members: '21,000+ Individual Members Across 75 Chapters',
    description: 'Establishes international standards for Systems Engineering, model-based system engineering (MBSE), and complex socio-technical system architectures.',
    focusAreas: ['Model-Based Systems Engineering', 'Lifecycle Management', 'Complex Systems Architecture', 'ISO/IEC 15288'],
    website: 'https://www.incose.org'
  },
  {
    id: 'fidic',
    plateId: 'PLATE 04',
    name: 'International Federation of Consulting Engineers',
    shortName: 'FIDIC',
    category: 'global',
    categoryLabel: 'Global Consulting',
    location: 'Geneva, Switzerland',
    coordinates: { lat: 46.2044, lng: 6.1432 },
    established: '1913',
    members: '100+ National Member Associations',
    description: 'Publishes international standard conditions of contract for civil engineering construction, infrastructure projects, and environmental consulting.',
    focusAreas: ['FIDIC Contract Rainbow Suite', 'Infrastructure Procurement', 'Integrity Management', 'Sustainability Guidelines'],
    website: 'https://fidic.org'
  },
  {
    id: 'ieee',
    plateId: 'PLATE 05',
    name: 'Institute of Electrical and Electronics Engineers',
    shortName: 'IEEE',
    category: 'society',
    categoryLabel: 'Professional Society',
    location: 'Piscataway, NJ, USA',
    coordinates: { lat: 40.5471, lng: -74.4646 },
    established: '1884',
    members: '450,000+ Members in 160+ Countries',
    description: 'The world\'s largest technical professional organization dedicated to advancing electrical engineering, computer science, Wi-Fi 802.11 standards, and robotics.',
    focusAreas: ['IEEE 802 Standards', 'Quantum Computing', 'Signal Processing', 'Autonomous Systems'],
    website: 'https://www.ieee.org'
  },
  {
    id: 'asme',
    plateId: 'PLATE 06',
    name: 'American Society of Mechanical Engineers',
    shortName: 'ASME',
    category: 'society',
    categoryLabel: 'Professional Society',
    location: 'New York, NY, USA',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    established: '1880',
    members: '85,000+ Members Worldwide',
    description: 'Fosters mechanical engineering art and science, famous for publishing the Boiler and Pressure Vessel Code (BPVC) ensuring public pressure safety.',
    focusAreas: ['Boiler & Pressure Vessel Code', 'Nuclear Components', 'Additive Manufacturing', 'Robotics'],
    website: 'https://www.asme.org'
  },
  {
    id: 'asce',
    plateId: 'PLATE 07',
    name: 'American Society of Civil Engineers',
    shortName: 'ASCE',
    category: 'society',
    categoryLabel: 'Professional Society',
    location: 'Reston, VA, USA',
    coordinates: { lat: 38.9586, lng: -77.3570 },
    established: '1852',
    members: '150,000+ Members Across 177 Countries',
    description: 'Represents civil engineering professionals worldwide, publishing the Infrastructure Report Card and defining structural code ASCE 7.',
    focusAreas: ['ASCE 7 Minimum Design Loads', 'Infrastructure Report Card', 'Bridge Mechanics', 'Coastal Resiliency'],
    website: 'https://www.asce.org'
  },
  {
    id: 'iei',
    plateId: 'PLATE 08',
    name: 'Institution of Engineers India',
    shortName: 'IEI',
    category: 'regional',
    categoryLabel: 'Regional Authority',
    location: 'Kolkata, India',
    coordinates: { lat: 22.5726, lng: 88.3639 },
    established: '1920',
    members: '1M+ Engineering Members Across 15 Engineering Divisions',
    description: 'Established under Royal Charter in 1920, IEI is the largest multidisciplinary professional body of engineers in India and South Asia.',
    focusAreas: ['Chartered Engineer Certification', '15 Engineering Divisions', 'Rural Tech Transfer', 'R&D Grants'],
    website: 'https://www.ieindia.org'
  },
  {
    id: 'ewb',
    plateId: 'PLATE 09',
    name: 'Engineers Without Borders International',
    shortName: 'EWB-I',
    category: 'humanitarian',
    categoryLabel: 'Humanitarian',
    location: 'Denver, CO, USA / Global',
    coordinates: { lat: 39.7392, lng: -104.9903 },
    established: '2002',
    members: '60+ National Organizations (30,000+ Volunteers)',
    description: 'Partners with developing communities to build sustainable clean water filtration, solar micro-grids, and climate-resilient bridges.',
    focusAreas: ['Solar Micro-Grids', 'Community Water Wells', 'Pedestrian Suspension Bridges', 'Sanitation Engineering'],
    website: 'https://ewb-international.org'
  }
];

export const voiceStoriesData: VoiceStory[] = [
  {
    id: 'story-1',
    author: 'Senior Systems Architect',
    role: 'Cloud Distributed Systems Lead (Bengaluru)',
    platform: 'reddit',
    topic: 'burnout',
    quote: '"73% of my team is working 65+ hour weeks just to maintain fragile legacy microservices. Burnout isn\'t a personal failing; it\'s an architectural defect."',
    fullStory: 'After 8 years leading backend infrastructure, we realized that 80% of middle-of-the-night incidents were caused by missing automated tests and unrealistic release deadlines imposed by upper management.',
    date: '2026-07-18',
    likes: 4210,
    comments: 890
  },
  {
    id: 'story-2',
    author: 'Principal Structural Engineer',
    role: 'Bridge Infrastructure Director (London)',
    platform: 'linkedin',
    topic: 'success',
    quote: '"80% of engineering excellence is not heroic genius—it is relentless, methodical adherence to baseline physics and structural standards."',
    fullStory: 'When young engineers ask how we delivered the river crossing 3 months early, I show them our checklist audit system. Innovation happens inside rigorous boundary constraints.',
    date: '2026-07-15',
    likes: 12500,
    comments: 1120
  },
  {
    id: 'story-3',
    author: 'Former Big-Tech Dev',
    role: 'Full-Stack Developer (San Francisco)',
    platform: 'twitter',
    topic: 'layoffs',
    quote: '"Being laid off alongside 7,500 colleagues taught me that your GitHub commits don\'t define your human worth. Rebuilding took community and honesty."',
    fullStory: 'The day my corporate badge stopped working was terrifying. But within two weeks, an open-source Discord group helped me prep for interviews without imposter syndrome.',
    date: '2026-07-10',
    likes: 8900,
    comments: 1450
  },
  {
    id: 'story-4',
    author: 'Robotics PhD Fellow',
    role: 'Humanoid Kinematics Researcher (Tokyo)',
    platform: 'youtube',
    topic: 'imposter',
    quote: '"I spent two years feeling like an imposter because my mathematical torque equations failed in physical testing. Failure was just friction calling for tuning."',
    fullStory: 'In research, 99 trials fail before 1 succeeds. Normalizing hardware failure is the single most important mindset shift for hardware engineers.',
    date: '2026-07-02',
    likes: 18400,
    comments: 920
  }
];

export const youngEngineerTips = [
  { step: '01', title: 'Institutional Onboarding & Mentorship', description: 'Align early career projects with registered professional bodies (IEEE, ASME, ASCE, IEI) to build accredited hours toward Chartered/PE licensure.' },
  { step: '02', title: 'Methodical Fundamentals First', description: 'Master first-principles physics, calculus, and stress/strain dynamics before relying blindly on automated simulation software.' },
  { step: '03', title: 'Strategic Industry Sponsorship', description: 'Seek out senior engineers who critique your work rigorously rather than praising prematurely; technical friction creates expertise.' },
  { step: '04', title: 'Universal Interdisciplinary Literacy', description: 'Software engineers must understand hardware power limits; civil engineers must understand environmental compliance codes.' },
  { step: '05', title: 'Open-Source & Peer Auditing', description: 'Publish code, peer-review research blueprints, and contribute to public engineering repositories to establish verified authority.' },
  { step: '06', title: 'Groundwater & Structural Field Exposure', description: 'Spend at least 20% of your early career on active job sites, cleanroom floors, or field deployments rather than pure office environments.' },
  { step: '07', title: 'Process Auditing & Failure Analysis', description: 'Study post-mortem engineering reports (Challenger disaster, Tacoma Narrows, Boeing MAX) to internalize safety factors.' },
  { step: '08', title: 'Academic & Institutional Governance', description: 'Write technical papers, mentor younger students, and participate in ISO/IEEE standard drafting committees.' }
];

export const unSdgsData = [
  { id: 1, title: 'No Poverty', color: '#E5243B', icon: '1', alignment: 'Engineered low-cost infrastructure, water distribution, and agricultural machinery empowering local economies.' },
  { id: 2, title: 'Zero Hunger', color: '#DDA63A', icon: '2', alignment: 'Hydroponic automation, cold-chain refrigeration, and mechanized harvesting maximizing crop yields.' },
  { id: 3, title: 'Good Health & Well-Being', color: '#4C9F38', icon: '3', alignment: 'Biomedical devices, sterile surgical instruments, MRI magnets, and pharmaceutical cleanroom engineering.' },
  { id: 4, title: 'Quality Education', color: '#C5192D', icon: '4', alignment: 'Digital learning archives, university campus infrastructure, and open STEM accreditation frameworks.' },
  { id: 5, title: 'Gender Equality', color: '#FF3A21', icon: '5', alignment: 'Equal access to technical education, leadership in engineering institutions, and inclusive design standards.' },
  { id: 6, title: 'Clean Water & Sanitation', color: '#26BDE2', icon: '6', alignment: 'Desalination plants, subterranean water well networks, wastewater treatment, and pipe hydraulics.' },
  { id: 7, title: 'Affordable & Clean Energy', color: '#FCC30B', icon: '7', alignment: 'Perovskite solar cells, offshore wind turbines, solid-state batteries, and smart grid transmission.' },
  { id: 8, title: 'Decent Work & Economic Growth', color: '#A21942', icon: '8', alignment: 'Industrial automation safety standards, sustainable manufacturing, and skilled engineering jobs.' },
  { id: 9, title: 'Industry, Innovation & Infrastructure', color: '#FD6925', icon: '9', alignment: 'Resilient bridge networks, semiconductor fabs, subsea fiber optics, and high-speed rail corridors.' },
  { id: 10, title: 'Reduced Inequalities', color: '#DD1367', icon: '10', alignment: 'Open-source software, accessible public transit, and affordable regional telecommunications.' },
  { id: 11, title: 'Sustainable Cities & Communities', color: '#FD9D24', icon: '11', alignment: 'Seismic structural dampening, smart urban planning, mass transit automation, and green roofs.' },
  { id: 12, title: 'Responsible Consumption & Production', color: '#BF8B2E', icon: '12', alignment: 'Circular materials recycling, industrial waste heat recovery, and biodegradable polymers.' },
  { id: 13, title: 'Climate Action', color: '#3F7E44', icon: '13', alignment: 'Direct air carbon capture, zero-emission transportation, and climate risk hydrological modeling.' },
  { id: 14, title: 'Life Below Water', color: '#0A97D9', icon: '14', alignment: 'Subsea robot monitoring, ocean cleanup barges, and marine vessel hydrodynamic anti-fouling.' },
  { id: 15, title: 'Life on Land', color: '#56C02B', icon: '15', alignment: 'Drone forest mapping, soil erosion engineering barriers, and wildlife corridor overpasses.' },
  { id: 16, title: 'Peace, Justice & Strong Institutions', color: '#00689D', icon: '16', alignment: 'Auditable cryptographic voting systems, infrastructure integrity contracts, and ethical AI standards.' },
  { id: 17, title: 'Partnerships for the Goals', color: '#19486A', icon: '17', alignment: 'Global engineering federations (WFEO, UNESCO, IEEE) uniting international technical expertise.' },
  {
    id: "nikola-tesla",
    plateId: "B-NIKOLA-T",
    name: "Nikola Tesla",
    era: "industrial",
    eraLabel: "Industrial Era",
    lifespan: "1856-1943",
    nationality: "Serbian-American",
    location: "Smiljan, Croatia",
    disciplines: ["Electrical Engineering","Mechanical Engineering","Physics"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    biography: {
      lead: "Nikola Tesla was a prolific inventor and engineer who made groundbreaking contributions to the development of electrical power systems. Born in Smilja...",
      full: "Nikola Tesla was a prolific inventor and engineer who made groundbreaking contributions to the development of electrical power systems. Born in Smiljan, Croatia, Tesla immigrated to the United States in 1884 and worked for Thomas Edison before striking out on his own. He holds over 300 patents in his name, including the design of the modern alternating current (AC) electricity system."
    },
    accomplishments: ["Developed the AC electricity system","Designed the first hydroelectric power plant","Experimented with X-ray technology and wireless power transmission","Held over 300 patents in his name"],
    quote: "The present is theirs; the future, for which I have really worked, is mine.",
    quoteContext: "From an interview with The New York Times, 1933"
  },
  {
    id: "isambard-kingdom-brunel",
    plateId: "B-ISAMBARD",
    name: "Isambard Kingdom Brunel",
    era: "industrial",
    eraLabel: "Industrial Era",
    lifespan: "1806-1859",
    nationality: "British",
    location: "Portsmouth, England",
    disciplines: ["Mechanical Engineering","Civil Engineering"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    biography: {
      lead: "James Watt was a Scottish inventor whose improvements to the steam engine catalyzed the Industrial Revolution. His work transformed energy use and shaped modern engineering.",
      full: "Born in 1736 in Greenock, Scotland, Watt displayed an early fascination with mechanics, tinkering with clocks and tools while still a child. He apprenticed as a mathematical instrument maker, where he honed his skill in precision engineering and developed a keen understanding of scientific principles.\n\nIn 1765, while working as a surveyor for the University of Glasgow, Watt encountered a Newcomen atmospheric engine that was inefficient and wasteful. He recognized that the engine's design wasted the majority of its heat and set about devising a separate condenser, a breakthrough that dramatically improved fuel efficiency and made steam power viable for a host of industrial applications.\n\nWatt's partnership with Matthew Boulton in 1775 turned his inventions into a commercial success; the firm Boulton & Watt became synonymous with reliable, high-performance steam engines that powered factories, mines, and eventually transportation, laying the groundwork for the modern industrial world."
    },
    voiceStory: "In the smoky glow of a 19th-century workshop, a lone figure stands over a hulking iron beast, breathing life into its pistons. Voice narrator whispers, \\\"Listen… can you hear the heartbeat of progress?\\\" The camera pans over brass fittings as Watt explains, \\\"I have captured the very breath of fire, turning wasted heat into relentless motion.\\\" The scene crescendos with the roar of the engine, echoing through factories, heralding an age where steam becomes the pulse of civilization. The narrator concludes, \\\"And so, with every turn of the wheel, James Watt rewrote the future, one pulse of power at a time.\\\"",
    accomplishments: ["Designed the Great Western Railway, one of the first major railways in the UK","Developed the SS Great Western, the first steamship to cross the Atlantic","Built the Clifton Suspension Bridge, a iconic landmark in Bristol, England","Designed the Royal Albert Bridge, a major railway bridge in Cornwall, England"],
    quote: "I am opposed to the laying down of rules or conditions to be observed in the construction of bridges lest the progress of improvement tomorrow might be embarrassed or shackled by recording or registering as law the prejudices or errors of today.",
    quoteContext: "From his speech to the Institution of Civil Engineers in 1845"
  },
  {
    id: "isambard-kingdom-brunel",
    plateId: "B-ISAMBARD",
    name: "Isambard Kingdom Brunel",
    era: "industrial",
    eraLabel: "Industrial Revolution",
    lifespan: "1806-1859",
    nationality: "British",
    location: "Portsmouth, England",
    disciplines: ["Civil Engineering","Mechanical Engineering","Naval Architecture"],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    biography: {
      lead: "Isambard Kingdom Brunel was a prolific and visionary 19th-century English engineer whose groundbreaking projects reshaped modern transportation and infrastructure. His daring use of innovative materials and techniques left an indelible mark on the Industrial Revolution.",
      full: "Born in 1806 in Portsmouth, Brunel was the son of Sir Marc Brunel, a French-born engineer who had fled the Revolution and instilled in his son a rigorous grounding in mathematics, mechanics, and bold problem-solving. From an early age, Isambard displayed a rebellious creativity and an intuitive grasp of structural design, apprenticing in his father's workshop and quickly surpassing his mentors in ambition. By his twenties, he was already tackling ambitious infrastructure projects that would define his legacy."
    },
    voiceStory: "Listen, if you stand beneath the arches of the Clifton Suspension Bridge and feel the wind howl through iron and stone, you're sensing the heartbeat of a man who refused to accept the word \"impossible.\" They called me mad when I launched the SS Great Britain into Bristol Harbour, a vessel of iron that refused to sink the old way. They laughed when I bored the Thames Tunnel, the first of its kind beneath a river, with miners’ lamps flickering and water threatening to drown the flame of progress. But I built for the future, not for the comfort of the present. Every rivet, every gauge, every bold curve of the Great Western Railway was a stanza in a poem of motion, linking London to the west, steam to sail, man to machine. I may have walked this earth only fifty-three years, but the bridges Ispan, the ships I launched, the rails I laid still carry the weight of a century onward. I am Isambard Kingdom Brunel, and I did not merely engineer iron and stone—I engineered the future itself.",
    accomplishments: ["Designed the Great Western Railway, one of the first major railways in the UK","Built the Clifton Suspension Bridge, a iconic landmark in Bristol","Constructed the SS Great Britain, the largest ship in the world at the time of its launch"],
    quote: "I am opposed to the laying down of rules or conditions to be observed in the construction of bridges lest the progress of improvement tomorrow might be embarrassed or shackled by recording or registering as law the prejudices or errors of today.",
    quoteContext: "From a letter to the Royal Commission on the State of the Harbour of Bristol, 1845"
  }
];
