// ─── Faction definitions ──────────────────────────────────────────────────────
// Synced from Trump-Card-game/src/data/heroes.js + src/screens/WorldMapScreen.js (FACTION_META)
export const FACTIONS = {
  "EMBERVEIL": {
    "name": "EMBERVEIL",
    "color": "#FF4500",
    "accentColor": "#FF6B35",
    "image": "/assets/faction/EMBERVEIL.png",
    "element": "Fire & Lightning",
    "elementTags": "🔥 Fire  ⚡ Lightning",
    "climate": "Volcanic & Storm-torn",
    "specialties": [
      "Fire Mastery",
      "Burn Effects",
      "High ATK",
      "Lightning Strikes"
    ],
    "lore": "A land of perpetual eruption and lightning storms where only the fiercest survive. For three cycles of the volcanic moon the ember throne sat empty - its sovereign swallowed by a dimensional rift while sealing a catastrophic breach in the realm. Into that silence strode Marisol, who held the throne by sheer force of will until the day Fiorenza walked back out of that same rift, carrying fire from dimensions no one else has seen. Marisol surrendered the throne the moment Fiorenza crossed the border. Neither of them had to say a word.",
    "ruler": {
      "heroId": "hero_041",
      "name": "Fiorenza",
      "title": "The Ember Sovereign",
      "status": "RULER",
      "roleLore": "The original sovereign of EMBERVEIL, returned from three cycles of dimensional exile carrying fire from beyond the rift. The throne did not need to be reclaimed - it simply recognized her."
    }
  },
  "GLACIARA": {
    "name": "GLACIARA",
    "color": "#00B4D8",
    "accentColor": "#90E0EF",
    "image": "/assets/faction/GLACIARA.png",
    "element": "Ice",
    "elementTags": "❄️ Ice",
    "climate": "Arctic Blizzard & Permafrost",
    "specialties": [
      "Ice Control",
      "Freeze Debuffs",
      "High DEF",
      "Crowd Control"
    ],
    "lore": "An eternal winter realm of ice fortresses and howling blizzards. For generations the ruling council lay sealed inside an enchanted glacier - and Zimara governed in their absence, calling herself regent long after the council ceased to be a realistic expectation. Then the original sovereign returned. Zimoslava, the woman who built GLACIARA from raw permafrost and sacrifice, walked out of her crystalline sleep and back onto her throne. Zimara stepped aside without being asked. In GLACIARA, some things simply freeze in their rightful position and stay there.",
    "ruler": {
      "heroId": "hero_037",
      "name": "Zimoslava",
      "title": "The Frozen Sovereign",
      "status": "RULER",
      "roleLore": "Built GLACIARA from nothing. Sacrificed her throne to seal an elder darkness. Returned from centuries of crystalline sleep to reclaim what was always hers - and found it exactly where she left it."
    }
  },
  "SUNSPIRE": {
    "name": "SUNSPIRE",
    "color": "#D4A017",
    "accentColor": "#F5C842",
    "image": "/assets/faction/SUNSPIRE.webp",
    "element": "Holy",
    "elementTags": "☀️ Holy",
    "climate": "Eternal Sunlight & Golden Highlands",
    "specialties": [
      "Holy Healing",
      "Divine Buffs",
      "Blessed Defense",
      "Light Smite"
    ],
    "lore": "A radiant land of golden highlands and ivory temples where the sun never fully sets and holy light is as natural as air. Aurelia was chosen not by vote or bloodline, but by the light itself - during the Ceremony of Ascension she called down a single ray of pure sunlight that healed an entire city in one breath. Her reign is absolute and undisputed. Enemies who face Sunspire on the battlefield have been known to lay down their arms not from defeat, but from the sudden, total certainty that they had already lost.",
    "ruler": {
      "heroId": "hero_012",
      "name": "Aurelia",
      "title": "The Radiant Sovereign",
      "status": "RULER",
      "roleLore": "Chosen by light itself during the Ceremony of Ascension. Her reign is undisputed across all of Sunspire - the first true sovereign the realm has known in centuries."
    }
  },
  "VERDANIA": {
    "name": "VERDANIA",
    "color": "#2ECC71",
    "accentColor": "#A8E6CF",
    "image": "/assets/faction/VERDANIA.png",
    "element": "Nature & Wind",
    "elementTags": "🌿 Nature  🌪️ Wind",
    "climate": "Tropical Ancient Forest & Living Jungle",
    "specialties": [
      "Nature Magic",
      "Toxin Builds",
      "Root Control",
      "Healing"
    ],
    "lore": "An ancient primordial forest so vast its borders have never been fully mapped, where the oldest trees remember the first age of the world. Fiadh was not appointed or elected - she was chosen. During the Night of Blossoming, the eldest trees of Verdania flowered for the first time in a thousand years and named her queen. She does not rule from a palace; she walks the roots, speaks with the canopy, and feels every wound dealt to her forest as if it were carved into her own skin.",
    "ruler": {
      "heroId": "hero_030",
      "name": "Fiadh",
      "title": "The Thornborn Queen",
      "status": "RULER",
      "roleLore": "The jungle itself crowned her during the Night of Blossoming. She feels every wound dealt to Verdania as her own. To harm this forest is to make an enemy of its queen."
    }
  },
  "VOIDMARK": {
    "name": "VOIDMARK",
    "color": "#9B59B6",
    "accentColor": "#D7BDE2",
    "image": "/assets/faction/VOIDMARK.webp",
    "element": "Void",
    "elementTags": "🌀 Void",
    "climate": "Corrupted Void & Broken Reality",
    "specialties": [
      "DEF-Ignore",
      "Instant KO",
      "Reality Tears",
      "Shadow Strikes"
    ],
    "lore": "A fractured realm where the sky tears open without warning and the laws of reality are more suggestion than rule. There is no coronation ceremony in Voidmark - only survival. Titania rules because every challenger who came before her is no longer a concern. She does not speak of governance, only of dominance. In a realm where loyalty shifts like smoke and entire districts can slip between dimensions overnight, her absolute, immovable presence is the only thing stopping Voidmark from collapsing into itself. Even her inner court fears her. She considers that proof of competence.",
    "ruler": {
      "heroId": "hero_033",
      "name": "Titania",
      "title": "The Abyssal Sovereign",
      "status": "RULER",
      "roleLore": "No coronation. No law. She rules because nothing that challenged her survived the attempt. In Voidmark, that is the only qualification that counts."
    }
  },
  "KHEMARA": {
    "name": "KHEMARA",
    "color": "#E0912E",
    "accentColor": "#F5C16B",
    "image": "/assets/faction/KHEMARA.png",
    "element": "Sand & Moon",
    "elementTags": "🏜️ Sand  🌙 Moon",
    "climate": "Endless Dunes & Silver Nights",
    "specialties": [
      "Lunar Judgment",
      "Dynastic Rule",
      "Sand & Dust",
      "Moonlit Magic"
    ],
    "lore": "A vast desert dominion of obelisks, sunken tombs, and dunes that swallow whole armies - a realm of scorching days and cold silver nights where the moon is worshipped and the dead are honored as gods. Khemara does not appear on any map a traveler can buy; its borders open only to those who already know the way. At its heart sits Nefertari, goddess and pharaoh in one, crowned by the full desert moon during a ceremony no outsider has ever witnessed. Her court measures time in dynasties, not years, and her judgment falls as silently as moonlight on sand. Those who seek Khemara do not find it. It decides whether to find them.",
    "ruler": {
      "heroId": "hero_054",
      "name": "Nefertari",
      "title": "The Moon-Queen of Khemara",
      "status": "RULER",
      "roleLore": "Goddess and pharaoh of the sand realm, crowned by the full desert moon itself. She cannot be summoned or won - she descends only for those who seek her court directly, and weighs all who stand before her in the dark."
    }
  }
};

// ─── Rank colors ─────────────────────────────────────────────────────────────
export const RANK_COLORS = {
  SOVEREIGN: { bg: '#FFD700', text: '#1A0A00', glow: '#FFEC6E' },
  S:         { bg: '#F72585', text: '#FFF',    glow: '#FF85C2' },
  A:         { bg: '#7B2FBE', text: '#E9D5FF', glow: '#C084FC' },
  B:         { bg: '#0284C7', text: '#E0F2FE', glow: '#7DD3FC' },
  C:         { bg: '#059669', text: '#D1FAE5', glow: '#6EE7B7' },
};

// ─── All 107 heroes ────────────────────────────────────────────────────────────
// Synced from Trump-Card-game/src/data/heroes.js
export const HEROES = [
  {
    "id": "hero_001",
    "name": "Marisol",
    "frame": "STORMCALLER",
    "faction": "EMBERVEIL",
    "rank": "S",
    "element": "Lightning",
    "effect": "PARALYSIS",
    "class": "Attacker",
    "cardId": "EMB-01-MARISOL",
    "image": "/assets/heroes/hero_001.webp",
    "about": "A relentless thunder mage who channels raw storm energy into devastating chain strikes. She was exiled from EMBERVEIL for refusing orders and now fights entirely on her own terms. She held the ember throne through three cycles of dark silence - and stepped aside the moment its true sovereign returned, without a word asked or given.",
    "hp": 3400,
    "atk": 600,
    "def": 185,
    "crit": 550,
    "skills": [
      {
        "name": "Chain Lightning",
        "cost": 2,
        "description": "Arcs a bolt between all enemies, chaining three times.",
        "damage": 1.8
      },
      {
        "name": "Volt Surge",
        "cost": 3,
        "description": "Supercharges a single target with massive shock.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "Thunderstorm Apocalypse",
      "description": "Calls a catastrophic storm striking all enemies 3 times with absolute lightning.",
      "damage": 4.8,
      "effect": "Stuns all enemies 1 turn; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_002",
    "name": "Valentina Ardente",
    "frame": "BLAZEGUARD",
    "faction": "EMBERVEIL",
    "rank": "A",
    "element": "Fire",
    "effect": "INCINERATE",
    "class": "Attacker",
    "cardId": "EMB-02-VALENTINA",
    "image": "/assets/heroes/hero_002.webp",
    "about": "Elite vanguard of EMBERVEIL. Valentina's sword is perpetually wreathed in solar flames capable of melting through any barrier. Born in the volcanic highlands, she fights without hesitation.",
    "hp": 4200,
    "atk": 520,
    "def": 220,
    "crit": 460,
    "skills": [
      {
        "name": "Crescent Slash",
        "cost": 1,
        "description": "A swift arc slash dealing moderate damage.",
        "damage": 1.4
      },
      {
        "name": "Dawn Breaker",
        "cost": 3,
        "description": "Channels dawn energy for a devastating strike.",
        "damage": 2.8
      }
    ],
    "trumpCard": {
      "name": "Solar Rending Sword",
      "description": "Channels the power of the sun into an all-destroying blade strike that heals allies.",
      "damage": 5,
      "effect": "Heals all allies 25% HP"
    }
  },
  {
    "id": "hero_003",
    "name": "Zimara",
    "frame": "FROSTMEND",
    "faction": "GLACIARA",
    "rank": "S",
    "element": "Ice",
    "effect": "GLACIATION",
    "class": "Mage",
    "cardId": "GLA-01-ZIMARA",
    "image": "/assets/heroes/hero_003.webp",
    "about": "Supreme ice mage of GLACIARA. Zimara channels glacial frost into devastating arcane constructs - her crystalline spell-towers and blizzard barriers are considered masterpieces of the frozen battlefield.",
    "hp": 3000,
    "atk": 640,
    "def": 155,
    "crit": 580,
    "skills": [
      {
        "name": "Frost Lance",
        "cost": 2,
        "description": "Hurls razor-sharp ice lances at the enemy.",
        "damage": 2
      },
      {
        "name": "Glacial Prison",
        "cost": 3,
        "description": "Encases a target in an inescapable ice dome.",
        "damage": 2.3
      }
    ],
    "trumpCard": {
      "name": "Eternal Blizzard",
      "description": "Unleashes a storm of absolute-zero winds that consumes all enemies and heals allies.",
      "damage": 5,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_004",
    "name": "Aisling Doyle",
    "frame": "BLOOMWEAVE",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Nature",
    "effect": "BLOOM",
    "class": "Mage",
    "cardId": "VRD-01-AISLING",
    "image": "/assets/heroes/hero_004.webp",
    "about": "Nature mage of VERDANIA. Aisling commands living flora with arcane precision, weaving vines and blossoms into devastating spell constructs that overwhelm enemies with uncontrolled growth.",
    "hp": 2900,
    "atk": 580,
    "def": 160,
    "crit": 540,
    "skills": [
      {
        "name": "Thorn Barrage",
        "cost": 2,
        "description": "Launches a volley of enchanted thorns at a target.",
        "damage": 2
      },
      {
        "name": "Nature's Wrath",
        "cost": 3,
        "description": "Calls the living forest to crush a single enemy.",
        "damage": 2.3
      }
    ],
    "trumpCard": {
      "name": "Forest Overgrowth",
      "description": "Summons the fury of VERDANIA's ancient forest to consume all enemies and restore allies.",
      "damage": 4,
      "effect": "Stuns all enemies 1 turn; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_005",
    "name": "Maeve Boyle",
    "frame": "ROOTGUARD",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Wind",
    "effect": "ENTANGLEMENT",
    "class": "Defender",
    "cardId": "VRD-02-MAEVE",
    "image": "/assets/heroes/hero_005.webp",
    "about": "Guardian of the VERDANIA woodlands. Maeve's body is hardened by years of forest training, allowing her to withstand tremendous punishment while ensnaring enemies with enchanted roots and vines.",
    "hp": 6000,
    "atk": 340,
    "def": 470,
    "crit": 260,
    "skills": [
      {
        "name": "Root Bind",
        "cost": 1,
        "description": "Ensnares an enemy with enchanted roots.",
        "damage": 0.5
      },
      {
        "name": "Canopy Slam",
        "cost": 2,
        "description": "Summons tree energy to crash down on all foes.",
        "damage": 1.3
      }
    ],
    "trumpCard": {
      "name": "Ancient Grove's Fury",
      "description": "Calls the ancient forest to crush all enemies beneath roots and trunks.",
      "damage": 3,
      "effect": "Heals self 20% HP and shields against next 2 hits"
    }
  },
  {
    "id": "hero_006",
    "name": "Diego Lucero",
    "frame": "SOLARBOW",
    "faction": "SUNSPIRE",
    "rank": "B",
    "element": "Holy",
    "effect": "BLESSING",
    "class": "Support",
    "cardId": "SUN-01-DIEGO",
    "image": "/assets/heroes/hero_006.webp",
    "about": "A sacred herald of SUNSPIRE who fires blessed light arrows that both weaken foes and restore allies. His aim is guided by solar energy - once released, his arrows never miss.",
    "hp": 3700,
    "atk": 400,
    "def": 230,
    "crit": 370,
    "skills": [
      {
        "name": "Holy Arrow",
        "cost": 1,
        "description": "A sacred arrow that weakens enemy defenses.",
        "damage": 1.2
      },
      {
        "name": "Radiant Mend",
        "cost": 2,
        "description": "Healing light restores an ally's HP.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Solar Judgment",
      "description": "A rain of holy arrows descends upon all enemies.",
      "damage": 3.5,
      "effect": "Heals team 20% HP and removes all debuffs"
    }
  },
  {
    "id": "hero_007",
    "name": "Dario Ferraro",
    "frame": "FLAMEBLADE",
    "faction": "EMBERVEIL",
    "rank": "A",
    "element": "Fire",
    "effect": "INCINERATE",
    "class": "Attacker",
    "cardId": "EMB-03-DARIO",
    "image": "/assets/heroes/hero_007.webp",
    "about": "Champion of EMBERVEIL's warrior order. Dario's blade is perpetually wreathed in volcanic flame, cutting through armor as if it were paper. He hunts the corruption spreading from beyond the veil.",
    "hp": 4400,
    "atk": 490,
    "def": 260,
    "crit": 420,
    "skills": [
      {
        "name": "Flame Slash",
        "cost": 1,
        "description": "A searing sword strike igniting the target.",
        "damage": 1.3
      },
      {
        "name": "Eruption Charge",
        "cost": 3,
        "description": "Charges through enemies wreathed in volcanic flame.",
        "damage": 1.9
      }
    ],
    "trumpCard": {
      "name": "Volcanic Annihilation",
      "description": "A volcanic explosion of pure flame incinerates everything in range.",
      "damage": 4.2,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_008",
    "name": "Mirei",
    "frame": "VOIDPHANTOM",
    "faction": "VOIDMARK",
    "rank": "S",
    "element": "Void",
    "effect": "CORRUPTION",
    "class": "Attacker",
    "cardId": "VMK-01-MIREI",
    "image": "/assets/heroes/hero_008.webp",
    "about": "Shadow phantom of VOIDMARK. Mirei strikes before enemies can perceive her presence, vanishing into void space between hits. Her every movement tears small rifts in reality itself.",
    "hp": 3300,
    "atk": 610,
    "def": 180,
    "crit": 590,
    "skills": [
      {
        "name": "Void Strike",
        "cost": 1,
        "description": "A swift void-infused backstab dealing bonus damage.",
        "damage": 1.6
      },
      {
        "name": "Phantom Step",
        "cost": 2,
        "description": "Teleports through void and strikes the target three times.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Void Embrace",
      "description": "Merges with the void and executes a lethal sequence of reality-tearing strikes that heals allies.",
      "damage": 5.2,
      "effect": "Heals all allies 25% HP"
    }
  },
  {
    "id": "hero_009",
    "name": "Marcus Aurelio",
    "frame": "IRONSPIRE",
    "faction": "SUNSPIRE",
    "rank": "B",
    "element": "Holy",
    "effect": "BLESSING",
    "class": "Defender",
    "cardId": "SUN-02-MARCUS",
    "image": "/assets/heroes/hero_009.webp",
    "about": "Iron bulwark of SUNSPIRE. Marcus's sacred armor has never been breached in over 300 battles. He stands between his allies and annihilation without flinching.",
    "hp": 8000,
    "atk": 380,
    "def": 620,
    "crit": 220,
    "skills": [
      {
        "name": "Holy Guard",
        "cost": 1,
        "description": "Raises sacred defense reducing incoming damage.",
        "damage": 0
      },
      {
        "name": "Light Slam",
        "cost": 3,
        "description": "Slams the ground creating a holy shockwave.",
        "damage": 1.6
      }
    ],
    "trumpCard": {
      "name": "Fortress Eternal",
      "description": "Transforms into an unbreakable holy fortress that stuns all enemies.",
      "damage": 2,
      "effect": "Reduces all incoming damage 70% for 2 turns and stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_010",
    "name": "Carmen Vidal",
    "frame": "EMBERDANCER",
    "faction": "EMBERVEIL",
    "rank": "A",
    "element": "Fire",
    "effect": "FLAMEDANCE",
    "class": "Support",
    "cardId": "EMB-04-CARMEN",
    "image": "/assets/heroes/hero_010.webp",
    "about": "EMBERVEIL's fire-dancing sentinel. Carmen amplifies her allies with volcanic energy while her own movements flow like living flame - impossible to track and lethal to approach.",
    "hp": 3300,
    "atk": 320,
    "def": 260,
    "crit": 340,
    "skills": [
      {
        "name": "Fire Waltz",
        "cost": 1,
        "description": "Dances through flames raising team attack power.",
        "damage": 0.8
      },
      {
        "name": "Ember Shield",
        "cost": 2,
        "description": "Ember aura deflects and absorbs incoming attacks.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Eye of the Flame",
      "description": "Becomes the center of a volcanic firestorm devastating all enemies and restoring allies.",
      "damage": 3,
      "effect": "Heals all allies 25% HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_011",
    "name": "Vera Zimina",
    "frame": "FROSTVEIL",
    "faction": "GLACIARA",
    "rank": "A",
    "element": "Ice",
    "effect": "PERMAFROST",
    "class": "Defender",
    "cardId": "GLA-02-VERA",
    "image": "/assets/heroes/hero_011.webp",
    "about": "Ancient guardian of GLACIARA's frozen tundra. Vera's body has been tempered by centuries of blizzards, making her near-indestructible and capable of regenerating rapidly in freezing conditions.",
    "hp": 7000,
    "atk": 310,
    "def": 570,
    "crit": 170,
    "skills": [
      {
        "name": "Frost Wall",
        "cost": 1,
        "description": "Raises an ice wall to absorb enemy attacks.",
        "damage": 0
      },
      {
        "name": "Glacial Slam",
        "cost": 3,
        "description": "Slams the ground with glacial force hitting all enemies.",
        "damage": 1.5
      }
    ],
    "trumpCard": {
      "name": "Permafrost Bastion",
      "description": "Calls the power of the eternal glacier to crush all enemies and stun them in place.",
      "damage": 2,
      "effect": "Reduces all incoming damage 70% for 2 turns; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_012",
    "name": "Aurelia",
    "frame": "SOLARMAGE",
    "faction": "SUNSPIRE",
    "rank": "S",
    "element": "Holy",
    "effect": "RADIANCE",
    "class": "Mage",
    "cardId": "SUN-03-AURELIA",
    "image": "/assets/heroes/hero_012.webp",
    "about": "The Radiant Sovereign of SUNSPIRE - chosen not by bloodline or election but by the light itself during the Ceremony of Ascension. Aurelia commands solar energy and sacred flame at a level no mage born of training can replicate. Her brilliance on the battlefield is not considered divine. It is.",
    "hp": 3400,
    "atk": 760,
    "def": 175,
    "crit": 700,
    "sovereign": true,
    "skills": [
      {
        "name": "Solar Rend",
        "cost": 2,
        "description": "Channels concentrated sovereign solar energy that ignores elemental resistances.",
        "damage": 2.6
      },
      {
        "name": "Sacred Drain",
        "cost": 3,
        "description": "Draws upon holy light to devastate enemies and restore all allies simultaneously.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Divine Radiance",
      "description": "Calls down the full sovereign power of SUNSPIRE's sacred flame - absolute holy light consuming all enemies at once and restoring the team.",
      "damage": 6,
      "effect": "Stuns all enemies 2 turns; heals entire team 30% HP; removes all debuffs from allies"
    }
  },
  {
    "id": "hero_013",
    "name": "Kaori Adachi",
    "frame": "VOIDOMEN",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "VOID_OMEN",
    "class": "Mage",
    "cardId": "VMK-03-KAORI",
    "image": "/assets/heroes/hero_013.webp",
    "about": "A void scholar who has spent decades studying entities older than recorded history. Kaori perceives abyss energy the way others perceive sound - as constant, layered information. She left VOIDMARK's inner court when she realized the court feared what she knew more than they feared the void itself.",
    "hp": 3000,
    "atk": 580,
    "def": 155,
    "crit": 540,
    "skills": [
      {
        "name": "Void Reading",
        "cost": 2,
        "description": "Channels dimensional knowledge into a crushing void strike that bypasses barriers.",
        "damage": 2.3
      },
      {
        "name": "Abyss Drain",
        "cost": 3,
        "description": "Draws void energy from an enemy, converting it to HP for the caster.",
        "damage": 1.8
      }
    ],
    "trumpCard": {
      "name": "Verdant Rift",
      "description": "Tears open a dimensional rift beneath all enemies, dragging them through void space.",
      "damage": 4.5,
      "effect": "Stuns all enemies 2 turns; heals self 20% HP"
    }
  },
  {
    "id": "hero_014",
    "name": "Reika Kurosawa",
    "frame": "DARKSTEP",
    "faction": "VOIDMARK",
    "rank": "B",
    "element": "Void",
    "effect": "SHADOW",
    "class": "Attacker",
    "cardId": "VMK-02-REIKA",
    "image": "/assets/heroes/hero_014.webp",
    "about": "Assassin of the VOIDMARK faction. Reika strikes from angles that don't exist in normal space. Her targets are erased before they can register the attack.",
    "hp": 3200,
    "atk": 500,
    "def": 175,
    "crit": 490,
    "skills": [
      {
        "name": "Shadow Strike",
        "cost": 1,
        "description": "A void-infused backstab dealing bonus damage.",
        "damage": 1.6
      },
      {
        "name": "Void Step",
        "cost": 2,
        "description": "Teleports through shadow and strikes three times.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Death's Embrace",
      "description": "Merges with void and executes a lethal sequence that heals allies.",
      "damage": 4.8,
      "effect": "Heals all allies 25% HP"
    }
  },
  {
    "id": "hero_015",
    "name": "Irina Kholodova",
    "frame": "FROSTWALL",
    "faction": "GLACIARA",
    "rank": "B",
    "element": "Ice",
    "effect": "CHILL",
    "class": "Defender",
    "cardId": "GLA-03-IRINA",
    "image": "/assets/heroes/hero_015.webp",
    "about": "A warrior tempered by GLACIARA's most brutal winters. Irina feels no cold and channels frozen energy through her body, converting incoming force into devastating ice-charged counterstrikes.",
    "hp": 6600,
    "atk": 380,
    "def": 530,
    "crit": 220,
    "skills": [
      {
        "name": "Frost Absorb",
        "cost": 1,
        "description": "Absorbs incoming attack converting it to frozen energy.",
        "damage": 0
      },
      {
        "name": "Glacial Slam",
        "cost": 3,
        "description": "Unleashes absorbed frost energy on all enemies.",
        "damage": 1.9
      }
    ],
    "trumpCard": {
      "name": "Frost Collapse",
      "description": "Collapses frozen energy pulling all enemies into an ice vortex and heals self.",
      "damage": 3.6,
      "effect": "Heals self 30% HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_016",
    "name": "Tomás Herrero",
    "frame": "EMBERWALL",
    "faction": "EMBERVEIL",
    "rank": "C",
    "element": "Fire",
    "effect": "HEATSHIELD",
    "class": "Defender",
    "cardId": "EMB-05-TOMAS",
    "image": "/assets/heroes/hero_016.webp",
    "about": "A battle-hardened shield-bearer of EMBERVEIL who uses his body as a living wall, absorbing volcanic strikes and redirecting that raw heat into explosive counterattacks. He has survived more than any other soldier in the faction.",
    "hp": 7200,
    "atk": 350,
    "def": 580,
    "crit": 200,
    "skills": [
      {
        "name": "Ember Block",
        "cost": 1,
        "description": "Raises a flaming barrier absorbing the next attack.",
        "damage": 0
      },
      {
        "name": "Heat Rebound",
        "cost": 2,
        "description": "Releases absorbed fire energy back at all enemies.",
        "damage": 1.4
      }
    ],
    "trumpCard": {
      "name": "Volcanic Fortress",
      "description": "Transforms into an erupting bastion that stuns all enemies.",
      "damage": 2.8,
      "effect": "Shields team against next 2 hits; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_017",
    "name": "Mikhail Zimin",
    "frame": "SNOWMENDER",
    "faction": "GLACIARA",
    "rank": "C",
    "element": "Ice",
    "effect": "FROSTMEND",
    "class": "Support",
    "cardId": "GLA-04-MIKHAIL",
    "image": "/assets/heroes/hero_017.webp",
    "about": "A field medic of GLACIARA who channels glacial energy to seal wounds and freeze bleeding in real time. Mikhail has never lost a patient on the battlefield and his presence alone stabilises allied morale under siege.",
    "hp": 4100,
    "atk": 280,
    "def": 310,
    "crit": 220,
    "skills": [
      {
        "name": "Ice Mend",
        "cost": 1,
        "description": "Seals an ally's wounds with restorative frost.",
        "damage": 0
      },
      {
        "name": "Cryo Barrier",
        "cost": 2,
        "description": "Wraps an ally in an icy shield absorbing the next hit.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Glacial Renewal",
      "description": "Floods the field with healing cold, restoring the entire team and granting shields.",
      "damage": 0,
      "effect": "Heals all allies 35% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_018",
    "name": "Nefret Sahar",
    "frame": "MOONFANG",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Moon",
    "effect": "SMITE",
    "class": "Attacker",
    "cardId": "KHE-01-NEFRET",
    "image": "/assets/heroes/hero_018.webp",
    "about": "A moonlit huntress of KHEMARA who stalks the dunes after dark, running down corrupted things with twin blades that drink the night sky. Nefret strikes with blinding speed and is gone before her quarry can register the attack - only a settling of cold sand where she stood remains.",
    "hp": 3500,
    "atk": 530,
    "def": 200,
    "crit": 480,
    "skills": [
      {
        "name": "Moon Fang",
        "cost": 1,
        "description": "A swift moon-edged strike that bites deeper than the dark it came from.",
        "damage": 1.5
      },
      {
        "name": "Crescent Lunge",
        "cost": 3,
        "description": "Carves a crescent of silver light through all enemies in a single charge.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Lunar Execution",
      "description": "Channels the full weight of the desert moon into one annihilating strike that mends her allies.",
      "damage": 4.8,
      "effect": "Heals all allies 25% HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_019",
    "name": "Bryn Gallagher",
    "frame": "THORNBLADE",
    "faction": "VERDANIA",
    "rank": "C",
    "element": "Nature",
    "effect": "TOXIN",
    "class": "Attacker",
    "cardId": "VRD-04-BRYN",
    "image": "/assets/heroes/hero_019.webp",
    "about": "A scrappy brawler from VERDANIA's outer villages who forged his fighting style from the wild itself. Bryn's strikes carry venomous thorn energy that lingers long after the blow lands.",
    "hp": 3800,
    "atk": 470,
    "def": 190,
    "crit": 420,
    "skills": [
      {
        "name": "Thorn Stab",
        "cost": 1,
        "description": "A fast strike that injects a stacking toxin.",
        "damage": 1.3
      },
      {
        "name": "Briar Rush",
        "cost": 2,
        "description": "Charges through enemies leaving a trail of poison thorns.",
        "damage": 1.7
      }
    ],
    "trumpCard": {
      "name": "Toxic Overgrowth",
      "description": "Detonates every toxin on the field in a catastrophic nature burst, stunning all enemies.",
      "damage": 3.8,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_020",
    "name": "Kael Ashworth",
    "frame": "VOIDWEAVER",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "NULLIFY",
    "class": "Mage",
    "cardId": "VMK-03-KAEL",
    "image": "/assets/heroes/hero_020.webp",
    "about": "A void scholar of VOIDMARK who studies and weaponises dimensional tears. Kael folds space around enemies, trapping them in pocket dimensions where his spells arrive from every angle simultaneously.",
    "hp": 3100,
    "atk": 600,
    "def": 165,
    "crit": 555,
    "skills": [
      {
        "name": "Rift Bolt",
        "cost": 2,
        "description": "Fires a bolt through folded space hitting twice.",
        "damage": 2.2
      },
      {
        "name": "Null Zone",
        "cost": 3,
        "description": "Creates a void field silencing all enemies inside.",
        "damage": 1.6
      }
    ],
    "trumpCard": {
      "name": "Dimensional Collapse",
      "description": "Collapses pocket dimensions on all enemies simultaneously, stunning them.",
      "damage": 4.6,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_021",
    "name": "Renata Ceniza",
    "frame": "ASHCALLER",
    "faction": "EMBERVEIL",
    "rank": "B",
    "element": "Fire",
    "effect": "SCORCH",
    "class": "Mage",
    "cardId": "EMB-06-RENATA",
    "image": "/assets/heroes/hero_021.webp",
    "about": "A volatile mage of EMBERVEIL who weaponises wildfire in its purest form. Renata refuses to contain her power - she simply feeds it. Enemies who survive her opening blast rarely last long enough to regret it.",
    "hp": 2900,
    "atk": 555,
    "def": 155,
    "crit": 510,
    "skills": [
      {
        "name": "Scorch",
        "cost": 2,
        "description": "Ignites a target in uncontrolled wildfire dealing heavy damage.",
        "damage": 1.8
      },
      {
        "name": "Pyroclasm",
        "cost": 3,
        "description": "Releases an explosive burst of ash and flame over all enemies.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Inferno Bloom",
      "description": "Erupts into a column of pure wildfire consuming all enemies.",
      "damage": 4,
      "effect": "Burns all enemies 3 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_022",
    "name": "Rubén Coraza",
    "frame": "IRONVEIL",
    "faction": "EMBERVEIL",
    "rank": "A",
    "element": "Fire",
    "effect": "FLAMEGUARD",
    "class": "Defender",
    "cardId": "EMB-07-RUBEN",
    "image": "/assets/heroes/hero_022.webp",
    "about": "Steel-willed guardian of EMBERVEIL's inner fortress. Rubén's armour was forged in active volcanic vents and redirects incoming damage as superheated steam capable of blinding and burning attackers.",
    "hp": 6800,
    "atk": 370,
    "def": 560,
    "crit": 210,
    "skills": [
      {
        "name": "Cinder Guard",
        "cost": 1,
        "description": "Hardens volcanic armour, reducing the next hit taken.",
        "damage": 0
      },
      {
        "name": "Molten Rebound",
        "cost": 2,
        "description": "Releases absorbed heat as a burst of scalding steam at all enemies.",
        "damage": 1.4
      }
    ],
    "trumpCard": {
      "name": "Slag Fortress",
      "description": "Encases himself in volcanic slag and erupts outward, shielding allies and stunning all enemies.",
      "damage": 2.5,
      "effect": "Shields team against next 2 hits; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_023",
    "name": "Paloma Chispa",
    "frame": "SPARKWEAVE",
    "faction": "EMBERVEIL",
    "rank": "C",
    "element": "Lightning",
    "effect": "VOLTMEND",
    "class": "Support",
    "cardId": "EMB-08-PALOMA",
    "image": "/assets/heroes/hero_023.webp",
    "about": "A chaotic young field operative of EMBERVEIL who channels electrical surges to disrupt enemies and jolt fallen allies back into action. Her unpredictable energy is difficult to anticipate even for her own team.",
    "hp": 3600,
    "atk": 290,
    "def": 230,
    "crit": 240,
    "skills": [
      {
        "name": "Volt Jolt",
        "cost": 1,
        "description": "Fires a disruptive electric pulse that delays an enemy's next action.",
        "damage": 0.6
      },
      {
        "name": "Static Surge",
        "cost": 2,
        "description": "Overcharges an ally boosting their ATK and CRIT for 1 turn.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Chain Revival",
      "description": "Sends a full electrical surge through all allies restoring momentum and stunning all enemies.",
      "damage": 0,
      "effect": "Heals all allies 25% HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_024",
    "name": "Volkov",
    "frame": "GLACIALBLADE",
    "faction": "GLACIARA",
    "rank": "S",
    "element": "Ice",
    "effect": "SHATTER",
    "class": "Attacker",
    "cardId": "GLA-05-VOLKOV",
    "image": "/assets/heroes/hero_024.webp",
    "about": "The lone wolf hunter of GLACIARA - an anomaly among the faction's warrior elite. Volkov moves through frozen terrain like a living shadow, shattering targets with strikes that exploit the brittleness extreme cold creates in both armour and flesh.",
    "hp": 3400,
    "atk": 620,
    "def": 200,
    "crit": 570,
    "skills": [
      {
        "name": "Ice Shatter",
        "cost": 2,
        "description": "A devastating strike that shatters frozen targets for bonus damage.",
        "damage": 2.1
      },
      {
        "name": "Freeze Point",
        "cost": 3,
        "description": "Drops temperature to absolute zero at a single point, obliterating the target.",
        "damage": 2.8
      }
    ],
    "trumpCard": {
      "name": "Absolute Zero",
      "description": "Flash-freezes all enemies and detonates the crystallised forms.",
      "damage": 5.3,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_025",
    "name": "Snezhana Buran",
    "frame": "WINTERMAGE",
    "faction": "GLACIARA",
    "rank": "A",
    "element": "Ice",
    "effect": "BLIZZARD",
    "class": "Mage",
    "cardId": "GLA-06-SNEZHANA",
    "image": "/assets/heroes/hero_025.webp",
    "about": "A storm-class mage of GLACIARA who conjures blizzards on command. Snezhana prefers overwhelming area coverage over precision - her philosophy is simple: if enough ice falls, nothing survives.",
    "hp": 2950,
    "atk": 595,
    "def": 160,
    "crit": 545,
    "skills": [
      {
        "name": "Hailstorm",
        "cost": 2,
        "description": "Conjures a barrage of ice shards striking all enemies.",
        "damage": 1.9
      },
      {
        "name": "Ice Burst",
        "cost": 3,
        "description": "Concentrates storm energy into a single devastating ice explosion.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Blizzard Apex",
      "description": "Summons a catastrophic blizzard that buries the entire enemy formation and heals allies.",
      "damage": 4.5,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_026",
    "name": "Boris Kamenev",
    "frame": "FROSTBARK",
    "faction": "GLACIARA",
    "rank": "B",
    "element": "Ice",
    "effect": "ICEWALL",
    "class": "Defender",
    "cardId": "GLA-07-BORIS",
    "image": "/assets/heroes/hero_026.webp",
    "about": "A colossus of GLACIARA who has spent decades hardening his body against arctic extremes. Boris's skin crystallises under sustained cold, forming natural ice-plate armour that grows denser with every hit he absorbs.",
    "hp": 6900,
    "atk": 345,
    "def": 550,
    "crit": 195,
    "skills": [
      {
        "name": "Ice Armour",
        "cost": 1,
        "description": "Crystallises the skin reducing incoming damage for 1 turn.",
        "damage": 0
      },
      {
        "name": "Tundra Slam",
        "cost": 2,
        "description": "Drives a fist of glacial force into the ground stunning nearby enemies.",
        "damage": 1.4
      }
    ],
    "trumpCard": {
      "name": "Crystal Bastion",
      "description": "Crystallises completely then detonates outward in a storm of ice shrapnel, healing allies and stunning enemies.",
      "damage": 2.2,
      "effect": "Heals all allies 25% HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_027",
    "name": "Cassius Lux",
    "frame": "PRISMWEAVE",
    "faction": "SUNSPIRE",
    "rank": "A",
    "element": "Holy",
    "effect": "ILLUMINATE",
    "class": "Mage",
    "cardId": "SUN-05-CASSIUS",
    "image": "/assets/heroes/hero_027.webp",
    "about": "A prism mage of SUNSPIRE who treats combat as a geometry problem. Cassius refracts raw sunlight into precision arcane beams - find the correct angle and a single ray can pass through an entire enemy formation.",
    "hp": 3050,
    "atk": 610,
    "def": 160,
    "crit": 560,
    "skills": [
      {
        "name": "Prism Ray",
        "cost": 2,
        "description": "Refracts a solar beam through multiple enemies in a line.",
        "damage": 2.2
      },
      {
        "name": "Solar Cascade",
        "cost": 3,
        "description": "Splits light into a cascade of beams hitting all enemies.",
        "damage": 1.8
      }
    ],
    "trumpCard": {
      "name": "Divine Prism",
      "description": "Refracts sunlight through every target simultaneously with blinding intensity, stunning all enemies.",
      "damage": 5,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_028",
    "name": "Livia Santoro",
    "frame": "HOLYMEND",
    "faction": "SUNSPIRE",
    "rank": "B",
    "element": "Holy",
    "effect": "SANCTIFY",
    "class": "Support",
    "cardId": "SUN-06-LIVIA",
    "image": "/assets/heroes/hero_028.webp",
    "about": "A gentle but unyielding cleric of SUNSPIRE who channels divine light into restorative energy. Livia believes no wound is beyond healing and will exhaust herself entirely before allowing an ally to fall.",
    "hp": 4000,
    "atk": 260,
    "def": 290,
    "crit": 210,
    "skills": [
      {
        "name": "Holy Mend",
        "cost": 1,
        "description": "Channels sacred light to restore a significant portion of an ally's HP.",
        "damage": 0
      },
      {
        "name": "Sanctify",
        "cost": 2,
        "description": "Purges debuffs from an ally and grants a brief damage reduction shield.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Aureate Miracle",
      "description": "Floods the battlefield with divine golden light cleansing all allies.",
      "damage": 0,
      "effect": "Heals all allies 30% HP; removes all debuffs from team"
    }
  },
  {
    "id": "hero_029",
    "name": "Leona Solare",
    "frame": "SOLARSTRIKE",
    "faction": "SUNSPIRE",
    "rank": "C",
    "element": "Holy",
    "effect": "SMITE",
    "class": "Attacker",
    "cardId": "SUN-07-LEONA",
    "image": "/assets/heroes/hero_029.webp",
    "about": "A young zealot of SUNSPIRE still proving herself on the battlefield. Leona's technique is raw and forward, compensating for inexperience with relentless aggression and an unshakeable conviction that sunlight favours the bold.",
    "hp": 3600,
    "atk": 450,
    "def": 195,
    "crit": 390,
    "skills": [
      {
        "name": "Holy Strike",
        "cost": 1,
        "description": "A direct holy-charged blow dealing solid single-target damage.",
        "damage": 1.3
      },
      {
        "name": "Zealot Rush",
        "cost": 2,
        "description": "Charges forward with radiant force striking all enemies in a line.",
        "damage": 1.6
      }
    ],
    "trumpCard": {
      "name": "Righteous Smite",
      "description": "Channels total conviction into a singular devastating holy blow that heals allies.",
      "damage": 3.5,
      "effect": "Heals all allies 25% HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_030",
    "name": "Fiadh",
    "frame": "VERDANTFANG",
    "faction": "VERDANIA",
    "rank": "S",
    "element": "Nature",
    "effect": "THORNSTRIKE",
    "class": "Attacker",
    "cardId": "VRD-05-FIADH",
    "image": "/assets/heroes/hero_030.webp",
    "about": "The Thornborn Queen of VERDANIA - crowned by the jungle itself during the Night of Blossoming when the eldest trees flowered for the first time in a thousand years. Fiadh feels every wound dealt to her forest as if carved into her own skin. On the battlefield she is the forest: she does not hunt her targets, she becomes the terrain they are standing on.",
    "hp": 4000,
    "atk": 780,
    "def": 225,
    "crit": 720,
    "sovereign": true,
    "skills": [
      {
        "name": "Thorn Blitz",
        "cost": 2,
        "description": "Launches a sovereign volley of tracking thorns that pierce through elemental defenses.",
        "damage": 2.4
      },
      {
        "name": "Predator's Mark",
        "cost": 3,
        "description": "Marks an enemy - all subsequent attacks deal massively increased damage to them.",
        "damage": 3
      }
    ],
    "trumpCard": {
      "name": "Verdant Fury",
      "description": "Becomes one with the ancient forest and erupts in a sovereign storm of lethal thorns across the entire battlefield.",
      "damage": 5.8,
      "effect": "Stuns all enemies 1 turn; heals self 20% HP"
    }
  },
  {
    "id": "hero_031",
    "name": "Niamh Quinn",
    "frame": "BLOOMKEEP",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "REJUVENATE",
    "class": "Support",
    "cardId": "VRD-06-NIAMH",
    "image": "/assets/heroes/hero_031.webp",
    "about": "A wandering herbalist of VERDANIA carrying centuries of forest medicine. Niamh can accelerate a fighter's natural healing to impossible rates, closing critical wounds mid-combat using only what grows underfoot.",
    "hp": 4200,
    "atk": 270,
    "def": 300,
    "crit": 220,
    "skills": [
      {
        "name": "Herbal Mend",
        "cost": 1,
        "description": "Applies a fast-acting herbal compress restoring ally HP over time.",
        "damage": 0
      },
      {
        "name": "Overgrowth Pulse",
        "cost": 2,
        "description": "Sends a wave of nature energy boosting DEF for all allies.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Ancient Remedy",
      "description": "Channels primordial forest healing energy through the entire team.",
      "damage": 0,
      "effect": "Heals all allies 40% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_032",
    "name": "Rhona Byrne",
    "frame": "VERDANSHIELD",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Nature",
    "effect": "BARKSKIN",
    "class": "Defender",
    "cardId": "VRD-07-RHONA",
    "image": "/assets/heroes/hero_032.webp",
    "about": "A sentinel of VERDANIA who has merged her body with living bark and vine. Rhona's skin is reinforced by constantly regenerating plant-matter - the longer a fight lasts, the harder she becomes to damage.",
    "hp": 6500,
    "atk": 330,
    "def": 545,
    "crit": 180,
    "skills": [
      {
        "name": "Bark Shield",
        "cost": 1,
        "description": "Hardens bark armour around self or an ally absorbing the next attack.",
        "damage": 0
      },
      {
        "name": "Vine Bind",
        "cost": 2,
        "description": "Ensnares all enemies with animated vines slowing their attacks.",
        "damage": 0.6
      }
    ],
    "trumpCard": {
      "name": "Living Fortress",
      "description": "Merges fully with the forest floor and erupts with crushing organic growth, stunning all enemies.",
      "damage": 2.8,
      "effect": "Grants a shield equal to 30% max HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_033",
    "name": "Titania",
    "frame": "ABYSSALTHRONE",
    "faction": "VOIDMARK",
    "rank": "S",
    "element": "Void",
    "effect": "ABYSS",
    "class": "Defender",
    "cardId": "VMK-04-TITANIA",
    "image": "/assets/heroes/hero_033.webp",
    "about": "The unopposed sovereign of VOIDMARK - a void-forged empress whose body has merged with the abyss itself and been reborn stronger. Titania does not debate authority; in a realm where reality tears without warning, she is the only constant. Three challenger factions dissolved attempting to dethrone her. Their names are no longer spoken in VOIDMARK, which here is a fate more feared than death.",
    "hp": 9500,
    "atk": 500,
    "def": 800,
    "crit": 300,
    "sovereign": true,
    "skills": [
      {
        "name": "Void Absorb",
        "cost": 1,
        "description": "Pulls an incoming attack into sovereign void space, nullifying damage and storing energy for a counter-burst.",
        "damage": 0
      },
      {
        "name": "Abyss Release",
        "cost": 3,
        "description": "Detonates all accumulated void energy in a sovereign-class area blast that ignores DEF.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Void Sovereignty",
      "description": "Asserts absolute dominion over the void - opens a sovereign rift beneath all enemies and detonates the dimensional collapse inward.",
      "damage": 5.8,
      "effect": "Stuns all enemies 2 turns; heals self 25% HP"
    }
  },
  {
    "id": "hero_034",
    "name": "Nerissa Marlowe",
    "frame": "SOULBIND",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "LIFEDRAIN",
    "class": "Support",
    "cardId": "VMK-05-NERISSA",
    "image": "/assets/heroes/hero_034.webp",
    "about": "A void medium of VOIDMARK who siphons life force from the battlefield and redistributes it among her allies. Nerissa walks the thin line between healing and corruption - her methods work, and she stopped asking whether they should.",
    "hp": 3800,
    "atk": 350,
    "def": 250,
    "crit": 300,
    "skills": [
      {
        "name": "Life Siphon",
        "cost": 1,
        "description": "Drains life energy from an enemy, partially restoring an ally's HP.",
        "damage": 0.8
      },
      {
        "name": "Null Transfer",
        "cost": 2,
        "description": "Extracts void energy from the environment and channels it into ally DEF.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Mass Absorption",
      "description": "Drains life simultaneously from all enemies and channels it into the team.",
      "damage": 1.8,
      "effect": "Deals damage to all enemies; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_036",
    "name": "Vesper",
    "frame": "SPIRITWEAVE",
    "faction": "VOIDMARK",
    "rank": "S",
    "element": "Void",
    "effect": "VOID_CURSE",
    "class": "Mage",
    "cardId": "VMK-07-VESPER",
    "image": "/assets/heroes/hero_036.webp",
    "about": "A supreme void mage of VOIDMARK whose consciousness partially inhabits the space between dimensions. Vesper doesn't merely cast spells - she rewrites the rules of engagement at will, cursing entire formations and bending dimensional law to her design.",
    "hp": 3400,
    "atk": 640,
    "def": 200,
    "crit": 580,
    "skills": [
      {
        "name": "Void Curse",
        "cost": 2,
        "description": "Brands an enemy with a consuming void mark that amplifies all damage they receive for 2 turns.",
        "damage": 2.2
      },
      {
        "name": "Soul Fracture",
        "cost": 3,
        "description": "Shatters a target's connection to reality dealing catastrophic void damage that bypasses barriers.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Abyssal Dominion",
      "description": "Asserts total dominion over the void, consuming all enemies in dimensional energy.",
      "damage": 5.5,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_035",
    "name": "Davina Blackwood",
    "frame": "DARKBLADE",
    "faction": "VOIDMARK",
    "rank": "B",
    "element": "Void",
    "effect": "PHANTOMSTRIKE",
    "class": "Attacker",
    "cardId": "VMK-06-DAVINA",
    "image": "/assets/heroes/hero_035.webp",
    "about": "A reckless void-brawler who has partially phased herself into the void to strike from inside the space between moments. Davina hits targets from angles that do not exist, making her virtually impossible to guard against.",
    "hp": 3500,
    "atk": 510,
    "def": 180,
    "crit": 470,
    "skills": [
      {
        "name": "Phase Strike",
        "cost": 1,
        "description": "Attacks from within the void bypassing standard defences.",
        "damage": 1.5
      },
      {
        "name": "Rend Reality",
        "cost": 2,
        "description": "Tears a rift through the target dealing damage across multiple planes.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "Dimensional Assault",
      "description": "Enters full void-phase and delivers a relentless barrage of phased strikes, stunning all enemies.",
      "damage": 4,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_037",
    "name": "Zimoslava",
    "frame": "FROZENTHRONE",
    "faction": "GLACIARA",
    "rank": "S",
    "element": "Ice",
    "effect": "SOVEREIGNTY",
    "class": "Mage",
    "cardId": "GLA-08-ZIMOSLAVA",
    "image": "/assets/heroes/hero_037.webp",
    "about": "The original sovereign who built GLACIARA from nothing and sacrificed her throne to seal an elder darkness that would have consumed the realm. Crystallized into legend for centuries, she has awakened to find pretenders sitting her seat. Her power does not ask for recognition - it simply makes every other ice mage in the world feel like they are standing in snow while she commands the glacier itself.",
    "hp": 3500,
    "atk": 780,
    "def": 185,
    "crit": 710,
    "sovereign": true,
    "skills": [
      {
        "name": "Sovereign Frost",
        "cost": 2,
        "description": "Releases ice of absolute sovereign authority, freezing and shattering target defenses simultaneously.",
        "damage": 2.6
      },
      {
        "name": "Glacial Decree",
        "cost": 3,
        "description": "Issues a sovereign decree in absolute zero - all enemies take ice damage and have DEF reduced 30%.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Throne of Eternal Ice",
      "description": "Manifests the original frozen throne of GLACIARA, devastating all enemies with sovereign-class absolute zero that no resistance can reduce.",
      "damage": 6,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_038",
    "name": "Veyra Sorin",
    "frame": "VOIDWEAVE",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "VOID_PULSE",
    "class": "Mage",
    "cardId": "VMK-08-VEYRA",
    "image": "/assets/heroes/hero_038.webp",
    "about": "A former scholar of forbidden void texts who crossed the line between knowledge and corruption. Veyra no longer reads the void - she channels it directly through her nervous system, making her spells faster and more unpredictable than any trained mage alive.",
    "hp": 3100,
    "atk": 560,
    "def": 185,
    "crit": 510,
    "skills": [
      {
        "name": "Void Pulse",
        "cost": 2,
        "description": "Sends a concentrated burst of void energy that phases through physical defenses entirely.",
        "damage": 2
      },
      {
        "name": "Null Cascade",
        "cost": 3,
        "description": "Cascades void energy through all enemies in a destructive dimensional wave.",
        "damage": 1.7
      }
    ],
    "trumpCard": {
      "name": "Forbidden Singularity",
      "description": "Collapses void energy into a singularity that implodes outward through all enemies at once.",
      "damage": 4.8,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_039",
    "name": "Caelan Doria",
    "frame": "DAWNGUARD",
    "faction": "SUNSPIRE",
    "rank": "A",
    "element": "Holy",
    "effect": "DIVINE_SHIELD",
    "class": "Defender",
    "cardId": "SUN-08-CAELAN",
    "image": "/assets/heroes/hero_039.webp",
    "about": "A veteran paladin of SUNSPIRE who has survived more campaigns than any other active knight on the line. Caelan fights from the front with practiced precision - his sacred shield has absorbed blows that would have ended entire battles, and he has never once lost a comrade under his watch.",
    "hp": 6800,
    "atk": 350,
    "def": 580,
    "crit": 220,
    "skills": [
      {
        "name": "Sacred Guard",
        "cost": 1,
        "description": "Raises a divine barrier blocking the next attack targeting any ally.",
        "damage": 0
      },
      {
        "name": "Holy Judgment",
        "cost": 2,
        "description": "Strikes with consecrated force, dealing damage and taunting the target for 1 turn.",
        "damage": 1.5
      }
    ],
    "trumpCard": {
      "name": "Bastion of Dawn",
      "description": "Erects an impenetrable wall of holy light across the entire team then shatters it outward in a devastating wave.",
      "damage": 3.2,
      "effect": "Shields entire team absorbing up to 40% max HP in damage; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_041",
    "name": "Fiorenza",
    "frame": "EMBRATHRONE",
    "faction": "EMBERVEIL",
    "rank": "S",
    "element": "Fire",
    "effect": "SOVEREIGN_FLAME",
    "class": "Mage",
    "cardId": "EMB-09-FIORENZA",
    "image": "/assets/heroes/hero_041.webp",
    "about": "The original sovereign of EMBERVEIL - swallowed by a dimensional rift three cycles of the volcanic moon ago while sealing a catastrophic breach in the realm. She has returned carrying fire from the other side of dimensions, fire that burns even those immune to ordinary flame. Marisol surrendered the throne the moment Fiorenza crossed the border. Neither of them had to say a word.",
    "hp": 4200,
    "atk": 820,
    "def": 235,
    "crit": 750,
    "sovereign": true,
    "skills": [
      {
        "name": "Sovereign Flame",
        "cost": 2,
        "description": "Channels fire from beyond dimensions - pierces all resistances and burns through elemental defenses.",
        "damage": 2.6
      },
      {
        "name": "Dimensional Pyre",
        "cost": 3,
        "description": "Opens a rift of sovereign fire that scorches all enemies simultaneously, ignoring barriers.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Emberveil Apocalypse",
      "description": "Unleashes the full sovereign fire of EMBERVEIL - dimensional flame consuming all enemies in a cataclysm nothing was built to resist.",
      "damage": 6.2,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_040",
    "name": "Larisa Ledova",
    "frame": "FROSTDANCER",
    "faction": "GLACIARA",
    "rank": "A",
    "element": "Ice",
    "effect": "SHATTER",
    "class": "Attacker",
    "cardId": "GLA-09-LARISA",
    "image": "/assets/heroes/hero_040.webp",
    "about": "A blade-dancer of GLACIARA who incorporates ice formation into her fighting style mid-combat. Larisa conjures frost platforms and ice constructs as she moves, using the environment she creates against her opponents in the same unbroken fluid motion.",
    "hp": 3300,
    "atk": 540,
    "def": 195,
    "crit": 490,
    "skills": [
      {
        "name": "Frost Dance",
        "cost": 2,
        "description": "A rapid series of ice-enhanced blade strikes hitting a single target multiple times in sequence.",
        "damage": 2
      },
      {
        "name": "Shatter Waltz",
        "cost": 3,
        "description": "Creates an ice formation around the enemy then detonates it for massive concentrated damage.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Absolute Choreography",
      "description": "Performs a final devastating dance sequence that shatters the entire battlefield in a storm of razor ice.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_042",
    "name": "Oksana Khrustaleva",
    "frame": "FROSTPULSE",
    "faction": "GLACIARA",
    "rank": "A",
    "element": "Ice",
    "effect": "CHILL",
    "class": "Mage",
    "cardId": "GLA-10-OKSANA",
    "image": "/assets/heroes/hero_042.webp",
    "about": "A crystallomancer from GLACIARA's deep research halls who spent three years studying the mathematical patterns of ice formation before ever casting her first offensive spell. Oksana treats combat like a theorem - isolate the variable, reduce it to zero. Her precision is unnerving, her frost constructs are flawless, and she has never once needed to improvise.",
    "hp": 3100,
    "atk": 520,
    "def": 188,
    "crit": 472,
    "skills": [
      {
        "name": "Frost Pulse",
        "cost": 2,
        "description": "Fires a concentrated crystalline pulse that slows movement and shatters enemy armour.",
        "damage": 2
      },
      {
        "name": "Blizzard Spike",
        "cost": 3,
        "description": "Summons a precision barrage of ice spikes raining across all enemies simultaneously.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Frozen Theorem",
      "description": "Plunges the battlefield into absolute crystalline zero, encasing all enemies in flawless ice constructs.",
      "damage": 4.4,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_043",
    "name": "Kitsuri",
    "frame": "FOXFLAME",
    "faction": "EMBERVEIL",
    "rank": "S",
    "element": "Fire",
    "effect": "BURN",
    "class": "Attacker",
    "cardId": "EMB-10-KITSURI",
    "image": "/assets/heroes/hero_043.webp",
    "about": "A nine-tailed kitsune swordswoman from EMBERVEIL's volcanic highlands who inherited her fox spirit bloodline's fire through every one of her tails - each one a different harmonic of the same impossible blaze. Kitsuri fights with the fluidity of fox spirit and the lethality of a blade master. Her enemies rarely live long enough to notice they saw the same move twice. When her ninth tail ignites, the battle is already over.",
    "hp": 4100,
    "atk": 730,
    "def": 248,
    "crit": 665,
    "skills": [
      {
        "name": "Fox Blaze",
        "cost": 2,
        "description": "Dashes through the enemy with a fire-wreathed blade strike, leaving a burning trail across the field.",
        "damage": 2.2
      },
      {
        "name": "Nine-Tail Slash",
        "cost": 3,
        "description": "Channels all nine tails into a devastatingly fast multi-hit sword combo that cannot be blocked.",
        "damage": 2.8
      }
    ],
    "trumpCard": {
      "name": "Kitsune Inferno",
      "description": "All nine tails ignite simultaneously - the kitsune vanishes and reappears behind every enemy at once in a single catastrophic firestorm.",
      "damage": 5.2,
      "effect": "Burns all enemies 3 turns; 50% chance to stun each target; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_044",
    "name": "Fenella Sloane",
    "frame": "WINDSPRITE",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Wind",
    "effect": "SHATTER",
    "class": "Mage",
    "cardId": "VRD-08-FENELLA",
    "image": "/assets/heroes/hero_044.webp",
    "about": "A fox-spirit mage from VERDANIA's windswept canopy who draws power from the boundary between forest gale and root-bound earth. Rivals claim she doesn't cast magic - she simply asks the forest and sky to agree, and they always do. Her spells cross wind and nature with a fluidity that feels less like power and more like the forest itself changing its mind at speed.",
    "hp": 3000,
    "atk": 535,
    "def": 182,
    "crit": 485,
    "skills": [
      {
        "name": "Gale Blossom",
        "cost": 2,
        "description": "Whips up a vortex of petals and wind energy, striking all enemies in a spinning arc.",
        "damage": 1.9
      },
      {
        "name": "Fox Wind Strike",
        "cost": 3,
        "description": "Accelerates to wind-speed and delivers a nature-infused strike through defensive barriers.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "Forest Tempest",
      "description": "Unleashes a storm of wind and ancient nature force that sweeps through the entire field without distinction.",
      "damage": 4.2,
      "effect": "Heals team 15% max HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_045",
    "name": "Umbra Nightingale",
    "frame": "DARKWEAVE",
    "faction": "VOIDMARK",
    "rank": "B",
    "element": "Void",
    "effect": "VOID_CURSE",
    "class": "Mage",
    "cardId": "VMK-09-UMBRA",
    "image": "/assets/heroes/hero_045.webp",
    "about": "A void-dark dual-channeler of VOIDMARK who has learned to weaponize the tension between dark energy and void space - the interference pattern between two incompatible forces, turned into a controlled detonation. Umbra doesn't choose between darkness and void; she operates in the frequency where they cancel each other out, and that frequency is the most destructive thing in either spectrum.",
    "hp": 3200,
    "atk": 500,
    "def": 172,
    "crit": 455,
    "skills": [
      {
        "name": "Dark Void Pulse",
        "cost": 2,
        "description": "Channels dark and void energy simultaneously, creating a destructive interference burst at the target.",
        "damage": 1.8
      },
      {
        "name": "Shadow Rift",
        "cost": 3,
        "description": "Opens a rift between dark and void dimensions, pulling the target through for heavy dimensional damage.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Interference Collapse",
      "description": "Generates a catastrophic interference pattern between dark and void energy that implodes across the entire field.",
      "damage": 4,
      "effect": "Stuns all enemies 2 turns; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_046",
    "name": "Kaidan Voss",
    "frame": "VOIDCANNON",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "SHADOW",
    "class": "Attacker",
    "cardId": "VMK-10-KAIDAN",
    "image": "/assets/heroes/hero_046.webp",
    "about": "Commander of VOIDMARK's void-elite rapid response force - a unit that operates beyond formal orders, answering only to the sovereign's silence and its own doctrine of absolute superiority. Kaidan leads through example and ends debates with results. His void-enhanced firearms don't fire conventional rounds; they fire collapsed dimensional points that arrive before they are shot.",
    "hp": 4400,
    "atk": 498,
    "def": 258,
    "crit": 445,
    "skills": [
      {
        "name": "Void Round",
        "cost": 1,
        "description": "Fires a collapsed dimensional point that bypasses physical armour entirely.",
        "damage": 1.5
      },
      {
        "name": "Commander's Volley",
        "cost": 3,
        "description": "Signals the elite force for a synchronized void-round volley striking all enemies at once.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Sovereign's Command",
      "description": "Issues the ultimate elite force command - every void-round in the arsenal fires simultaneously across all targets.",
      "damage": 4.2,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_047",
    "name": "Morvan Delacroix",
    "frame": "ABYSSSCRIBE",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "LIFEDRAIN",
    "class": "Mage",
    "cardId": "VMK-11-MORVAN",
    "image": "/assets/heroes/hero_047.webp",
    "about": "A dark arts scholar of VOIDMARK who decided that understanding darkness was insufficient - immersion was required. Morvan has spent more time inside theoretical dark-space constructs than in the physical world, which has given his spells a depth that most dark mages cannot reach from the outside. He still writes detailed academic papers on every spell he casts. After the battle.",
    "hp": 3300,
    "atk": 545,
    "def": 185,
    "crit": 495,
    "skills": [
      {
        "name": "Dark Codex",
        "cost": 2,
        "description": "Channels a textbook-precise dark energy sequence that drains the target's life force.",
        "damage": 1.9
      },
      {
        "name": "Abyss Theorem",
        "cost": 3,
        "description": "Applies a theoretically perfect dark-space formula to all enemies simultaneously.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Living Dissertation",
      "description": "Releases a complete academic dark-energy construct - every formula, every derivation, detonated at once across all enemies.",
      "damage": 4.5,
      "effect": "Drains life from all enemies healing self 30% max HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_048",
    "name": "Aeron Lucente",
    "frame": "DAWNBLADE",
    "faction": "SUNSPIRE",
    "rank": "A",
    "element": "Holy",
    "effect": "SMITE",
    "class": "Attacker",
    "cardId": "SUN-09-AERON",
    "image": "/assets/heroes/hero_048.webp",
    "about": "A dual-blade paladin of SUNSPIRE who rejected the shield-and-hammer tradition of his order to develop a faster, more aggressive interpretation of holy combat. Aeron's twin blades consecrate everything they touch and cut through dimensional barriers as easily as armour. His superior officers initially objected to his methods. They stopped objecting after the third campaign.",
    "hp": 4100,
    "atk": 508,
    "def": 238,
    "crit": 462,
    "skills": [
      {
        "name": "Twin Consecration",
        "cost": 2,
        "description": "Strikes with both holy blades simultaneously, consecrating the target with concentrated divine force.",
        "damage": 2
      },
      {
        "name": "Dawn Crossing",
        "cost": 3,
        "description": "Crosses both blades to channel a compressed holy beam that detonates at the target.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Dual Sanctification",
      "description": "Both blades ignite with pure divine radiance - Aeron performs a continuous sanctification slash across every enemy on the field.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_049",
    "name": "Celia Faro",
    "frame": "HOLYFLAME",
    "faction": "SUNSPIRE",
    "rank": "B",
    "element": "Holy",
    "effect": "BLESSING",
    "class": "Support",
    "cardId": "SUN-10-CELIA",
    "image": "/assets/heroes/hero_049.webp",
    "about": "One of three fire-born sisters - born beside Renata Ceniza of EMBERVEIL and Brigid Fallon of VERDANIA, and uniquely blessed with holy light where her sisters carry fire and earth. Celia joined SUNSPIRE not to leave her family behind but because the light pulled in a direction she could not ignore. She has spent years learning that illumination and fire have always had the same source, just different forms.",
    "hp": 3500,
    "atk": 345,
    "def": 242,
    "crit": 292,
    "skills": [
      {
        "name": "Holy Warmth",
        "cost": 1,
        "description": "Channels holy light into the most wounded ally, restoring HP and granting brief damage resistance.",
        "damage": 0
      },
      {
        "name": "Flame Blessing",
        "cost": 2,
        "description": "Weaves holy light with the ember warmth of her bloodline, healing all allies and boosting their next strike.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Threefold Radiance",
      "description": "Calls upon the bond of three sisters - fire, earth, and holy light combined - flooding the battlefield with restorative sacred energy.",
      "damage": 1.8,
      "effect": "Heals all allies 35% max HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_050",
    "name": "Brigid Fallon",
    "frame": "EARTHFLAME",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "TOXIN",
    "class": "Mage",
    "cardId": "VRD-09-BRIGID",
    "image": "/assets/heroes/hero_050.webp",
    "about": "One of three fire-born sisters - born alongside Renata Ceniza of EMBERVEIL and Celia Faro of SUNSPIRE, and drawn from birth toward the root rather than the flame. Brigid watched one sister burn everything she touches and another illuminate it, and chose instead to grow things. She is gentle in three languages and devastating in all of them.",
    "hp": 3700,
    "atk": 435,
    "def": 218,
    "crit": 388,
    "skills": [
      {
        "name": "Root Surge",
        "cost": 2,
        "description": "Calls roots from the earth to bind and poison a single target, draining their vitality into the soil.",
        "damage": 1.8
      },
      {
        "name": "Bloom Cascade",
        "cost": 3,
        "description": "Unleashes a wave of toxic bloom spores across all enemies, poisoning everything they touch.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Earthfire Bloom",
      "description": "Draws on the fire of her bloodline through earth and root - a volcanic bloom erupts across the entire field, healing allies and stunning all enemies.",
      "damage": 3.8,
      "effect": "Heals allies 20% max HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_051",
    "name": "Corvina",
    "frame": "VOIDCOUNSEL",
    "faction": "VOIDMARK",
    "rank": "S",
    "element": "Void",
    "effect": "VOID_CURSE",
    "class": "Mage",
    "cardId": "VMK-12-CORVINA",
    "image": "/assets/heroes/hero_051.webp",
    "about": "VOIDMARK's sovereign Titania keeps no inner council - except one. Corvina is not royal by blood, not second in command, not a general; she is simply the one person in VOIDMARK whose counsel Titania listens to without exception or question. No one knows what was said between them the day that arrangement began. No one has dared to ask. Corvina's void magic is quiet and absolute - exactly like the trust that grants her access to the abyss throne.",
    "hp": 3400,
    "atk": 640,
    "def": 202,
    "crit": 580,
    "skills": [
      {
        "name": "Counsel of Void",
        "cost": 2,
        "description": "Delivers a precise void curse drawn from sovereign-level void doctrine, reducing the target's power at its source.",
        "damage": 2.1
      },
      {
        "name": "Abyss Edict",
        "cost": 3,
        "description": "Issues a void edict of sovereign authority, collapsing an enemy's dimensional integrity entirely.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Sovereign's Will",
      "description": "Channels the full weight of Titania's sovereign void authority - a devastating edict that stuns all enemies and restores the caster.",
      "damage": 5.2,
      "effect": "Stuns all enemies 2 turns; heals self 20% HP"
    }
  },
  {
    "id": "hero_052",
    "name": "Lucia Solano",
    "frame": "SOLARWEAVE",
    "faction": "SUNSPIRE",
    "rank": "B",
    "element": "Holy",
    "effect": "BLESSING",
    "class": "Mage",
    "cardId": "SUN-11-LUCIA",
    "image": "/assets/heroes/hero_052.webp",
    "about": "A solar-channeling mage of SUNSPIRE who built her entire magical vocabulary out of concentrated sunlight before she learned a single offensive spell. Lucia is an expert in the healing science of light frequency and a moderate expert in reducing everything that opposes her to ash. She is considerably more effective at the latter than her academic background suggests.",
    "hp": 3250,
    "atk": 480,
    "def": 185,
    "crit": 432,
    "skills": [
      {
        "name": "Solar Weave",
        "cost": 2,
        "description": "Channels precisely tuned sunlight frequency to damage enemies while restoring the most-injured ally.",
        "damage": 1.8
      },
      {
        "name": "Radiant Burst",
        "cost": 3,
        "description": "Concentrates a full spectrum of solar energy into a singular detonation across all enemies.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Solar Convergence",
      "description": "Draws every wavelength of solar energy into a single convergence point and releases it all at once across the entire field.",
      "damage": 4.2,
      "effect": "Heals all allies 25% max HP; stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_053",
    "name": "Aveline Kerr",
    "frame": "PLUMEWARDEN",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Nature",
    "effect": "THORNSTRIKE",
    "class": "Mage",
    "cardId": "VRD-10-AVELINE",
    "image": "/assets/heroes/hero_053.webp",
    "about": "A nature mage of VERDANIA who arrived at her magical specialty by accident - she was trying to communicate with a wounded crow and ended up channeling the entire forest's awareness through the bird's dying perception. She has never been the same since. Aveline's bird companions function as extensions of her senses, her range, and her power; every spell she casts arrives from an angle that shouldn't be possible.",
    "hp": 3200,
    "atk": 542,
    "def": 188,
    "crit": 492,
    "skills": [
      {
        "name": "Feather Storm",
        "cost": 2,
        "description": "Sends a flock of nature-infused birds to strike from impossible angles no defence can anticipate.",
        "damage": 1.9
      },
      {
        "name": "Raptor Dive",
        "cost": 3,
        "description": "Channels power through her largest bird companion for a devastating nature-force plunge strike at the target.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "Murder of Crows",
      "description": "Calls upon every bird companion at once - a dark tempest of nature-infused wings and thorns descends on all enemies from every direction.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_054",
    "name": "Nefertari",
    "frame": "MOONTHRONE",
    "faction": "KHEMARA",
    "rank": "S",
    "element": "Moon",
    "effect": "MOONLIGHT",
    "class": "Mage",
    "cardId": "KHE-EX-NEFERTARI",
    "image": "/assets/heroes/hero_054.webp",
    "about": "The living moon-queen of KHEMARA - a sand dominion of obelisks, shifting dunes, and silver nights that bows to no other sovereign. Crowned not by daylight but by the full desert moon, Nefertari rules as goddess and pharaoh in one, her word law from the cooling sands to the deepest dunes. She cannot be summoned or won in battle; she descends only for those who seek her court directly, trailing a veil of moonlit dust that turns the night air to silver. To stand before her is to be weighed in the dark.",
    "hp": 4300,
    "atk": 800,
    "def": 240,
    "crit": 740,
    "sovereign": true,
    "shopExclusive": true,
    "skills": [
      {
        "name": "Lunar Verdict",
        "cost": 2,
        "description": "Brands a single enemy under the cold light of the moon - silver judgment that pierces every resistance.",
        "damage": 2.7
      },
      {
        "name": "Duneshroud",
        "cost": 3,
        "description": "Raises a blinding veil of moonlit sand that scours all enemies at once.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Dominion of the Moon",
      "description": "Nefertari draws the full desert moon down over the battlefield - a tide of silver light and singing sand that buries every enemy while its glow mends her court.",
      "damage": 6.3,
      "effect": "Stuns all enemies 2 turns; heals all allies 30% HP"
    }
  },
  {
    "id": "hero_055",
    "name": "Karim Hosni",
    "frame": "DUNECONJURER",
    "faction": "KHEMARA",
    "rank": "C",
    "element": "Sand",
    "effect": "SANDFLAY",
    "class": "Mage",
    "cardId": "KHE-02-KARIM",
    "image": "/assets/heroes/hero_055.webp",
    "about": "A street-born sand conjurer who taught himself the old desert magic from half-buried scrolls salvaged out of collapsed tombs. Raw, untrained, and reckless - but the dunes answer him all the same, and KHEMARA has learned not to mock the boy who can turn an entire street into a swallowing pit of sand.",
    "hp": 2850,
    "atk": 500,
    "def": 150,
    "crit": 470,
    "skills": [
      {
        "name": "Grit Scrawl",
        "cost": 1,
        "description": "Hurls a hastily-drawn glyph that flays a single enemy with razor-edged sand.",
        "damage": 1.4
      },
      {
        "name": "Sandscour Burst",
        "cost": 3,
        "description": "Whips up a sweeping wall of abrasive sand that scours all enemies at once.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "Tomb of Dunes",
      "description": "Collapses the battlefield into a churning grave of sand, dragging every enemy under.",
      "damage": 4.2,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_056",
    "name": "Zubaida Farouk",
    "frame": "GILDEDMATRON",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Moon",
    "effect": "LIFEDRAIN",
    "class": "Mage",
    "cardId": "KHE-03-ZUBAIDA",
    "image": "/assets/heroes/hero_056.webp",
    "about": "The richest woman in KHEMARA - her vaults outshine the royal treasury and her gilded sigils turn an enemy's own vitality into tribute. Wealth, to Zubaida, is simply life that has not yet been collected. She funds the throne, owns half the delta, and has never once been told no.",
    "hp": 3050,
    "atk": 600,
    "def": 165,
    "crit": 560,
    "skills": [
      {
        "name": "Gilded Siphon",
        "cost": 2,
        "description": "Brands a target with a gold sigil that bleeds its life away to the caster.",
        "damage": 1.9
      },
      {
        "name": "Tribute Due",
        "cost": 3,
        "description": "Calls in every debt at once, draining all enemies in cold, reclaiming moonlight.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Midas Reckoning",
      "description": "Encases every enemy in molten gold and reclaims their vitality as tribute to the throne.",
      "damage": 4.8,
      "effect": "Heals all allies 25% HP"
    }
  },
  {
    "id": "hero_057",
    "name": "Hathor Amara",
    "frame": "MIRAGEDANCER",
    "faction": "KHEMARA",
    "rank": "B",
    "element": "Sand",
    "effect": "PARALYSIS",
    "class": "Mage",
    "cardId": "KHE-04-HATHOR",
    "image": "/assets/heroes/hero_057.webp",
    "about": "A temple dancer whose movements are a language older than KHEMARA itself. Those who watch her dance too long forget how to move at all - and by then the sand has already coiled around their ankles. The court calls her art devotion. Her enemies call it the last thing they saw.",
    "hp": 2950,
    "atk": 545,
    "def": 158,
    "crit": 510,
    "skills": [
      {
        "name": "Veil Step",
        "cost": 2,
        "description": "A hypnotic spin that mesmerizes a single enemy as sand coils tight around it.",
        "damage": 1.7
      },
      {
        "name": "Mirage Waltz",
        "cost": 3,
        "description": "Whirls into a storm of sand and silk that disorients all enemies at once.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "Dance of the Forgotten",
      "description": "Performs the final movement no enemy can look away from - a desert trance that roots them where they stand.",
      "damage": 4.4,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_058",
    "name": "Imhotep Rashid",
    "frame": "THRONEWARDEN",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Sand",
    "effect": "SOVEREIGNTY",
    "class": "Defender",
    "cardId": "KHE-05-IMHOTEP",
    "image": "/assets/heroes/hero_058.webp",
    "about": "First advisor and living shield of the moon-throne. Imhotep has counseled three regents and outlived two, and he places himself between KHEMARA's ruler and all harm as a matter of plain arithmetic: the realm needs her, and she needs time. He has never raised his voice. He has never had to.",
    "hp": 7000,
    "atk": 320,
    "def": 575,
    "crit": 180,
    "skills": [
      {
        "name": "Aegis Decree",
        "cost": 1,
        "description": "Raises a hardened sandstone ward that absorbs the next blow aimed at the line.",
        "damage": 0
      },
      {
        "name": "Throneguard",
        "cost": 2,
        "description": "Slams a ceremonial staff to the earth, repelling all enemies with a wall of warding force.",
        "damage": 1.3
      }
    ],
    "trumpCard": {
      "name": "Unbroken Counsel",
      "description": "Raises the full weight of the sovereign's aegis - shielding the court and burying those who dare approach the throne beneath the sand.",
      "damage": 3.8,
      "effect": "Shields the team against the next hit; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_059",
    "name": "Nitocris Sabbagh",
    "frame": "DUNESHADE",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Moon",
    "effect": "PHANTOMSTRIKE",
    "class": "Attacker",
    "cardId": "KHE-06-NITOCRIS",
    "image": "/assets/heroes/hero_059.webp",
    "about": "KHEMARA's quietest law - the blade the throne never admits to owning. Nitocris moves through the dunes like a rumor and leaves only a settling of sand where a target used to breathe. The court does not speak of her. That is precisely how she prefers it.",
    "hp": 3400,
    "atk": 560,
    "def": 195,
    "crit": 600,
    "skills": [
      {
        "name": "Scorpion's Kiss",
        "cost": 1,
        "description": "A lightning-fast khopesh slash that lands before it can be seen.",
        "damage": 1.6
      },
      {
        "name": "Duneshade Ambush",
        "cost": 3,
        "description": "Vanishes into the moonless dark and reappears mid-strike for a devastating blow.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Verdict of the Sands",
      "description": "Delivers the throne's unspoken sentence - a flurry of unseen strikes that buries the battlefield in settling sand.",
      "damage": 4.9,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_060",
    "name": "Thoth Haddad",
    "frame": "EDICTBEARER",
    "faction": "KHEMARA",
    "rank": "B",
    "element": "Moon",
    "effect": "SHATTER",
    "class": "Mage",
    "cardId": "KHE-07-THOTH",
    "image": "/assets/heroes/hero_060.webp",
    "about": "KHEMARA's lawgiver - keeper of the great scales and the edicts carved into obelisk-stone, sworn to the moon under which all verdicts are weighed. When Thoth reads a judgment aloud, the guilty feel their defenses crack like moon-bleached clay long before the sentence ever lands. The law, he insists, is not cruelty. It is simply weight, applied evenly.",
    "hp": 3000,
    "atk": 555,
    "def": 162,
    "crit": 515,
    "skills": [
      {
        "name": "Edict of Ruin",
        "cost": 2,
        "description": "Pronounces a verdict that fractures a single enemy's defenses with a sentence of cold moonlight.",
        "damage": 1.8
      },
      {
        "name": "Scales of Judgment",
        "cost": 3,
        "description": "Weighs all enemies and finds them wanting - answering with a cascade of silver moonfire.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Final Decree",
      "description": "Carves the last law into the night sky; a storm of silver judgment-light shatters and consumes every enemy at once.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_061",
    "name": "Brianna Fenwick",
    "frame": "BRIARFANG",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "THORNSTRIKE",
    "class": "Attacker",
    "cardId": "VRD-11-BRIANNA",
    "image": "/assets/heroes/hero_061.webp",
    "about": "A vine-warrior of the deep VERDANIA thickets who fights with a whip of living briar that answers every strike with a hundred thorns of its own. She grew up wrestling brambles for territory before she ever held a blade, and the forest still remembers her as one of its own.",
    "hp": 3450,
    "atk": 520,
    "def": 210,
    "crit": 480,
    "skills": [
      {
        "name": "Bramble Lash",
        "cost": 1,
        "description": "Whips a barbed vine across a single enemy, thorns catching flesh.",
        "damage": 1.5
      },
      {
        "name": "Thicket Snare",
        "cost": 3,
        "description": "Drags a wall of thorned bramble through the enemy line.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Bramble Reckoning",
      "description": "Calls every root and thorn in reach to converge on the enemy line at once.",
      "damage": 4.3,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_062",
    "name": "Amara Solís",
    "frame": "CRIMSONBLOOM",
    "faction": "EMBERVEIL",
    "rank": "A",
    "element": "Fire",
    "effect": "SCORCH",
    "class": "Mage",
    "cardId": "EMB-11-AMARA",
    "image": "/assets/heroes/hero_062.webp",
    "about": "Named for the red spider lily that blooms only where the dead have passed, Amara carries that same quiet finality into battle - her flame doesn't rage, it simply arrives, and by the time it's noticed the outcome is already decided. EMBERVEIL keeps her at arm's length; even fire respects an ending.",
    "hp": 3150,
    "atk": 565,
    "def": 180,
    "crit": 525,
    "skills": [
      {
        "name": "Higanbana Bloom",
        "cost": 2,
        "description": "Unfurls a blossom of scorching petals across a single target.",
        "damage": 1.8
      },
      {
        "name": "Crimson Requiem",
        "cost": 3,
        "description": "Sets the ground itself alight in a spreading field of red flame.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Equinox of Ash",
      "description": "Every petal she has ever scattered ignites at once, consuming the battlefield in red fire.",
      "damage": 4.7,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_063",
    "name": "Solenne Marchetti",
    "frame": "SOLARLANCE",
    "faction": "SUNSPIRE",
    "rank": "A",
    "element": "Holy",
    "effect": "SMITE",
    "class": "Attacker",
    "cardId": "SUN-12-SOLENNE",
    "image": "/assets/heroes/hero_063.webp",
    "about": "A cathedral-forged lancer who carries a shard of the sun itself in the head of her spear. Solenne was never chosen by prophecy or bloodline - she simply walked into the light one day and it never let her leave.",
    "hp": 4150,
    "atk": 545,
    "def": 245,
    "crit": 575,
    "skills": [
      {
        "name": "Radiant Thrust",
        "cost": 1,
        "description": "A blazing lance strike aimed straight through an enemy's guard.",
        "damage": 1.6
      },
      {
        "name": "Solar Impale",
        "cost": 3,
        "description": "Drives the lance down like a falling star onto a single target.",
        "damage": 2.7
      }
    ],
    "trumpCard": {
      "name": "Zenith Descent",
      "description": "Calls the noonday sun down as a single searing spear that scours every enemy caught beneath it.",
      "damage": 4.9,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_064",
    "name": "Suzu Kagenami",
    "frame": "SHADOWKATANA",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "PHANTOMSTRIKE",
    "class": "Attacker",
    "cardId": "VMK-13-SUZU",
    "image": "/assets/heroes/hero_064.webp",
    "about": "A masterless blade who trained under VOIDMARK's silent dueling halls until her katana strokes stopped casting shadows of their own. She speaks rarely and fights less - one clean draw is usually all she allows an opponent to see.",
    "hp": 3550,
    "atk": 585,
    "def": 220,
    "crit": 615,
    "skills": [
      {
        "name": "Iaijutsu Flicker",
        "cost": 1,
        "description": "A single draw-cut faster than the eye can track.",
        "damage": 1.6
      },
      {
        "name": "Void Kesa-giri",
        "cost": 3,
        "description": "A diagonal cut through the fabric of shadow itself.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Thousand Shadow Cut",
      "description": "Draws and sheathes her blade a thousand times in the space of one breath, striking every enemy before the sound of the first cut arrives.",
      "damage": 4.8,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_065",
    "name": "Roisin Leary",
    "frame": "BLOSSOMBLADE",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "SHATTER",
    "class": "Attacker",
    "cardId": "VRD-12-ROISIN",
    "image": "/assets/heroes/hero_065.webp",
    "about": "A wandering swordswoman who fell in love with her katana before she ever fell in love with a person, and VERDANIA's groves taught her to carve through wood, stone, and armor alike with the same unhurried grace. She sharpens the blade with river stones and nothing else.",
    "hp": 3600,
    "atk": 505,
    "def": 225,
    "crit": 460,
    "skills": [
      {
        "name": "Falling Petal Cut",
        "cost": 1,
        "description": "A precise sword strike that drifts in like a falling blossom before it lands.",
        "damage": 1.5
      },
      {
        "name": "Hollow Grove Slash",
        "cost": 2,
        "description": "A wide arcing cut that cleaves straight through an enemy's defenses.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "Bloomfall Execution",
      "description": "A single perfect draw-cut released in a shower of falling petals that shatters every guard in its path.",
      "damage": 4.4,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_066",
    "name": "Xian Meiying",
    "frame": "JADELOTUS",
    "faction": "SUNSPIRE",
    "rank": "A",
    "element": "Holy",
    "effect": "RADIANCE",
    "class": "Support",
    "cardId": "SUN-13-XIAN",
    "image": "/assets/heroes/hero_066.webp",
    "about": "A temple healer from the sunlit terraces beyond SUNSPIRE's eastern gate, Meiying carries a folding fan painted with lotus blossoms that glow warm gold whenever she calls on it. Her chants are older than the temple itself, borrowed from a homeland she still hums the songs of.",
    "hp": 3900,
    "atk": 420,
    "def": 260,
    "crit": 350,
    "skills": [
      {
        "name": "Lotus Ward",
        "cost": 1,
        "description": "Blesses the lowest-HP ally with warm restorative light.",
        "damage": 0
      },
      {
        "name": "Golden Fan Strike",
        "cost": 2,
        "description": "A sweeping fan gust that carries sunlit force into an enemy.",
        "damage": 1.5
      }
    ],
    "trumpCard": {
      "name": "Jade Lotus Dawn",
      "description": "Unfolds her fan fully, filling the field with restorative dawn-light while radiant petals bind every enemy in place.",
      "damage": 3.4,
      "effect": "Stuns all enemies 1 turn; heals all allies 30% HP"
    }
  },
  {
    "id": "hero_067",
    "name": "Bastet Nour",
    "frame": "PANTHERVEIL",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Moon",
    "effect": "SHADOW",
    "class": "Attacker",
    "cardId": "KHE-08-BASTET",
    "image": "/assets/heroes/hero_067.webp",
    "about": "Bastet moves through KHEMARA's moonlit alleys like a shadow given claws - silent, sure-footed, and never quite where you last looked. She keeps no court and answers to no throne, only the hunt.",
    "hp": 3450,
    "atk": 575,
    "def": 205,
    "crit": 590,
    "skills": [
      {
        "name": "Claw Rake",
        "cost": 1,
        "description": "A blur of raking claws across a single target.",
        "damage": 1.5
      },
      {
        "name": "Moonlit Pounce",
        "cost": 2,
        "description": "Leaps from the shadow of the moon to strike unseen.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Nine Lives Reckoning",
      "description": "Strikes as though every life she has ever spent converges into one relentless assault on every enemy.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_068",
    "name": "Inés Flores",
    "frame": "SINDOORFLAME",
    "faction": "EMBERVEIL",
    "rank": "B",
    "element": "Fire",
    "effect": "BURN",
    "class": "Mage",
    "cardId": "EMB-12-INES",
    "image": "/assets/heroes/hero_068.webp",
    "about": "Named for the Sanskrit word for fire, Inés carries the sacred flame-craft of her homeland into EMBERVEIL's ranks, painting sigils of living ember across the air with a fingertip. The old rites she was taught as a child still hold - the flame answers her like family.",
    "hp": 3100,
    "atk": 515,
    "def": 168,
    "crit": 470,
    "skills": [
      {
        "name": "Ember Sigil",
        "cost": 1,
        "description": "Draws a burning sigil that scorches a single enemy.",
        "damage": 1.4
      },
      {
        "name": "Flamewreath Chant",
        "cost": 2,
        "description": "Chants an old rite that wreathes a target in climbing fire.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "Rite of the Undying Flame",
      "description": "Completes the oldest fire-rite she knows, wreathing every enemy in flame that refuses to be extinguished.",
      "damage": 4.3,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_069",
    "name": "Montu Anwar",
    "frame": "WARBRAND",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Sand",
    "effect": "SHATTER",
    "class": "Attacker",
    "cardId": "KHE-09-MONTU",
    "image": "/assets/heroes/hero_069.webp",
    "about": "Montu carries a sand-forged khopesh said to have broken more shields than any weapon in KHEMARA's armory. He was a border soldier before the throne ever noticed him, and he still fights like the border is all that matters.",
    "hp": 4300,
    "atk": 555,
    "def": 255,
    "crit": 470,
    "skills": [
      {
        "name": "Sandforged Cleave",
        "cost": 1,
        "description": "A heavy khopesh cleave backed by grinding sand.",
        "damage": 1.6
      },
      {
        "name": "Warbrand Sunder",
        "cost": 3,
        "description": "A two-handed strike meant to break shields, not just flesh.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Frontier's Reckoning",
      "description": "Channels every border battle he has ever survived into one shield-shattering advance across the entire enemy line.",
      "damage": 4.8,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_070",
    "name": "Serqet Ashkar",
    "frame": "SHADOWSCARAB",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Moon",
    "effect": "LIFEDRAIN",
    "class": "Mage",
    "cardId": "KHE-10-SERQET",
    "image": "/assets/heroes/hero_070.webp",
    "about": "Trained in KHEMARA's hidden scarab cults, Serqet kills with a whispered verse rather than a blade - a curse that drinks a target's strength before they even register the wound. The throne has used her twice. Both times, no one else was told.",
    "hp": 3050,
    "atk": 570,
    "def": 175,
    "crit": 540,
    "skills": [
      {
        "name": "Scarab's Whisper",
        "cost": 2,
        "description": "A murmured curse that siphons vitality from a single enemy.",
        "damage": 1.8
      },
      {
        "name": "Hollowing Verse",
        "cost": 3,
        "description": "A deeper curse that drains the life from all enemies at once.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Requiem of the Scarab",
      "description": "Speaks the final verse of the old cult, drawing the life from every enemy on the field into herself.",
      "damage": 4.5,
      "effect": "Heals all allies 25% HP"
    }
  },
  {
    "id": "hero_071",
    "name": "Nyxa Hollis",
    "frame": "BLINDSEER",
    "faction": "VOIDMARK",
    "rank": "B",
    "element": "Void",
    "effect": "REJUVENATE",
    "class": "Support",
    "cardId": "VMK-14-NYXA",
    "image": "/assets/heroes/hero_071.webp",
    "about": "Blindfolded since the day VOIDMARK's oracles found her staring too long into the dark between stars, Nyxa sees nothing and everything at once. She guides her allies not by sight but by the shape of the silence around them.",
    "hp": 3650,
    "atk": 360,
    "def": 235,
    "crit": 300,
    "skills": [
      {
        "name": "Veiled Guidance",
        "cost": 1,
        "description": "Murmurs an unseen blessing that mends the lowest-HP ally.",
        "damage": 0
      },
      {
        "name": "Whispering Dark",
        "cost": 2,
        "description": "Reaches through the blindfold's dark to unsettle a single enemy.",
        "damage": 1.4
      }
    ],
    "trumpCard": {
      "name": "Eyes of the Unseen",
      "description": "Opens her sight fully for one terrible instant, mending every ally with what she finds in the dark between worlds.",
      "damage": 3,
      "effect": "Heals all allies 35% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_072",
    "name": "Selvira Marrow",
    "frame": "SILVERVEIL",
    "faction": "VOIDMARK",
    "rank": "B",
    "element": "Void",
    "effect": "VOID_PULSE",
    "class": "Mage",
    "cardId": "VMK-15-SELVIRA",
    "image": "/assets/heroes/hero_072.webp",
    "about": "Her silver hair is said to have turned that color the night she first opened a rift into VOIDMARK's deep current - and never quite closed it all the way. She speaks softly, but the space around her never stops humming.",
    "hp": 3150,
    "atk": 510,
    "def": 172,
    "crit": 480,
    "skills": [
      {
        "name": "Silver Rift",
        "cost": 1,
        "description": "Opens a small tear in the void that lashes a single enemy.",
        "damage": 1.5
      },
      {
        "name": "Duskharrow Pulse",
        "cost": 2,
        "description": "Sends a pulse of unraveling dark through the enemy line.",
        "damage": 1.9
      }
    ],
    "trumpCard": {
      "name": "Unclosing Rift",
      "description": "Widens the rift she has never fully sealed, letting the void itself pour out over every enemy.",
      "damage": 4.2,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_073",
    "name": "Yuliana Belova",
    "frame": "FROSTGAZE",
    "faction": "GLACIARA",
    "rank": "A",
    "element": "Ice",
    "effect": "BLIZZARD",
    "class": "Mage",
    "cardId": "GLA-11-YULIANA",
    "image": "/assets/heroes/hero_073.webp",
    "about": "Her white hair and pale blue eyes have led more than one traveler to mistake her for a spirit of the GLACIARA peaks rather than a living mage. She has stopped correcting them - it makes the blizzards she calls a little easier to explain.",
    "hp": 3050,
    "atk": 590,
    "def": 182,
    "crit": 555,
    "skills": [
      {
        "name": "Frostgaze Lance",
        "cost": 2,
        "description": "A piercing shard of ice loosed with a single cold stare.",
        "damage": 1.9
      },
      {
        "name": "Whiteout Veil",
        "cost": 3,
        "description": "Buries a target in a sudden, blinding blizzard.",
        "damage": 2.3
      }
    ],
    "trumpCard": {
      "name": "Eternal Whiteout",
      "description": "Calls the full fury of the high peaks down in a blizzard that swallows the entire battlefield.",
      "damage": 4.9,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_074",
    "name": "Katarina Studenova",
    "frame": "ICEBASTION",
    "faction": "GLACIARA",
    "rank": "B",
    "element": "Ice",
    "effect": "CHILL",
    "class": "Defender",
    "cardId": "GLA-12-KATARINA",
    "image": "/assets/heroes/hero_074.webp",
    "about": "A frontier guard who packed her shield with lake-ice each winter until, over enough winters, the ice simply stopped melting. GLACIARA's border villages sleep easier knowing Katarina's shield is between them and the cold beyond.",
    "hp": 6600,
    "atk": 330,
    "def": 555,
    "crit": 200,
    "skills": [
      {
        "name": "Frostwall Guard",
        "cost": 1,
        "description": "Raises a wall of packed ice that absorbs the next blow aimed at the line.",
        "damage": 0
      },
      {
        "name": "Glacial Slam",
        "cost": 2,
        "description": "Slams her ice-bound shield into an enemy, chilling them to the bone.",
        "damage": 1.3
      }
    ],
    "trumpCard": {
      "name": "Frostmere Bulwark",
      "description": "Anchors the full weight of the frozen lake behind her shield and drives it through the enemy line.",
      "damage": 3.7,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_075",
    "name": "Sorcha Fitzgerald",
    "frame": "PETALKEEPER",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "BLOOM",
    "class": "Support",
    "cardId": "VRD-13-SORCHA",
    "image": "/assets/heroes/hero_075.webp",
    "about": "A flower-tender from VERDANIA's terraced gardens who learned that the right bloom, pressed to a wound at the right moment, heals faster than any potion. She still wears fresh petals in her hair, even into battle.",
    "hp": 3700,
    "atk": 355,
    "def": 245,
    "crit": 305,
    "skills": [
      {
        "name": "Petal Mend",
        "cost": 1,
        "description": "Presses a healing blossom to the lowest-HP ally.",
        "damage": 0
      },
      {
        "name": "Garden's Bite",
        "cost": 2,
        "description": "Sends a flurry of thorned petals at a single enemy.",
        "damage": 1.4
      }
    ],
    "trumpCard": {
      "name": "Full Bloom Benediction",
      "description": "Calls every flower in the garden to open at once, mending the whole team in a wave of fragrant petals.",
      "damage": 2.8,
      "effect": "Heals all allies 40% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_076",
    "name": "Fiona Blake",
    "frame": "MIRAGEBLOOM",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Nature",
    "effect": "ENTANGLEMENT",
    "class": "Mage",
    "cardId": "VRD-14-FIONA",
    "image": "/assets/heroes/hero_076.webp",
    "about": "VERDANIA's court illusionist, Faelira weaves living vines and false light so seamlessly that even she sometimes loses track of which grove is real. Enemies who chase her mirages usually find the vines were never an illusion at all.",
    "hp": 3200,
    "atk": 550,
    "def": 185,
    "crit": 505,
    "skills": [
      {
        "name": "Mirage Bloom",
        "cost": 2,
        "description": "Conjures a false blossoming grove that lashes out at a single enemy.",
        "damage": 1.8
      },
      {
        "name": "Vinebound Illusion",
        "cost": 3,
        "description": "Ensnares the battlefield itself in illusion-woven vines.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Grand Illusion of the Grove",
      "description": "Unveils an entire phantom forest around the enemy line, roots and all, before it closes in for real.",
      "damage": 4.4,
      "effect": "Stuns all enemies 2 turns"
    }
  },
  {
    "id": "hero_077",
    "name": "Noctura Ashby",
    "frame": "SHADOWTREAD",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "SHADOW",
    "class": "Attacker",
    "cardId": "VMK-16-NOCTURA",
    "image": "/assets/heroes/hero_077.webp",
    "about": "Noctura learned to walk between shadows before she learned to walk in daylight, slipping from one patch of dark to the next until distance stopped meaning anything to her. VOIDMARK's deepest corridors are the only place she has ever felt fully seen.",
    "hp": 3500,
    "atk": 580,
    "def": 215,
    "crit": 605,
    "skills": [
      {
        "name": "Shadowtread Strike",
        "cost": 1,
        "description": "Steps through a patch of shadow to land a blow from an unexpected angle.",
        "damage": 1.6
      },
      {
        "name": "Veilshade Cross-cut",
        "cost": 2,
        "description": "A crossing double-strike delivered from two shadows at once.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Endless Shadow Walk",
      "description": "Steps through every shadow on the battlefield at once, striking each enemy before any of them see her move.",
      "damage": 4.7,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_078",
    "name": "Sopdet Karam",
    "frame": "HOURGLASSTHRONE",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Sand",
    "effect": "SHATTER",
    "class": "Mage",
    "cardId": "KHE-11-SOPDET",
    "image": "/assets/heroes/hero_078.webp",
    "about": "Named for the faint star her grandmother taught her to find in the dark, Sopdet commands sand the way others command clocks - pouring it forward, backward, or simply still, until an enemy's defenses erode like a shore under an unseen tide.",
    "hp": 3150,
    "atk": 560,
    "def": 178,
    "crit": 530,
    "skills": [
      {
        "name": "Hourglass Fracture",
        "cost": 2,
        "description": "Reverses a moment of time around a single enemy, cracking their guard.",
        "damage": 1.8
      },
      {
        "name": "Eroding Tide",
        "cost": 3,
        "description": "Pours a slow, relentless tide of sand through the enemy line.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Turn of the Endless Hour",
      "description": "Empties the last grain of an hourglass older than KHEMARA itself, burying every enemy under centuries of settling sand.",
      "damage": 4.7,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_079",
    "name": "Varek",
    "frame": "DUSKSYNDICATE",
    "faction": "VOIDMARK",
    "rank": "S",
    "element": "Dark",
    "effect": "INTIMIDATION",
    "class": "Mage",
    "cardId": "VMK-17-VAREK",
    "image": "/assets/heroes/hero_079.webp",
    "about": "Varek built VOIDMARK's underworld syndicate from a single debt collected in the dark, and now every favor owed in the city eventually comes due to him. He speaks softly because he has never needed to raise his voice - the shadows do the negotiating for him.",
    "hp": 3600,
    "atk": 660,
    "def": 195,
    "crit": 615,
    "skills": [
      {
        "name": "Backroom Deal",
        "cost": 1,
        "description": "Makes a single enemy an offer they cannot refuse, striking hard enough to press the point home.",
        "damage": 1.5
      },
      {
        "name": "Omerta Decree",
        "cost": 3,
        "description": "Calls in every debt VOIDMARK owes him at once, crushing a target beneath the weight of obligation.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "The Whole Family Answers",
      "description": "Summons every shadow in his employ to strike all enemies at once, freezing the battlefield in fear.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_080",
    "name": "Selene Noir",
    "frame": "NIGHTHEX",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Dark",
    "effect": "WITCHBANE",
    "class": "Mage",
    "cardId": "VMK-18-SELENE",
    "image": "/assets/heroes/hero_080.webp",
    "about": "Selene brews her curses in the same kitchen where she cooks dinner for Varek, the two of them splitting VOIDMARK's underworld between his contracts and her hexes without ever needing to argue about it. She jokes that she fell for him the moment he didn't flinch at one of her poisons.",
    "hp": 3050,
    "atk": 585,
    "def": 170,
    "crit": 545,
    "skills": [
      {
        "name": "Cursed Sip",
        "cost": 1,
        "description": "Slips a bitter hex into a single enemy, poisoning them from the inside out.",
        "damage": 1.4
      },
      {
        "name": "Widow's Bloom",
        "cost": 3,
        "description": "Blooms a toxic hex across a single enemy that spreads with every heartbeat.",
        "damage": 2.3
      }
    ],
    "trumpCard": {
      "name": "Coven's Last Word",
      "description": "Unleashes every curse she has ever brewed at once, poisoning the entire enemy line.",
      "damage": 4.3,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_081",
    "name": "Rafael Infierno",
    "frame": "INFERNOBLADE",
    "faction": "EMBERVEIL",
    "rank": "A",
    "element": "Fire",
    "effect": "INFERNOEDGE",
    "class": "Attacker",
    "cardId": "EMB-13-RAFAEL",
    "image": "/assets/heroes/hero_081.webp",
    "about": "Rafael carries a greatsword too heavy for most EMBERVEIL warriors to lift, tempered in a forge fire that has never once been allowed to go out. He measures a fight's difficulty by how many strikes it takes before the blade starts to glow.",
    "hp": 3400,
    "atk": 605,
    "def": 205,
    "crit": 500,
    "skills": [
      {
        "name": "Cleaving Ember",
        "cost": 1,
        "description": "A heavy, sweeping slash that leaves a trail of embers burning across the target.",
        "damage": 1.5
      },
      {
        "name": "Forgebreaker",
        "cost": 3,
        "description": "Swings his greatsword through molten momentum, splitting a single enemy's guard wide open.",
        "damage": 2.7
      }
    ],
    "trumpCard": {
      "name": "The Furnace Never Cools",
      "description": "Swings his blade in a full molten arc, catching every enemy in the resulting firestorm.",
      "damage": 4.5,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_082",
    "name": "Eamon Thorne",
    "frame": "OAKWARDEN",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Wood",
    "effect": "OAKWARD",
    "class": "Defender",
    "cardId": "VRD-15-EAMON",
    "image": "/assets/heroes/hero_082.webp",
    "about": "Thorne planted himself between VERDANIA's oldest grove and every threat that has come for it, and centuries of bark have grown over the scars to prove he never once stepped aside. Enemies describe hitting him as swinging at a mountain that remembers being a tree.",
    "hp": 6900,
    "atk": 350,
    "def": 565,
    "crit": 195,
    "skills": [
      {
        "name": "Rootbound Guard",
        "cost": 1,
        "description": "Plants his shield like a root, hardening his stance against the next attack.",
        "damage": 0
      },
      {
        "name": "Timberfall Slam",
        "cost": 2,
        "description": "Drives his shield into the ground like a falling trunk, rattling every enemy nearby.",
        "damage": 1.4
      }
    ],
    "trumpCard": {
      "name": "The Grove Remembers",
      "description": "Calls on centuries of rooted patience, slamming his shield down hard enough to shake the whole battlefield.",
      "damage": 2.8,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_083",
    "name": "Riven Castellane",
    "frame": "VOIDREAVER",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "ABYSSEDGE",
    "class": "Attacker",
    "cardId": "VMK-19-RIVEN",
    "image": "/assets/heroes/hero_083.webp",
    "about": "Riven's blade was forged in a rift that never fully closed, and it still hums with the void it was pulled from. He duels alone by choice, having long since run out of VOIDMARK swordsmen willing to face him twice.",
    "hp": 3150,
    "atk": 615,
    "def": 185,
    "crit": 560,
    "skills": [
      {
        "name": "Rift Cut",
        "cost": 1,
        "description": "A single slash drawn from the still-open rift in his blade.",
        "damage": 1.6
      },
      {
        "name": "Voidedge Requiem",
        "cost": 3,
        "description": "Channels the abyss through his blade for a strike meant to end the duel outright.",
        "damage": 2.7
      }
    ],
    "trumpCard": {
      "name": "The Rift Remembers Me",
      "description": "Opens the wound in his blade fully, cutting every enemy on the field with a single motion.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_084",
    "name": "Thutmose",
    "frame": "CHRONOVEIL",
    "faction": "KHEMARA",
    "rank": "S",
    "element": "Time",
    "effect": "TIMEDILATION",
    "class": "Mage",
    "cardId": "KHE-12-THUTMOSE",
    "image": "/assets/heroes/hero_084.webp",
    "about": "Thutmose reads KHEMARA's history the way others read a clock face, and has learned to bend the space between one second and the next just enough to win a fight before it starts. He insists he isn't rewinding time - he's simply refusing to let it catch up.",
    "hp": 3500,
    "atk": 670,
    "def": 200,
    "crit": 605,
    "skills": [
      {
        "name": "Fractured Second",
        "cost": 2,
        "description": "Splits a single moment in two, striking before the enemy's reaction ever arrives.",
        "damage": 1.8
      },
      {
        "name": "Borrowed Hourglass",
        "cost": 3,
        "description": "Steals a stretch of time from a single enemy, slowing them to a crawl as he strikes.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "The Hour That Never Was",
      "description": "Unwinds time across the entire battlefield just long enough to land a blow on everyone in it.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_085",
    "name": "Meret Al-Zahir",
    "frame": "DUNEWALTZ",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Sand",
    "effect": "SANDVEIL",
    "class": "Attacker",
    "cardId": "KHE-13-MERET",
    "image": "/assets/heroes/hero_085.webp",
    "about": "Meret moves across KHEMARA's dunes like the sand itself is dancing with her, each spin kicking up a blade-edge of grit sharp enough to part armor. She has never lost a duel fought on open sand.",
    "hp": 2950,
    "atk": 595,
    "def": 165,
    "crit": 565,
    "skills": [
      {
        "name": "Whirling Dune Step",
        "cost": 1,
        "description": "A spinning strike that kicks up a blade-edge of sand against a single enemy.",
        "damage": 1.5
      },
      {
        "name": "Sirocco Waltz",
        "cost": 3,
        "description": "A dizzying dance through a sandstorm of her own making, cracking a single enemy's armor.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Dance of the Open Dunes",
      "description": "Spins through the entire battlefield at once, scouring every enemy's defenses to grit.",
      "damage": 4.5,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_086",
    "name": "Seshat Najm",
    "frame": "FATEWEAVER",
    "faction": "KHEMARA",
    "rank": "B",
    "element": "Moon",
    "effect": "FATEBIND",
    "class": "Support",
    "cardId": "KHE-14-SESHAT",
    "image": "/assets/heroes/hero_086.webp",
    "about": "Seshat reads a person's fate in the shift of moonlight across scattered bones, and has never once told a client the whole truth of what she saw. KHEMARA's court fears her prophecies more than its enemies' armies.",
    "hp": 3850,
    "atk": 300,
    "def": 280,
    "crit": 250,
    "skills": [
      {
        "name": "Bone Reading",
        "cost": 1,
        "description": "Scatters moonlit bones to read a single enemy's fate, and nudges it toward misfortune.",
        "damage": 1.1
      },
      {
        "name": "Foretold Ruin",
        "cost": 2,
        "description": "Speaks a single enemy's downfall aloud, weakening their resolve before it even happens.",
        "damage": 1.6
      }
    ],
    "trumpCard": {
      "name": "The Ending I Already Saw",
      "description": "Reveals every enemy's fate at once, and none of them like how the story ends.",
      "damage": 3.2,
      "effect": "Stuns all enemies 2 turns"
    }
  },
  {
    "id": "hero_087",
    "name": "Yume Kurogane",
    "frame": "MOONLESSBLADE",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Dark",
    "effect": "NIGHTBLADE",
    "class": "Attacker",
    "cardId": "VMK-20-YUME",
    "image": "/assets/heroes/hero_087.webp",
    "about": "Yume trained in VOIDMARK's darkest hours until she could cross a moonless room without a single footstep landing loud enough to hear. Her katana has a name, but she has never told anyone what it is.",
    "hp": 2900,
    "atk": 610,
    "def": 160,
    "crit": 575,
    "skills": [
      {
        "name": "Silent Draw",
        "cost": 1,
        "description": "A soundless katana draw that lands before the target registers she has moved.",
        "damage": 1.6
      },
      {
        "name": "Moonless Cut",
        "cost": 2,
        "description": "Vanishes into shadow and reappears mid-strike, blade first.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "One Name, One Cut",
      "description": "Crosses the entire battlefield in a single silent motion, cutting down every enemy in her path.",
      "damage": 4.7,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_088",
    "name": "Lorcan Quill",
    "frame": "SWIFTFANG",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Wind",
    "effect": "SWIFTTHORN",
    "class": "Attacker",
    "cardId": "VRD-16-LORCAN",
    "image": "/assets/heroes/hero_088.webp",
    "about": "Lorcan carries a dagger for every leaf that ever fell in his corner of VERDANIA's forest, or so the story goes - no one has ever moved fast enough to count him drawing them. He treats a duel as a conversation best finished before the other side realizes it started.",
    "hp": 3050,
    "atk": 600,
    "def": 170,
    "crit": 555,
    "skills": [
      {
        "name": "Falling Leaf Strike",
        "cost": 1,
        "description": "A quick dagger flick timed to a falling leaf, striking a single enemy before it hits the ground.",
        "damage": 1.5
      },
      {
        "name": "Thousand-Leaf Flurry",
        "cost": 2,
        "description": "A blur of dagger throws that catches a single enemy from every angle at once.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "The Whole Forest Falls",
      "description": "Throws every dagger he carries at once, raining thorned steel across the entire enemy line.",
      "damage": 4.4,
      "effect": "Stuns all enemies 1 turn"
    }
  },
  {
    "id": "hero_089",
    "name": "Elowen Doherty",
    "frame": "BLOOMWARDEN",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "HEARTBLOOM",
    "class": "Support",
    "cardId": "VRD-17-ELOWEN",
    "image": "/assets/heroes/hero_089.webp",
    "about": "Elowen tends VERDANIA's wounded the way she tends her garden, patient enough to coax life back into anything that still has a single green shoot left in it. Soldiers say her hands smell like spring no matter the season.",
    "hp": 4050,
    "atk": 275,
    "def": 295,
    "crit": 215,
    "skills": [
      {
        "name": "Petal Mend",
        "cost": 1,
        "description": "Coaxes a bloom of healing petals over the lowest-HP ally.",
        "damage": 0
      },
      {
        "name": "Garden's Grace",
        "cost": 2,
        "description": "Wraps an ally in living vines that knit their wounds shut.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Full Bloom",
      "description": "Blankets the entire team in a wave of restorative spring growth, mending every wound at once.",
      "damage": 0,
      "effect": "Heals all allies 35% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_090",
    "name": "Valen",
    "frame": "RIFTWALKER",
    "faction": "VOIDMARK",
    "rank": "S",
    "element": "Void",
    "effect": "ECLIPSEDGE",
    "class": "Attacker",
    "cardId": "VMK-21-VALEN",
    "image": "/assets/heroes/hero_090.webp",
    "about": "Found as a newborn at the center of a frozen crater nineteen years before the first recorded breach - the first thing to ever cross between worlds, long before anyone had a name for what a rift even was. His green eyes see fractures in reality no one else can, and his broken black katana repairs itself one rune at a time with every threat he puts down. He never wanted to be a legend. He just wanted something worth protecting.",
    "hp": 3600,
    "atk": 660,
    "def": 195,
    "crit": 600,
    "skills": [
      {
        "name": "Eclipsed Cut",
        "cost": 2,
        "description": "A single riftborn slash that cuts through armor and dimension alike.",
        "damage": 2
      },
      {
        "name": "Fracture Line",
        "cost": 3,
        "description": "Opens a line of unstable rift-space beneath all enemies, tearing through their defenses at once.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "The Last Answer",
      "description": "Every crack in the Eclipsed Edge opens at once - a single riftwalking strike across all enemies, answering for everything he has ever protected.",
      "damage": 5,
      "effect": "Stuns all enemies 1 turn; heals all allies 25% HP"
    }
  },
  {
    "id": "hero_091",
    "name": "Kessa Renfield",
    "frame": "CIRCUITFANG",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "CIRCUIT_RIP",
    "class": "Attacker",
    "cardId": "VMK-22-KESSA",
    "image": "/assets/heroes/hero_091.webp",
    "about": "Rebuilt from the wreckage of a VOIDMARK research accident that should have killed her twice, Kessa's arm was replaced with a rift-forged blade limb that cuts along fault lines invisible to the naked eye. She remembers neither her old name nor her old face, only the sister who still calls her by both.",
    "hp": 4300,
    "atk": 545,
    "def": 235,
    "crit": 475,
    "skills": [
      {
        "name": "Fault Cut",
        "cost": 1,
        "description": "A precise rift-blade slash that finds structural weak points in armor.",
        "damage": 1.4
      },
      {
        "name": "Sheer Line",
        "cost": 3,
        "description": "Drives her blade along an invisible fault line, rending defenses wide open.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "Absolute Fracture",
      "description": "Channels her full rift-forged limb into one line that splits every enemy formation at once.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_092",
    "name": "Vhalla Corvane",
    "frame": "HELLWEAVE",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "DEMON_BRAND",
    "class": "Mage",
    "cardId": "VMK-23-VHALLA",
    "image": "/assets/heroes/hero_092.webp",
    "about": "A demon-blooded conjurer born in the collapsed sublevels beneath VOIDMARK's capital, Vhalla treats every curse as a conversation and every enemy as an argument she intends to win. Her horns hum faintly whenever a lie is spoken nearby - which, in VOIDMARK, is often.",
    "hp": 2950,
    "atk": 600,
    "def": 160,
    "crit": 545,
    "skills": [
      {
        "name": "Brand of Ruin",
        "cost": 2,
        "description": "Marks an enemy with a demonic sigil that saps their strength.",
        "damage": 2
      },
      {
        "name": "Infernal Verdict",
        "cost": 3,
        "description": "Passes demonic judgment on a target in a burst of hellfire-void energy.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "Grimhorn's Reckoning",
      "description": "Opens a chorus of demonic voices that curse every enemy on the field at once.",
      "damage": 4.8,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_093",
    "name": "Emeric Thurstan",
    "frame": "DREAMWALKER",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "DREAM_SNARE",
    "class": "Mage",
    "cardId": "VMK-24-EMERIC",
    "image": "/assets/heroes/hero_093.webp",
    "about": "A dream walker who slips into enemy minds mid-battle, planting nightmares that lag a heartbeat behind reality. Emeric has not slept in his own dreams for years, preferring to wander other people's instead.",
    "hp": 3000,
    "atk": 585,
    "def": 158,
    "crit": 535,
    "skills": [
      {
        "name": "Nightmare Seed",
        "cost": 2,
        "description": "Plants a waking nightmare in the target's mind.",
        "damage": 1.9
      },
      {
        "name": "Dream Collapse",
        "cost": 3,
        "description": "Collapses a fabricated dreamscape onto the enemy all at once.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "The Unwaking Hour",
      "description": "Draws every enemy into one shared nightmare that refuses to end.",
      "damage": 4.5,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_094",
    "name": "Saoirse Kavanagh",
    "frame": "WILDFLARE",
    "faction": "VERDANIA",
    "rank": "A",
    "element": "Nature",
    "effect": "SPRING_ZEAL",
    "class": "Support",
    "cardId": "VRD-18-SAOIRSE",
    "image": "/assets/heroes/hero_094.webp",
    "about": "An elf of VERDANIA's outer canopy whose temperament runs hotter than her forest kin ever expected from something bound to root and leaf. She mends wounds the way she argues - fast, fierce, and impossible to refuse.",
    "hp": 3900,
    "atk": 305,
    "def": 265,
    "crit": 285,
    "skills": [
      {
        "name": "Kindled Bloom",
        "cost": 1,
        "description": "A flare of restorative warmth mends an ally's wounds.",
        "damage": 0
      },
      {
        "name": "Wildheart Surge",
        "cost": 2,
        "description": "Fans an ember of vitality through an ally, boosting their resilience.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Everbloom Wildfire",
      "description": "Releases a surge of fierce, life-giving warmth across the whole team.",
      "damage": 0,
      "effect": "Heals all allies 35% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_095",
    "name": "Aiko Shiraishi",
    "frame": "NEUROSPARK",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "NEURAL_OVERLOAD",
    "class": "Mage",
    "cardId": "VMK-25-AIKO",
    "image": "/assets/heroes/hero_095.webp",
    "about": "The other survivor of the same VOIDMARK lab accident that remade her sister Kessa, Aiko's mind was rewired instead of her body - she now perceives probability the way others perceive color. She keeps a countdown of every day since the lab burned; she has never told anyone what number it is on.",
    "hp": 2950,
    "atk": 590,
    "def": 155,
    "crit": 540,
    "skills": [
      {
        "name": "Probability Snap",
        "cost": 2,
        "description": "Overloads a target's reactions with cascading calculated feedback.",
        "damage": 1.9
      },
      {
        "name": "Cascade Fault",
        "cost": 3,
        "description": "Forces an error-cascade through the enemy's every function.",
        "damage": 2.4
      }
    ],
    "trumpCard": {
      "name": "Full System Overload",
      "description": "Floods every enemy's mind with impossible calculations all at once.",
      "damage": 4.6,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_096",
    "name": "Kaia Nasser",
    "frame": "MOONHOWL",
    "faction": "KHEMARA",
    "rank": "A",
    "element": "Moon",
    "effect": "MOON_HOWL",
    "class": "Mage",
    "cardId": "KHE-15-KAIA",
    "image": "/assets/heroes/hero_096.webp",
    "about": "Queen of the beastman White Fang clan and KHEMARA's most feared war-caster, Kaia calls down the hunting moon itself to freeze her enemies mid-stride. Her tribe has not lost a border skirmish since she took the crown from her own mother in single combat.",
    "hp": 3050,
    "atk": 605,
    "def": 165,
    "crit": 545,
    "skills": [
      {
        "name": "Lunar Cry",
        "cost": 2,
        "description": "A tribal howl amplified by moonlight that freezes enemies in place.",
        "damage": 1.9
      },
      {
        "name": "Fangmoon Rite",
        "cost": 3,
        "description": "Calls the full hunting moon down upon a single target.",
        "damage": 2.5
      }
    ],
    "trumpCard": {
      "name": "White Fang Ascendant",
      "description": "Summons her entire clan's ancestral howl beneath a blood moon, binding every enemy at once.",
      "damage": 4.7,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_097",
    "name": "Marielle Alba",
    "frame": "ARCHIVEMAGE",
    "faction": "SUNSPIRE",
    "rank": "B",
    "element": "Holy",
    "effect": "SCRIPTBIND",
    "class": "Mage",
    "cardId": "SUN-14-MARIELLE",
    "image": "/assets/heroes/hero_097.webp",
    "about": "Keeper of SUNSPIRE's forbidden archive wing, Marielle weaponises knowledge nobody else was brave enough to read. Her spells are recitations - every incantation quoted word-for-word from a text she alone remembers correctly.",
    "hp": 2950,
    "atk": 560,
    "def": 162,
    "crit": 515,
    "skills": [
      {
        "name": "Forbidden Verse",
        "cost": 2,
        "description": "Recites a passage that unravels an enemy's resolve.",
        "damage": 1.7
      },
      {
        "name": "Bound Chapter",
        "cost": 3,
        "description": "Seals a target within a passage of binding script.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "The Last Unread Page",
      "description": "Recites the archive's final forbidden chapter over the entire enemy line.",
      "damage": 4,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_098",
    "name": "Morgaine",
    "frame": "CINDERWITCH",
    "faction": "EMBERVEIL",
    "rank": "B",
    "element": "Fire",
    "effect": "HEXFLAME",
    "class": "Mage",
    "cardId": "EMB-14-MORGAINE",
    "image": "/assets/heroes/hero_098.webp",
    "about": "A hedge-witch who wandered into EMBERVEIL territory chasing a rumor of a flame that burns backward through time, and stayed once she found it. Morgaine's hexes smell faintly of woodsmoke and old regret.",
    "hp": 3000,
    "atk": 548,
    "def": 168,
    "crit": 500,
    "skills": [
      {
        "name": "Cinder Hex",
        "cost": 2,
        "description": "A backward-burning curse that smolders long after contact.",
        "damage": 1.7
      },
      {
        "name": "Woodsmoke Curse",
        "cost": 3,
        "description": "Wreathes a target in smoke that ignites from the inside out.",
        "damage": 2.1
      }
    ],
    "trumpCard": {
      "name": "Backward Blaze",
      "description": "Unleashes flame that burns against time itself, consuming every enemy at once.",
      "damage": 4.1,
      "effect": "Burns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_099",
    "name": "Zoya Ledovska",
    "frame": "RIMEWEAVE",
    "faction": "GLACIARA",
    "rank": "B",
    "element": "Ice",
    "effect": "RIME_TOUCH",
    "class": "Mage",
    "cardId": "GLA-13-ZOYA",
    "image": "/assets/heroes/hero_099.webp",
    "about": "A GLACIARA mage who learned her craft from ice that predates the faction itself, Zoya speaks to glaciers the way others speak to old friends. She is in no hurry - the cold, she says, always wins eventually.",
    "hp": 3000,
    "atk": 558,
    "def": 165,
    "crit": 505,
    "skills": [
      {
        "name": "Rime Whisper",
        "cost": 2,
        "description": "A touch of ancient frost slows a target to a crawl.",
        "damage": 1.7
      },
      {
        "name": "Glacier's Patience",
        "cost": 3,
        "description": "Calls down the weight of a slow-moving glacier.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "The Cold Always Wins",
      "description": "Lets the ancient ice have its way with the entire enemy line.",
      "damage": 4.2,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_100",
    "name": "Morrigan Sorrel",
    "frame": "VOIDSCYTHE",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "SOULREAP",
    "class": "Attacker",
    "cardId": "VMK-26-MORRIGAN",
    "image": "/assets/heroes/hero_100.webp",
    "about": "A scythe-wielding reaper who serves no banner but her own ledger, tallying debts in VOIDMARK's name and collecting them personally. Nothing she has ever marked for collection has escaped.",
    "hp": 3600,
    "atk": 545,
    "def": 205,
    "crit": 500,
    "skills": [
      {
        "name": "Ledger Cut",
        "cost": 1,
        "description": "A scythe strike that marks the target's debt in void ink.",
        "damage": 1.5
      },
      {
        "name": "Collection Due",
        "cost": 3,
        "description": "Collects on every debt owed with one sweeping reap.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "Final Tally",
      "description": "Closes every open ledger on the battlefield in a single void-scythe arc.",
      "damage": 4.9,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_101",
    "name": "Garrick Boland",
    "frame": "WILDHALBERD",
    "faction": "VERDANIA",
    "rank": "B",
    "element": "Nature",
    "effect": "BRAMBLE_REND",
    "class": "Attacker",
    "cardId": "VRD-19-GARRICK",
    "image": "/assets/heroes/hero_101.webp",
    "about": "A VERDANIA halberdier who trained his weapon-arm by clearing deadfall in the deep wilds before he ever swung it at a person. Garrick fights the way he chops wood - patient, exact, and utterly without mercy on the follow-through.",
    "hp": 3700,
    "atk": 495,
    "def": 200,
    "crit": 440,
    "skills": [
      {
        "name": "Deadfall Swing",
        "cost": 1,
        "description": "A heavy halberd arc that leaves thorned splinters in the wound.",
        "damage": 1.4
      },
      {
        "name": "Thicket Cleave",
        "cost": 2,
        "description": "Clears a wide arc of enemies like brush, leaving festering wounds.",
        "damage": 1.8
      }
    ],
    "trumpCard": {
      "name": "The Deep Wilds' Due",
      "description": "Fells everything in reach with one patient, exact swing.",
      "damage": 3.8,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_102",
    "name": "Dmitri",
    "frame": "GLACIALGAUNTLET",
    "faction": "GLACIARA",
    "rank": "A",
    "element": "Ice",
    "effect": "PERMAFROST_FIST",
    "class": "Attacker",
    "cardId": "GLA-14-DMITRI",
    "image": "/assets/heroes/hero_102.webp",
    "about": "A GLACIARA brawler whose gauntlets were forged in a glacier crevasse and have never fully thawed since. Dmitri doesn't block hits so much as absorb them personally, then return the favor with interest.",
    "hp": 4500,
    "atk": 520,
    "def": 255,
    "crit": 440,
    "skills": [
      {
        "name": "Glacier Jab",
        "cost": 1,
        "description": "A crushing gauntlet strike that cracks frozen armor.",
        "damage": 1.4
      },
      {
        "name": "Crevasse Hook",
        "cost": 3,
        "description": "A brutal uppercut that shatters whatever it connects with.",
        "damage": 2.7
      }
    ],
    "trumpCard": {
      "name": "Absolute Thaw",
      "description": "Releases every ounce of banked cold in one earth-shaking flurry of blows.",
      "damage": 5,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_103",
    "name": "Yuna Kitagawa",
    "frame": "TECHSHAMAN",
    "faction": "VOIDMARK",
    "rank": "B",
    "element": "Lightning",
    "effect": "CIRCUIT_CURSE",
    "class": "Mage",
    "cardId": "VMK-27-YUNA",
    "image": "/assets/heroes/hero_103.webp",
    "about": "VOIDMARK's Tech-Shaman Catalyst, Yuna fuses salvaged circuitry with old rite-magic that predates the faction's written history. Her constructs spark and chant in the same breath, and nobody has fully explained why that works.",
    "hp": 2950,
    "atk": 552,
    "def": 160,
    "crit": 505,
    "skills": [
      {
        "name": "Rite of Sparks",
        "cost": 2,
        "description": "A chanted circuit-rune that shorts out an enemy's defenses.",
        "damage": 1.7
      },
      {
        "name": "Salvage Surge",
        "cost": 3,
        "description": "Overdrives a jury-rigged construct into a single devastating discharge.",
        "damage": 2.2
      }
    ],
    "trumpCard": {
      "name": "Old Rite, New Circuit",
      "description": "Fuses chant and current into one field-wide discharge that shorts out every enemy at once.",
      "damage": 4.1,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_104",
    "name": "Salvador",
    "frame": "HAVOCSPECTER",
    "faction": "EMBERVEIL",
    "rank": "S",
    "element": "Fire",
    "effect": "SPECTERFLAME",
    "class": "Attacker",
    "cardId": "EMB-15-SALVADOR",
    "image": "/assets/heroes/hero_104.webp",
    "about": "Known across EMBERVEIL only as the Havoc Specter, Salvador appears in the worst moment of a battle and leaves nothing standing behind him. Soldiers on both sides have learned not to look directly at the flame trailing his blade.",
    "hp": 3650,
    "atk": 665,
    "def": 205,
    "crit": 605,
    "skills": [
      {
        "name": "Specter Slash",
        "cost": 2,
        "description": "A blurring strike trailing spectral flame.",
        "damage": 2
      },
      {
        "name": "Havoc's Wake",
        "cost": 3,
        "description": "Leaves a trail of devastation through everything in his path.",
        "damage": 2.8
      }
    ],
    "trumpCard": {
      "name": "The Worst Moment",
      "description": "Appears at the exact worst possible instant and ends the fight before anyone can react.",
      "damage": 5.2,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_105",
    "name": "Wisteria",
    "frame": "TECHBOTANIST",
    "faction": "VERDANIA",
    "rank": "S",
    "element": "Nature",
    "effect": "BIOSYNTH_BLOOM",
    "class": "Support",
    "cardId": "VRD-20-WISTERIA",
    "image": "/assets/heroes/hero_105.webp",
    "about": "VERDANIA's Tech-Botanist Support, Wisteria grafts living circuitry into vine and root systems, letting the forest itself route her healing energy across the battlefield. She insists the plants she augments are happier for it; nobody has found a way to ask them.",
    "hp": 4200,
    "atk": 420,
    "def": 285,
    "crit": 380,
    "skills": [
      {
        "name": "Circuit Graft",
        "cost": 1,
        "description": "Threads living current through root and vine to mend an ally.",
        "damage": 0
      },
      {
        "name": "Photosynth Pulse",
        "cost": 2,
        "description": "Channels a burst of engineered growth-energy through the team.",
        "damage": 0
      }
    ],
    "trumpCard": {
      "name": "Full Canopy Bloom",
      "description": "Routes every root and wire on the field into one field-wide surge of restoration.",
      "damage": 0,
      "effect": "Heals all allies 40% HP; shields team against next 1 hit each"
    }
  },
  {
    "id": "hero_106",
    "name": "Sable Renwick",
    "frame": "ECHOMIMIC",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "MIRRORSTEP",
    "class": "Attacker",
    "cardId": "VMK-28-SABLE",
    "image": "/assets/heroes/hero_106.webp",
    "about": "An Echo-Mimic Assassin of VOIDMARK, Sable copies the last motion an enemy made a half-second before striking with it herself, turning a foe's own technique back on them. She has never needed a signature move - she simply borrows everyone else's.",
    "hp": 3700,
    "atk": 535,
    "def": 215,
    "crit": 495,
    "skills": [
      {
        "name": "Borrowed Step",
        "cost": 1,
        "description": "Mimics an enemy's last motion and strikes with it first.",
        "damage": 1.5
      },
      {
        "name": "Echo Flurry",
        "cost": 2,
        "description": "Repeats a stolen technique in rapid succession.",
        "damage": 2
      }
    ],
    "trumpCard": {
      "name": "Every Move At Once",
      "description": "Mimics every technique she has ever copied in one overwhelming barrage.",
      "damage": 4.4,
      "effect": "Stuns all enemies 1 turn; heals all allies 20% HP"
    }
  },
  {
    "id": "hero_107",
    "name": "Ryna Ashcombe",
    "frame": "GLITCHMASTER",
    "faction": "VOIDMARK",
    "rank": "A",
    "element": "Void",
    "effect": "SYSTEM_FREEZE",
    "class": "Attacker",
    "cardId": "VMK-29-RYNA",
    "image": "/assets/heroes/hero_107.webp",
    "about": "A glitch-master infiltrator who treats reality's rendering errors as tools rather than flaws, Ryna freezes enemies mid-frame and slips past them before the world finishes loading. VOIDMARK's engineers still don't know if she's found a bug or become one.",
    "hp": 3550,
    "atk": 540,
    "def": 200,
    "crit": 510,
    "skills": [
      {
        "name": "Frame Skip",
        "cost": 1,
        "description": "Slips between rendered frames to land an impossible strike.",
        "damage": 1.5
      },
      {
        "name": "Corrupted Packet",
        "cost": 3,
        "description": "Force-feeds a target a burst of malformed reality data.",
        "damage": 2.6
      }
    ],
    "trumpCard": {
      "name": "World Still Loading",
      "description": "Freezes every enemy mid-frame while she moves through the gaps.",
      "damage": 4.7,
      "effect": "Stuns all enemies 2 turns; heals all allies 20% HP"
    }
  }
];

// ─── Sovereign heroes (one per faction) ──────────────────────────────────────
export const SOVEREIGN_HEROES = HEROES.filter(h => h.sovereign);

// ─── Helper functions ─────────────────────────────────────────────────────────
export const getHeroById        = (id)      => HEROES.find(h => h.id === id);
export const getHeroesByFaction = (faction) => HEROES.filter(h => h.faction === faction);
export const getHeroesByRank    = (rank)    => HEROES.filter(h => h.rank === rank);

// ─── Story chapters (30 total) ─────────────────────────────────────────────
// Synced from Trump-Card-game/src/data/story.js (CHAPTER_DEFS)
export const CHAPTERS = [
  {
    "id": 1,
    "title": "Shattered Veil",
    "subtitle": "Ice scouts invade as the dimensional barrier shatters",
    "color": "#38BDF8",
    "accent": "#7DD3FC"
  },
  {
    "id": 2,
    "title": "Ashen Inferno",
    "subtitle": "Fire drakes rampage through the scorched frontier",
    "color": "#F97316",
    "accent": "#FDBA74"
  },
  {
    "id": 3,
    "title": "Dawn of Radiance",
    "subtitle": "Holy forces corrupt the sacred light shrines",
    "color": "#FACC15",
    "accent": "#FEF08A"
  },
  {
    "id": 4,
    "title": "Thornwall",
    "subtitle": "Nature twisted by dark thorns chokes the ancient forest",
    "color": "#4ADE80",
    "accent": "#86EFAC"
  },
  {
    "id": 5,
    "title": "Verdant Ruin",
    "subtitle": "The bloom corruption devours all natural life",
    "color": "#A3E635",
    "accent": "#D9F99D"
  },
  {
    "id": 6,
    "title": "Shadowbloom",
    "subtitle": "Darkness wears nature's crown as the World Tree falls",
    "color": "#A855F7",
    "accent": "#D8B4FE"
  },
  {
    "id": 7,
    "title": "Abyssal Gate",
    "subtitle": "The abyss tears reality open and armies pour through",
    "color": "#818CF8",
    "accent": "#C7D2FE"
  },
  {
    "id": 8,
    "title": "Eclipse Rising",
    "subtitle": "A radiant light dragon descends from the heavens with divine fury",
    "color": "#94A3B8",
    "accent": "#CBD5E1"
  },
  {
    "id": 9,
    "title": "Celestial Fracture",
    "subtitle": "Heaven and abyss collide in the celestial realm",
    "color": "#E0F2FE",
    "accent": "#FFFFFF"
  },
  {
    "id": 10,
    "title": "Void Queen's Reign",
    "subtitle": "A corrupted queen claims the celestial throne",
    "color": "#C084FC",
    "accent": "#E9D5FF"
  },
  {
    "id": 11,
    "title": "Titan's March",
    "subtitle": "An unstoppable titan army burns everything in its path",
    "color": "#F87171",
    "accent": "#FCA5A5"
  },
  {
    "id": 12,
    "title": "Time's End",
    "subtitle": "The god of time begins unmaking the entire timeline",
    "color": "#2DD4BF",
    "accent": "#99F6E4"
  },
  {
    "id": 13,
    "title": "Eternal Winter",
    "subtitle": "An ancient monarch locks the world in permanent ice",
    "color": "#BAE6FD",
    "accent": "#F0F9FF"
  },
  {
    "id": 14,
    "title": "Crimson Empire",
    "subtitle": "A blood empress grows powerful on the heroes' victories",
    "color": "#E11D48",
    "accent": "#FDA4AF"
  },
  {
    "id": 15,
    "title": "World's Last Hour",
    "subtitle": "The World Eater surfaces to consume all of existence",
    "color": "#8B5CF6",
    "accent": "#C4B5FD"
  },
  {
    "id": 16,
    "title": "Cathedral of Chains",
    "subtitle": "Blood and shadow stir beneath the rubble of the fallen Crimson Empire",
    "color": "#C21010",
    "accent": "#FF8C8C"
  },
  {
    "id": 17,
    "title": "The Hollow Crown",
    "subtitle": "A king whose name was erased from history rises with the fury of all who were forgotten with him",
    "color": "#8B7340",
    "accent": "#D4A843"
  },
  {
    "id": 18,
    "title": "Divided Heaven",
    "subtitle": "A goddess of two merged souls tears reality apart as divine light and consuming darkness wage war",
    "color": "#C8A800",
    "accent": "#C084FC"
  },
  {
    "id": 19,
    "title": "The Living Archive",
    "subtitle": "An infinite library of all knowledge becomes a devouring labyrinth of living ink and ancient hunger",
    "color": "#92640A",
    "accent": "#E8D5A3"
  },
  {
    "id": 20,
    "title": "Before the First Breath",
    "subtitle": "The dreaming entity beneath all reality opens its eyes - existence holds its breath",
    "color": "#6D28D9",
    "accent": "#C4B5FD"
  },
  {
    "id": 21,
    "title": "Shadow Sovereign",
    "subtitle": "A dark-power ruler claims dominion over the shadow realm as night falls on all existence",
    "color": "#6429ec",
    "accent": "#A78BFA"
  },
  {
    "id": 22,
    "title": "The Cosmic Weave",
    "subtitle": "A mage who has absorbed the dying memories of worlds rewrites reality from within a star",
    "color": "#3a67d0",
    "accent": "#7EC8E3"
  },
  {
    "id": 23,
    "title": "Demon Glacier",
    "subtitle": "An ice demon breaks free from the frozen underworld - her frost corrodes dimensional matter",
    "color": "#486da1",
    "accent": "#72C4E8"
  },
  {
    "id": 24,
    "title": "The Elder Crimson",
    "subtitle": "The eldest of the crimson bloodline surfaces - more ancient and patient than any before her",
    "color": "#c53655",
    "accent": "#FF8C8C"
  },
  {
    "id": 25,
    "title": "The First Entity",
    "subtitle": "The oldest being in Aetheria's universe stirs - yet even it senses something greater, watching from a height it cannot name",
    "color": "#8a8a8a",
    "accent": "#C4B5FD"
  },
  {
    "id": 26,
    "title": "Void Eternal",
    "subtitle": "Echoes of every defeated foe reform as the living absence that ends all stories",
    "color": "#4C1D95",
    "accent": "#A78BFA"
  },
  {
    "id": 27,
    "title": "Celestial Reckoning",
    "subtitle": "The supreme celestial authority descends to pass final judgment on all creation",
    "color": "#FBBF24",
    "accent": "#FDE68A"
  },
  {
    "id": 28,
    "title": "Seraphic Judgment",
    "subtitle": "A herald of impossibly higher order descends, testing whether mortal defiance deserves to reach what lies beyond",
    "color": "#F5D061",
    "accent": "#FFFDF0"
  },
  {
    "id": 29,
    "title": "The Silent Vigil",
    "subtitle": "An entity sworn to observe every reality without interference finally breaks its ancient vow",
    "color": "#1E293B",
    "accent": "#94A3B8"
  },
  {
    "id": 30,
    "title": "Beyond Creation",
    "subtitle": "At the edge of all existence, the heroes stand before the One Above All - the final authority over every reality, every story, every ending",
    "color": "#FBBF24",
    "accent": "#FDE68A"
  }
];

// ─── Enemy stage groups: 90 stages across 30 chapters (mob / mini-boss / boss tiers) ──
// Synced from Trump-Card-game/src/data/enemies.js
export const ENEMY_GROUPS = [
  {
    "id": 101,
    "chapter": 1,
    "part": 1,
    "name": "Ice Vanguard",
    "description": "Shadow scouts and frost hounds pour from the dimensional rift to test the frontier.",
    "enemies": [
      {
        "id": "e_101_1",
        "name": "Flame Scout",
        "tier": "mob",
        "imageKey": "mob_001",
        "hp": 1000,
        "maxHp": 1000,
        "atk": 130,
        "def": 80,
        "skills": [
          {
            "name": "Flame Strike",
            "damage": 1.2
          },
          {
            "name": "Fire Claw",
            "damage": 1.6
          }
        ],
        "image": "/assets/enemy/mob_001.webp"
      },
      {
        "id": "e_101_2",
        "name": "Fire Specter",
        "tier": "mob",
        "imageKey": "mob_002",
        "hp": 1200,
        "maxHp": 1200,
        "atk": 140,
        "def": 90,
        "skills": [
          {
            "name": "Ember Strike",
            "damage": 1.3
          },
          {
            "name": "Blaze Slash",
            "damage": 1.7
          }
        ],
        "image": "/assets/enemy/mob_002.webp"
      },
      {
        "id": "e_101_3",
        "name": "Shadow Hound",
        "tier": "mob",
        "imageKey": "mob_003",
        "hp": 1400,
        "maxHp": 1400,
        "atk": 155,
        "def": 100,
        "skills": [
          {
            "name": "Shadow Fang",
            "damage": 1.3
          },
          {
            "name": "Dark Pounce",
            "damage": 1.8
          }
        ],
        "image": "/assets/enemy/mob_003.webp"
      }
    ]
  },
  {
    "id": 102,
    "chapter": 1,
    "part": 2,
    "name": "Frost Commander",
    "description": "A void commander marches with elite frost soldiers toward the last standing settlement.",
    "enemies": [
      {
        "id": "e_102_1",
        "name": "Fire Specter",
        "tier": "mob",
        "imageKey": "mob_002",
        "hp": 1200,
        "maxHp": 1200,
        "atk": 140,
        "def": 90,
        "skills": [
          {
            "name": "Ember Strike",
            "damage": 1.3
          },
          {
            "name": "Blaze Slash",
            "damage": 1.7
          }
        ],
        "image": "/assets/enemy/mob_002.webp"
      },
      {
        "id": "e_102_2",
        "name": "Shadow Hound",
        "tier": "mob",
        "imageKey": "mob_003",
        "hp": 1400,
        "maxHp": 1400,
        "atk": 155,
        "def": 100,
        "skills": [
          {
            "name": "Shadow Fang",
            "damage": 1.3
          },
          {
            "name": "Dark Pounce",
            "damage": 1.8
          }
        ],
        "image": "/assets/enemy/mob_003.webp"
      },
      {
        "id": "e_102_3",
        "name": "Frost Commander",
        "tier": "mini-boss",
        "imageKey": "mini-boss_001",
        "hp": 2800,
        "maxHp": 2800,
        "atk": 240,
        "def": 160,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Frost Strike",
            "damage": 2
          },
          {
            "name": "Blizzard Surge",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mini-boss_001.webp"
      }
    ]
  },
  {
    "id": 103,
    "chapter": 1,
    "part": 3,
    "name": "Lysha's Glacier",
    "description": "The Glacial Empress Lysha emerges from the frozen void to claim the realm in eternal ice.",
    "enemies": [
      {
        "id": "e_103_1",
        "name": "Shadow Hound",
        "tier": "mob",
        "imageKey": "mob_003",
        "hp": 1600,
        "maxHp": 1600,
        "atk": 165,
        "def": 105,
        "skills": [
          {
            "name": "Shadow Fang",
            "damage": 1.4
          },
          {
            "name": "Dark Pounce",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_003.webp"
      },
      {
        "id": "e_103_2",
        "name": "Frost Commander",
        "tier": "mini-boss",
        "imageKey": "mini-boss_001",
        "hp": 3000,
        "maxHp": 3000,
        "atk": 255,
        "def": 170,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Frost Strike",
            "damage": 2.1
          },
          {
            "name": "Blizzard Surge",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mini-boss_001.webp"
      },
      {
        "id": "e_103_3",
        "name": "Lysha the Glacial Empress",
        "tier": "boss",
        "imageKey": "boss_001",
        "hp": 6000,
        "maxHp": 6000,
        "atk": 320,
        "def": 200,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Glacial Prison",
            "damage": 3.2
          },
          {
            "name": "Absolute Zero",
            "damage": 4.5
          }
        ],
        "image": "/assets/enemy/boss_001.webp"
      }
    ]
  },
  {
    "id": 201,
    "chapter": 2,
    "part": 1,
    "name": "Ember Legion",
    "description": "Fire-born wraiths and ember brutes charge from the volcanic rift, scorching everything in sight.",
    "enemies": [
      {
        "id": "e_201_1",
        "name": "Shadow Wraith",
        "tier": "mob",
        "imageKey": "mob_004",
        "hp": 1400,
        "maxHp": 1400,
        "atk": 160,
        "def": 105,
        "skills": [
          {
            "name": "Shadow Touch",
            "damage": 1.3
          },
          {
            "name": "Dark Wave",
            "damage": 1.7
          }
        ],
        "image": "/assets/enemy/mob_004.webp"
      },
      {
        "id": "e_201_2",
        "name": "Emberhorn Brute",
        "tier": "mob",
        "imageKey": "mob_008",
        "hp": 1600,
        "maxHp": 1600,
        "atk": 175,
        "def": 115,
        "skills": [
          {
            "name": "Horn Charge",
            "damage": 1.4
          },
          {
            "name": "Inferno Gore",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_008.webp"
      },
      {
        "id": "e_201_3",
        "name": "Shadow Hound",
        "tier": "mob",
        "imageKey": "mob_003",
        "hp": 1800,
        "maxHp": 1800,
        "atk": 185,
        "def": 120,
        "skills": [
          {
            "name": "Shadow Fang",
            "damage": 1.4
          },
          {
            "name": "Dark Pounce",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_003.webp"
      }
    ]
  },
  {
    "id": 202,
    "chapter": 2,
    "part": 2,
    "name": "Inferno Warden",
    "description": "An elite inferno warden commands the ember vanguard, burning all who stand in their path.",
    "enemies": [
      {
        "id": "e_202_1",
        "name": "Shadow Wraith",
        "tier": "mob",
        "imageKey": "mob_004",
        "hp": 1500,
        "maxHp": 1500,
        "atk": 165,
        "def": 108,
        "skills": [
          {
            "name": "Shadow Touch",
            "damage": 1.3
          },
          {
            "name": "Dark Wave",
            "damage": 1.8
          }
        ],
        "image": "/assets/enemy/mob_004.webp"
      },
      {
        "id": "e_202_2",
        "name": "Emberhorn Brute",
        "tier": "mob",
        "imageKey": "mob_008",
        "hp": 1700,
        "maxHp": 1700,
        "atk": 180,
        "def": 118,
        "skills": [
          {
            "name": "Horn Charge",
            "damage": 1.4
          },
          {
            "name": "Inferno Gore",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_008.webp"
      },
      {
        "id": "e_202_3",
        "name": "Inferno Warden",
        "tier": "mini-boss",
        "imageKey": "mini-boss_002",
        "hp": 3600,
        "maxHp": 3600,
        "atk": 280,
        "def": 190,
        "effect": "BURN",
        "skills": [
          {
            "name": "Inferno Wall",
            "damage": 2
          },
          {
            "name": "Blaze Prison",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mini-boss_002.webp"
      }
    ]
  },
  {
    "id": 203,
    "chapter": 2,
    "part": 3,
    "name": "Pyrevex's Caldera",
    "description": "Pyrevex the Ashen Drake rises from the magma caldera breathing world-consuming dragonfire.",
    "enemies": [
      {
        "id": "e_203_1",
        "name": "Emberhorn Brute",
        "tier": "mob",
        "imageKey": "mob_008",
        "hp": 1900,
        "maxHp": 1900,
        "atk": 190,
        "def": 125,
        "skills": [
          {
            "name": "Horn Charge",
            "damage": 1.5
          },
          {
            "name": "Inferno Gore",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_008.webp"
      },
      {
        "id": "e_203_2",
        "name": "Inferno Warden",
        "tier": "mini-boss",
        "imageKey": "mini-boss_002",
        "hp": 3900,
        "maxHp": 3900,
        "atk": 295,
        "def": 200,
        "effect": "BURN",
        "skills": [
          {
            "name": "Inferno Wall",
            "damage": 2.1
          },
          {
            "name": "Blaze Prison",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mini-boss_002.webp"
      },
      {
        "id": "e_203_3",
        "name": "Pyrevex the Ashen Drake",
        "tier": "boss",
        "imageKey": "boss_002",
        "hp": 7500,
        "maxHp": 7500,
        "atk": 370,
        "def": 230,
        "effect": "BURN",
        "skills": [
          {
            "name": "Ashfire Breath",
            "damage": 3.4
          },
          {
            "name": "Drake Inferno",
            "damage": 4.8
          }
        ],
        "image": "/assets/enemy/boss_002.webp"
      }
    ]
  },
  {
    "id": 301,
    "chapter": 3,
    "part": 1,
    "name": "Fallen Paladins",
    "description": "Corrupted dawn paladins and stone golems guard the defiled light shrines.",
    "enemies": [
      {
        "id": "e_301_1",
        "name": "Forest Warden",
        "tier": "mob",
        "imageKey": "mob_005",
        "hp": 1800,
        "maxHp": 1800,
        "atk": 190,
        "def": 125,
        "skills": [
          {
            "name": "Vine Strike",
            "damage": 1.3
          },
          {
            "name": "Forest Smite",
            "damage": 1.8
          }
        ],
        "image": "/assets/enemy/mob_005.webp"
      },
      {
        "id": "e_301_2",
        "name": "Fire Specter",
        "tier": "mob",
        "imageKey": "mob_002",
        "hp": 1900,
        "maxHp": 1900,
        "atk": 200,
        "def": 130,
        "skills": [
          {
            "name": "Ember Strike",
            "damage": 1.3
          },
          {
            "name": "Blaze Slash",
            "damage": 1.8
          }
        ],
        "image": "/assets/enemy/mob_002.webp"
      },
      {
        "id": "e_301_3",
        "name": "Light Golem",
        "tier": "mob",
        "imageKey": "mob_006",
        "hp": 2200,
        "maxHp": 2200,
        "atk": 215,
        "def": 140,
        "skills": [
          {
            "name": "Radiant Slam",
            "damage": 1.4
          },
          {
            "name": "Light Crush",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_006.webp"
      }
    ]
  },
  {
    "id": 302,
    "chapter": 3,
    "part": 2,
    "name": "Forest Knight",
    "description": "A corrupted celestial knight leads the charge against the sacred temples of radiant light.",
    "enemies": [
      {
        "id": "e_302_1",
        "name": "Forest Warden",
        "tier": "mob",
        "imageKey": "mob_005",
        "hp": 1900,
        "maxHp": 1900,
        "atk": 195,
        "def": 128,
        "skills": [
          {
            "name": "Vine Strike",
            "damage": 1.4
          },
          {
            "name": "Forest Smite",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_005.webp"
      },
      {
        "id": "e_302_2",
        "name": "Light Golem",
        "tier": "mob",
        "imageKey": "mob_006",
        "hp": 2300,
        "maxHp": 2300,
        "atk": 220,
        "def": 145,
        "skills": [
          {
            "name": "Radiant Slam",
            "damage": 1.4
          },
          {
            "name": "Light Crush",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_006.webp"
      },
      {
        "id": "e_302_3",
        "name": "Forest Knight",
        "tier": "mini-boss",
        "imageKey": "mini-boss_003",
        "hp": 4400,
        "maxHp": 4400,
        "atk": 320,
        "def": 220,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Forest Judgment",
            "damage": 2
          },
          {
            "name": "Nature Wrath",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mini-boss_003.webp"
      }
    ]
  },
  {
    "id": 303,
    "chapter": 3,
    "part": 3,
    "name": "Aurariel's Sanctum",
    "description": "Aurariel the Light Maiden descends from the corrupted heavens to judge all of creation.",
    "enemies": [
      {
        "id": "e_303_1",
        "name": "Light Golem",
        "tier": "mob",
        "imageKey": "mob_006",
        "hp": 2500,
        "maxHp": 2500,
        "atk": 230,
        "def": 150,
        "skills": [
          {
            "name": "Radiant Slam",
            "damage": 1.5
          },
          {
            "name": "Light Crush",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_006.webp"
      },
      {
        "id": "e_303_2",
        "name": "Forest Knight",
        "tier": "mini-boss",
        "imageKey": "mini-boss_003",
        "hp": 4700,
        "maxHp": 4700,
        "atk": 335,
        "def": 232,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Forest Judgment",
            "damage": 2.1
          },
          {
            "name": "Nature Wrath",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mini-boss_003.webp"
      },
      {
        "id": "e_303_3",
        "name": "Aurariel the Light Maiden",
        "tier": "boss",
        "imageKey": "boss_003",
        "hp": 9000,
        "maxHp": 9000,
        "atk": 420,
        "def": 270,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Radiant Judgement",
            "damage": 3.5
          },
          {
            "name": "Sacred Annihilation",
            "damage": 4.8
          }
        ],
        "image": "/assets/enemy/boss_003.webp"
      }
    ]
  },
  {
    "id": 401,
    "chapter": 4,
    "part": 1,
    "name": "Root Horde",
    "description": "Abyss-corrupted nature beasts swarm the ancient forest, strangling its sacred roots.",
    "enemies": [
      {
        "id": "e_401_1",
        "name": "Abyss Fang Ravager",
        "tier": "mob",
        "imageKey": "mob_007",
        "hp": 2200,
        "maxHp": 2200,
        "atk": 220,
        "def": 145,
        "skills": [
          {
            "name": "Fang Strike",
            "damage": 1.4
          },
          {
            "name": "Abyss Rend",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_007.webp"
      },
      {
        "id": "e_401_2",
        "name": "Forest Warden",
        "tier": "mob",
        "imageKey": "mob_005",
        "hp": 2300,
        "maxHp": 2300,
        "atk": 230,
        "def": 150,
        "skills": [
          {
            "name": "Vine Strike",
            "damage": 1.4
          },
          {
            "name": "Forest Smite",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_005.webp"
      },
      {
        "id": "e_401_3",
        "name": "Light Golem",
        "tier": "mob",
        "imageKey": "mob_006",
        "hp": 2600,
        "maxHp": 2600,
        "atk": 245,
        "def": 160,
        "skills": [
          {
            "name": "Radiant Slam",
            "damage": 1.4
          },
          {
            "name": "Light Crush",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_006.webp"
      }
    ]
  },
  {
    "id": 402,
    "chapter": 4,
    "part": 2,
    "name": "Crimson Widow",
    "description": "The Crimson Widow Queen and her corrupted brood guard the thorn barrier to Sylva's domain.",
    "enemies": [
      {
        "id": "e_402_1",
        "name": "Abyss Fang Ravager",
        "tier": "mob",
        "imageKey": "mob_007",
        "hp": 2400,
        "maxHp": 2400,
        "atk": 235,
        "def": 152,
        "skills": [
          {
            "name": "Fang Strike",
            "damage": 1.4
          },
          {
            "name": "Abyss Rend",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_007.webp"
      },
      {
        "id": "e_402_2",
        "name": "Light Golem",
        "tier": "mob",
        "imageKey": "mob_006",
        "hp": 2700,
        "maxHp": 2700,
        "atk": 250,
        "def": 162,
        "skills": [
          {
            "name": "Radiant Slam",
            "damage": 1.4
          },
          {
            "name": "Light Crush",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_006.webp"
      },
      {
        "id": "e_402_3",
        "name": "Crimson Widow Queen",
        "tier": "mini-boss",
        "imageKey": "mini-boss_009",
        "hp": 5200,
        "maxHp": 5200,
        "atk": 360,
        "def": 250,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Web of Blood",
            "damage": 2.3
          },
          {
            "name": "Crimson Bite",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mini-boss_009.webp"
      }
    ]
  },
  {
    "id": 403,
    "chapter": 4,
    "part": 3,
    "name": "Thornqueen's Grove",
    "description": "Thornqueen Sylva rises from the corrupted World Tree, commanding nature as a weapon of war.",
    "enemies": [
      {
        "id": "e_403_1",
        "name": "Abyss Fang Ravager",
        "tier": "mob",
        "imageKey": "mob_007",
        "hp": 2700,
        "maxHp": 2700,
        "atk": 252,
        "def": 165,
        "skills": [
          {
            "name": "Fang Strike",
            "damage": 1.5
          },
          {
            "name": "Abyss Rend",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_007.webp"
      },
      {
        "id": "e_403_2",
        "name": "Crimson Widow Queen",
        "tier": "mini-boss",
        "imageKey": "mini-boss_009",
        "hp": 5600,
        "maxHp": 5600,
        "atk": 378,
        "def": 262,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Web of Blood",
            "damage": 2.4
          },
          {
            "name": "Crimson Bite",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mini-boss_009.webp"
      },
      {
        "id": "e_403_3",
        "name": "Thornqueen Sylva",
        "tier": "boss",
        "imageKey": "boss_004",
        "hp": 10500,
        "maxHp": 10500,
        "atk": 470,
        "def": 310,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Thorned Dominion",
            "damage": 3.6
          },
          {
            "name": "Nature's Wrath",
            "damage": 4.9
          }
        ],
        "image": "/assets/enemy/boss_004.webp"
      }
    ]
  },
  {
    "id": 501,
    "chapter": 5,
    "part": 1,
    "name": "Bloom Swarm",
    "description": "Celestial bloom guardians twisted by dark corruption spread devouring bloom spores across the forest.",
    "enemies": [
      {
        "id": "e_501_1",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 2600,
        "maxHp": 2600,
        "atk": 250,
        "def": 165,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.5
          },
          {
            "name": "Tidal Strike",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_501_2",
        "name": "Abyss Fang Ravager",
        "tier": "mob",
        "imageKey": "mob_007",
        "hp": 2700,
        "maxHp": 2700,
        "atk": 265,
        "def": 172,
        "skills": [
          {
            "name": "Fang Strike",
            "damage": 1.5
          },
          {
            "name": "Abyss Rend",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_007.webp"
      },
      {
        "id": "e_501_3",
        "name": "Light Golem",
        "tier": "mob",
        "imageKey": "mob_006",
        "hp": 3000,
        "maxHp": 3000,
        "atk": 278,
        "def": 180,
        "skills": [
          {
            "name": "Radiant Slam",
            "damage": 1.5
          },
          {
            "name": "Light Crush",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_006.webp"
      }
    ]
  },
  {
    "id": 502,
    "chapter": 5,
    "part": 2,
    "name": "Frostveil Sorceress",
    "description": "The Frostveil Sorceress channels corrupted bloom energy, turning life itself into a weapon.",
    "enemies": [
      {
        "id": "e_502_1",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 2800,
        "maxHp": 2800,
        "atk": 262,
        "def": 170,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.5
          },
          {
            "name": "Tidal Strike",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_502_2",
        "name": "Abyss Fang Ravager",
        "tier": "mob",
        "imageKey": "mob_007",
        "hp": 2900,
        "maxHp": 2900,
        "atk": 272,
        "def": 178,
        "skills": [
          {
            "name": "Fang Strike",
            "damage": 1.5
          },
          {
            "name": "Abyss Rend",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_007.webp"
      },
      {
        "id": "e_502_3",
        "name": "Frostveil Sorceress",
        "tier": "mini-boss",
        "imageKey": "mini-boss_010",
        "hp": 6000,
        "maxHp": 6000,
        "atk": 400,
        "def": 280,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Frost Nova",
            "damage": 2.4
          },
          {
            "name": "Blizzard Veil",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mini-boss_010.webp"
      }
    ]
  },
  {
    "id": 503,
    "chapter": 5,
    "part": 3,
    "name": "Verdara's Bloom",
    "description": "Verdara the Bloom Devourer unfurls from the dying forest core, consuming all life in her path.",
    "enemies": [
      {
        "id": "e_503_1",
        "name": "Abyss Fang Ravager",
        "tier": "mob",
        "imageKey": "mob_007",
        "hp": 3100,
        "maxHp": 3100,
        "atk": 282,
        "def": 184,
        "skills": [
          {
            "name": "Fang Strike",
            "damage": 1.6
          },
          {
            "name": "Abyss Rend",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_007.webp"
      },
      {
        "id": "e_503_2",
        "name": "Frostveil Sorceress",
        "tier": "mini-boss",
        "imageKey": "mini-boss_010",
        "hp": 6400,
        "maxHp": 6400,
        "atk": 418,
        "def": 292,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Frost Nova",
            "damage": 2.5
          },
          {
            "name": "Blizzard Veil",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_010.webp"
      },
      {
        "id": "e_503_3",
        "name": "Verdara the Bloom Devourer",
        "tier": "boss",
        "imageKey": "boss_005",
        "hp": 12000,
        "maxHp": 12000,
        "atk": 520,
        "def": 350,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Bloom Devour",
            "damage": 3.8
          },
          {
            "name": "Corrupted Garden",
            "damage": 5
          }
        ],
        "image": "/assets/enemy/boss_005.webp"
      }
    ]
  },
  {
    "id": 601,
    "chapter": 6,
    "part": 1,
    "name": "Thorn Wraiths",
    "description": "Rotclaw ghouls and frost sirens march under the dark bloom banner toward the last living forests.",
    "enemies": [
      {
        "id": "e_601_1",
        "name": "Rotclaw Ghoul",
        "tier": "mob",
        "imageKey": "mob_010",
        "hp": 3100,
        "maxHp": 3100,
        "atk": 292,
        "def": 190,
        "skills": [
          {
            "name": "Decay Strike",
            "damage": 1.4
          },
          {
            "name": "Rotting Claw",
            "damage": 1.9
          }
        ],
        "image": "/assets/enemy/mob_010.webp"
      },
      {
        "id": "e_601_2",
        "name": "Frostveil Siren",
        "tier": "mob",
        "imageKey": "mob_009",
        "hp": 3200,
        "maxHp": 3200,
        "atk": 302,
        "def": 196,
        "skills": [
          {
            "name": "Frost Song",
            "damage": 1.4
          },
          {
            "name": "Blizzard Aria",
            "damage": 2
          }
        ],
        "image": "/assets/enemy/mob_009.webp"
      },
      {
        "id": "e_601_3",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 3500,
        "maxHp": 3500,
        "atk": 318,
        "def": 205,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.5
          },
          {
            "name": "Root Bind",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      }
    ]
  },
  {
    "id": 602,
    "chapter": 6,
    "part": 2,
    "name": "Fallen Valkyrie",
    "description": "The Celestial Fallen Valkyrie guards the entrance to Nyx's black garden of corruption.",
    "enemies": [
      {
        "id": "e_602_1",
        "name": "Frostveil Siren",
        "tier": "mob",
        "imageKey": "mob_009",
        "hp": 3300,
        "maxHp": 3300,
        "atk": 308,
        "def": 200,
        "skills": [
          {
            "name": "Frost Song",
            "damage": 1.5
          },
          {
            "name": "Blizzard Aria",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_009.webp"
      },
      {
        "id": "e_602_2",
        "name": "Rotclaw Ghoul",
        "tier": "mob",
        "imageKey": "mob_010",
        "hp": 3400,
        "maxHp": 3400,
        "atk": 315,
        "def": 205,
        "skills": [
          {
            "name": "Decay Strike",
            "damage": 1.5
          },
          {
            "name": "Rotting Claw",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_010.webp"
      },
      {
        "id": "e_602_3",
        "name": "Celestial Fallen Valkyrie",
        "tier": "mini-boss",
        "imageKey": "mini-boss_011",
        "hp": 7000,
        "maxHp": 7000,
        "atk": 450,
        "def": 315,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Fallen Judgement",
            "damage": 2.4
          },
          {
            "name": "Corruption Spear",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mini-boss_011.webp"
      }
    ]
  },
  {
    "id": 603,
    "chapter": 6,
    "part": 3,
    "name": "Nyx's Black Garden",
    "description": "Nyx Shadowbloom emerges from the corrupted World Tree's heart - darkness wearing nature's crown.",
    "enemies": [
      {
        "id": "e_603_1",
        "name": "Rotclaw Ghoul",
        "tier": "mob",
        "imageKey": "mob_010",
        "hp": 3700,
        "maxHp": 3700,
        "atk": 328,
        "def": 212,
        "skills": [
          {
            "name": "Decay Strike",
            "damage": 1.6
          },
          {
            "name": "Rotting Claw",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_010.webp"
      },
      {
        "id": "e_603_2",
        "name": "Celestial Fallen Valkyrie",
        "tier": "mini-boss",
        "imageKey": "mini-boss_011",
        "hp": 7500,
        "maxHp": 7500,
        "atk": 470,
        "def": 328,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Fallen Judgement",
            "damage": 2.5
          },
          {
            "name": "Corruption Spear",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mini-boss_011.webp"
      },
      {
        "id": "e_603_3",
        "name": "Nyx Shadowbloom",
        "tier": "boss",
        "imageKey": "boss_006",
        "hp": 13500,
        "maxHp": 13500,
        "atk": 575,
        "def": 390,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Shadow Bloom",
            "damage": 3.8
          },
          {
            "name": "Dark Genesis",
            "damage": 5
          }
        ],
        "image": "/assets/enemy/boss_006.webp"
      }
    ]
  },
  {
    "id": 701,
    "chapter": 7,
    "part": 1,
    "name": "Void Legions",
    "description": "Armies of the abyss pour through the torn dimensional gate as reality fractures completely.",
    "enemies": [
      {
        "id": "e_701_1",
        "name": "Frostveil Siren",
        "tier": "mob",
        "imageKey": "mob_009",
        "hp": 3700,
        "maxHp": 3700,
        "atk": 332,
        "def": 215,
        "skills": [
          {
            "name": "Frost Song",
            "damage": 1.5
          },
          {
            "name": "Blizzard Aria",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_009.webp"
      },
      {
        "id": "e_701_2",
        "name": "Rotclaw Ghoul",
        "tier": "mob",
        "imageKey": "mob_010",
        "hp": 3900,
        "maxHp": 3900,
        "atk": 342,
        "def": 222,
        "skills": [
          {
            "name": "Decay Strike",
            "damage": 1.5
          },
          {
            "name": "Rotting Claw",
            "damage": 2.1
          }
        ],
        "image": "/assets/enemy/mob_010.webp"
      },
      {
        "id": "e_701_3",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 4200,
        "maxHp": 4200,
        "atk": 358,
        "def": 232,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.6
          },
          {
            "name": "Thunder Slam",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      }
    ]
  },
  {
    "id": 702,
    "chapter": 7,
    "part": 2,
    "name": "Abyss Prophet",
    "description": "The Abyss Prophet coordinates the void assault, his dark visions guiding armies through the gate.",
    "enemies": [
      {
        "id": "e_702_1",
        "name": "Rotclaw Ghoul",
        "tier": "mob",
        "imageKey": "mob_010",
        "hp": 4000,
        "maxHp": 4000,
        "atk": 348,
        "def": 226,
        "skills": [
          {
            "name": "Decay Strike",
            "damage": 1.6
          },
          {
            "name": "Rotting Claw",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_010.webp"
      },
      {
        "id": "e_702_2",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 4300,
        "maxHp": 4300,
        "atk": 362,
        "def": 235,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.6
          },
          {
            "name": "Thunder Slam",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_702_3",
        "name": "Abyss Prophet",
        "tier": "mini-boss",
        "imageKey": "mini-boss_007",
        "hp": 8200,
        "maxHp": 8200,
        "atk": 500,
        "def": 350,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dark Prophecy",
            "damage": 2.3
          },
          {
            "name": "Abyss Command",
            "damage": 3.1
          }
        ],
        "image": "/assets/enemy/mini-boss_007.webp"
      }
    ]
  },
  {
    "id": 703,
    "chapter": 7,
    "part": 3,
    "name": "The Abyss Sovereign",
    "description": "The ancient Abyss Sovereign descends from his obsidian throne, reality bending at his command.",
    "enemies": [
      {
        "id": "e_703_1",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 4600,
        "maxHp": 4600,
        "atk": 375,
        "def": 242,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.7
          },
          {
            "name": "Thunder Slam",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_703_2",
        "name": "Abyss Prophet",
        "tier": "mini-boss",
        "imageKey": "mini-boss_007",
        "hp": 8800,
        "maxHp": 8800,
        "atk": 522,
        "def": 365,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dark Prophecy",
            "damage": 2.4
          },
          {
            "name": "Abyss Command",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mini-boss_007.webp"
      },
      {
        "id": "e_703_3",
        "name": "The Abyss Sovereign",
        "tier": "boss",
        "imageKey": "boss_007",
        "hp": 15500,
        "maxHp": 15500,
        "atk": 640,
        "def": 430,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Abyss Command",
            "damage": 3.9
          },
          {
            "name": "Sovereign Curse",
            "damage": 5.2
          }
        ],
        "image": "/assets/enemy/boss_007.webp"
      }
    ]
  },
  {
    "id": 801,
    "chapter": 8,
    "part": 1,
    "name": "Eclipse Vanguard",
    "description": "Puppet soldiers and venomtail huntresses march as the sky turns black above the realm.",
    "enemies": [
      {
        "id": "e_801_1",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 4300,
        "maxHp": 4300,
        "atk": 368,
        "def": 238,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.6
          },
          {
            "name": "Thunder Slam",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_801_2",
        "name": "Dark Huntress",
        "tier": "mob",
        "imageKey": "mob_012",
        "hp": 4500,
        "maxHp": 4500,
        "atk": 382,
        "def": 250,
        "skills": [
          {
            "name": "Dark Sting",
            "damage": 1.6
          },
          {
            "name": "Shadow Lash",
            "damage": 2.2
          }
        ],
        "image": "/assets/enemy/mob_012.webp"
      },
      {
        "id": "e_801_3",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 4800,
        "maxHp": 4800,
        "atk": 398,
        "def": 260,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.7
          },
          {
            "name": "Root Bind",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      }
    ]
  },
  {
    "id": 802,
    "chapter": 8,
    "part": 2,
    "name": "Void Samurai",
    "description": "The Void Samurai Warlord leads the Eclipse forces, cutting through all resistance with cursed blades.",
    "enemies": [
      {
        "id": "e_802_1",
        "name": "Dark Huntress",
        "tier": "mob",
        "imageKey": "mob_012",
        "hp": 4600,
        "maxHp": 4600,
        "atk": 388,
        "def": 255,
        "skills": [
          {
            "name": "Dark Sting",
            "damage": 1.7
          },
          {
            "name": "Shadow Lash",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_012.webp"
      },
      {
        "id": "e_802_2",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 4900,
        "maxHp": 4900,
        "atk": 402,
        "def": 265,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.7
          },
          {
            "name": "Root Bind",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_802_3",
        "name": "Void Samurai Warlord",
        "tier": "mini-boss",
        "imageKey": "mini-boss_004",
        "hp": 9400,
        "maxHp": 9400,
        "atk": 560,
        "def": 390,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Katana Rain",
            "damage": 2.5
          },
          {
            "name": "Soul Cut",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_004.webp"
      }
    ]
  },
  {
    "id": 803,
    "chapter": 8,
    "part": 3,
    "name": "Radiant Dragon Emperor",
    "description": "The Radiant Dragon Emperor descends from the heavens, unleashing divine radiance that burns through every shadow.",
    "enemies": [
      {
        "id": "e_803_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 5200,
        "maxHp": 5200,
        "atk": 415,
        "def": 272,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_803_2",
        "name": "Void Samurai Warlord",
        "tier": "mini-boss",
        "imageKey": "mini-boss_004",
        "hp": 10000,
        "maxHp": 10000,
        "atk": 580,
        "def": 406,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Katana Rain",
            "damage": 2.6
          },
          {
            "name": "Soul Cut",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mini-boss_004.webp"
      },
      {
        "id": "e_803_3",
        "name": "Radiant Dragon Emperor",
        "tier": "boss",
        "imageKey": "boss_008",
        "hp": 17500,
        "maxHp": 17500,
        "atk": 700,
        "def": 480,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Radiant Breath",
            "damage": 4
          },
          {
            "name": "Dragon Radiance",
            "damage": 5.3
          }
        ],
        "image": "/assets/enemy/boss_008.webp"
      }
    ]
  },
  {
    "id": 901,
    "chapter": 9,
    "part": 1,
    "name": "Fractured Celestials",
    "description": "Heaven and abyss collide - twisted bloom guardians and puppet soldiers flood the celestial realm.",
    "enemies": [
      {
        "id": "e_901_1",
        "name": "Dark Huntress",
        "tier": "mob",
        "imageKey": "mob_012",
        "hp": 5000,
        "maxHp": 5000,
        "atk": 415,
        "def": 275,
        "skills": [
          {
            "name": "Dark Sting",
            "damage": 1.7
          },
          {
            "name": "Shadow Lash",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_012.webp"
      },
      {
        "id": "e_901_2",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 5200,
        "maxHp": 5200,
        "atk": 425,
        "def": 282,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.7
          },
          {
            "name": "Root Bind",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_901_3",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 5500,
        "maxHp": 5500,
        "atk": 438,
        "def": 292,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.7
          },
          {
            "name": "Tidal Strike",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      }
    ]
  },
  {
    "id": 902,
    "chapter": 9,
    "part": 2,
    "name": "Clockwork Commander",
    "description": "The Clockwork Commander orchestrates the celestial assault, his gears fueled by pure destruction.",
    "enemies": [
      {
        "id": "e_902_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 5300,
        "maxHp": 5300,
        "atk": 430,
        "def": 286,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_902_2",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 5600,
        "maxHp": 5600,
        "atk": 442,
        "def": 295,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.7
          },
          {
            "name": "Tidal Strike",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_902_3",
        "name": "Clockwork Commander",
        "tier": "mini-boss",
        "imageKey": "mini-boss_008",
        "hp": 10800,
        "maxHp": 10800,
        "atk": 620,
        "def": 435,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Gear Blitz",
            "damage": 2.4
          },
          {
            "name": "Overdrive Protocol",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mini-boss_008.webp"
      }
    ]
  },
  {
    "id": 903,
    "chapter": 9,
    "part": 3,
    "name": "Celestial Valkor",
    "description": "Celestial Valkor descends as the fusion of light and darkness, rewriting the laws of existence itself.",
    "enemies": [
      {
        "id": "e_903_1",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 6000,
        "maxHp": 6000,
        "atk": 455,
        "def": 305,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.8
          },
          {
            "name": "Tidal Strike",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_903_2",
        "name": "Clockwork Commander",
        "tier": "mini-boss",
        "imageKey": "mini-boss_008",
        "hp": 11500,
        "maxHp": 11500,
        "atk": 642,
        "def": 452,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Gear Blitz",
            "damage": 2.5
          },
          {
            "name": "Overdrive Protocol",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_008.webp"
      },
      {
        "id": "e_903_3",
        "name": "Celestial Valkor",
        "tier": "boss",
        "imageKey": "boss_009",
        "hp": 19500,
        "maxHp": 19500,
        "atk": 770,
        "def": 530,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Celestial Fracture",
            "damage": 4
          },
          {
            "name": "Valkor's Judgement",
            "damage": 5.3
          }
        ],
        "image": "/assets/enemy/boss_009.webp"
      }
    ]
  },
  {
    "id": 1001,
    "chapter": 10,
    "part": 1,
    "name": "Queen's Vanguard",
    "description": "Queen Nythera's void-corrupted servants flood the celestial realm, erasing all light from above.",
    "enemies": [
      {
        "id": "e_1001_1",
        "name": "Rotclaw Ghoul",
        "tier": "mob",
        "imageKey": "mob_010",
        "hp": 5600,
        "maxHp": 5600,
        "atk": 452,
        "def": 305,
        "skills": [
          {
            "name": "Decay Strike",
            "damage": 1.7
          },
          {
            "name": "Rotting Claw",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_010.webp"
      },
      {
        "id": "e_1001_2",
        "name": "Dark Huntress",
        "tier": "mob",
        "imageKey": "mob_012",
        "hp": 5800,
        "maxHp": 5800,
        "atk": 462,
        "def": 312,
        "skills": [
          {
            "name": "Dark Sting",
            "damage": 1.7
          },
          {
            "name": "Shadow Lash",
            "damage": 2.3
          }
        ],
        "image": "/assets/enemy/mob_012.webp"
      },
      {
        "id": "e_1001_3",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 6100,
        "maxHp": 6100,
        "atk": 476,
        "def": 322,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      }
    ]
  },
  {
    "id": 1002,
    "chapter": 10,
    "part": 2,
    "name": "Nature Assassin",
    "description": "The Nature Assassin stalks through Nythera's corrupted celestial garden, her natural poisons feeding the corruption.",
    "enemies": [
      {
        "id": "e_1002_1",
        "name": "Dark Huntress",
        "tier": "mob",
        "imageKey": "mob_012",
        "hp": 5900,
        "maxHp": 5900,
        "atk": 468,
        "def": 316,
        "skills": [
          {
            "name": "Dark Sting",
            "damage": 1.8
          },
          {
            "name": "Shadow Lash",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_012.webp"
      },
      {
        "id": "e_1002_2",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 6200,
        "maxHp": 6200,
        "atk": 482,
        "def": 326,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1002_3",
        "name": "Nature Assassin",
        "tier": "mini-boss",
        "imageKey": "mini-boss_012",
        "hp": 12000,
        "maxHp": 12000,
        "atk": 680,
        "def": 475,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Nature Lash",
            "damage": 2.4
          },
          {
            "name": "Forest Bloom",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mini-boss_012.webp"
      }
    ]
  },
  {
    "id": 1003,
    "chapter": 10,
    "part": 3,
    "name": "Queen Nythera's Throne",
    "description": "Queen Nythera rises from her stolen celestial throne, the void energy of a thousand worlds at her command.",
    "enemies": [
      {
        "id": "e_1003_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 6500,
        "maxHp": 6500,
        "atk": 495,
        "def": 335,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.9
          },
          {
            "name": "Root Bind",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1003_2",
        "name": "Nature Assassin",
        "tier": "mini-boss",
        "imageKey": "mini-boss_012",
        "hp": 12800,
        "maxHp": 12800,
        "atk": 705,
        "def": 492,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Nature Lash",
            "damage": 2.5
          },
          {
            "name": "Forest Bloom",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_012.webp"
      },
      {
        "id": "e_1003_3",
        "name": "Queen Nythera",
        "tier": "boss",
        "imageKey": "boss_010",
        "hp": 21000,
        "maxHp": 21000,
        "atk": 830,
        "def": 575,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Void Reign",
            "damage": 4
          },
          {
            "name": "Queen's Corruption",
            "damage": 5.3
          }
        ],
        "image": "/assets/enemy/boss_010.webp"
      }
    ]
  },
  {
    "id": 1101,
    "chapter": 11,
    "part": 1,
    "name": "Titan's Vanguard",
    "description": "Emberhorn brutes and titan shock troops storm the burning celestial ruins in endless waves.",
    "enemies": [
      {
        "id": "e_1101_1",
        "name": "Emberhorn Brute",
        "tier": "mob",
        "imageKey": "mob_008",
        "hp": 6200,
        "maxHp": 6200,
        "atk": 488,
        "def": 332,
        "skills": [
          {
            "name": "Horn Charge",
            "damage": 1.8
          },
          {
            "name": "Inferno Gore",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_008.webp"
      },
      {
        "id": "e_1101_2",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 6500,
        "maxHp": 6500,
        "atk": 502,
        "def": 342,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.8
          },
          {
            "name": "Thunder Slam",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_1101_3",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 6900,
        "maxHp": 6900,
        "atk": 518,
        "def": 352,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      }
    ]
  },
  {
    "id": 1102,
    "chapter": 11,
    "part": 2,
    "name": "Infernal Berserker King",
    "description": "The Infernal Berserker King leads the titan advance, his volcanic rage growing with each fallen hero.",
    "enemies": [
      {
        "id": "e_1102_1",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 6600,
        "maxHp": 6600,
        "atk": 508,
        "def": 346,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.8
          },
          {
            "name": "Thunder Slam",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_1102_2",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 7000,
        "maxHp": 7000,
        "atk": 522,
        "def": 356,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1102_3",
        "name": "Infernal Berserker King",
        "tier": "mini-boss",
        "imageKey": "mini-boss_005",
        "hp": 13500,
        "maxHp": 13500,
        "atk": 740,
        "def": 515,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Berserker Rage",
            "damage": 2.5
          },
          {
            "name": "Titan Fury",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_005.webp"
      }
    ]
  },
  {
    "id": 1103,
    "chapter": 11,
    "part": 3,
    "name": "The Infernal Titan King",
    "description": "The Infernal Titan King stomps the burning ruins flat, his power threatening to unmake all celestial order.",
    "enemies": [
      {
        "id": "e_1103_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 7300,
        "maxHp": 7300,
        "atk": 535,
        "def": 365,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.9
          },
          {
            "name": "Root Bind",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1103_2",
        "name": "Infernal Berserker King",
        "tier": "mini-boss",
        "imageKey": "mini-boss_005",
        "hp": 14200,
        "maxHp": 14200,
        "atk": 765,
        "def": 535,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Berserker Rage",
            "damage": 2.6
          },
          {
            "name": "Titan Fury",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mini-boss_005.webp"
      },
      {
        "id": "e_1103_3",
        "name": "The Infernal Titan King",
        "tier": "boss",
        "imageKey": "boss_011",
        "hp": 23000,
        "maxHp": 23000,
        "atk": 890,
        "def": 620,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Titan Devastation",
            "damage": 4
          },
          {
            "name": "Infernal Apocalypse",
            "damage": 5.4
          }
        ],
        "image": "/assets/enemy/boss_011.webp"
      }
    ]
  },
  {
    "id": 1201,
    "chapter": 12,
    "part": 1,
    "name": "Chrono Soldiers",
    "description": "Puppet soldiers march in perfect synchrony as time itself stutters and skips around them.",
    "enemies": [
      {
        "id": "e_1201_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 6900,
        "maxHp": 6900,
        "atk": 528,
        "def": 360,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.8
          },
          {
            "name": "Root Bind",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1201_2",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 7200,
        "maxHp": 7200,
        "atk": 542,
        "def": 370,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.8
          },
          {
            "name": "Tidal Strike",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1201_3",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 7600,
        "maxHp": 7600,
        "atk": 558,
        "def": 382,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.9
          },
          {
            "name": "Thunder Slam",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      }
    ]
  },
  {
    "id": 1202,
    "chapter": 12,
    "part": 2,
    "name": "Frost Revenant Knight",
    "description": "The Frost Revenant Knight patrols the temporal rift, his soul bound to Chronos through death itself.",
    "enemies": [
      {
        "id": "e_1202_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 7100,
        "maxHp": 7100,
        "atk": 538,
        "def": 368,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.9
          },
          {
            "name": "Root Bind",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1202_2",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 7400,
        "maxHp": 7400,
        "atk": 552,
        "def": 378,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.9
          },
          {
            "name": "Tidal Strike",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1202_3",
        "name": "Frost Revenant Knight",
        "tier": "mini-boss",
        "imageKey": "mini-boss_006",
        "hp": 15000,
        "maxHp": 15000,
        "atk": 800,
        "def": 555,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Revenant Frost",
            "damage": 2.4
          },
          {
            "name": "Soul Freeze",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mini-boss_006.webp"
      }
    ]
  },
  {
    "id": 1203,
    "chapter": 12,
    "part": 3,
    "name": "Chronos Awakens",
    "description": "Chronos the God of Time steps from the collapsing timeline to unmake all of history.",
    "enemies": [
      {
        "id": "e_1203_1",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 7700,
        "maxHp": 7700,
        "atk": 562,
        "def": 386,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 1.9
          },
          {
            "name": "Tidal Strike",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1203_2",
        "name": "Frost Revenant Knight",
        "tier": "mini-boss",
        "imageKey": "mini-boss_006",
        "hp": 15800,
        "maxHp": 15800,
        "atk": 825,
        "def": 572,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Revenant Frost",
            "damage": 2.5
          },
          {
            "name": "Soul Freeze",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_006.webp"
      },
      {
        "id": "e_1203_3",
        "name": "Chronos",
        "tier": "boss",
        "imageKey": "boss_012",
        "hp": 24500,
        "maxHp": 24500,
        "atk": 940,
        "def": 650,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Time Stop",
            "damage": 4
          },
          {
            "name": "Temporal Collapse",
            "damage": 5.4
          }
        ],
        "image": "/assets/enemy/boss_012.webp"
      }
    ]
  },
  {
    "id": 1301,
    "chapter": 13,
    "part": 1,
    "name": "Frozen Legions",
    "description": "The Frostbound Monarch's eternal winter army spreads across the land, freezing all who resist.",
    "enemies": [
      {
        "id": "e_1301_1",
        "name": "Flame Scout",
        "tier": "mob",
        "imageKey": "mob_001",
        "hp": 7600,
        "maxHp": 7600,
        "atk": 568,
        "def": 392,
        "skills": [
          {
            "name": "Flame Strike",
            "damage": 1.8
          },
          {
            "name": "Fire Claw",
            "damage": 2.4
          }
        ],
        "image": "/assets/enemy/mob_001.webp"
      },
      {
        "id": "e_1301_2",
        "name": "Frostveil Siren",
        "tier": "mob",
        "imageKey": "mob_009",
        "hp": 8000,
        "maxHp": 8000,
        "atk": 582,
        "def": 402,
        "skills": [
          {
            "name": "Frost Song",
            "damage": 1.9
          },
          {
            "name": "Blizzard Aria",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_009.webp"
      },
      {
        "id": "e_1301_3",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 8400,
        "maxHp": 8400,
        "atk": 598,
        "def": 412,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.9
          },
          {
            "name": "Thunder Slam",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      }
    ]
  },
  {
    "id": 1302,
    "chapter": 13,
    "part": 2,
    "name": "Storm Siren Empress",
    "description": "The Storm Siren Empress commands weather itself, turning blizzards into weapons of annihilation.",
    "enemies": [
      {
        "id": "e_1302_1",
        "name": "Frostveil Siren",
        "tier": "mob",
        "imageKey": "mob_009",
        "hp": 8100,
        "maxHp": 8100,
        "atk": 588,
        "def": 405,
        "skills": [
          {
            "name": "Frost Song",
            "damage": 1.9
          },
          {
            "name": "Blizzard Aria",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_009.webp"
      },
      {
        "id": "e_1302_2",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 8500,
        "maxHp": 8500,
        "atk": 602,
        "def": 416,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 1.9
          },
          {
            "name": "Thunder Slam",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_1302_3",
        "name": "Storm Siren Empress",
        "tier": "mini-boss",
        "imageKey": "mini-boss_013",
        "hp": 16500,
        "maxHp": 16500,
        "atk": 860,
        "def": 590,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Tempest Song",
            "damage": 2.5
          },
          {
            "name": "Lightning Aria",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mini-boss_013.webp"
      }
    ]
  },
  {
    "id": 1303,
    "chapter": 13,
    "part": 3,
    "name": "The Frostbound Monarch",
    "description": "The Frostbound Monarch descends from his frozen throne, his very gaze turning heroes to solid ice.",
    "enemies": [
      {
        "id": "e_1303_1",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 8800,
        "maxHp": 8800,
        "atk": 615,
        "def": 425,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 2
          },
          {
            "name": "Thunder Slam",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_1303_2",
        "name": "Storm Siren Empress",
        "tier": "mini-boss",
        "imageKey": "mini-boss_013",
        "hp": 17200,
        "maxHp": 17200,
        "atk": 882,
        "def": 608,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Tempest Song",
            "damage": 2.6
          },
          {
            "name": "Lightning Aria",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mini-boss_013.webp"
      },
      {
        "id": "e_1303_3",
        "name": "The Frostbound Monarch",
        "tier": "boss",
        "imageKey": "boss_013",
        "hp": 25500,
        "maxHp": 25500,
        "atk": 980,
        "def": 670,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Frozen Kingdom",
            "damage": 4
          },
          {
            "name": "Eternal Blizzard",
            "damage": 5.4
          }
        ],
        "image": "/assets/enemy/boss_013.webp"
      }
    ]
  },
  {
    "id": 1401,
    "chapter": 14,
    "part": 1,
    "name": "Seraphine's Court",
    "description": "Seraphine's crimson court enforces blood law across her gothic empire built on stolen power.",
    "enemies": [
      {
        "id": "e_1401_1",
        "name": "Dark Huntress",
        "tier": "mob",
        "imageKey": "mob_012",
        "hp": 8300,
        "maxHp": 8300,
        "atk": 608,
        "def": 422,
        "skills": [
          {
            "name": "Dark Sting",
            "damage": 1.9
          },
          {
            "name": "Shadow Lash",
            "damage": 2.5
          }
        ],
        "image": "/assets/enemy/mob_012.webp"
      },
      {
        "id": "e_1401_2",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 8700,
        "maxHp": 8700,
        "atk": 622,
        "def": 432,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 1.9
          },
          {
            "name": "Root Bind",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1401_3",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 9100,
        "maxHp": 9100,
        "atk": 638,
        "def": 445,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 2
          },
          {
            "name": "Tidal Strike",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      }
    ]
  },
  {
    "id": 1402,
    "chapter": 14,
    "part": 2,
    "name": "Crimson Widow Queen",
    "description": "The Crimson Widow Queen enforces Seraphine's will, her blood webs ensnaring all who enter the empire.",
    "enemies": [
      {
        "id": "e_1402_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 8800,
        "maxHp": 8800,
        "atk": 628,
        "def": 438,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 2
          },
          {
            "name": "Root Bind",
            "damage": 2.6
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1402_2",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 9200,
        "maxHp": 9200,
        "atk": 642,
        "def": 448,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 2
          },
          {
            "name": "Tidal Strike",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1402_3",
        "name": "Crimson Widow Queen",
        "tier": "mini-boss",
        "imageKey": "mini-boss_009",
        "hp": 18000,
        "maxHp": 18000,
        "atk": 920,
        "def": 620,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Web of Blood",
            "damage": 2.3
          },
          {
            "name": "Crimson Bite",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mini-boss_009.webp"
      }
    ]
  },
  {
    "id": 1403,
    "chapter": 14,
    "part": 3,
    "name": "Seraphine's Domain",
    "description": "Seraphine the Crimson Empress absorbs the power of every battle fought, now at the peak of her terrible glory.",
    "enemies": [
      {
        "id": "e_1403_1",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 9500,
        "maxHp": 9500,
        "atk": 655,
        "def": 458,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 2
          },
          {
            "name": "Tidal Strike",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1403_2",
        "name": "Crimson Widow Queen",
        "tier": "mini-boss",
        "imageKey": "mini-boss_009",
        "hp": 18800,
        "maxHp": 18800,
        "atk": 948,
        "def": 640,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Web of Blood",
            "damage": 2.4
          },
          {
            "name": "Crimson Bite",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mini-boss_009.webp"
      },
      {
        "id": "e_1403_3",
        "name": "Seraphine the Crimson Empress",
        "tier": "boss",
        "imageKey": "boss_014",
        "hp": 27000,
        "maxHp": 27000,
        "atk": 1040,
        "def": 700,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Crimson Judgement",
            "damage": 4.2
          },
          {
            "name": "Empress's Wrath",
            "damage": 5.5
          }
        ],
        "image": "/assets/enemy/boss_014.webp"
      }
    ]
  },
  {
    "id": 1501,
    "chapter": 15,
    "part": 1,
    "name": "World Eater's Herald",
    "description": "The World Eater's herald forces march as reality dissolves - the final war for all existence begins.",
    "enemies": [
      {
        "id": "e_1501_1",
        "name": "Stormbreaker Titan",
        "tier": "mob",
        "imageKey": "mob_011",
        "hp": 9000,
        "maxHp": 9000,
        "atk": 648,
        "def": 452,
        "skills": [
          {
            "name": "Storm Crush",
            "damage": 2
          },
          {
            "name": "Thunder Slam",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_011.webp"
      },
      {
        "id": "e_1501_2",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 9400,
        "maxHp": 9400,
        "atk": 662,
        "def": 462,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 2
          },
          {
            "name": "Root Bind",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1501_3",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 9800,
        "maxHp": 9800,
        "atk": 678,
        "def": 472,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 2
          },
          {
            "name": "Tidal Strike",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      }
    ]
  },
  {
    "id": 1502,
    "chapter": 15,
    "part": 2,
    "name": "Void Samurai of the Abyss",
    "description": "The greatest Void Samurai Warlord stands at the threshold between existence and oblivion.",
    "enemies": [
      {
        "id": "e_1502_1",
        "name": "Forest Marionette",
        "tier": "mob",
        "imageKey": "mob_013",
        "hp": 9500,
        "maxHp": 9500,
        "atk": 668,
        "def": 468,
        "skills": [
          {
            "name": "Vine Slash",
            "damage": 2
          },
          {
            "name": "Root Bind",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_013.webp"
      },
      {
        "id": "e_1502_2",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 9900,
        "maxHp": 9900,
        "atk": 682,
        "def": 478,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 2
          },
          {
            "name": "Tidal Strike",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1502_3",
        "name": "Void Samurai Warlord",
        "tier": "mini-boss",
        "imageKey": "mini-boss_004",
        "hp": 20000,
        "maxHp": 20000,
        "atk": 1000,
        "def": 660,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Katana Rain",
            "damage": 3.5
          },
          {
            "name": "Soul Cut",
            "damage": 4.6
          }
        ],
        "image": "/assets/enemy/mini-boss_004.webp"
      }
    ]
  },
  {
    "id": 1503,
    "chapter": 15,
    "part": 3,
    "name": "The World Eater Leviathan",
    "description": "The World Eater Leviathan surfaces from the cosmic abyss to consume the last remnants of reality.",
    "enemies": [
      {
        "id": "e_1503_1",
        "name": "Water Guardian",
        "tier": "mob",
        "imageKey": "mob_014",
        "hp": 10200,
        "maxHp": 10200,
        "atk": 695,
        "def": 488,
        "skills": [
          {
            "name": "Water Surge",
            "damage": 2.1
          },
          {
            "name": "Tidal Strike",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_014.webp"
      },
      {
        "id": "e_1503_2",
        "name": "Void Samurai Warlord",
        "tier": "mini-boss",
        "imageKey": "mini-boss_004",
        "hp": 21000,
        "maxHp": 21000,
        "atk": 1025,
        "def": 680,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Katana Rain",
            "damage": 3.6
          },
          {
            "name": "Soul Cut",
            "damage": 4.8
          }
        ],
        "image": "/assets/enemy/mini-boss_004.webp"
      },
      {
        "id": "e_1503_3",
        "name": "The World Eater Leviathan",
        "tier": "boss",
        "imageKey": "boss_015",
        "hp": 28000,
        "maxHp": 28000,
        "atk": 1100,
        "def": 720,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "World Devour",
            "damage": 4.2
          },
          {
            "name": "Cosmic Extinction",
            "damage": 5.5
          }
        ],
        "image": "/assets/enemy/boss_015.webp"
      }
    ]
  },
  {
    "id": 1601,
    "chapter": 16,
    "part": 1,
    "name": "Bell Tower Guardians",
    "description": "Iron Shade Knights and Forest Revenants defend the cursed cathedral as an ancient darkness stirs beneath.",
    "enemies": [
      {
        "id": "e_1601_1",
        "name": "Iron Shade Knight",
        "tier": "mob",
        "imageKey": "mob_015",
        "hp": 10800,
        "maxHp": 10800,
        "atk": 712,
        "def": 500,
        "skills": [
          {
            "name": "Shadow Slash",
            "damage": 2
          },
          {
            "name": "Dark Lunge",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_015.webp"
      },
      {
        "id": "e_1601_2",
        "name": "Forest Revenant",
        "tier": "mob",
        "imageKey": "mob_016",
        "hp": 11100,
        "maxHp": 11100,
        "atk": 725,
        "def": 510,
        "skills": [
          {
            "name": "Forest Strike",
            "damage": 2
          },
          {
            "name": "Nature Drain",
            "damage": 2.7
          }
        ],
        "image": "/assets/enemy/mob_016.webp"
      },
      {
        "id": "e_1601_3",
        "name": "Earth Sentinel",
        "tier": "mob",
        "imageKey": "mob_017",
        "hp": 11400,
        "maxHp": 11400,
        "atk": 738,
        "def": 520,
        "skills": [
          {
            "name": "Earth Smash",
            "damage": 2
          },
          {
            "name": "Stone Guard",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_017.webp"
      }
    ]
  },
  {
    "id": 1602,
    "chapter": 16,
    "part": 2,
    "name": "Stone Keeper",
    "description": "The ancient cathedral guardian rises, every toll of his cursed bell sending shockwaves through reality.",
    "enemies": [
      {
        "id": "e_1602_1",
        "name": "Forest Revenant",
        "tier": "mob",
        "imageKey": "mob_016",
        "hp": 11300,
        "maxHp": 11300,
        "atk": 732,
        "def": 516,
        "skills": [
          {
            "name": "Forest Strike",
            "damage": 2.1
          },
          {
            "name": "Nature Drain",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_016.webp"
      },
      {
        "id": "e_1602_2",
        "name": "Earth Sentinel",
        "tier": "mob",
        "imageKey": "mob_017",
        "hp": 11600,
        "maxHp": 11600,
        "atk": 745,
        "def": 526,
        "skills": [
          {
            "name": "Earth Smash",
            "damage": 2.1
          },
          {
            "name": "Stone Guard",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_017.webp"
      },
      {
        "id": "e_1602_3",
        "name": "Stone Keeper",
        "tier": "mini-boss",
        "imageKey": "mini-boss_014",
        "hp": 22000,
        "maxHp": 22000,
        "atk": 1055,
        "def": 700,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Stone Toll",
            "damage": 2.6
          },
          {
            "name": "Earth Shockwave",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mini-boss_014.webp"
      }
    ]
  },
  {
    "id": 1603,
    "chapter": 16,
    "part": 3,
    "name": "Visalia the Crimson",
    "description": "The true architect of the Crimson Empire emerges - a demon-vampire hybrid who engineered every war from the shadows.",
    "enemies": [
      {
        "id": "e_1603_1",
        "name": "Earth Sentinel",
        "tier": "mob",
        "imageKey": "mob_017",
        "hp": 11800,
        "maxHp": 11800,
        "atk": 752,
        "def": 532,
        "skills": [
          {
            "name": "Earth Smash",
            "damage": 2.1
          },
          {
            "name": "Stone Guard",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_017.webp"
      },
      {
        "id": "e_1603_2",
        "name": "Stone Keeper",
        "tier": "mini-boss",
        "imageKey": "mini-boss_014",
        "hp": 23000,
        "maxHp": 23000,
        "atk": 1075,
        "def": 715,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Stone Toll",
            "damage": 2.7
          },
          {
            "name": "Earth Shockwave",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mini-boss_014.webp"
      },
      {
        "id": "e_1603_3",
        "name": "Visalia the Crimson",
        "tier": "boss",
        "imageKey": "boss_016",
        "hp": 29500,
        "maxHp": 29500,
        "atk": 1140,
        "def": 742,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Blood Dominion",
            "damage": 4.2
          },
          {
            "name": "Demon's Eclipse",
            "damage": 5.6
          }
        ],
        "image": "/assets/enemy/boss_016.webp"
      }
    ]
  },
  {
    "id": 1701,
    "chapter": 17,
    "part": 1,
    "name": "Lost Kingdom's Dead",
    "description": "Soldiers of an erased kingdom fight with the fury of history that refused to be forgotten.",
    "enemies": [
      {
        "id": "e_1701_1",
        "name": "Iron Shade Knight",
        "tier": "mob",
        "imageKey": "mob_015",
        "hp": 11600,
        "maxHp": 11600,
        "atk": 748,
        "def": 528,
        "skills": [
          {
            "name": "Shadow Slash",
            "damage": 2.1
          },
          {
            "name": "Dark Lunge",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_015.webp"
      },
      {
        "id": "e_1701_2",
        "name": "Void Wraith Archer",
        "tier": "mob",
        "imageKey": "mob_019",
        "hp": 11900,
        "maxHp": 11900,
        "atk": 762,
        "def": 538,
        "skills": [
          {
            "name": "Wraith Arrow",
            "damage": 2.1
          },
          {
            "name": "Void Volley",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_019.webp"
      },
      {
        "id": "e_1701_3",
        "name": "Tomb Specter",
        "tier": "mob",
        "imageKey": "mob_020",
        "hp": 12200,
        "maxHp": 12200,
        "atk": 778,
        "def": 548,
        "skills": [
          {
            "name": "Specter Claw",
            "damage": 2.1
          },
          {
            "name": "Haunting Wail",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_020.webp"
      }
    ]
  },
  {
    "id": 1702,
    "chapter": 17,
    "part": 2,
    "name": "Lady Silkgrave",
    "description": "The spider empress of the erased royal tomb commands her silk kingdom from an abandoned throne.",
    "enemies": [
      {
        "id": "e_1702_1",
        "name": "Void Wraith Archer",
        "tier": "mob",
        "imageKey": "mob_019",
        "hp": 12100,
        "maxHp": 12100,
        "atk": 770,
        "def": 544,
        "skills": [
          {
            "name": "Wraith Arrow",
            "damage": 2.2
          },
          {
            "name": "Void Volley",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_019.webp"
      },
      {
        "id": "e_1702_2",
        "name": "Tomb Specter",
        "tier": "mob",
        "imageKey": "mob_020",
        "hp": 12400,
        "maxHp": 12400,
        "atk": 785,
        "def": 554,
        "skills": [
          {
            "name": "Specter Claw",
            "damage": 2.2
          },
          {
            "name": "Haunting Wail",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_020.webp"
      },
      {
        "id": "e_1702_3",
        "name": "Lady Silkgrave",
        "tier": "mini-boss",
        "imageKey": "mini-boss_015",
        "hp": 23000,
        "maxHp": 23000,
        "atk": 1085,
        "def": 720,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Funeral Silk",
            "damage": 2.6
          },
          {
            "name": "Crystal Fang",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mini-boss_015.webp"
      }
    ]
  },
  {
    "id": 1703,
    "chapter": 17,
    "part": 3,
    "name": "The Crownless King",
    "description": "An ancient ruler whose kingdom was erased from all history commands darkness from a shattered floating throne.",
    "enemies": [
      {
        "id": "e_1703_1",
        "name": "Tomb Specter",
        "tier": "mob",
        "imageKey": "mob_020",
        "hp": 12600,
        "maxHp": 12600,
        "atk": 792,
        "def": 560,
        "skills": [
          {
            "name": "Specter Claw",
            "damage": 2.2
          },
          {
            "name": "Haunting Wail",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_020.webp"
      },
      {
        "id": "e_1703_2",
        "name": "Lady Silkgrave",
        "tier": "mini-boss",
        "imageKey": "mini-boss_015",
        "hp": 24000,
        "maxHp": 24000,
        "atk": 1105,
        "def": 735,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Funeral Silk",
            "damage": 2.7
          },
          {
            "name": "Crystal Fang",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mini-boss_015.webp"
      },
      {
        "id": "e_1703_3",
        "name": "The Crownless King",
        "tier": "boss",
        "imageKey": "boss_017",
        "hp": 31000,
        "maxHp": 31000,
        "atk": 1180,
        "def": 765,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Nameless Decree",
            "damage": 4.2
          },
          {
            "name": "Void Coronation",
            "damage": 5.6
          }
        ],
        "image": "/assets/enemy/boss_017.webp"
      }
    ]
  },
  {
    "id": 1801,
    "chapter": 18,
    "part": 1,
    "name": "Forge Cultists",
    "description": "Dark Golems and Obsidian Sentinels guard the volcanic monastery as a cosmic goddess converges.",
    "enemies": [
      {
        "id": "e_1801_1",
        "name": "Forest Revenant",
        "tier": "mob",
        "imageKey": "mob_016",
        "hp": 12400,
        "maxHp": 12400,
        "atk": 790,
        "def": 558,
        "skills": [
          {
            "name": "Forest Strike",
            "damage": 2.2
          },
          {
            "name": "Nature Drain",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_016.webp"
      },
      {
        "id": "e_1801_2",
        "name": "Dark Golem",
        "tier": "mob",
        "imageKey": "mob_021",
        "hp": 12700,
        "maxHp": 12700,
        "atk": 805,
        "def": 568,
        "skills": [
          {
            "name": "Void Strike",
            "damage": 2.2
          },
          {
            "name": "Shadow Slam",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_021.webp"
      },
      {
        "id": "e_1801_3",
        "name": "Obsidian Sentinel",
        "tier": "mob",
        "imageKey": "mob_022",
        "hp": 13000,
        "maxHp": 13000,
        "atk": 820,
        "def": 578,
        "skills": [
          {
            "name": "Obsidian Guard",
            "damage": 2.2
          },
          {
            "name": "Volcanic Crush",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_022.webp"
      }
    ]
  },
  {
    "id": 1802,
    "chapter": 18,
    "part": 2,
    "name": "The Furnace Saint",
    "description": "A former holy knight reborn as a living forge stands as the burning threshold between the heroes and a goddess.",
    "enemies": [
      {
        "id": "e_1802_1",
        "name": "Dark Golem",
        "tier": "mob",
        "imageKey": "mob_021",
        "hp": 12900,
        "maxHp": 12900,
        "atk": 812,
        "def": 574,
        "skills": [
          {
            "name": "Void Strike",
            "damage": 2.2
          },
          {
            "name": "Shadow Slam",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_021.webp"
      },
      {
        "id": "e_1802_2",
        "name": "Obsidian Sentinel",
        "tier": "mob",
        "imageKey": "mob_022",
        "hp": 13200,
        "maxHp": 13200,
        "atk": 828,
        "def": 584,
        "skills": [
          {
            "name": "Obsidian Guard",
            "damage": 2.3
          },
          {
            "name": "Volcanic Crush",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_022.webp"
      },
      {
        "id": "e_1802_3",
        "name": "The Furnace Saint",
        "tier": "mini-boss",
        "imageKey": "mini-boss_016",
        "hp": 24000,
        "maxHp": 24000,
        "atk": 1115,
        "def": 740,
        "effect": "BURN",
        "skills": [
          {
            "name": "Cursed Hammer",
            "damage": 2.7
          },
          {
            "name": "Forge Consecration",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mini-boss_016.webp"
      }
    ]
  },
  {
    "id": 1803,
    "chapter": 18,
    "part": 3,
    "name": "Mother Eclipse",
    "description": "A cosmic goddess of two merged souls - one of divine light, one of consuming darkness - awakens in terrible balance.",
    "enemies": [
      {
        "id": "e_1803_1",
        "name": "Obsidian Sentinel",
        "tier": "mob",
        "imageKey": "mob_022",
        "hp": 13400,
        "maxHp": 13400,
        "atk": 835,
        "def": 590,
        "skills": [
          {
            "name": "Obsidian Guard",
            "damage": 2.3
          },
          {
            "name": "Volcanic Crush",
            "damage": 3.1
          }
        ],
        "image": "/assets/enemy/mob_022.webp"
      },
      {
        "id": "e_1803_2",
        "name": "The Furnace Saint",
        "tier": "mini-boss",
        "imageKey": "mini-boss_016",
        "hp": 25000,
        "maxHp": 25000,
        "atk": 1135,
        "def": 755,
        "effect": "BURN",
        "skills": [
          {
            "name": "Cursed Hammer",
            "damage": 2.8
          },
          {
            "name": "Forge Consecration",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mini-boss_016.webp"
      },
      {
        "id": "e_1803_3",
        "name": "Mother Eclipse",
        "tier": "boss",
        "imageKey": "boss_018",
        "hp": 32500,
        "maxHp": 32500,
        "atk": 1220,
        "def": 790,
        "effect": "BURN",
        "skills": [
          {
            "name": "Eclipse Divide",
            "damage": 4.3
          },
          {
            "name": "Dual Genesis",
            "damage": 5.7
          }
        ],
        "image": "/assets/enemy/boss_018.webp"
      }
    ]
  },
  {
    "id": 1901,
    "chapter": 19,
    "part": 1,
    "name": "Wayward Scholars",
    "description": "Dimensional wanderers and silk-thread crawlers serve a devouring library that consumes knowledge and knower alike.",
    "enemies": [
      {
        "id": "e_1901_1",
        "name": "Phantom Silk Crawler",
        "tier": "mob",
        "imageKey": "mob_018",
        "hp": 12800,
        "maxHp": 12800,
        "atk": 808,
        "def": 568,
        "skills": [
          {
            "name": "Silk Ensnare",
            "damage": 2.1
          },
          {
            "name": "Phase Crawl",
            "damage": 2.8
          }
        ],
        "image": "/assets/enemy/mob_018.webp"
      },
      {
        "id": "e_1901_2",
        "name": "Star Map Wanderer",
        "tier": "mob",
        "imageKey": "mob_023",
        "hp": 13200,
        "maxHp": 13200,
        "atk": 825,
        "def": 580,
        "skills": [
          {
            "name": "Stellar Strike",
            "damage": 2.2
          },
          {
            "name": "Cosmic Chart",
            "damage": 2.9
          }
        ],
        "image": "/assets/enemy/mob_023.webp"
      },
      {
        "id": "e_1901_3",
        "name": "Dimensional Rift Stalker",
        "tier": "mob",
        "imageKey": "mob_024",
        "hp": 13600,
        "maxHp": 13600,
        "atk": 842,
        "def": 592,
        "skills": [
          {
            "name": "Rift Slash",
            "damage": 2.2
          },
          {
            "name": "Reality Rend",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_024.webp"
      }
    ]
  },
  {
    "id": 1902,
    "chapter": 19,
    "part": 2,
    "name": "Void-Touched Navigator",
    "description": "An ancient sailor fused with cosmic energy floats above the archive floors, guarding infinite knowledge for a hungry master.",
    "enemies": [
      {
        "id": "e_1902_1",
        "name": "Star Map Wanderer",
        "tier": "mob",
        "imageKey": "mob_023",
        "hp": 13400,
        "maxHp": 13400,
        "atk": 832,
        "def": 586,
        "skills": [
          {
            "name": "Stellar Strike",
            "damage": 2.2
          },
          {
            "name": "Cosmic Chart",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_023.webp"
      },
      {
        "id": "e_1902_2",
        "name": "Dimensional Rift Stalker",
        "tier": "mob",
        "imageKey": "mob_024",
        "hp": 13800,
        "maxHp": 13800,
        "atk": 850,
        "def": 598,
        "skills": [
          {
            "name": "Rift Slash",
            "damage": 2.3
          },
          {
            "name": "Reality Rend",
            "damage": 3
          }
        ],
        "image": "/assets/enemy/mob_024.webp"
      },
      {
        "id": "e_1902_3",
        "name": "Void-Touched Navigator",
        "tier": "mini-boss",
        "imageKey": "mini-boss_017",
        "hp": 25000,
        "maxHp": 25000,
        "atk": 1148,
        "def": 762,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dimensional Chart",
            "damage": 2.7
          },
          {
            "name": "Rift Compass",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mini-boss_017.webp"
      }
    ]
  },
  {
    "id": 1903,
    "chapter": 19,
    "part": 3,
    "name": "The Archive Devourer",
    "description": "A massive dragon-like entity composed of living books, scrolls, and ancient knowledge opens its eyes of magical text.",
    "enemies": [
      {
        "id": "e_1903_1",
        "name": "Dimensional Rift Stalker",
        "tier": "mob",
        "imageKey": "mob_024",
        "hp": 14000,
        "maxHp": 14000,
        "atk": 858,
        "def": 605,
        "skills": [
          {
            "name": "Rift Slash",
            "damage": 2.3
          },
          {
            "name": "Reality Rend",
            "damage": 3.1
          }
        ],
        "image": "/assets/enemy/mob_024.webp"
      },
      {
        "id": "e_1903_2",
        "name": "Void-Touched Navigator",
        "tier": "mini-boss",
        "imageKey": "mini-boss_017",
        "hp": 26000,
        "maxHp": 26000,
        "atk": 1168,
        "def": 778,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dimensional Chart",
            "damage": 2.8
          },
          {
            "name": "Rift Compass",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mini-boss_017.webp"
      },
      {
        "id": "e_1903_3",
        "name": "The Archive Devourer",
        "tier": "boss",
        "imageKey": "boss_019",
        "hp": 34000,
        "maxHp": 34000,
        "atk": 1262,
        "def": 818,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Text Obliteration",
            "damage": 4.3
          },
          {
            "name": "Knowledge's Hunger",
            "damage": 5.7
          }
        ],
        "image": "/assets/enemy/boss_019.webp"
      }
    ]
  },
  {
    "id": 2001,
    "chapter": 20,
    "part": 1,
    "name": "Dream Sentinels",
    "description": "Porcelain guards and celestial string dancers manifest from the subconscious of a sleeping entity older than existence.",
    "enemies": [
      {
        "id": "e_2001_1",
        "name": "Dimensional Rift Stalker",
        "tier": "mob",
        "imageKey": "mob_024",
        "hp": 14200,
        "maxHp": 14200,
        "atk": 865,
        "def": 610,
        "skills": [
          {
            "name": "Rift Slash",
            "damage": 2.3
          },
          {
            "name": "Reality Rend",
            "damage": 3.1
          }
        ],
        "image": "/assets/enemy/mob_024.webp"
      },
      {
        "id": "e_2001_2",
        "name": "Porcelain Guard",
        "tier": "mob",
        "imageKey": "mob_025",
        "hp": 14500,
        "maxHp": 14500,
        "atk": 880,
        "def": 622,
        "skills": [
          {
            "name": "Porcelain Strike",
            "damage": 2.3
          },
          {
            "name": "Marionette Smash",
            "damage": 3.1
          }
        ],
        "image": "/assets/enemy/mob_025.webp"
      },
      {
        "id": "e_2001_3",
        "name": "Celestial String Dancer",
        "tier": "mob",
        "imageKey": "mob_026",
        "hp": 14900,
        "maxHp": 14900,
        "atk": 898,
        "def": 636,
        "skills": [
          {
            "name": "String Slash",
            "damage": 2.4
          },
          {
            "name": "Celestial Waltz",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mob_026.webp"
      }
    ]
  },
  {
    "id": 2002,
    "chapter": 20,
    "part": 2,
    "name": "The Last Marionette",
    "description": "The First Dream's most beloved creation - an elegant puppet queen - performs her final act as an eternal guardian.",
    "enemies": [
      {
        "id": "e_2002_1",
        "name": "Porcelain Guard",
        "tier": "mob",
        "imageKey": "mob_025",
        "hp": 14700,
        "maxHp": 14700,
        "atk": 888,
        "def": 628,
        "skills": [
          {
            "name": "Porcelain Strike",
            "damage": 2.4
          },
          {
            "name": "Marionette Smash",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mob_025.webp"
      },
      {
        "id": "e_2002_2",
        "name": "Celestial String Dancer",
        "tier": "mob",
        "imageKey": "mob_026",
        "hp": 15100,
        "maxHp": 15100,
        "atk": 905,
        "def": 642,
        "skills": [
          {
            "name": "String Slash",
            "damage": 2.4
          },
          {
            "name": "Celestial Waltz",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mob_026.webp"
      },
      {
        "id": "e_2002_3",
        "name": "The Last Marionette",
        "tier": "mini-boss",
        "imageKey": "mini-boss_018",
        "hp": 26500,
        "maxHp": 26500,
        "atk": 1180,
        "def": 785,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Puppet Crescendo",
            "damage": 2.8
          },
          {
            "name": "Final Curtain",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mini-boss_018.webp"
      }
    ]
  },
  {
    "id": 2003,
    "chapter": 20,
    "part": 3,
    "name": "The First Dream",
    "description": "The ancient entity sleeping beneath reality opens its eyes - a being of stars, memories, and shattered worlds that dreamed existence into being.",
    "enemies": [
      {
        "id": "e_2003_1",
        "name": "Celestial String Dancer",
        "tier": "mob",
        "imageKey": "mob_026",
        "hp": 15300,
        "maxHp": 15300,
        "atk": 912,
        "def": 648,
        "skills": [
          {
            "name": "String Slash",
            "damage": 2.4
          },
          {
            "name": "Celestial Waltz",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mob_026.webp"
      },
      {
        "id": "e_2003_2",
        "name": "The Last Marionette",
        "tier": "mini-boss",
        "imageKey": "mini-boss_018",
        "hp": 27500,
        "maxHp": 27500,
        "atk": 1200,
        "def": 800,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Puppet Crescendo",
            "damage": 2.9
          },
          {
            "name": "Final Curtain",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mini-boss_018.webp"
      },
      {
        "id": "e_2003_3",
        "name": "The First Dream",
        "tier": "boss",
        "imageKey": "boss_020",
        "hp": 36000,
        "maxHp": 36000,
        "atk": 1320,
        "def": 860,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Dream Collapse",
            "damage": 4.5
          },
          {
            "name": "Origin Unraveling",
            "damage": 6
          }
        ],
        "image": "/assets/enemy/boss_020.webp"
      }
    ]
  },
  {
    "id": 2101,
    "chapter": 21,
    "part": 1,
    "name": "Shadow Vanguard",
    "description": "Shadow felines, void vipers, and dark crowmancers pour from the dark realm as the Shadow Sovereign's dominion expands.",
    "enemies": [
      {
        "id": "e_2101_1",
        "name": "Shadow Feline",
        "tier": "mob",
        "imageKey": "mob_027",
        "hp": 15800,
        "maxHp": 15800,
        "atk": 945,
        "def": 675,
        "skills": [
          {
            "name": "Shadow Pounce",
            "damage": 2.4
          },
          {
            "name": "Dark Claw Strike",
            "damage": 3.1
          }
        ],
        "image": "/assets/enemy/mob_027.webp"
      },
      {
        "id": "e_2101_2",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 16200,
        "maxHp": 16200,
        "atk": 958,
        "def": 685,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 2.4
          },
          {
            "name": "Void Fang",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_2101_3",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 16800,
        "maxHp": 16800,
        "atk": 975,
        "def": 698,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.5
          },
          {
            "name": "Crow Curse",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      }
    ]
  },
  {
    "id": 2102,
    "chapter": 21,
    "part": 2,
    "name": "Kitsune Specter",
    "description": "The fox spirit guardian of the Shadow Sovereign emerges, her phantom tails weaving deadly illusions across the dark realm.",
    "enemies": [
      {
        "id": "e_2102_1",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 16400,
        "maxHp": 16400,
        "atk": 965,
        "def": 688,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 2.4
          },
          {
            "name": "Void Fang",
            "damage": 3.2
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_2102_2",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 17000,
        "maxHp": 17000,
        "atk": 980,
        "def": 700,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.5
          },
          {
            "name": "Crow Curse",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2102_3",
        "name": "Kitsune Specter",
        "tier": "mini-boss",
        "imageKey": "mini-boss_019",
        "hp": 29500,
        "maxHp": 29500,
        "atk": 1245,
        "def": 832,
        "effect": "BURN",
        "skills": [
          {
            "name": "Fox Fire",
            "damage": 2.8
          },
          {
            "name": "Nine Tail Surge",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mini-boss_019.webp"
      }
    ]
  },
  {
    "id": 2103,
    "chapter": 21,
    "part": 3,
    "name": "The Shadow Sovereign",
    "description": "The Shadow Sovereign herself rises - a dark-power ruler who has consolidated shadow energy since before time had a name.",
    "enemies": [
      {
        "id": "e_2103_1",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 17200,
        "maxHp": 17200,
        "atk": 988,
        "def": 708,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.5
          },
          {
            "name": "Crow Curse",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2103_2",
        "name": "Kitsune Specter",
        "tier": "mini-boss",
        "imageKey": "mini-boss_019",
        "hp": 30500,
        "maxHp": 30500,
        "atk": 1265,
        "def": 848,
        "effect": "BURN",
        "skills": [
          {
            "name": "Fox Fire",
            "damage": 2.9
          },
          {
            "name": "Nine Tail Surge",
            "damage": 3.9
          }
        ],
        "image": "/assets/enemy/mini-boss_019.webp"
      },
      {
        "id": "e_2103_3",
        "name": "The Shadow Sovereign",
        "tier": "boss",
        "imageKey": "boss_021",
        "hp": 38500,
        "maxHp": 38500,
        "atk": 1385,
        "def": 905,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dark Dominion",
            "damage": 4.5
          },
          {
            "name": "Shadow Surge",
            "damage": 5.8
          }
        ],
        "image": "/assets/enemy/boss_021.webp"
      }
    ]
  },
  {
    "id": 2201,
    "chapter": 22,
    "part": 1,
    "name": "Star Crawlers",
    "description": "Bone harpies, crystal drakes, and abyss spiders swarm across the collapsing star field as a cosmic presence stirs within.",
    "enemies": [
      {
        "id": "e_2201_1",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 17000,
        "maxHp": 17000,
        "atk": 990,
        "def": 710,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 2.5
          },
          {
            "name": "Death Shriek",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2201_2",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 17500,
        "maxHp": 17500,
        "atk": 1005,
        "def": 722,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.5
          },
          {
            "name": "Gem Shard Blast",
            "damage": 3.3
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2201_3",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 18000,
        "maxHp": 18000,
        "atk": 1018,
        "def": 735,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.5
          },
          {
            "name": "Venom Bite",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      }
    ]
  },
  {
    "id": 2202,
    "chapter": 22,
    "part": 2,
    "name": "Obsidian Scholar",
    "description": "A dark mage who has studied the dying memories of stars commands the cosmic field, guarding the passage to her mistress.",
    "enemies": [
      {
        "id": "e_2202_1",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 17800,
        "maxHp": 17800,
        "atk": 1010,
        "def": 725,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.5
          },
          {
            "name": "Gem Shard Blast",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2202_2",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 18200,
        "maxHp": 18200,
        "atk": 1022,
        "def": 738,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.5
          },
          {
            "name": "Venom Bite",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2202_3",
        "name": "Obsidian Scholar",
        "tier": "mini-boss",
        "imageKey": "mini-boss_020",
        "hp": 31000,
        "maxHp": 31000,
        "atk": 1290,
        "def": 862,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dark Lecture",
            "damage": 2.8
          },
          {
            "name": "Void Formula",
            "damage": 3.9
          }
        ],
        "image": "/assets/enemy/mini-boss_020.webp"
      }
    ]
  },
  {
    "id": 2203,
    "chapter": 22,
    "part": 3,
    "name": "Caelestra the Cosmic Weaver",
    "description": "Caelestra awakens from within a collapsing star - a mage who absorbed the dying memories of entire worlds and rewove them into herself.",
    "enemies": [
      {
        "id": "e_2203_1",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 18500,
        "maxHp": 18500,
        "atk": 1030,
        "def": 748,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.6
          },
          {
            "name": "Venom Bite",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2203_2",
        "name": "Obsidian Scholar",
        "tier": "mini-boss",
        "imageKey": "mini-boss_020",
        "hp": 32000,
        "maxHp": 32000,
        "atk": 1310,
        "def": 878,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Dark Lecture",
            "damage": 2.9
          },
          {
            "name": "Void Formula",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mini-boss_020.webp"
      },
      {
        "id": "e_2203_3",
        "name": "Caelestra the Cosmic Weaver",
        "tier": "boss",
        "imageKey": "boss_022",
        "hp": 41500,
        "maxHp": 41500,
        "atk": 1448,
        "def": 945,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Star Collapse",
            "damage": 4.5
          },
          {
            "name": "Cosmic Weave",
            "damage": 5.9
          }
        ],
        "image": "/assets/enemy/boss_022.webp"
      }
    ]
  },
  {
    "id": 2301,
    "chapter": 23,
    "part": 1,
    "name": "Frozen Underworld",
    "description": "Shadow felines, crystal drakes, and abyss spiders emerge from beneath the frozen underworld as a demon mage breaks the seal.",
    "enemies": [
      {
        "id": "e_2301_1",
        "name": "Shadow Feline",
        "tier": "mob",
        "imageKey": "mob_027",
        "hp": 18200,
        "maxHp": 18200,
        "atk": 1020,
        "def": 738,
        "skills": [
          {
            "name": "Shadow Pounce",
            "damage": 2.5
          },
          {
            "name": "Dark Claw Strike",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mob_027.webp"
      },
      {
        "id": "e_2301_2",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 18700,
        "maxHp": 18700,
        "atk": 1035,
        "def": 750,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.6
          },
          {
            "name": "Gem Shard Blast",
            "damage": 3.4
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2301_3",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 19200,
        "maxHp": 19200,
        "atk": 1050,
        "def": 762,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.6
          },
          {
            "name": "Venom Bite",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      }
    ]
  },
  {
    "id": 2302,
    "chapter": 23,
    "part": 2,
    "name": "Lysse the Youngest",
    "description": "The youngest of the Crimson bloodline guards the frozen passage, her ice magic shaped by a lineage older than the empire.",
    "enemies": [
      {
        "id": "e_2302_1",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 19000,
        "maxHp": 19000,
        "atk": 1038,
        "def": 752,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.6
          },
          {
            "name": "Gem Shard Blast",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2302_2",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 19500,
        "maxHp": 19500,
        "atk": 1052,
        "def": 765,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.6
          },
          {
            "name": "Venom Bite",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2302_3",
        "name": "Lysse the Youngest",
        "tier": "mini-boss",
        "imageKey": "mini-boss_021",
        "hp": 32500,
        "maxHp": 32500,
        "atk": 1330,
        "def": 890,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Blood Lash",
            "damage": 2.8
          },
          {
            "name": "Crimson Fang",
            "damage": 3.9
          }
        ],
        "image": "/assets/enemy/mini-boss_021.webp"
      }
    ]
  },
  {
    "id": 2303,
    "chapter": 23,
    "part": 3,
    "name": "Glacidra the Frost Demon",
    "description": "Glacidra emerges from beneath the sealed ice - an ice demon mage whose frost is not natural cold but a demonic absolute that corrodes dimensional matter.",
    "enemies": [
      {
        "id": "e_2303_1",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 19800,
        "maxHp": 19800,
        "atk": 1060,
        "def": 775,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.6
          },
          {
            "name": "Venom Bite",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2303_2",
        "name": "Lysse the Youngest",
        "tier": "mini-boss",
        "imageKey": "mini-boss_021",
        "hp": 33500,
        "maxHp": 33500,
        "atk": 1352,
        "def": 906,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Blood Lash",
            "damage": 2.9
          },
          {
            "name": "Crimson Fang",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mini-boss_021.webp"
      },
      {
        "id": "e_2303_3",
        "name": "Glacidra the Frost Demon",
        "tier": "boss",
        "imageKey": "boss_023",
        "hp": 44000,
        "maxHp": 44000,
        "atk": 1512,
        "def": 985,
        "effect": "CHILL",
        "skills": [
          {
            "name": "Demon Frost",
            "damage": 4.6
          },
          {
            "name": "Frozen Hellfire",
            "damage": 6
          }
        ],
        "image": "/assets/enemy/boss_023.webp"
      }
    ]
  },
  {
    "id": 2401,
    "chapter": 24,
    "part": 1,
    "name": "Crimson Canopy",
    "description": "Void vipers, abyss spiders, and dark crowmancers swarm the Elder Crimson's ancient domain as the eldest of the bloodline stirs.",
    "enemies": [
      {
        "id": "e_2401_1",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 19500,
        "maxHp": 19500,
        "atk": 1058,
        "def": 768,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 2.6
          },
          {
            "name": "Void Fang",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_2401_2",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 20000,
        "maxHp": 20000,
        "atk": 1072,
        "def": 782,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.7
          },
          {
            "name": "Venom Bite",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2401_3",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 20500,
        "maxHp": 20500,
        "atk": 1088,
        "def": 796,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.7
          },
          {
            "name": "Crow Curse",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      }
    ]
  },
  {
    "id": 2402,
    "chapter": 24,
    "part": 2,
    "name": "The Fae Enchantress",
    "description": "A fairy-type mage of elegant and ruthless power guards the Elder Crimson's inner sanctum, her enchantments layered into reality itself.",
    "enemies": [
      {
        "id": "e_2402_1",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 20200,
        "maxHp": 20200,
        "atk": 1078,
        "def": 784,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.7
          },
          {
            "name": "Venom Bite",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2402_2",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 20800,
        "maxHp": 20800,
        "atk": 1095,
        "def": 798,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.7
          },
          {
            "name": "Crow Curse",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2402_3",
        "name": "Fae Enchantress",
        "tier": "mini-boss",
        "imageKey": "mini-boss_022",
        "hp": 34000,
        "maxHp": 34000,
        "atk": 1375,
        "def": 918,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Fae Hex",
            "damage": 2.9
          },
          {
            "name": "Pixie Storm",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mini-boss_022.webp"
      }
    ]
  },
  {
    "id": 2403,
    "chapter": 24,
    "part": 3,
    "name": "Lady Lyssiel the Elder Crimson",
    "description": "The eldest of the Crimson bloodline surfaces - more ancient than Visalia, patient beyond measure, bearing both elven grace and the full weight of an undying crimson heritage.",
    "enemies": [
      {
        "id": "e_2403_1",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 21000,
        "maxHp": 21000,
        "atk": 1102,
        "def": 808,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.8
          },
          {
            "name": "Crow Curse",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2403_2",
        "name": "Fae Enchantress",
        "tier": "mini-boss",
        "imageKey": "mini-boss_022",
        "hp": 35000,
        "maxHp": 35000,
        "atk": 1398,
        "def": 934,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Fae Hex",
            "damage": 3
          },
          {
            "name": "Pixie Storm",
            "damage": 4.1
          }
        ],
        "image": "/assets/enemy/mini-boss_022.webp"
      },
      {
        "id": "e_2403_3",
        "name": "Lady Lyssiel the Elder Crimson",
        "tier": "boss",
        "imageKey": "boss_024",
        "hp": 46500,
        "maxHp": 46500,
        "atk": 1578,
        "def": 1025,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Blood Elegy",
            "damage": 4.6
          },
          {
            "name": "Elven Crimson",
            "damage": 6.1
          }
        ],
        "image": "/assets/enemy/boss_024.webp"
      }
    ]
  },
  {
    "id": 2501,
    "chapter": 25,
    "part": 1,
    "name": "Before History",
    "description": "Void vipers, bone harpies, and dark crowmancers manifest from the primordial dark as the oldest being in Aetheria stirs for the first time.",
    "enemies": [
      {
        "id": "e_2501_1",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 20500,
        "maxHp": 20500,
        "atk": 1098,
        "def": 792,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 2.7
          },
          {
            "name": "Void Fang",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_2501_2",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 21000,
        "maxHp": 21000,
        "atk": 1112,
        "def": 806,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 2.7
          },
          {
            "name": "Death Shriek",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2501_3",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 21600,
        "maxHp": 21600,
        "atk": 1130,
        "def": 822,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.8
          },
          {
            "name": "Crow Curse",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      }
    ]
  },
  {
    "id": 2502,
    "chapter": 25,
    "part": 2,
    "name": "Briar the Elder Assassin",
    "description": "The elder sister of the Nature Assassin stands at the threshold of the primordial dark - a hunter older and more lethal than any before her.",
    "enemies": [
      {
        "id": "e_2502_1",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 21200,
        "maxHp": 21200,
        "atk": 1115,
        "def": 808,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 2.7
          },
          {
            "name": "Death Shriek",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2502_2",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 21800,
        "maxHp": 21800,
        "atk": 1132,
        "def": 825,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.8
          },
          {
            "name": "Crow Curse",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2502_3",
        "name": "Briar the Elder",
        "tier": "mini-boss",
        "imageKey": "mini-boss_023",
        "hp": 35500,
        "maxHp": 35500,
        "atk": 1420,
        "def": 950,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Nature Ambush",
            "damage": 3
          },
          {
            "name": "Elder Poison",
            "damage": 4.2
          }
        ],
        "image": "/assets/enemy/mini-boss_023.webp"
      }
    ]
  },
  {
    "id": 2503,
    "chapter": 25,
    "part": 3,
    "name": "The Origin",
    "description": "The First Entity awakens - the oldest being in Aetheria's universe, whose existence predates the gods, the void, and the concept of darkness itself. It does not attack from malice. It simply is, and its mere presence unmakes all things.",
    "enemies": [
      {
        "id": "e_2503_1",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 22000,
        "maxHp": 22000,
        "atk": 1145,
        "def": 835,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.8
          },
          {
            "name": "Crow Curse",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2503_2",
        "name": "Briar the Elder",
        "tier": "mini-boss",
        "imageKey": "mini-boss_023",
        "hp": 36500,
        "maxHp": 36500,
        "atk": 1445,
        "def": 968,
        "effect": "TOXIN",
        "skills": [
          {
            "name": "Nature Ambush",
            "damage": 3.1
          },
          {
            "name": "Elder Poison",
            "damage": 4.3
          }
        ],
        "image": "/assets/enemy/mini-boss_023.webp"
      },
      {
        "id": "e_2503_3",
        "name": "The Origin",
        "tier": "boss",
        "imageKey": "boss_025",
        "hp": 50000,
        "maxHp": 50000,
        "atk": 1655,
        "def": 1075,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Primordial Crush",
            "damage": 4.8
          },
          {
            "name": "First Darkness",
            "damage": 6.4
          }
        ],
        "image": "/assets/enemy/boss_025.webp"
      }
    ]
  },
  {
    "id": 2601,
    "chapter": 26,
    "part": 1,
    "name": "Eternal Echoes",
    "description": "Fragments of every defeated foe reform as echo legions, pulled from the fabric of forgotten timelines.",
    "enemies": [
      {
        "id": "e_2601_1",
        "name": "Shadow Feline",
        "tier": "mob",
        "imageKey": "mob_027",
        "hp": 22200,
        "maxHp": 22200,
        "atk": 1145,
        "def": 832,
        "skills": [
          {
            "name": "Shadow Pounce",
            "damage": 2.6
          },
          {
            "name": "Dark Claw Strike",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_027.webp"
      },
      {
        "id": "e_2601_2",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 22800,
        "maxHp": 22800,
        "atk": 1160,
        "def": 848,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.7
          },
          {
            "name": "Gem Shard Blast",
            "damage": 3.5
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2601_3",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 23400,
        "maxHp": 23400,
        "atk": 1178,
        "def": 865,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.7
          },
          {
            "name": "Venom Bite",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      }
    ]
  },
  {
    "id": 2602,
    "chapter": 26,
    "part": 2,
    "name": "Chronomancer Eternal",
    "description": "A being who has looped through every timeline the heroes have ever touched stands as the warden of the eternal void.",
    "enemies": [
      {
        "id": "e_2602_1",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 23000,
        "maxHp": 23000,
        "atk": 1163,
        "def": 850,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.7
          },
          {
            "name": "Gem Shard Blast",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2602_2",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 23600,
        "maxHp": 23600,
        "atk": 1180,
        "def": 866,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.7
          },
          {
            "name": "Venom Bite",
            "damage": 3.6
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2602_3",
        "name": "Chronomancer Eternal",
        "tier": "mini-boss",
        "imageKey": "mini-boss_024",
        "hp": 38500,
        "maxHp": 38500,
        "atk": 1478,
        "def": 985,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Temporal Rupture",
            "damage": 2.9
          },
          {
            "name": "Loop Collapse",
            "damage": 4.1
          }
        ],
        "image": "/assets/enemy/mini-boss_024.webp"
      }
    ]
  },
  {
    "id": 2603,
    "chapter": 26,
    "part": 3,
    "name": "The Void Eternal's Silence",
    "description": "The Void Eternal awakens as the living absence that remains when all stories end, seeking to erase even the memory of resistance.",
    "enemies": [
      {
        "id": "e_2603_1",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 24000,
        "maxHp": 24000,
        "atk": 1198,
        "def": 882,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 2.8
          },
          {
            "name": "Venom Bite",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2603_2",
        "name": "Chronomancer Eternal",
        "tier": "mini-boss",
        "imageKey": "mini-boss_024",
        "hp": 39500,
        "maxHp": 39500,
        "atk": 1502,
        "def": 1002,
        "effect": "PARALYSIS",
        "skills": [
          {
            "name": "Temporal Rupture",
            "damage": 3
          },
          {
            "name": "Loop Collapse",
            "damage": 4.2
          }
        ],
        "image": "/assets/enemy/mini-boss_024.webp"
      },
      {
        "id": "e_2603_3",
        "name": "The Void Eternal",
        "tier": "boss",
        "imageKey": "boss_026",
        "hp": 53500,
        "maxHp": 53500,
        "atk": 1698,
        "def": 1102,
        "effect": "VOID_CURSE",
        "skills": [
          {
            "name": "Erasure Wave",
            "damage": 4.9
          },
          {
            "name": "Final Silence",
            "damage": 6.5
          }
        ],
        "image": "/assets/enemy/boss_026.webp"
      }
    ]
  },
  {
    "id": 2701,
    "chapter": 27,
    "part": 1,
    "name": "Judgment Hosts",
    "description": "Celestial enforcers from realms untouched by the previous wars descend to pass final judgment on Aetheria.",
    "enemies": [
      {
        "id": "e_2701_1",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 24600,
        "maxHp": 24600,
        "atk": 1218,
        "def": 900,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 2.8
          },
          {
            "name": "Void Fang",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_2701_2",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 25200,
        "maxHp": 25200,
        "atk": 1235,
        "def": 915,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 2.8
          },
          {
            "name": "Death Shriek",
            "damage": 3.7
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2701_3",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 25800,
        "maxHp": 25800,
        "atk": 1252,
        "def": 932,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.9
          },
          {
            "name": "Crow Curse",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      }
    ]
  },
  {
    "id": 2702,
    "chapter": 27,
    "part": 2,
    "name": "Seraph of the Scales",
    "description": "The supreme arbiter who weighs the fate of entire realities stands ready to tip the scales against existence itself.",
    "enemies": [
      {
        "id": "e_2702_1",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 25400,
        "maxHp": 25400,
        "atk": 1240,
        "def": 918,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 2.8
          },
          {
            "name": "Death Shriek",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2702_2",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 26000,
        "maxHp": 26000,
        "atk": 1258,
        "def": 935,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.9
          },
          {
            "name": "Crow Curse",
            "damage": 3.8
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2702_3",
        "name": "Seraph of the Scales",
        "tier": "mini-boss",
        "imageKey": "mini-boss_025",
        "hp": 41500,
        "maxHp": 41500,
        "atk": 1560,
        "def": 1040,
        "effect": "SMITE",
        "skills": [
          {
            "name": "Judgment Beam",
            "damage": 3
          },
          {
            "name": "Scale Overload",
            "damage": 4.2
          }
        ],
        "image": "/assets/enemy/mini-boss_025.webp"
      }
    ]
  },
  {
    "id": 2703,
    "chapter": 27,
    "part": 3,
    "name": "The Grand Reckoning",
    "description": "The supreme celestial authority descends to enforce the final verdict upon all of creation.",
    "enemies": [
      {
        "id": "e_2703_1",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 26400,
        "maxHp": 26400,
        "atk": 1272,
        "def": 948,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 2.9
          },
          {
            "name": "Crow Curse",
            "damage": 3.9
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2703_2",
        "name": "Seraph of the Scales",
        "tier": "mini-boss",
        "imageKey": "mini-boss_025",
        "hp": 42500,
        "maxHp": 42500,
        "atk": 1585,
        "def": 1058,
        "effect": "SMITE",
        "skills": [
          {
            "name": "Judgment Beam",
            "damage": 3.1
          },
          {
            "name": "Scale Overload",
            "damage": 4.3
          }
        ],
        "image": "/assets/enemy/mini-boss_025.webp"
      },
      {
        "id": "e_2703_3",
        "name": "The Grand Reckoning",
        "tier": "boss",
        "imageKey": "boss_027",
        "hp": 57000,
        "maxHp": 57000,
        "atk": 1785,
        "def": 1155,
        "effect": "SMITE",
        "skills": [
          {
            "name": "Cosmic Verdict",
            "damage": 5
          },
          {
            "name": "Absolute Law",
            "damage": 6.6
          }
        ],
        "image": "/assets/enemy/boss_027.webp"
      }
    ]
  },
  {
    "id": 2801,
    "chapter": 28,
    "part": 1,
    "name": "Seraphic Vanguard",
    "description": "Lesser seraphim descend in disciplined, silent ranks - a herald choir sent to weigh whether mortal defiance still deserves to walk the road ahead.",
    "enemies": [
      {
        "id": "e_2801_1",
        "name": "Shadow Feline",
        "tier": "mob",
        "imageKey": "mob_027",
        "hp": 26800,
        "maxHp": 26800,
        "atk": 1290,
        "def": 962,
        "skills": [
          {
            "name": "Shadow Pounce",
            "damage": 2.9
          },
          {
            "name": "Dark Claw Strike",
            "damage": 3.9
          }
        ],
        "image": "/assets/enemy/mob_027.webp"
      },
      {
        "id": "e_2801_2",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 27400,
        "maxHp": 27400,
        "atk": 1308,
        "def": 978,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.9
          },
          {
            "name": "Gem Shard Blast",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2801_3",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 28000,
        "maxHp": 28000,
        "atk": 1325,
        "def": 995,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 3
          },
          {
            "name": "Venom Bite",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      }
    ]
  },
  {
    "id": 2802,
    "chapter": 28,
    "part": 2,
    "name": "Ophaniel the Vigilant",
    "description": "A wheel of eyes and wings descends to bar the way - one rank below the final seraph, and no less merciless in its judgment.",
    "enemies": [
      {
        "id": "e_2802_1",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 27600,
        "maxHp": 27600,
        "atk": 1312,
        "def": 980,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 2.9
          },
          {
            "name": "Gem Shard Blast",
            "damage": 4
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_2802_2",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 28200,
        "maxHp": 28200,
        "atk": 1330,
        "def": 996,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 3
          },
          {
            "name": "Venom Bite",
            "damage": 4.1
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2802_3",
        "name": "Ophaniel the Vigilant",
        "tier": "mini-boss",
        "imageKey": "mini-boss_026",
        "hp": 44500,
        "maxHp": 44500,
        "atk": 1668,
        "def": 1098,
        "effect": "LIFEDRAIN",
        "skills": [
          {
            "name": "Thousand-Eyed Gaze",
            "damage": 3.1
          },
          {
            "name": "Wheel of Judgment",
            "damage": 4.3
          }
        ],
        "image": "/assets/enemy/mini-boss_026.webp"
      }
    ]
  },
  {
    "id": 2803,
    "chapter": 28,
    "part": 3,
    "name": "The Last Seraph",
    "description": "The final seraph of the higher choir unfurls wings of pure judgment, descending to decide if mortal defiance has earned the right to stand before what watches beyond even the angels.",
    "enemies": [
      {
        "id": "e_2803_1",
        "name": "Abyss Spider",
        "tier": "mob",
        "imageKey": "mob_031",
        "hp": 28600,
        "maxHp": 28600,
        "atk": 1345,
        "def": 1012,
        "skills": [
          {
            "name": "Web Ensnare",
            "damage": 3
          },
          {
            "name": "Venom Bite",
            "damage": 4.1
          }
        ],
        "image": "/assets/enemy/mob_031.webp"
      },
      {
        "id": "e_2803_2",
        "name": "Ophaniel the Vigilant",
        "tier": "mini-boss",
        "imageKey": "mini-boss_026",
        "hp": 45500,
        "maxHp": 45500,
        "atk": 1692,
        "def": 1115,
        "effect": "LIFEDRAIN",
        "skills": [
          {
            "name": "Thousand-Eyed Gaze",
            "damage": 3.2
          },
          {
            "name": "Wheel of Judgment",
            "damage": 4.4
          }
        ],
        "image": "/assets/enemy/mini-boss_026.webp"
      },
      {
        "id": "e_2803_3",
        "name": "The Last Seraph",
        "tier": "boss",
        "imageKey": "boss_028",
        "hp": 61000,
        "maxHp": 61000,
        "atk": 1895,
        "def": 1215,
        "effect": "BLESSING",
        "skills": [
          {
            "name": "Wings of Judgment",
            "damage": 5.1
          },
          {
            "name": "Radiant Annihilation",
            "damage": 6.7
          }
        ],
        "image": "/assets/enemy/boss_028.webp"
      }
    ]
  },
  {
    "id": 2901,
    "chapter": 29,
    "part": 1,
    "name": "Silent Sentinels",
    "description": "Constructs of pure observation manifest at the edge of perception, cataloguing every strike - testing whether this story is even worth being witnessed.",
    "enemies": [
      {
        "id": "e_2901_1",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 29000,
        "maxHp": 29000,
        "atk": 1362,
        "def": 1028,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 3
          },
          {
            "name": "Void Fang",
            "damage": 4.1
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_2901_2",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 29600,
        "maxHp": 29600,
        "atk": 1380,
        "def": 1045,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 3.1
          },
          {
            "name": "Death Shriek",
            "damage": 4.2
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2901_3",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 30200,
        "maxHp": 30200,
        "atk": 1398,
        "def": 1062,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 3.1
          },
          {
            "name": "Crow Curse",
            "damage": 4.2
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      }
    ]
  },
  {
    "id": 2902,
    "chapter": 29,
    "part": 2,
    "name": "The Recording Eye",
    "description": "A fragment of the great observer takes form - no longer content to merely witness, it moves to decide whether this story deserves to be recorded at all.",
    "enemies": [
      {
        "id": "e_2902_1",
        "name": "Bone Harpy",
        "tier": "mob",
        "imageKey": "mob_029",
        "hp": 29800,
        "maxHp": 29800,
        "atk": 1385,
        "def": 1048,
        "skills": [
          {
            "name": "Bone Dive",
            "damage": 3.1
          },
          {
            "name": "Death Shriek",
            "damage": 4.2
          }
        ],
        "image": "/assets/enemy/mob_029.webp"
      },
      {
        "id": "e_2902_2",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 30400,
        "maxHp": 30400,
        "atk": 1402,
        "def": 1065,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 3.1
          },
          {
            "name": "Crow Curse",
            "damage": 4.3
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2902_3",
        "name": "The Recording Eye",
        "tier": "mini-boss",
        "imageKey": "mini-boss_027",
        "hp": 47500,
        "maxHp": 47500,
        "atk": 1775,
        "def": 1155,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Unblinking Record",
            "damage": 3.2
          },
          {
            "name": "Erased Frame",
            "damage": 4.4
          }
        ],
        "image": "/assets/enemy/mini-boss_027.webp"
      }
    ]
  },
  {
    "id": 2903,
    "chapter": 29,
    "part": 3,
    "name": "The Silent Watcher",
    "description": "The Silent Watcher breaks its eternal vow of non-interference - for the first time across the history of all realities, it chooses to act rather than merely observe.",
    "enemies": [
      {
        "id": "e_2903_1",
        "name": "Dark Crowmancer",
        "tier": "mob",
        "imageKey": "mob_032",
        "hp": 30800,
        "maxHp": 30800,
        "atk": 1418,
        "def": 1082,
        "skills": [
          {
            "name": "Dark Feather",
            "damage": 3.2
          },
          {
            "name": "Crow Curse",
            "damage": 4.3
          }
        ],
        "image": "/assets/enemy/mob_032.webp"
      },
      {
        "id": "e_2903_2",
        "name": "The Recording Eye",
        "tier": "mini-boss",
        "imageKey": "mini-boss_027",
        "hp": 48500,
        "maxHp": 48500,
        "atk": 1800,
        "def": 1172,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Unblinking Record",
            "damage": 3.3
          },
          {
            "name": "Erased Frame",
            "damage": 4.5
          }
        ],
        "image": "/assets/enemy/mini-boss_027.webp"
      },
      {
        "id": "e_2903_3",
        "name": "The Silent Watcher",
        "tier": "boss",
        "imageKey": "boss_029",
        "hp": 65000,
        "maxHp": 65000,
        "atk": 2005,
        "def": 1275,
        "effect": "SHATTER",
        "skills": [
          {
            "name": "Foreseen Ending",
            "damage": 5.2
          },
          {
            "name": "The Unblinking Eye",
            "damage": 6.8
          }
        ],
        "image": "/assets/enemy/boss_029.webp"
      }
    ]
  },
  {
    "id": 3001,
    "chapter": 30,
    "part": 1,
    "name": "The Final Threshold",
    "description": "The last guardians - extensions of the One Above All's own will - defend a threshold none have ever crossed and returned from.",
    "enemies": [
      {
        "id": "e_3001_1",
        "name": "Shadow Feline",
        "tier": "mob",
        "imageKey": "mob_027",
        "hp": 31200,
        "maxHp": 31200,
        "atk": 1435,
        "def": 1098,
        "skills": [
          {
            "name": "Shadow Pounce",
            "damage": 3.2
          },
          {
            "name": "Dark Claw Strike",
            "damage": 4.3
          }
        ],
        "image": "/assets/enemy/mob_027.webp"
      },
      {
        "id": "e_3001_2",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 31800,
        "maxHp": 31800,
        "atk": 1452,
        "def": 1115,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 3.3
          },
          {
            "name": "Void Fang",
            "damage": 4.4
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_3001_3",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 32400,
        "maxHp": 32400,
        "atk": 1470,
        "def": 1132,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 3.3
          },
          {
            "name": "Gem Shard Blast",
            "damage": 4.4
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      }
    ]
  },
  {
    "id": 3002,
    "chapter": 30,
    "part": 2,
    "name": "Echo of the One Above All",
    "description": "A pale reflection of the One Above All's own voice bars the final path - even a fraction of that authority is almost beyond comprehension.",
    "enemies": [
      {
        "id": "e_3002_1",
        "name": "Void Viper",
        "tier": "mob",
        "imageKey": "mob_028",
        "hp": 32000,
        "maxHp": 32000,
        "atk": 1458,
        "def": 1118,
        "skills": [
          {
            "name": "Venom Lunge",
            "damage": 3.3
          },
          {
            "name": "Void Fang",
            "damage": 4.4
          }
        ],
        "image": "/assets/enemy/mob_028.webp"
      },
      {
        "id": "e_3002_2",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 32600,
        "maxHp": 32600,
        "atk": 1475,
        "def": 1135,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 3.4
          },
          {
            "name": "Gem Shard Blast",
            "damage": 4.5
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_3002_3",
        "name": "Echo of the One Above All",
        "tier": "mini-boss",
        "imageKey": "mini-boss_028",
        "hp": 50500,
        "maxHp": 50500,
        "atk": 1885,
        "def": 1235,
        "effect": "BLESSING",
        "skills": [
          {
            "name": "Authored Pulse",
            "damage": 3.4
          },
          {
            "name": "First Word Echo",
            "damage": 4.6
          }
        ],
        "image": "/assets/enemy/mini-boss_028.webp"
      }
    ]
  },
  {
    "id": 3003,
    "chapter": 30,
    "part": 3,
    "name": "The One Above All",
    "description": "The final authority over every story, every universe, every ending ever written reveals itself at last - above the Origin, above the Watcher, above creation itself.",
    "enemies": [
      {
        "id": "e_3003_1",
        "name": "Crystal Drake",
        "tier": "mob",
        "imageKey": "mob_030",
        "hp": 33000,
        "maxHp": 33000,
        "atk": 1492,
        "def": 1152,
        "skills": [
          {
            "name": "Crystal Bite",
            "damage": 3.4
          },
          {
            "name": "Gem Shard Blast",
            "damage": 4.6
          }
        ],
        "image": "/assets/enemy/mob_030.webp"
      },
      {
        "id": "e_3003_2",
        "name": "Echo of the One Above All",
        "tier": "mini-boss",
        "imageKey": "mini-boss_028",
        "hp": 51500,
        "maxHp": 51500,
        "atk": 1910,
        "def": 1252,
        "effect": "BLESSING",
        "skills": [
          {
            "name": "Authored Pulse",
            "damage": 3.5
          },
          {
            "name": "First Word Echo",
            "damage": 4.7
          }
        ],
        "image": "/assets/enemy/mini-boss_028.webp"
      },
      {
        "id": "e_3003_3",
        "name": "The One Above All",
        "tier": "boss",
        "imageKey": "boss_030",
        "hp": 72000,
        "maxHp": 72000,
        "atk": 2185,
        "def": 1385,
        "effect": "SMITE",
        "skills": [
          {
            "name": "Genesis Rewritten",
            "damage": 5.3
          },
          {
            "name": "The Absolute Word",
            "damage": 7
          }
        ],
        "image": "/assets/enemy/boss_030.webp"
      }
    ]
  }
];

// ─── Story stages: narrative beats + dialogue for all 90 stages ──────
// Synced from Trump-Card-game/src/data/story.js (STORY_STAGES)
export const STORY_STAGES = [
  {
    "id": 101,
    "chapterId": 1,
    "part": 1,
    "title": "Ice Vanguard",
    "description": "Flame scouts and shadow hounds pour from the dimensional rift to test the frontier defenses.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sky fractured with a sound like shattering glass. From the wound poured the first invaders."
      },
      {
        "speaker": "Valen",
        "text": "These energy readings are off the charts. That barrier didn't break naturally - something ripped it open."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "They're heading straight for the settlement. We intercept now or civilians die."
      },
      {
        "speaker": "Zimara",
        "text": "There's intelligence behind this. These are scouts, not a random horde."
      },
      {
        "speaker": "Valen",
        "text": "Then we send a message back through that rift. Trump Cards ready - move out!"
      }
    ]
  },
  {
    "id": 102,
    "chapterId": 1,
    "part": 2,
    "title": "Frost Commander",
    "description": "A hardened void commander marches an organized battalion toward the settlement walls.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The scouts were only the beginning. A disciplined force now marched through the breach."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Those markings... this isn't chaos. They're organized. Trained."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "We can't let them reach the civilians. This ends here."
      },
      {
        "speaker": "Valen",
        "text": "Cut off the head and the body falls. Focus fire on the Commander!"
      }
    ]
  },
  {
    "id": 103,
    "chapterId": 1,
    "part": 3,
    "title": "Lysha's Glacier",
    "description": "The Glacial Empress Lysha emerges from the frozen void with power enough to freeze time itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The temperature plummeted. Something ancient stirred within the rift."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "That cold... it's not natural. This is void-born ice."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Lysha the Glacial Empress. She ruled the frozen void long before our world formed."
      },
      {
        "speaker": "Valen",
        "text": "Ancient or not, we stop her here. All Trump Cards - together!"
      }
    ]
  },
  {
    "id": 201,
    "chapterId": 2,
    "part": 1,
    "title": "Ember Legion",
    "description": "Shadow wraiths and ember brutes surge from the volcanic rift.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The horizon burned orange as the earth split open."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Shadow wraiths and Emberhorn brutes. The fire itself is turning against us."
      },
      {
        "speaker": "Valen",
        "text": "We push through. Find the source before it spreads to the settlements."
      }
    ]
  },
  {
    "id": 202,
    "chapterId": 2,
    "part": 2,
    "title": "Inferno Warden",
    "description": "An elite inferno warden commands the ember forces.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Fire walls rose around them. The Warden had arrived."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "He seals the battlefield. No retreat."
      },
      {
        "speaker": "Valen",
        "text": "Then we break through. United front - hit him hard!"
      }
    ]
  },
  {
    "id": 203,
    "chapterId": 2,
    "part": 3,
    "title": "Pyrevex's Caldera",
    "description": "Pyrevex the Ashen Drake rises from the magma caldera.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The caldera erupted. A drake forged from volcanic rock emerged."
      },
      {
        "speaker": "Zimara",
        "text": "Pyrevex. He doesn't belong in our realm."
      },
      {
        "speaker": "Valen",
        "text": "Barriers up. Trump Cards the moment we get an opening!"
      }
    ]
  },
  {
    "id": 301,
    "chapterId": 3,
    "part": 1,
    "title": "Fallen Paladins",
    "description": "Corrupted forest wardens and light golems guard the defiled shrines.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sacred light shrines had been corrupted. Those who once protected them now served darkness."
      },
      {
        "speaker": "Zimara",
        "text": "Their devotion was simply redirected to a new master."
      },
      {
        "speaker": "Valen",
        "text": "We fight through to the central shrine. Stay sharp - they still fight with conviction."
      }
    ]
  },
  {
    "id": 302,
    "chapterId": 3,
    "part": 2,
    "title": "Forest Knight",
    "description": "A corrupted forest knight leads the defiled forces against the last uncorrupted sanctum.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "At the threshold of the final sanctum stood a knight in cracked celestial armor."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "A Forest Knight... one of the greatest defenders of the old shrines."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "He still fights with forest technique - but for the wrong cause."
      },
      {
        "speaker": "Valen",
        "text": "Work the angles. Exhaust his defenses, then we strike together!"
      }
    ]
  },
  {
    "id": 303,
    "chapterId": 3,
    "part": 3,
    "title": "Aurariel's Sanctum",
    "description": "Aurariel the Light Maiden descends from the corrupted heavens to judge the mortal realm.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Light turned wrong. The sanctum blazed with radiance that blinded rather than guided."
      },
      {
        "speaker": "Zimara",
        "text": "Aurariel believes she's performing a mercy - ending all suffering by ending everything."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we show her we're worth preserving."
      },
      {
        "speaker": "Valen",
        "text": "Every Trump Card. All together. We make her believe in us!"
      }
    ]
  },
  {
    "id": 401,
    "chapterId": 4,
    "part": 1,
    "title": "Root Horde",
    "description": "Abyss-corrupted nature beasts swarm the ancient forest, strangling its sacred roots from within.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The ancient forest screamed. Trees that had stood for centuries were being choked by abyss-tainted roots."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "These creatures were nature spirits once. The corruption has turned them against the very forest they protected."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "I can feel the World Tree's pain from here..."
      },
      {
        "speaker": "Valen",
        "text": "We push deeper. The source is at the heart of the forest."
      }
    ]
  },
  {
    "id": 402,
    "chapterId": 4,
    "part": 2,
    "title": "Crimson Widow",
    "description": "The Crimson Widow Queen and her brood guard the thorn barrier sealing Sylva's domain.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The thorn wall was impenetrable - unless you could defeat the creature weaving it."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "The Crimson Widow Queen. She spins webs from corrupted nature energy."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Careful - her threads are nearly invisible in the dark."
      },
      {
        "speaker": "Valen",
        "text": "Fast strikes, constant movement. Don't let her lock us down!"
      }
    ]
  },
  {
    "id": 403,
    "chapterId": 4,
    "part": 3,
    "title": "Thornqueen's Grove",
    "description": "Thornqueen Sylva rises from the corrupted World Tree, commanding nature itself as a weapon of war.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The World Tree moved. Its roots erupted like arms reaching for prey."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "Thornqueen Sylva. She merged with the dark energy to protect the forest... but it's consuming her."
      },
      {
        "speaker": "Zimara",
        "text": "The corruption is changing her. She may not be able to separate herself anymore."
      },
      {
        "speaker": "Valen",
        "text": "We stop her before the corruption wins completely. Trump Cards - for the forest and for her!"
      }
    ]
  },
  {
    "id": 501,
    "chapterId": 5,
    "part": 1,
    "title": "Bloom Swarm",
    "description": "Water guardians twisted by dark corruption spread devouring tainted energy across the land.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Where flowers once bloomed, dark petals now fell like ash."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "These Water Guardians were supposed to protect the rivers. Now they spread the very corruption they were meant to stop."
      },
      {
        "speaker": "Zimara",
        "text": "The spores are infectious. Don't breathe them in."
      },
      {
        "speaker": "Valen",
        "text": "Masks on. We burn through the swarm and find the source."
      }
    ]
  },
  {
    "id": 502,
    "chapterId": 5,
    "part": 2,
    "title": "Frostveil Sorceress",
    "description": "The Frostveil Sorceress channels corrupted bloom energy, turning life itself into a deadly weapon.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Ice and bloom fused into something unnatural."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "She's weaponized the spores with ice - freezing them mid-air so they pierce instead of just infect."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "She's studied us. She knows our weaknesses."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we don't give her time to adapt. Overwhelm her!"
      },
      {
        "speaker": "Valen",
        "text": "All at once - maximum chaos!"
      }
    ]
  },
  {
    "id": 503,
    "chapterId": 5,
    "part": 3,
    "title": "Verdara's Bloom",
    "description": "Verdara the Bloom Devourer unfurls from the dying forest core, consuming all life in her terrible path.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The forest core split open. From within emerged something born from the corruption itself."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "Verdara... she didn't come from outside. She was born from inside the corruption."
      },
      {
        "speaker": "Zimara",
        "text": "She *is* the corruption now."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "Every second she exists, more of the forest dies."
      },
      {
        "speaker": "Valen",
        "text": "Then this ends now. Every Trump Card we have - give it everything!"
      }
    ]
  },
  {
    "id": 601,
    "chapterId": 6,
    "part": 1,
    "title": "Thorn Wraiths",
    "description": "Rotclaw ghouls and frost sirens march under the dark bloom banner.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Where the forest had been reclaimed, a new darkness moved in wearing petals as disguise."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Rotclaw Ghouls and Frostveil Sirens. Two kinds of corruption working together."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "This is coordinated. Someone is commanding both."
      },
      {
        "speaker": "Valen",
        "text": "Hit the Sirens first. Silence their song."
      }
    ]
  },
  {
    "id": 602,
    "chapterId": 6,
    "part": 2,
    "title": "Fallen Valkyrie",
    "description": "The Celestial Fallen Valkyrie guards the entrance to Nyx's black garden.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "A figure in shattered divine armor stood before the black garden gates."
      },
      {
        "speaker": "Zimara",
        "text": "A Celestial Fallen Valkyrie... she was divine once."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Whatever broke her, it went deep."
      },
      {
        "speaker": "Valen",
        "text": "We don't have time to save her. Focused strike - go!"
      }
    ]
  },
  {
    "id": 603,
    "chapterId": 6,
    "part": 3,
    "title": "Nyx's Black Garden",
    "description": "Nyx Shadowbloom rises from the corrupted World Tree's heart.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "At the garden's heart, the World Tree wept shadow instead of sap."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Nyx Shadowbloom. She's been poisoning the forests from within all along."
      },
      {
        "speaker": "Valen",
        "text": "Every Trump Card - now. Don't give her another drop of power!"
      }
    ]
  },
  {
    "id": 701,
    "chapterId": 7,
    "part": 1,
    "title": "Void Legions",
    "description": "Armies of the abyss pour through the torn dimensional gate.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The void itself was speaking in armies."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Something immense is waking up on the other side."
      },
      {
        "speaker": "Valen",
        "text": "We destroy the scouts before the main force fully crosses."
      }
    ]
  },
  {
    "id": 702,
    "chapterId": 7,
    "part": 2,
    "title": "Abyss Prophet",
    "description": "The Abyss Prophet coordinates the void assault.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He saw them coming before they arrived."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "An Abyss Prophet. He's reading futures."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we fight with pure instinct. No patterns."
      },
      {
        "speaker": "Valen",
        "text": "Chaotic aggression - give him nothing to predict!"
      }
    ]
  },
  {
    "id": 703,
    "chapterId": 7,
    "part": 3,
    "title": "The Abyss Sovereign",
    "description": "The ancient Abyss Sovereign descends from his obsidian throne.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The obsidian throne descended through the torn sky."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "This is what took everything from me."
      },
      {
        "speaker": "Valen",
        "text": "With everything we are - Trump Cards, all of them!"
      }
    ]
  },
  {
    "id": 801,
    "chapterId": 8,
    "part": 1,
    "title": "Eclipse Vanguard",
    "description": "Forest marionettes and dark huntresses march as the sky dims across the entire realm.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Day became dark. Not sunset - something was blotting out the sky with methodical, terrible intent."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Stormbreaker Titans moving in formation and Dark Huntresses flanking. Someone disciplined is commanding this."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "And those Forest Marionettes behind them - they have no fear because they feel nothing. Hardest enemies to break."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then hit them harder than they can process. They react to damage - we deliver enough they can't react at all."
      },
      {
        "speaker": "Valen",
        "text": "We break the vanguard before the sky goes completely dark. Move while we can still see the battlefield!"
      },
      {
        "speaker": "Narrator",
        "text": "Racing against the darkening sky, the heroes tore through the Eclipse vanguard with desperate speed."
      }
    ]
  },
  {
    "id": 802,
    "chapterId": 8,
    "part": 2,
    "title": "Void Samurai",
    "description": "The Void Samurai Warlord leads the Eclipse forces, cutting through all resistance with cursed void blades.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He moved like calligraphy - precise, deliberate, each strike a perfect expression of lethal art."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "A Void Samurai Warlord. His blade can cut through dimensional barriers - our defenses are irrelevant to him."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "He honors the fight. He won't use cheap tricks - but that doesn't make him less deadly."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "A warrior who fights with honor? Good. Then we can outfight him - skill versus skill."
      },
      {
        "speaker": "Valen",
        "text": "Skills and Trump Cards - match his discipline with our unity. Together we're stronger than any solo warrior!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Void Samurai, the heroes answered art with unity - five voices speaking as one blade."
      }
    ]
  },
  {
    "id": 803,
    "chapterId": 8,
    "part": 3,
    "title": "Radiant Dragon Emperor",
    "description": "The Radiant Dragon Emperor descends from the heavens, unleashing divine light that burns through every shadow in existence.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sky blazed gold and white. Something vast and luminous descended - a dragon whose every scale was forged from pure radiant energy."
      },
      {
        "speaker": "Zimara",
        "text": "The Radiant Dragon Emperor. He doesn't just use divine light - he IS divine light given physical form. Ancient beyond measure."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "His radiant breath burns straight through shadow defenses. We need void and dark techniques to counter his holy radiance."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Stay mobile - his divine light spreads in waves. Standing still means getting scorched by light so pure it becomes destructive."
      },
      {
        "speaker": "Valen",
        "text": "Shadow and void Trump Cards only - counter his radiance with everything that opposes the light. Go now!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Radiant Dragon Emperor, the heroes fought against blinding divine light with Trump Cards blazing from every shadow element."
      }
    ]
  },
  {
    "id": 901,
    "chapterId": 9,
    "part": 1,
    "title": "Fractured Celestials",
    "description": "Heaven and abyss collide as corrupted water guardians and forest marionettes flood the fractured celestial realm.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The celestial realm had fractured. Half was light. Half was void. In the crack between them walked corrupted angels."
      },
      {
        "speaker": "Zimara",
        "text": "These Water Guardians are caught between two masters - light and dark pulling them in opposite directions simultaneously."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The fracture is destabilizing reality at this location. Every second here is dangerous even without fighting."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Dangerous or not, we keep moving. Fractured realm is better than a fully-consumed one."
      },
      {
        "speaker": "Valen",
        "text": "Through the guardians, through the fracture. Don't stop no matter what you see in the cracks - it's not real!"
      },
      {
        "speaker": "Narrator",
        "text": "Through a realm caught between heaven and void, the heroes fought corrupted celestials on both fronts."
      }
    ]
  },
  {
    "id": 902,
    "chapterId": 9,
    "part": 2,
    "title": "Clockwork Commander",
    "description": "The Clockwork Commander orchestrates the celestial assault, his gears fueled by pure destruction.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The battlefield reorganized itself mid-fight. A mechanical mind was calculating optimal troop positions in real time."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "A Clockwork Commander. He processes faster than human intuition. Every gap we exploit - he closes before we reach it."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Then we attack gaps that don't exist yet. Create them and hit them in the same instant."
      },
      {
        "speaker": "Zimara",
        "text": "His processing has a thermal limit. Push him too hard and he overheats - his calculations fail under overload."
      },
      {
        "speaker": "Valen",
        "text": "Simultaneous strikes from all angles - overload his calculations! Trump Cards together, right now!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Clockwork Commander, the heroes used chaos to defeat the machine's perfect order."
      }
    ]
  },
  {
    "id": 903,
    "chapterId": 9,
    "part": 3,
    "title": "Celestial Valkor",
    "description": "Celestial Valkor descends as the fusion of light and darkness, rewriting the laws of existence itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "At the fracture's heart stood something that should not exist - a being of perfect light and perfect darkness unified."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Celestial Valkor. He absorbed both sides of the fracture and merged them. He's rewriting what reality allows."
      },
      {
        "speaker": "Zimara",
        "text": "If he completes the rewrite, existence itself changes - everything we know becomes something else."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we stop him before the rewrite is complete. Interrupt the equation before it solves."
      },
      {
        "speaker": "Valen",
        "text": "Every Trump Card - from every faction. Meet his unity with ours. This is what five factions were meant for!"
      },
      {
        "speaker": "Narrator",
        "text": "Against Celestial Valkor, five factions united to defend the very definition of existence itself."
      }
    ]
  },
  {
    "id": 1001,
    "chapterId": 10,
    "part": 1,
    "title": "Queen's Vanguard",
    "description": "Queen Nythera's void-corrupted servants flood the celestial realm, erasing every trace of light.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The heavens had been claimed. A throne of void crystal now sat where the celestial palace had once stood."
      },
      {
        "speaker": "Zimara",
        "text": "Queen Nythera. She didn't conquer the celestial realm by force - she infected it, and it surrendered willingly."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Her vanguard: Rotclaw Ghouls, Dark Huntresses, Forest Marionettes - three different corruptions working in unison."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Three corruptions means three different battle rhythms. We need to disrupt all three simultaneously."
      },
      {
        "speaker": "Valen",
        "text": "Valentina and Reika handle the Ghouls. Aisling and Nova take the Huntresses. Kaori and I handle the Puppets. Go!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the divided vanguard, the heroes divided themselves to counter three coordinated corruptions."
      }
    ]
  },
  {
    "id": 1002,
    "chapterId": 10,
    "part": 2,
    "title": "Nature Assassin",
    "description": "The Nature Assassin stalks through Nythera's corrupted garden, poisoning all she touches.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Death-scented roses bloomed from the walls. Their thorns were tipped with something far worse than venom."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The Nature Assassin. She moves through her garden without disturbing a single petal. We won't hear her coming."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "She's already poisoned the battlefield - those roses are data points in her sense network."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "I can feel the plant network. She knows our positions through the roots. We can't hide from her here."
      },
      {
        "speaker": "Valen",
        "text": "Then we don't hide - we overwhelm. Too many inputs for her network to process. All at once, maximum chaos!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Nature Assassin, the heroes flooded her sensor network with overwhelming simultaneous action."
      }
    ]
  },
  {
    "id": 1003,
    "chapterId": 10,
    "part": 3,
    "title": "Queen Nythera's Throne",
    "description": "Queen Nythera rises from her stolen celestial throne, the void energy of a thousand worlds at her command.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The throne room was alive with void energy. A thousand worlds' worth of stolen power swirled around a single figure."
      },
      {
        "speaker": "Zimara",
        "text": "Queen Nythera. She absorbed dimensional energy from every realm the void touched. She IS the void made royal."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "If she releases that stored energy all at once, there's nothing left of us or this realm."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we don't give her the opening to release it. Constant pressure - never let her breathe."
      },
      {
        "speaker": "Valen",
        "text": "Trump Cards the moment we engage - overwhelming force, no pauses. Dethrone her before she strikes!"
      },
      {
        "speaker": "Narrator",
        "text": "Against Queen Nythera, the heroes stormed the stolen celestial throne with every weapon they possessed."
      }
    ]
  },
  {
    "id": 1101,
    "chapterId": 11,
    "part": 1,
    "title": "Titan's Vanguard",
    "description": "Emberhorn brutes and titan shock troops storm the burning celestial ruins in endless waves.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The ground shook before they arrived. Each footstep of the titan vanguard registered like a small earthquake."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Emberhorn Brutes up front, Stormbreaker Titans flanking, Forest Marionettes filling the gaps. Perfect ground assault."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "Endless waves. They're not trying to win this fight - they're trying to exhaust us before the real battle."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we end each wave fast enough that we don't get tired. No dragging it out - decisive hits."
      },
      {
        "speaker": "Valen",
        "text": "Efficient, fast, overwhelming force. Each wave falls in under a minute. Let's show them what decisive looks like."
      },
      {
        "speaker": "Narrator",
        "text": "Against the titan vanguard, the heroes raced to defeat each wave before exhaustion could set in."
      }
    ]
  },
  {
    "id": 1102,
    "chapterId": 11,
    "part": 2,
    "title": "Infernal Berserker King",
    "description": "The Infernal Berserker King leads the titan advance, his volcanic rage growing with every fallen hero.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He was rage made physical. The Infernal Berserker King didn't walk toward them - he detonated in their direction."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "He feeds on pain - his enemies' and his own. Every hit makes him angrier and more powerful."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Then we need to defeat him without letting the fight drag on. Long battles make him more dangerous, not less."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Burst damage. Everything we have in the shortest possible window - no back and forth."
      },
      {
        "speaker": "Valen",
        "text": "Trump Cards the second we have an opening. One massive burst - before his rage peaks! Go!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Berserker King, the heroes raced to end the fight before his rage could make him unstoppable."
      }
    ]
  },
  {
    "id": 1103,
    "chapterId": 11,
    "part": 3,
    "title": "The Infernal Titan King",
    "description": "The Infernal Titan King stomps the burning ruins flat, threatening to unmake all celestial order.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He was the size of a building. Each footstep erased landmarks that had stood for centuries."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "The Infernal Titan King. Not just powerful - basically unkillable under normal conditions."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "He has a weak point - the volcanic core on his chest. It's how he sustains his size and heat."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "Hit the core with concentrated cold or void energy and it destabilizes his entire form."
      },
      {
        "speaker": "Valen",
        "text": "Aisling, Kaori - you're hitting that core. Everyone else keeps him occupied. Trump Cards on the core on my signal!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Titan King, the heroes executed a precision assault against the burning core that sustained his terrible power."
      }
    ]
  },
  {
    "id": 1201,
    "chapterId": 12,
    "part": 1,
    "title": "Chrono Soldiers",
    "description": "Forest marionettes march in perfect synchrony as time itself stutters and skips around them.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Time felt wrong here. Steps echoed before they happened. Shadows fell at incorrect angles."
      },
      {
        "speaker": "Zimara",
        "text": "The temporal field is destabilizing. These Forest Marionettes are synchronized to Chronos's time manipulation."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "They attack before we react because they're operating one second ahead of our timeline."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we act one second before we think we should. Intuition, not reaction. Trust your gut over your eyes."
      },
      {
        "speaker": "Valen",
        "text": "Intuition-first fighting. Forget what you see - fight what you feel is about to happen. Move!"
      },
      {
        "speaker": "Narrator",
        "text": "Fighting in stuttering time, the heroes learned to trust instinct over their own distorted perception."
      }
    ]
  },
  {
    "id": 1202,
    "chapterId": 12,
    "part": 2,
    "title": "Frost Revenant Knight",
    "description": "The Frost Revenant Knight patrols the temporal rift, his soul bound to Chronos through death itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He had died before. Multiple times. Each death was recorded in his armor as another layer of frost."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "A Frost Revenant Knight - killed by Chronos and rebound to service. He can't truly die while Chronos holds his timeline."
      },
      {
        "speaker": "Zimara",
        "text": "He revives because Chronos just loops his death backward. We need to break the temporal loop, not just defeat him."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Overwhelm him faster than Chronos can process the loop. Make the death instantaneous and total."
      },
      {
        "speaker": "Valen",
        "text": "Everything simultaneously - give Chronos no time to run the reversal. Trump Cards on three. One. Two. Three!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the deathless Revenant, the heroes struck with enough force to break even a god's temporal reset."
      }
    ]
  },
  {
    "id": 1203,
    "chapterId": 12,
    "part": 3,
    "title": "Chronos Awakens",
    "description": "Chronos the God of Time steps from the collapsing timeline, preparing to unmake all of history.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Time stopped. Not slowed - stopped completely. And then it began running backwards."
      },
      {
        "speaker": "Zimara",
        "text": "Chronos. The God of Time. He's rewriting when things happen - undoing our victories as fast as we achieve them."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "If he completes the temporal collapse, nothing we've done will have ever happened. Every victory erased."
      },
      {
        "speaker": "Valen",
        "text": "How do you fight someone who controls when things happen?"
      },
      {
        "speaker": "Zimara",
        "text": "Act in the moment he can't predict. Trump Cards - now, before he sees us use them!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the God of Time, the heroes burned every ounce of power before Chronos could undo it."
      }
    ]
  },
  {
    "id": 1301,
    "chapterId": 13,
    "part": 1,
    "title": "Frozen Legions",
    "description": "The Frostbound Monarch's eternal winter army spreads across the land, freezing all who dare resist.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The final chapter began with silence - absolute crystalline silence that preceded absolute zero."
      },
      {
        "speaker": "Valen",
        "text": "The Frostbound Monarch has been watching us this entire war. He let others test us first."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "His advance forces - Flame Scouts from the old void combined with his Frostveil Sirens. Two armies merged."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Every battle has prepared us for this. We're ready for whatever he throws at us."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Five factions. Every Trump Card earned through blood and sacrifice. This is the final push. Are we ready?"
      },
      {
        "speaker": "Narrator",
        "text": "Ready or not, the heroes stepped into the Frostbound Monarch's eternal winter for the final battle."
      }
    ]
  },
  {
    "id": 1302,
    "chapterId": 13,
    "part": 2,
    "title": "Storm Siren Empress",
    "description": "The Storm Siren Empress commands weather itself, turning blizzards into weapons of annihilation.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sky became her instrument. Each note she sang called lightning. Each breath she exhaled became blizzard."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "A Storm Siren Empress - her voice is tuned to weather frequencies. She doesn't control storms; she IS the storm."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Counter-weather. Fire burns through blizzards, lightning rods redirect her strikes, void absorbs the excess."
      },
      {
        "speaker": "Zimara",
        "text": "We need to disrupt her song before she reaches the crescendo. Interrupt her, and the storm collapses."
      },
      {
        "speaker": "Valen",
        "text": "We are the interruption. Hit her from all sides simultaneously - break the song before the final note!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Storm Siren, the heroes fought to silence a voice that commanded the end of all weather."
      }
    ]
  },
  {
    "id": 1303,
    "chapterId": 13,
    "part": 3,
    "title": "The Frostbound Monarch",
    "description": "The Frostbound Monarch descends from his frozen throne, his very gaze turning heroes to solid ice.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He did not move dramatically. He simply arrived - and the temperature dropped below the threshold of survival."
      },
      {
        "speaker": "Valen",
        "text": "The Frostbound Monarch. He's been building his power this entire war, watching every Trump Card we've used."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "He's prepared counters for every ability we have. He designed his defense around our specific Trump Cards."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we use combinations he couldn't have predicted. New patterns - factions working together he never modeled."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Everything we have, everything we've learned, every bond forged in battle. This is it."
      },
      {
        "speaker": "Narrator",
        "text": "Against the Frostbound Monarch, the heroes fought with every lesson, every scar, every Trump Card earned."
      }
    ]
  },
  {
    "id": 1401,
    "chapterId": 14,
    "part": 1,
    "title": "Seraphine's Court",
    "description": "Seraphine's crimson court enforces blood law across a gothic empire built entirely on stolen power.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Beyond the ice kingdom, blood-red candlelight illuminated a gothic empire carved from crystallized nightmare."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Seraphine the Crimson Empress. She's been feeding on the energy of every battle we've won since Chapter One."
      },
      {
        "speaker": "Zimara",
        "text": "Every Trump Card we used - she absorbed a fraction of its power. We've been charging her this whole time."
      },
      {
        "speaker": "Valen",
        "text": "She planned this. Engineered the entire war so we'd grow strong enough to be worth harvesting."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we fight her before she can use what she's taken. Aggressive, decisive - don't let her draw more power!"
      },
      {
        "speaker": "Narrator",
        "text": "Into Seraphine's court, the heroes fought knowing their every past victory had fed their current enemy."
      }
    ]
  },
  {
    "id": 1402,
    "chapterId": 14,
    "part": 2,
    "title": "Crimson Widow Queen",
    "description": "The Crimson Widow Queen enforces Seraphine's will, her blood webs trapping all who enter the empire.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Crimson threads filled the throne room antechamber. To move was to be measured, catalogued, and trapped."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The Crimson Widow Queen again - but empowered by Seraphine's stolen energy. Far stronger than we faced before."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "Her webs aren't just binding - they're draining. Every second we're caught, she feeds Seraphine."
      },
      {
        "speaker": "Carmen Vidal",
        "text": "We need to sever the feeding lines while fighting. Nature can cut Seraphine's connection to the webs."
      },
      {
        "speaker": "Valen",
        "text": "Carmen and Maeve sever the lines. Everyone else breaks the Widow Queen before she can reestablish the connection!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the empowered Widow Queen, the heroes fought to cut off Seraphine's power conduit from its source."
      }
    ]
  },
  {
    "id": 1403,
    "chapterId": 14,
    "part": 3,
    "title": "Seraphine's Domain",
    "description": "Seraphine the Crimson Empress stands at the peak of her stolen power, ready to consume the heroes completely.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She was beautiful in the way a supernova is beautiful - overwhelming, lethal, inevitable."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Seraphine the Crimson Empress. Her power peaked the moment we walked through that door. She was waiting."
      },
      {
        "speaker": "Zimara",
        "text": "She absorbed everything - every villain we defeated fed her, every Trump Card we used was catalogued and countered."
      },
      {
        "speaker": "Valen",
        "text": "She knows every Trump Card we have. So we use them in combinations she couldn't have modeled."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "New patterns. Unprecedented combinations. Overload her counters with creativity she never planned for."
      },
      {
        "speaker": "Narrator",
        "text": "Against the Crimson Empress, the heroes fought with combinations of power she had never anticipated in all her planning."
      }
    ]
  },
  {
    "id": 1501,
    "chapterId": 15,
    "part": 1,
    "title": "World Eater's Herald",
    "description": "The World Eater's herald forces march as reality itself dissolves - the final war for all existence begins.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Reality was dissolving at the edges. Not corrupted - unmade. Something was consuming existence from the outside in."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The World Eater. It doesn't conquer or corrupt - it simply consumes. It existed before our universe was named."
      },
      {
        "speaker": "Valen",
        "text": "These herald forces are its antibodies - sweeping ahead to clear resistance before it arrives."
      },
      {
        "speaker": "Zimara",
        "text": "Every realm it has touched - gone. Not conquered, not corrupted. Erased from having ever existed."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we fight so hard the universe can't forget us. We make ourselves undeniable. Move!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the World Eater's herald, the heroes fought to remain real in a universe being eaten alive."
      }
    ]
  },
  {
    "id": 1502,
    "chapterId": 15,
    "part": 2,
    "title": "Void Samurai of the Abyss",
    "description": "The greatest Void Samurai Warlord stands at the threshold between existence and absolute oblivion.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "At the threshold between what existed and what did not stood the last great warrior - sworn to guard the end."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The greatest Void Samurai Warlord. He chose to guard the World Eater's passage - he believes consumption is inevitable."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "A warrior who fights for inevitability is the most dangerous kind. He has no reason to hold back."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "But he can still be defeated. Inevitability isn't invincibility. We've beaten impossible before."
      },
      {
        "speaker": "Valen",
        "text": "We've faced gods and time itself. One warrior won't stop us now. Trump Cards - everything we have!"
      },
      {
        "speaker": "Narrator",
        "text": "At the threshold of oblivion, the heroes met the last guardian with Trump Cards blazing at full power."
      }
    ]
  },
  {
    "id": 1503,
    "chapterId": 15,
    "part": 3,
    "title": "The World Eater Leviathan",
    "description": "The World Eater Leviathan surfaces from the cosmic abyss to consume the last remnants of all reality.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The ocean of reality parted. Something emerged that was older than stars, older than darkness, older than the concept of beginning."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The World Eater Leviathan. It doesn't want to rule or corrupt. It simply wants to CONSUME everything that ever existed."
      },
      {
        "speaker": "Valen",
        "text": "Every faction, every hero, every world it crosses - gone without a trace. We are the absolute last line."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "This is it. No retreat. No backup coming. No second chance if we fail here."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we give it everything. Every Trump Card, every last bit of power we have ever carried."
      },
      {
        "speaker": "Narrator",
        "text": "Five factions stood as one before an entity that had consumed entire universes. This was the end - or a new beginning."
      }
    ]
  },
  {
    "id": 1601,
    "chapterId": 16,
    "part": 1,
    "title": "Bell Tower Guardians",
    "description": "Iron Shade Knights and Forest Revenants defend a cursed cathedral as a darkness older than Seraphine stirs below.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The Crimson Empire had fallen - but its remnants still breathed. Beneath the rubble of Seraphine's palace, something patient and ancient began to stir."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "These Iron Shade Knights weren't Seraphine's. Someone else commanded them while she ruled. Someone she kept chained in the cathedral basement."
      },
      {
        "speaker": "Zimara",
        "text": "Blood energy is still active here. When Seraphine fell, it wasn't destroyed - it was absorbed by something beneath the cathedral. Something far older."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "I sense a presence that makes Seraphine seem like an apprentice. Ancient. Patient. It was waiting for us to weaken her before breaking free."
      },
      {
        "speaker": "Valen",
        "text": "Then we don't give it time to finish awakening. Through the guardians, into the cathedral. We stop it before it rises completely."
      },
      {
        "speaker": "Narrator",
        "text": "Into the Cathedral of Chains, the heroes chased a darkness that had been patient for centuries - watching, feeding, and waiting."
      }
    ]
  },
  {
    "id": 1602,
    "chapterId": 16,
    "part": 2,
    "title": "Stone Keeper",
    "description": "The Stone Keeper rises from the cathedral depths - an ancient earth guardian whose stone fists crack the foundations with each thunderous slam.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The cathedral floor erupted. The Stone Keeper rose from the foundations - an earth guardian sealed beneath the stone for centuries, now free and furious."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "The Stone Keeper. Solid earth construct, each fist the size of a siege boulder. Every slam reshapes the ground. Don't let it pin us against the walls."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Those ancient seals on the stone pillars - they were BINDING it. Seraphine's fall cracked the foundations. We accidentally freed this thing when we defeated her."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we put it back. Hit the seam lines in its stone plating - that's where the binding energy channels. Break those and it can't hold its form."
      },
      {
        "speaker": "Valen",
        "text": "Coordinated strike - aim for the seams before it raises those fists! Trump Cards the moment it winds up. There's a window. We take it. Move!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Stone Keeper, the heroes fought a guardian of living earth, timing every blow to the brief moment before its massive stone fists struck the cathedral floor."
      }
    ]
  },
  {
    "id": 1603,
    "chapterId": 16,
    "part": 3,
    "title": "Visalia the Crimson",
    "description": "The true architect behind every shadow of the war - a demon-vampire who engineered entire empires from the dark - finally reveals herself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "At the cathedral altar, the blood energy crystallized into form. A figure of terrible beauty descended - part demon, part something older, all hunger, and entirely in control."
      },
      {
        "speaker": "Zimara",
        "text": "Visalia the Crimson. Dark and blood element - she predates Seraphine by centuries. The Crimson Empire was feeding from her reservoir without even knowing it."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Seraphine wasn't the architect. Visalia engineered all of it - every war, every empire, every battle we fought - feeding on collective bloodshed from the shadows."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "She's at full power. Everything Seraphine harvested, every victory we achieved - it all flowed to her. We've been charging her this entire time."
      },
      {
        "speaker": "Valen",
        "text": "She fed on our victories. Then we make her regret that. Every Trump Card - for everyone she used without their knowledge. This ends now!"
      },
      {
        "speaker": "Narrator",
        "text": "Against Visalia the Crimson, the heroes confronted the true architect behind every shadow of the war - and gave her no more time to feed."
      }
    ]
  },
  {
    "id": 1701,
    "chapterId": 17,
    "part": 1,
    "title": "Lost Kingdom's Dead",
    "description": "Soldiers of an erased kingdom fight with the desperate fury of history that refused to be forgotten.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Between the fallen cathedral and the abyss lay a place that appeared on no map - because every map that had ever named it was gone. The kingdom had been erased completely."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The erased kingdom. Its name has been removed from every record, every tongue, every memory. It exists - but history refuses to acknowledge it."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Those soldiers - Void Wraith Archers and Tomb Specters. They're loyal to someone who no longer has a name or a kingdom to defend. Just a throne and a grievance."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "They fight as though they have something to prove. To history. To the world that pretended they never existed. That kind of resolve doesn't fade with death."
      },
      {
        "speaker": "Valen",
        "text": "We acknowledge them by facing them. Show them their king can be challenged even by those who barely know his story. Move - respectfully, but decisively!"
      },
      {
        "speaker": "Narrator",
        "text": "Into the unnamed kingdom, the heroes fought soldiers whose loyalty endured beyond death, beyond erasure, beyond the edge of recorded history."
      }
    ]
  },
  {
    "id": 1702,
    "chapterId": 17,
    "part": 2,
    "title": "Lady Silkgrave",
    "description": "The spider empress of the erased royal tomb commands crystal limbs and funeral silk from an abandoned throne draped in centuries of grief.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The abandoned royal tomb was woven floor to ceiling in funeral silk. At its center, something beautiful and terrible had spent centuries waiting for visitors."
      },
      {
        "speaker": "Zimara",
        "text": "Lady Silkgrave. Crystal spider limbs beneath a royal funeral dress, silver hair pooling on the floor. She was the queen of this kingdom before history erased them both."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "She and the King were erased together. But where he became fury, she became something else - weaving a tomb kingdom in the dark, perfectly preserved, perfectly alone."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "She's spent centuries in here. The grief and rage that creates - I don't want to find out what that looks like fully unleashed against us."
      },
      {
        "speaker": "Valen",
        "text": "Don't touch the silk - it conducts her power. Range attacks, Trump Cards timed between her weave cycles. Fast and clean. Go!"
      },
      {
        "speaker": "Narrator",
        "text": "Against Lady Silkgrave, the heroes fought a queen whose loneliness had transformed into something vast enough to fill an entire abandoned kingdom."
      }
    ]
  },
  {
    "id": 1703,
    "chapterId": 17,
    "part": 3,
    "title": "The Crownless King",
    "description": "An ancient ruler whose kingdom was erased from all of history commands darkness from a shattered throne floating in the void of forgotten memory.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The shattered throne floated in darkness. Thousands of names - carved into black-gold armor - surrounded a void where a face should have been."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The Crownless King. Every name on his armor belongs to someone whose story was erased with his. He carries their weight because he refuses to let them be forgotten twice."
      },
      {
        "speaker": "Zimara",
        "text": "The void where his face should be - that's where his identity was taken. He doesn't know who he was anymore. Only that he was wronged, and that it was systematic."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Something this old and this angry doesn't have a weakness we can exploit cleanly. Only a will we need to overcome through sheer force of our own."
      },
      {
        "speaker": "Valen",
        "text": "We fight with everything we've earned. Every Trump Card - to honor every name on that armor. Full power, right now. This is for all of them!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Crownless King, the heroes fought in the darkness of erased history - their Trump Cards blazing with the names of those who were never allowed to be remembered."
      }
    ]
  },
  {
    "id": 1801,
    "chapterId": 18,
    "part": 1,
    "title": "Forge Cultists",
    "description": "Dark Golems and Obsidian Sentinels guard a volcanic monastery as two cosmic energies pull toward catastrophic convergence.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Beyond the erased kingdom, the air turned volcanic. A monastery of molten stone loomed ahead - its monks had traded faith for fire, their bodies converted into living forges."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Dark Golems and Obsidian Sentinels. Whoever created them didn't want worshippers - they wanted weapons capable of surviving the heat of a goddess awakening."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Two massive energy signatures ahead - one divine radiance, one absolute darkness - and they're spiraling toward each other. This is a convergence event."
      },
      {
        "speaker": "Zimara",
        "text": "Mother Eclipse. Two cosmic bodies merged into one being. These cultists are her honor guard, keeping anyone from interfering before the convergence completes."
      },
      {
        "speaker": "Valen",
        "text": "We carve through the guard before those two energies synchronize fully. If she achieves perfect balance between creation and destruction - nothing stops her. Move now!"
      },
      {
        "speaker": "Narrator",
        "text": "Through the volcanic monastery, the heroes fought forge-cultists protecting a goddess in the process of becoming something beyond all categories of power."
      }
    ]
  },
  {
    "id": 1802,
    "chapterId": 18,
    "part": 2,
    "title": "The Furnace Saint",
    "description": "A former holy knight whose faith was tested until it transformed into a living forge stands as the burning guardian of a goddess's threshold.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "At the monastery's heart stood a cathedral of living flame - and within it, a holy knight whose devotion had been pushed past its breaking point into something molten."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "The Furnace Saint. Glowing molten cavity where his chest armor used to be. He forges cursed weapons inside himself - that giant hammer was made from his own melted conviction."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "He believes this is holy. Converting souls into fuel for Mother Eclipse's awakening. You cannot reason with devotion that has been refined this far beyond doubt."
      },
      {
        "speaker": "Maeve Boyle",
        "text": "Then we overcome his conviction with ours. He believes this is right. We believe it isn't. One of us gets to prove it."
      },
      {
        "speaker": "Valen",
        "text": "Watch the hammer - each swing reshapes the battlefield geometry. Trump Cards when he winds up for the big swing, before impact. Time it perfectly. Go!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Furnace Saint, the heroes met zealotry made physical - and answered it with the only thing stronger than faith: five factions acting as one."
      }
    ]
  },
  {
    "id": 1803,
    "chapterId": 18,
    "part": 3,
    "title": "Mother Eclipse",
    "description": "A cosmic goddess whose two bodies merged into one - radiating divine light on one side, consumed by absolute darkness on the other - achieves terrible perfect balance.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Two presences occupied one body. Light so pure it could heal entire universes. Darkness so complete it could erase them. And they were perfectly balanced - making her unlike anything the heroes had faced."
      },
      {
        "speaker": "Zimara",
        "text": "Mother Eclipse. Neither side is winning within her. She has achieved actual equilibrium between creation and destruction - and she intends to apply both to everything simultaneously."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "I've faced beings of the void. I've witnessed entities of pure light. Nothing like this. She transcends elemental categories entirely - she is the space between all of them."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "No elemental advantage. No faction weakness to exploit. She embodies everything and its opposite. This is the fight where everything we know about strategy stops applying."
      },
      {
        "speaker": "Valen",
        "text": "Then we apply the only thing that transcends strategy: five factions, one purpose. Every Trump Card. All elements at once. United - NOW!"
      },
      {
        "speaker": "Narrator",
        "text": "Against Mother Eclipse, five factions faced a being that was the sum of all opposites - and answered the impossible with every last Trump Card they possessed."
      }
    ]
  },
  {
    "id": 1901,
    "chapterId": 19,
    "part": 1,
    "title": "Wayward Scholars",
    "description": "Dimensional wanderers and ancient navigators serve a devouring library that consumes knowledge and knower simultaneously.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "No wall enclosed the Archive. Books extended in every direction as far as any sense could reach. And they were hungry - not for light or warmth, but for knowledge itself."
      },
      {
        "speaker": "Zimara",
        "text": "The Archive Devourer has transformed the library into a living predator. Every text here was written by someone - and the Devourer feeds on the knowledge and the knower simultaneously."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Star Map Wanderers - ancient navigators whose cosmic charts drew the Devourer here. They're trapped inside now, feeding it dimensional information on an endless loop."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "And those Dimensional Rift Stalkers are the library's immune system. They attack anything that enters without belonging - and we very much don't belong here."
      },
      {
        "speaker": "Valen",
        "text": "We belong here long enough to find the Devourer and stop it. Navigation instincts on - and read absolutely nothing you see. Even a glance activates the hunger. Move!"
      },
      {
        "speaker": "Narrator",
        "text": "Through a library that read its visitors, the heroes pursued a devourer that had consumed more knowledge than entire civilizations could produce in a thousand years."
      }
    ]
  },
  {
    "id": 1902,
    "chapterId": 19,
    "part": 2,
    "title": "Void-Touched Navigator",
    "description": "An ancient sailor fused with cosmic energy floats through infinite corridors, his star-carved skin charting dimensions he can no longer escape.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "He floated above the floor - an ancient sailor who had mapped too many dimensions and brought too many back with him. The void had followed his charts home and never left."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The Void-Touched Navigator. Star maps carved into his skin, a ghostly compass rotating behind him reading dimensions instead of cardinal directions."
      },
      {
        "speaker": "Zimara",
        "text": "He's the Archive's guardian now. The Devourer claimed him when his navigational knowledge became valuable enough to partially consume - leaving him aware, but bound."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Partially consumed means part of him is still present. He knows this is wrong. He's been here long enough to hate it. Use that awareness."
      },
      {
        "speaker": "Valen",
        "text": "Quick and decisive - we free him by ending this. Trump Cards before he recalculates our positions across every dimension he's mapped. Now!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Void-Touched Navigator, the heroes fought a man half-lost between worlds - and whole-heartedly defending the wrong master out of enforced loyalty."
      }
    ]
  },
  {
    "id": 1903,
    "chapterId": 19,
    "part": 3,
    "title": "The Archive Devourer",
    "description": "A massive dragon-like entity composed of living books, scrolls, and ancient knowledge opens eyes formed from the oldest magical text ever written.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Books, scrolls, ink, and ancient knowledge orbited a massive form that breathed text instead of air. Its eyes were composed of the oldest magical words ever committed to record."
      },
      {
        "speaker": "Zimara",
        "text": "The Archive Devourer. It doesn't destroy knowledge - it consumes and contains it. Every secret, every lost civilization's final words, every spell ever written is inside that thing."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "It knows everything about us. Every battle we've fought, every technique we use - it's already read the complete history of this war from a thousand different sources."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we fight like we've never fought before. No documented technique, no established pattern. Pure improvisation - give it nothing it has already read and catalogued."
      },
      {
        "speaker": "Valen",
        "text": "Improvise. New combinations, sequences that have never appeared in any text. Surprise something that believes it has read everything. Trump Cards - novel, unexpected, NOW!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Archive Devourer, the heroes wrote a new chapter - one that had never appeared in any text the ancient beast had ever consumed in all its endless centuries."
      }
    ]
  },
  {
    "id": 2001,
    "chapterId": 20,
    "part": 1,
    "title": "Dream Sentinels",
    "description": "Porcelain guards and celestial string dancers manifest from the subconscious of something sleeping beneath all of reality itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Reality thinned to translucence. The heroes were no longer walking through a place - they were walking through someone's dream. Something vast, ancient, and impossibly deep was sleeping below."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The First Dream. It existed before the universe had rules. Before cause and effect were invented. Before anything had a name. It is the original consciousness that dreamed existence into being."
      },
      {
        "speaker": "Zimara",
        "text": "These Porcelain Guards and Celestial String Dancers - they're manifestations of its subconscious. Dreams defending a dreamer that the dream itself believes must never be disturbed."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Something has been forcing it awake. All the chaos of this war - every Trump Card we fired, every dimensional barrier broken - the energy reached here. To the deepest layer."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we wake it up properly and stand before it. We've fought every threat born from this war. We face the source of everything - and we do not flinch."
      },
      {
        "speaker": "Narrator",
        "text": "Stepping into the dreaming substrate beneath all reality, the heroes prepared for the battle that would determine whether existence itself continued forward."
      }
    ]
  },
  {
    "id": 2002,
    "chapterId": 20,
    "part": 2,
    "title": "The Last Marionette",
    "description": "The First Dream's most beloved creation - a puppet queen of porcelain elegance and invisible celestial strings - performs her final act as guardian of the dreaming deep.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She descended from strings attached to nothing - a puppet queen with porcelain skin crossed by visible cracks, surrounded by floating weapons that moved without hands."
      },
      {
        "speaker": "Zimara",
        "text": "The Last Marionette. The First Dream's most beloved creation - made to be beautiful, to perform, to demonstrate that the dream's capacity for joy was limitless."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Those cracks in her porcelain - she's been awake for eons, maintaining her performance for a sleeping audience of one. That kind of loneliness fractures anything, no matter how beautifully made."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "She believes if the dream ends, she ends. She will not willingly step aside. She has guarded this threshold since before recorded history began."
      },
      {
        "speaker": "Valen",
        "text": "We show her a world that is real - worth waking for. Then we give her the final curtain she's been performing toward all this time. Trump Cards together - let her bow!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Last Marionette, the heroes fought the most sorrowful guardian they had ever faced - and honored her performance by matching it with everything they had."
      }
    ]
  },
  {
    "id": 2003,
    "chapterId": 20,
    "part": 3,
    "title": "The First Dream",
    "description": "The ancient entity sleeping beneath reality since before creation opens its eyes - a being of stars, memories, clouds, and shattered worlds whose waking threatens to unmake the universe it dreamed.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "It opened its eyes - formed from stars, memories, clouds, and shattered worlds - and reality took a breath it had not taken since before its own creation began."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The First Dream. It is not evil - it doesn't even understand what evil is. It predates that concept by eons. But a dreamer this immense waking without guidance will tear reality apart from within."
      },
      {
        "speaker": "Zimara",
        "text": "We cannot destroy it. The dream IS reality - killing it would end everything. We have to reach it. Help it understand. Make it choose to dream gently rather than violently."
      },
      {
        "speaker": "Valen",
        "text": "How do you communicate with something that has never experienced a world outside its own dream? That has never known anything beyond what it imagined into being?"
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The same way you always speak the impossible. With everything you are. Every Trump Card. Five factions as one voice, saying: this dream is worth continuing exactly as it is."
      },
      {
        "speaker": "Narrator",
        "text": "Against the First Dream, the heroes gave everything - not to destroy, but to show something ancient and vast that the world it dreamed was worth preserving. This was the true final hour."
      }
    ]
  },
  {
    "id": 2101,
    "chapterId": 21,
    "part": 1,
    "title": "Shadow Vanguard",
    "description": "Shadow felines, void vipers, and dark crowmancers surge from the dark realm as the Shadow Sovereign begins her expansion.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The darkness beyond the First Dream was not empty. Something had been building there - slowly, deliberately, waiting for the dream to end before it moved."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Shadow felines. Void vipers. Dark crowmancers. These aren't random creatures - they're scouts. Someone is testing our perimeter before committing to a real assault."
      },
      {
        "speaker": "Valen",
        "text": "After everything we just survived, something is still out there? How far back does this go?"
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The Shadow Sovereign has been consolidating power in the dark realm since before any of us were born. She waited for the right moment. We just gave it to her by winning."
      },
      {
        "speaker": "Zimara",
        "text": "Then we end it here before she finishes moving her pieces into position. Intercept the vanguard and send the message back: Aetheria is defended."
      },
      {
        "speaker": "Narrator",
        "text": "Into the creeping shadow at the edge of reality, the heroes charged to meet the forces of a sovereign who had been patient for centuries."
      }
    ]
  },
  {
    "id": 2102,
    "chapterId": 21,
    "part": 2,
    "title": "The Kitsune Specter",
    "description": "The Shadow Sovereign's fox spirit guardian emerges from the dark realm, her phantom tails weaving illusions that make reality unreliable.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The shadows shifted in a pattern that felt almost playful - and then she was there, surrounded by nine phantom tails that didn't quite exist in the same space as everything else."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "A kitsune specter. A fox spirit bound to the Shadow Sovereign's service - her consciousness is split across nine tail-phantoms simultaneously. She's never fully in one place."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "That's a problem. You can't aim at something that exists in nine places at once."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "You don't aim at where she is. You aim at where the tails connect. Every fox spirit has a single node holding the phantoms together. Hit that and all nine collapse at once."
      },
      {
        "speaker": "Valen",
        "text": "Easy enough to say. Show me the node while she's moving at that speed. Everyone charge your Trump Cards - we may only get one coordinated window."
      },
      {
        "speaker": "Narrator",
        "text": "The kitsune specter danced between dimensions, and the heroes hunted the single point of truth within her illusions."
      }
    ]
  },
  {
    "id": 2103,
    "chapterId": 21,
    "part": 3,
    "title": "The Shadow Sovereign",
    "description": "The Shadow Sovereign herself descends - a dark-power ruler who consolidated shadow energy across centuries, waiting for this exact moment to strike.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She did not announce herself. The darkness simply became denser until she was standing in it - a sovereign shaped from absolute shadow, regarding them with the patience of something that had waited three hundred years for this conversation."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "She's been absorbing shadow energy from every battle we've ever fought. Every Trump Card we used, every darkness we dispelled - she collected it all. We powered her up every time we won."
      },
      {
        "speaker": "Zimara",
        "text": "Then we end her with light. Pure faction-unified light. Five factions, five elements - the only thing shadow energy can't absorb is something it has never touched before."
      },
      {
        "speaker": "Valen",
        "text": "Three hundred years of patience. She deserves a proper answer to that. Every hero, every Trump Card, one shot, total commitment."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "She planned for every scenario except the one where we cooperate completely. That's our edge. That's always been our edge."
      },
      {
        "speaker": "Narrator",
        "text": "Against the Shadow Sovereign, the heroes gave everything they had - not as five factions, but as one unified force that shadow had never encountered before."
      }
    ]
  },
  {
    "id": 2201,
    "chapterId": 22,
    "part": 1,
    "title": "Star Crawlers",
    "description": "Bone harpies, crystal drakes, and abyss spiders spread across the collapsing star field as something vast rearranges reality from within.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sky above the Shadow Sovereign's domain was not a sky. It was a memory - the last light of a star that had already died, preserved in amber at the edge of Aetheria's universe."
      },
      {
        "speaker": "Zimara",
        "text": "These creatures aren't native to any realm I recognise. Bone harpies, crystal drakes - these are things that form when cosmic energy crystallises without structure. Something is absorbing star material up there."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Something is weaving with it. Look at those patterns - that's intentional. Someone is rearranging the light of a dead star into something usable."
      },
      {
        "speaker": "Valen",
        "text": "Whatever is doing that has been doing it long enough to fill this entire field with by-product creatures. This is old work. Old and very deliberate."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "We push through the star crawlers and find the weaver before the construction finishes. I don't want to see what it's building."
      },
      {
        "speaker": "Narrator",
        "text": "Across the crystallised star field, the heroes fought creatures born from dead light - remnants of a star being consumed for power."
      }
    ]
  },
  {
    "id": 2202,
    "chapterId": 22,
    "part": 2,
    "title": "The Obsidian Scholar",
    "description": "A dark mage who has devoted her existence to studying the dying memories preserved within collapsing stars stands guard before her mistress.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She was surrounded by texts that floated without shelves - pages that contained not words but star patterns, reconstructed from light that had taken ten thousand years to arrive."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The Obsidian Scholar. She's been translating stellar collapse events into usable magical formulae for her entire life. What she's guarding is the culmination of that research."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "She didn't build the cosmic weave - she found the directions for it inside a dying star and gave them to someone who could execute them. She's the architect, not the force."
      },
      {
        "speaker": "Zimara",
        "text": "Then stopping her stops the theory from ever being applied again. Even if we can't unmake what's already built, we can make sure it stays unique."
      },
      {
        "speaker": "Valen",
        "text": "Research first, battle second. Get close enough to understand what she's actually built - then we dismantle the Scholar and her work together."
      },
      {
        "speaker": "Narrator",
        "text": "Against the Obsidian Scholar, the heroes battled a mage whose greatest weapon was knowledge assembled from things that should not have survived their own extinction."
      }
    ]
  },
  {
    "id": 2203,
    "chapterId": 22,
    "part": 3,
    "title": "Caelestra the Cosmic Weaver",
    "description": "Caelestra awakens from inside a collapsing star - a mage who absorbed the dying consciousness of entire worlds and wove their memories into absolute power.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The star opened. Not like an explosion - like a flower. And from the light inside it stepped someone who had been growing within that light for longer than Aetheria had existed as a concept."
      },
      {
        "speaker": "Zimara",
        "text": "She absorbed the memories of dying worlds. Every civilisation that burned out, every consciousness that reached for more than it could hold - she took all of it in and kept it. She is the last record of things that no longer exist."
      },
      {
        "speaker": "Valen",
        "text": "That's not a power source. That's a responsibility. How do you fight something carrying the weight of ten thousand civilisations?"
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Carefully. And with the understanding that she may not be fighting us out of malice. Beings who absorb that much memory lose track of which instincts are theirs and which are borrowed."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "We give her something she hasn't absorbed yet - a present-tense reason to stop. Every Trump Card, together, as one voice from one living world that intends to keep living."
      },
      {
        "speaker": "Narrator",
        "text": "Against Caelestra the Cosmic Weaver, the heroes fought to prove that one living world was worth more than all the preserved memories of the dead."
      }
    ]
  },
  {
    "id": 2301,
    "chapterId": 23,
    "part": 1,
    "title": "Frozen Underworld",
    "description": "The seals on the frozen underworld break as creatures pour from below - an ice demon mage has shattered the barrier from the inside.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The ground cracked in a pattern too geometric to be natural - something below was pushing at the seal with understanding, not force. The ice broke outward like the opening of a door."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Shadow felines, crystal drakes coming up from below. Whatever is down there is using them as structural support - their bodies reinforce the opening as it widens."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Smart. Whoever is down there knows ice architecture. They're not breaking out - they're building a corridor to come through in good order."
      },
      {
        "speaker": "Valen",
        "text": "An ice mage in the frozen underworld who understands structural glaciology and had the patience to plan a measured emergence. What exactly did we seal down there all those years ago?"
      },
      {
        "speaker": "Zimara",
        "text": "Something old enough to have been sealed before the records started. Which means whatever documentation existed for this seal was either lost or deliberately destroyed."
      },
      {
        "speaker": "Narrator",
        "text": "Into the frozen underworld's emergence corridor, the heroes pushed - racing against a barrier that was dissolving with every minute they spent deliberating."
      }
    ]
  },
  {
    "id": 2302,
    "chapterId": 23,
    "part": 2,
    "title": "Lysse the Youngest",
    "description": "The youngest sister of the Crimson bloodline stands guard at the threshold - she arrived first, using the ice demon's emergence as cover for her own purpose.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She was not what they expected to find standing between them and the underworld threshold. Young by Crimson bloodline standards, which still made her older than empires."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Lysse. The youngest of the Crimson sisters - she arrived here before Glacidra's emergence. She's not serving the demon. She's studying it. Using the chaos as research cover."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The Crimson bloodline has always been interested in things that refuse to die. An ice demon sealed before recorded history qualifies as the most interesting specimen in existence."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "She won't move aside willingly. Her research requires the chaos to continue - and she will defend her access to it."
      },
      {
        "speaker": "Valen",
        "text": "Then we end the chaos by ending what she's protecting. Fight through the youngest Crimson and seal the underworld before Glacidra fully surfaces."
      },
      {
        "speaker": "Narrator",
        "text": "Against Lysse the Youngest, the heroes battled a scholar of the Crimson bloodline who had confused curiosity with permission."
      }
    ]
  },
  {
    "id": 2303,
    "chapterId": 23,
    "part": 3,
    "title": "Glacidra the Frost Demon",
    "description": "Glacidra fully surfaces from the frozen underworld - an ice demon mage whose frost is not cold but a demonic absolute that corrodes the dimensional fabric itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The cold she brought was wrong. Not the cold of winter or even of absolute zero - it was the cold of a dimension that had forgotten warmth existed as a concept. Reality cracked where her frost touched it, not from temperature but from absence."
      },
      {
        "speaker": "Zimara",
        "text": "Her ice corrupts dimensional matter. It doesn't freeze - it removes the possibility of heat from the fabric of space itself. Everywhere she's touched stays changed permanently."
      },
      {
        "speaker": "Valen",
        "text": "How do you fight something that changes the rules of physics by existing? Fire doesn't work if she removes the concept of combustion."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "You don't fight the ice. You fight her. Everything that ice is comes from one source - take down the source and the corrupted zones re-stabilise over time."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "One coordinated assault. Every Trump Card, every element at once - enough simultaneous input that she cannot process and suppress all of it before it reaches her."
      },
      {
        "speaker": "Narrator",
        "text": "Against Glacidra the Frost Demon, the heroes fought not a creature of cold but a living argument that warmth should not exist - and they answered that argument with everything they had."
      }
    ]
  },
  {
    "id": 2401,
    "chapterId": 24,
    "part": 1,
    "title": "Crimson Canopy",
    "description": "The Elder Crimson's ancient domain activates - void vipers, abyss spiders, and dark crowmancers swarm to defend a bloodline older than any empire.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The domain was older than any architecture they had previously encountered - the kind of old where the stone remembered being placed. And the creatures defending it looked like they had been here the entire time."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "This is the Elder Crimson's domain. Not Visalia's court, not the youngest sister's research ground - the original. Whoever lives here has held this space continuously for longer than recorded history."
      },
      {
        "speaker": "Dario Ferraro",
        "text": "Then she watched every empire rise and fall without moving. That kind of patience isn't peace - it's strategy. Everything that happened before was positioning."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Visalia's chaos, the youngest Crimson's research - all of it was distraction. This is what they were buying time for. The Elder doesn't move unless the position is perfect."
      },
      {
        "speaker": "Valen",
        "text": "Then we deny her the perfect position. Push through the canopy before she settles into whatever formation she's been building toward for the last three thousand years."
      },
      {
        "speaker": "Narrator",
        "text": "The heroes fought through a domain that predated every kingdom they had ever heard of, defending a threshold held by the eldest of a line that had never truly ended."
      }
    ]
  },
  {
    "id": 2402,
    "chapterId": 24,
    "part": 2,
    "title": "The Fae Enchantress",
    "description": "A fairy-type mage of crystalline elegance and ruthless power guards the Elder Crimson's inner sanctum - her enchantments are woven directly into the architecture of reality.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The enchantress did not appear hostile. She simply stood in the way and smiled, which was somehow worse. The air around her was full of layered hexes so old they had become part of the natural atmosphere."
      },
      {
        "speaker": "Zimara",
        "text": "She's a Fae Enchantress in service to the Elder Crimson. Her hexes aren't cast - they're ambient. She has been layering enchantments in this space for long enough that the air itself is a weapon."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "The smile means she knows we can't approach conventionally. She's let us see exactly enough to understand we're already inside her field."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Void disruption on the outermost layer first. Fae enchantments require ambient magical saturation - disrupt the environment and her passive hexes lose their anchor."
      },
      {
        "speaker": "Valen",
        "text": "Then the Trump Cards while she's restructuring. She can rebuild the hexes but not fast enough if we don't give her a moment to settle. Move now - Trump Cards ready!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Fae Enchantress, the heroes battled a guardian who had turned the very atmosphere into a weapon, and dismantled it layer by layer."
      }
    ]
  },
  {
    "id": 2403,
    "chapterId": 24,
    "part": 3,
    "title": "Lady Lyssiel the Elder Crimson",
    "description": "The eldest of the Crimson bloodline descends - an ancient being of elven grace and bloodline power who has watched every empire fall and considered none of them worthy of her attention until now.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She was exactly as old as the domain suggested - and she wore it the way someone wears clothing they've owned long enough to forget they chose it. The elf ears marked lineage older than the empire. The blood that moved in the air around her marked power she had never once had to use in full."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Lady Lyssiel. The Elder Crimson. She is the source of everything Visalia became and everything the youngest Crimson aspires to. This is the original from which all Crimson power is derived."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "She has been watching us since Chapter One. Every battle, every Trump Card, every alliance we formed - she was observing. She moved now because she has finished her assessment."
      },
      {
        "speaker": "Valen",
        "text": "And what did the assessment conclude?"
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "That we are finally worth fighting. From someone like her, that's the most dangerous compliment in existence. All Trump Cards - do not hold anything back."
      },
      {
        "speaker": "Narrator",
        "text": "Against Lady Lyssiel the Elder Crimson, the heroes faced the source of a bloodline that had endured everything - and discovered what it meant to face something that had genuinely never been defeated before."
      }
    ]
  },
  {
    "id": 2501,
    "chapterId": 25,
    "part": 1,
    "title": "Before History",
    "description": "The primordial dark stirs - creatures that have never known a named world swarm at the boundary as the oldest being in existence becomes aware of the heroes for the first time.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "There was no announcement. No dramatic emergence. The darkness at the edge of what the heroes could perceive simply became aware of them - and that awareness, alone, changed the nature of the space they were standing in."
      },
      {
        "speaker": "Zimara",
        "text": "I am reading a presence that predates every energy signature I have ever encountered. This is not a new threat. This is a very old one that has been here the entire time, below everything else, undetected because nothing we had was calibrated to look this deep."
      },
      {
        "speaker": "Valen",
        "text": "Below the void. Below the shadow. Below the dream. What exactly exists at that depth?"
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The First Entity. Aetheria's original inhabitant - older than the gods, older than the void, older than the concept of darkness itself. It did not create the world. It was simply already here when the world arrived."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then we find out what it wants. Because something that has been here that long and never moved has a reason for moving now. Understanding that reason is the only edge we have."
      },
      {
        "speaker": "Narrator",
        "text": "Into the primordial dark beyond all named history, the heroes walked toward something that had existed before their world had a name - and tried to understand why it had finally decided to look."
      }
    ]
  },
  {
    "id": 2502,
    "chapterId": 25,
    "part": 2,
    "title": "Briar the Elder Assassin",
    "description": "The elder sister of the Nature Assassin stands at the threshold of the primordial dark - a hunter older and more lethal than any before her, the last barrier before the First Entity.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "She had arrived before them - not because she was faster, but because she had always been here. The elder sister of the Nature Assassin had been serving the threshold between the named world and the primordial dark for longer than the assassin's lineage had existed."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "Briar. The elder sister. She's not an obstacle - she's a guardian of the boundary. She stands here not in service to the First Entity but in service to the principle that something this old should not be disturbed without proper approach."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "She's asking whether we are worthy of the conversation we are trying to start. And she'll make that determination through combat - the only language old enough for both sides of this threshold."
      },
      {
        "speaker": "Zimara",
        "text": "Then we demonstrate worthiness. Not through victory - through how we fight. The approach matters as much as the outcome here."
      },
      {
        "speaker": "Valen",
        "text": "Understood. Every Trump Card held in reserve unless she forces the issue. We fight with discipline and respect and we earn the right to pass. Together."
      },
      {
        "speaker": "Narrator",
        "text": "Against Briar the Elder, the heroes fought the final guardian of a threshold between the known world and something that had never been named - and tried to prove they deserved to cross it."
      }
    ]
  },
  {
    "id": 2503,
    "chapterId": 25,
    "part": 3,
    "title": "The Origin",
    "description": "The First Entity turns its full attention to the heroes - the oldest being in Aetheria's universe, whose existence predates gods and void alike, whose mere awareness reshapes the fabric of reality around it.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "It did not have a form in any sense they had previously encountered. It had a presence - a weight of existing so long and so completely that reality conformed to its shape rather than the other way around. When it looked at them, they understood for the first time what it felt like to be new."
      },
      {
        "speaker": "Zimara",
        "text": "It is not malevolent. It does not have the concept of malevolence - that was invented long after it was already here. What it has is magnitude. It is simply so much more than everything else that its existence exerts pressure on ours."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "We cannot destroy it. It predates the concept of destruction. We cannot reason with it in language - language postdates it by an immeasurable margin. We have to communicate in something older."
      },
      {
        "speaker": "Valen",
        "text": "What is older than language?"
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Existence itself. We don't speak to it. We simply exist at full intensity - every Trump Card, every element, every faction simultaneously - and let the fact of our aliveness make the argument. A world this full of life is worth leaving intact. Show it."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "And yet - in its final moment, The Origin did not look at us at all. It looked upward, toward something even it had no name for. Something above everything it had ever known. We have not reached the top. We have only reached the beginning of the climb."
      },
      {
        "speaker": "Narrator",
        "text": "Against The Origin - the First Entity of Aetheria - the heroes gave the only answer they had: the full, undiluted fact of their existence, unified across five factions, burning bright enough that something older than time itself might choose to let it continue. But even in victory, a new question lingered - what could possibly stand above the very first being in creation?"
      }
    ]
  },
  {
    "id": 2601,
    "chapterId": 26,
    "part": 1,
    "title": "Eternal Echoes",
    "description": "Fragments of every defeated foe reform as echo legions, pulled from the fabric of forgotten timelines.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The battlefield itself began to remember. Every fallen enemy, every shattered Trump Card, every scream - all of it stirred once more."
      },
      {
        "speaker": "Zimara",
        "text": "These aren't new enemies. They're echoes - perfect recreations pulled from the moments we thought we had won."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The Void Eternal is harvesting our history. It's using our victories as ammunition against us."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we fight our own shadows. Again."
      },
      {
        "speaker": "Valen",
        "text": "We've beaten them once. We'll beat them faster this time. No hesitation - strike with everything we've learned!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the living memory of their past triumphs, the heroes charged forward once more."
      }
    ]
  },
  {
    "id": 2602,
    "chapterId": 26,
    "part": 2,
    "title": "Chronomancer Eternal",
    "description": "A being who has looped through every timeline the heroes have ever touched stands as the warden of the eternal void.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Time folded in on itself. A single figure existed in countless overlapping moments at once."
      },
      {
        "speaker": "Zimara",
        "text": "The Chronomancer Eternal. He has lived through every possible version of this war - and he has already seen us lose most of them."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Then we become the outcome he never calculated."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Unpredictable. Chaotic. Pure instinct. Give him nothing stable to anchor his timelines to."
      },
      {
        "speaker": "Valen",
        "text": "Trump Cards outside of any pattern he can read. Break every loop he tries to impose!"
      },
      {
        "speaker": "Narrator",
        "text": "Against a foe who had witnessed every possible defeat, the heroes fought to create a future that had never been seen."
      }
    ]
  },
  {
    "id": 2603,
    "chapterId": 26,
    "part": 3,
    "title": "The Void Eternal",
    "description": "The Void Eternal awakens as the living absence that remains when all stories end, seeking to erase even the memory of resistance.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "There was no grand entrance. Only the slow realization that something fundamental was missing from existence itself."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "The Void Eternal. Not a ruler. Not a destroyer. The silence that follows every ending."
      },
      {
        "speaker": "Zimara",
        "text": "If it succeeds, even our victories will be unmade. There will be no legend, no story, no echo left behind."
      },
      {
        "speaker": "Valen",
        "text": "Then we refuse to be forgotten. Every Trump Card, every bond, every scar we earned - we burn it all into reality!"
      },
      {
        "speaker": "Kaori Adachi",
        "text": "We are the proof that something can endure even the end of all things."
      },
      {
        "speaker": "Narrator",
        "text": "Against the living embodiment of final silence, the heroes roared with everything they had ever been."
      }
    ]
  },
  {
    "id": 2701,
    "chapterId": 27,
    "part": 1,
    "title": "Judgment Hosts",
    "description": "Celestial enforcers from realms untouched by the previous wars descend to pass final judgment on Aetheria.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sky split open - not with darkness, but with blinding, merciless light."
      },
      {
        "speaker": "Zimara",
        "text": "These are not corrupted celestials. These are the original judges - beings who maintain balance across multiple universes."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "They have deemed our repeated defiance of fate as a threat to the greater order."
      },
      {
        "speaker": "Valen",
        "text": "Then we'll show them exactly why we keep defying it. Stand together!"
      },
      {
        "speaker": "Narrator",
        "text": "Before the unyielding judgment of the higher realms, the heroes raised their weapons once more."
      }
    ]
  },
  {
    "id": 2702,
    "chapterId": 27,
    "part": 2,
    "title": "Seraph of the Scales",
    "description": "The supreme arbiter who weighs the fate of entire realities stands ready to tip the scales against existence itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Golden scales materialized in the heavens, vast enough to weigh stars."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Seraph of the Scales. One side holds the order of the multiverse. The other… us."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "We've never been balanced. We've always been the disruption."
      },
      {
        "speaker": "Valen",
        "text": "Then let's disrupt harder. Overload the scales - make them unable to measure us!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the cosmic arbiter, the heroes fought not for balance, but for the beautiful chaos of life."
      }
    ]
  },
  {
    "id": 2703,
    "chapterId": 27,
    "part": 3,
    "title": "The Grand Reckoning",
    "description": "The supreme celestial authority descends to enforce the final verdict upon all of creation.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "A being of pure law and radiance appeared, its voice echoing across every timeline simultaneously."
      },
      {
        "speaker": "Zimara",
        "text": "The Grand Reckoning. It does not hate us. It simply sees our continued survival as an error in the cosmic equation."
      },
      {
        "speaker": "Valen",
        "text": "Then we are the glitch that breaks the system. Every Trump Card - every faction - every impossible bond we've forged!"
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Let them calculate this."
      },
      {
        "speaker": "Narrator",
        "text": "Against the living embodiment of cosmic law, the heroes became the exception that defied every rule."
      }
    ]
  },
  {
    "id": 2801,
    "chapterId": 28,
    "part": 1,
    "title": "Seraphic Vanguard",
    "description": "Lesser seraphim descend in disciplined, silent ranks - a herald choir sent to weigh whether mortal defiance still deserves to walk the road ahead.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "Light did not simply shine here - it arrived in formation. Wings without number folded into perfect ranks across a sky that had never before hosted a war."
      },
      {
        "speaker": "Zimara",
        "text": "They're not corrupted. They're not hostile in the way we understand hostility. This is closer to an audit - every hit we take or land is being measured against some standard we can't see."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "A choir. Sent ahead of something far greater to determine if we're even worth that greater thing's attention."
      },
      {
        "speaker": "Valen",
        "text": "Then let's give them something worth reporting back. We don't perform for judges - we simply fight like we always have."
      },
      {
        "speaker": "Narrator",
        "text": "Against the seraphic vanguard, the heroes fought not to impress a higher power, but to remain exactly what they had always been."
      }
    ]
  },
  {
    "id": 2802,
    "chapterId": 28,
    "part": 2,
    "title": "Ophaniel the Vigilant",
    "description": "A wheel of eyes and wings descends to bar the way - one rank below the final seraph, and no less merciless in its judgment.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "It did not walk. It rotated into being - a sphere of interlocking rings, each ring lined with eyes that never blinked and never looked away."
      },
      {
        "speaker": "Zimara",
        "text": "Ophaniel. A watcher-class seraph - its entire purpose is observation given a body capable of violence when observation alone fails to deter."
      },
      {
        "speaker": "Aisling Doyle",
        "text": "It's already seen every attack pattern we have. It saw them coming before we did."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Then we stop attacking in patterns. Pure improvisation - nothing for it to have already catalogued."
      },
      {
        "speaker": "Valen",
        "text": "No rhythm, no formation, no hesitation. Confuse the eyes that have already seen everything!"
      },
      {
        "speaker": "Narrator",
        "text": "Against Ophaniel the Vigilant, the heroes fought with deliberate chaos - the one language a thousand watching eyes had never learned to read."
      }
    ]
  },
  {
    "id": 2803,
    "chapterId": 28,
    "part": 3,
    "title": "The Last Seraph",
    "description": "The final seraph of the higher choir unfurls wings of pure judgment, descending to decide if mortal defiance has earned the right to stand before what watches beyond even the angels.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "The sky itself became a single vast wing. At its center stood a figure of light so absolute it had no features - only the impression of a verdict about to be delivered."
      },
      {
        "speaker": "Zimara",
        "text": "The Last Seraph. Highest of the herald choir. Beyond it there is no more judgment left to pass - only whatever it is the choir was sent to protect."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "It doesn't hate us. It doesn't even truly see us as a threat. It simply has to be certain, before it lets anything else notice we exist."
      },
      {
        "speaker": "Valen",
        "text": "Then let's be certain right back. Every Trump Card, every faction, everything we've carried this far - show it exactly what it's about to let through!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Last Seraph, five factions burned as one - and somewhere far above the light, something ancient and unblinking finally opened its eyes toward them."
      }
    ]
  },
  {
    "id": 2901,
    "chapterId": 29,
    "part": 1,
    "title": "Silent Sentinels",
    "description": "Constructs of pure observation manifest at the edge of perception, cataloguing every strike - testing whether this story is even worth being witnessed.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "They cast no shadow and made no sound. The only proof they existed at all was the growing certainty of being watched from every possible angle at once."
      },
      {
        "speaker": "Zimara",
        "text": "These aren't alive in any sense I can measure. They're recording instruments - extensions of something that only observes, sent to determine if we're worth a closer look."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "Something has been watching this entire war. Every battle. Every loss. Every Trump Card. And it has never once intervened - until it sent these."
      },
      {
        "speaker": "Valen",
        "text": "Then let's make sure whatever's watching sees something worth remembering. Fight like it's the only chance we get to be seen!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the silent sentinels, the heroes fought under a gaze they could feel but never find - determined to be witnessed rather than dismissed."
      }
    ]
  },
  {
    "id": 2902,
    "chapterId": 29,
    "part": 2,
    "title": "The Recording Eye",
    "description": "A fragment of the great observer takes form - no longer content to merely witness, it moves to decide whether this story deserves to be recorded at all.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "A single vast eye opened where the sentinels had stood, its pupil holding the reflection of every battle the heroes had ever fought."
      },
      {
        "speaker": "Zimara",
        "text": "It's not attacking us to win. It's attacking us to see how the story ends before it decides if the ending is worth keeping."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "A being sworn only to watch is now choosing to act. Something has changed in the pattern it's tracking. We changed it."
      },
      {
        "speaker": "Valentina Ardente",
        "text": "Then let's give it an ending it can't look away from."
      },
      {
        "speaker": "Valen",
        "text": "Together - make this a chapter it has to keep!"
      },
      {
        "speaker": "Narrator",
        "text": "Against the Recording Eye, the heroes fought to write themselves into a memory too vivid to ever be erased."
      }
    ]
  },
  {
    "id": 2903,
    "chapterId": 29,
    "part": 3,
    "title": "The Silent Watcher",
    "description": "The Silent Watcher breaks its eternal vow of non-interference - for the first time across the history of all realities, it chooses to act rather than merely observe.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "It descended without sound, without ceremony, without the slightest hint that it had ever moved before. And yet its very presence felt like the end of an unbroken silence billions of years old."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The Silent Watcher. Sworn since the birth of the first reality to observe and never interfere - no matter what it witnessed, no matter how it might have helped. Until now."
      },
      {
        "speaker": "Zimara",
        "text": "If it's finally choosing to act, we're not just another battle to it anymore. We're the exception it decided was worth breaking an oath for."
      },
      {
        "speaker": "Valen",
        "text": "Then we honor that. Not by winning quietly - by making sure it never regrets finally looking away from the sidelines."
      },
      {
        "speaker": "Narrator",
        "text": "Against the Silent Watcher, the heroes fought the first being in the history of all things to ever choose to stop watching and start caring."
      }
    ]
  },
  {
    "id": 3001,
    "chapterId": 30,
    "part": 1,
    "title": "The Final Threshold",
    "description": "The last guardians - extensions of the One Above All's own will - defend a threshold none have ever crossed and returned from.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "There was nothing left to fight but the boundary of existence itself - and something had shaped that boundary on purpose."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "These aren't guardians in the way we've fought before. They're not separate beings. They're pieces of something singular, extended this far just to see if anything could reach it."
      },
      {
        "speaker": "Zimara",
        "text": "The Silent Watcher broke its vow to warn something. This is what it warned - the one authority that sits above even it."
      },
      {
        "speaker": "Valen",
        "text": "Then whoever that is, they're about to learn we don't stop at doors. We've come this far. We're finishing the climb."
      },
      {
        "speaker": "Narrator",
        "text": "At the edge of everything that had ever been written, the heroes prepared to meet whatever had written it."
      }
    ]
  },
  {
    "id": 3002,
    "chapterId": 30,
    "part": 2,
    "title": "Echo of the One Above All",
    "description": "A pale reflection of the One Above All's own voice bars the final path - even a fraction of that authority is almost beyond comprehension.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "A voice spoke before anything appeared to speak it - resonating not through the air, but through the simple fact of existing at all."
      },
      {
        "speaker": "Zimara",
        "text": "This isn't the source. It's an echo - a fragment cast off from something that speaks and reality simply obeys. And even the echo is almost more than we can withstand."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "We've fought the first being in creation. We've fought the eye that watches all things. Whatever waits beyond this echo authored them both."
      },
      {
        "speaker": "Valen",
        "text": "Then let's answer the echo with something it's never had to record before - five factions who refuse to be a footnote."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "Give it something worth echoing."
      },
      {
        "speaker": "Narrator",
        "text": "Against the echo of the One Above All, the heroes raised their voices - determined to be heard by the source itself."
      }
    ]
  },
  {
    "id": 3003,
    "chapterId": 30,
    "part": 3,
    "title": "The One Above All",
    "description": "The final authority over every story, every universe, every ending ever written reveals itself at last - above the Origin, above the Watcher, above creation itself.",
    "dialogues": [
      {
        "speaker": "Narrator",
        "text": "It had no form, no name, no single moment of arrival - because it had never truly been absent. It simply was, and always had been, above everything the heroes had ever called reality."
      },
      {
        "speaker": "Kaori Adachi",
        "text": "The Origin was the first being inside creation. This is what stands outside it. Above the Origin. Above the Watcher who broke its silence to warn us. There is nothing higher than this."
      },
      {
        "speaker": "Zimara",
        "text": "It doesn't rule us out of malice, and it won't end us out of cruelty. To something this far above every story, we're simply a chapter it hasn't decided the worth of yet."
      },
      {
        "speaker": "Valen",
        "text": "Then we decide it for them. We're not here to replace what stands above all. We're here to prove that everything it allowed to exist beneath it was worth creating in the first place."
      },
      {
        "speaker": "Reika Kurosawa",
        "text": "That struggle, friendship, and defiance mean something even to something that has already seen every possible ending."
      },
      {
        "speaker": "Valen",
        "text": "Every Trump Card. Every hero. Every faction. Every story we've lived, from the first shattered barrier to this exact moment. This is our answer - to the One Above All itself!"
      },
      {
        "speaker": "Narrator",
        "text": "And so, before the final authority over all existence, five factions burned as one undivided light - proving to the very top of creation that their story was never meant to end."
      }
    ]
  }
];
export const getStagesForChapter = (chapterId) => STORY_STAGES.filter(s => s.chapterId === chapterId);

// ─── Chapter bosses, enriched with Bestiary lore (src/data/bestiary.js) ──────
export const BOSSES = [
  {
    "chapter": 1,
    "title": "Shattered Veil",
    "name": "Lysha the Glacial Empress",
    "epithet": "The Glacial Empress",
    "image": "/assets/enemy/boss_001.webp",
    "desc": "Lysha ruled the frozen void long before Aetheria had a name for itself, sealed away in dimensional ice that even she could not remember the reason for. When the barrier shattered, she didn't invade - she simply resumed the reign that had been interrupted mid-sentence for longer than any mortal record could measure. Her cold isn't weather; it's the natural temperature of the void she calls home, and every scout, hound, and commander she sent through the rift was simply testing how much of that cold the new world could survive before she arrived to make it permanent. She was Aetheria's first true glimpse of how much older the multiverse's threats could be than anything it had ever prepared for - a lesson the heroes would keep relearning, at greater and greater scale, for the next twenty-nine chapters.",
    "effect": "CHILL",
    "hp": 6000,
    "atk": 320,
    "def": 200,
    "color": "#38BDF8",
    "accent": "#7DD3FC"
  },
  {
    "chapter": 2,
    "title": "Ashen Inferno",
    "name": "Pyrevex the Ashen Drake",
    "epithet": "The Ashen Drake",
    "image": "/assets/enemy/boss_002.webp",
    "desc": "Pyrevex was never native to Aetheria - Zimara identified the wrongness in his signature the instant the caldera erupted, and she was right to be alarmed. He is a drake forged from volcanic rock and dimensional heat that has nothing to do with any world's natural geology, which means somewhere else, in some other reality, an entire ecosystem of magma-forged predators like him may still exist. His arrival in Aetheria's second chapter - right on the heels of Lysha's rift-born invasion - was the first sign that the shattered barrier wasn't a single wound. It was a door, and more than one thing on the other side had already noticed it was open.",
    "effect": "BURN",
    "hp": 7500,
    "atk": 370,
    "def": 230,
    "color": "#F97316",
    "accent": "#FDBA74"
  },
  {
    "chapter": 3,
    "title": "Dawn of Radiance",
    "name": "Aurariel the Light Maiden",
    "epithet": "The Light Maiden",
    "image": "/assets/enemy/boss_003.webp",
    "desc": "Aurariel doesn't believe she's committing an atrocity. Zimara understood her better than anyone: Aurariel believes she is performing a mercy, ending all suffering by ending everything that could ever suffer again. She is Aetheria's first true lesson in a kind of enemy the heroes would face again and again in the chapters ahead - not malice, but conviction bent so far past reason that it becomes catastrophic. Valentina Ardente's answer was the only one that ever works against her kind: show her something worth preserving, and let her believe in it instead.",
    "effect": "PARALYSIS",
    "hp": 9000,
    "atk": 420,
    "def": 270,
    "color": "#FACC15",
    "accent": "#FEF08A"
  },
  {
    "chapter": 4,
    "title": "Thornwall",
    "name": "Thornqueen Sylva",
    "epithet": "Queen of the Thorned Grove",
    "image": "/assets/enemy/boss_004.webp",
    "desc": "Sylva didn't fall to the corruption. She chose it, merging with dark energy in a desperate bid to protect a forest she watched dying around her - and the corruption accepted the trade, then kept taking more than she offered. Carmen Vidal's grief on the battlefield was real: Sylva was consuming, and by the time the World Tree's roots erupted like reaching arms, there wasn't enough of the original protector left to pull back from what she'd become. Her defeat wasn't a victory over an invader. It was, as Valen insisted with every Trump Card thrown, a rescue that arrived too late to save anything but the forest itself.",
    "effect": "TOXIN",
    "hp": 10500,
    "atk": 470,
    "def": 310,
    "color": "#4ADE80",
    "accent": "#86EFAC"
  },
  {
    "chapter": 5,
    "title": "Verdant Ruin",
    "name": "Verdara the Bloom Devourer",
    "epithet": "The Bloom Devourer",
    "image": "/assets/enemy/boss_005.webp",
    "desc": "Verdara is the only enemy the heroes faced in the war's early chapters who was never an outside invader corrupting something pure. Carmen Vidal said it plainly at the forest core: Verdara didn't come from outside - she was born from inside the corruption itself, a being that formed the way an infection eventually grows a mind of its own. Zimara's correction to Carmen's grief was the harder truth: Verdara doesn't carry the corruption. She *is* the corruption now, with no original self left underneath to save.",
    "effect": "TOXIN",
    "hp": 12000,
    "atk": 520,
    "def": 350,
    "color": "#A3E635",
    "accent": "#D9F99D"
  },
  {
    "chapter": 6,
    "title": "Shadowbloom",
    "name": "Nyx Shadowbloom",
    "epithet": "The Shadowbloom Queen",
    "image": "/assets/enemy/boss_006.webp",
    "desc": "Nyx is the answer to a question the heroes didn't know they'd been asking since Chapter Four: who has been coordinating the corruption spreading through every forest they've passed through? Kaori Adachi's realization at the World Tree's poisoned heart confirmed it - Nyx had been poisoning the forests from within all along, patient enough to let Thornqueen Sylva and Verdara rise and fall as symptoms while she remained the disease underneath. She rules from a garden where the World Tree itself weeps shadow instead of sap, proof that by the time you can see corruption, its source has usually already moved on to somewhere deeper.",
    "effect": "VOID_CURSE",
    "hp": 13500,
    "atk": 575,
    "def": 390,
    "color": "#A855F7",
    "accent": "#D8B4FE"
  },
  {
    "chapter": 7,
    "title": "Abyssal Gate",
    "name": "The Abyss Sovereign",
    "epithet": "The Abyss Sovereign",
    "image": "/assets/enemy/boss_007.webp",
    "desc": "Kaori Adachi's words at the obsidian throne's descent were the shortest and heaviest of the entire chapter: this is what took everything from me. The Abyss Sovereign is ancient even by the standards of the multiversal threats the heroes had already faced - Lysha and Pyrevex were incursions from elsewhere, but the Sovereign's obsidian throne descending through Aetheria's own torn sky suggested a far older, far more personal connection to this world specifically, and to the man who fought him with nothing held back.",
    "effect": "VOID_CURSE",
    "hp": 15500,
    "atk": 640,
    "def": 430,
    "color": "#818CF8",
    "accent": "#C7D2FE"
  },
  {
    "chapter": 8,
    "title": "Eclipse Rising",
    "name": "Radiant Dragon Emperor",
    "epithet": "The Radiant Dragon Emperor",
    "image": "/assets/enemy/boss_008.webp",
    "desc": "Zimara's correction mattered: the Emperor doesn't merely use divine light, he IS divine light given physical form, ancient beyond any measure the heroes had available. His arrival proved something Aurariel's fall in Chapter Three had only hinted at - that holy radiance, unchecked and absolute, is every bit as capable of annihilation as the darkest void. Aisling Doyle's counter-strategy, shadow and void techniques against a being of pure light, marked the first time the heroes fought fire with its precise opposite rather than matching element for element, a lesson that would matter again when they faced a being who'd fused both sides completely.",
    "effect": "PARALYSIS",
    "hp": 17500,
    "atk": 700,
    "def": 480,
    "color": "#94A3B8",
    "accent": "#CBD5E1"
  },
  {
    "chapter": 9,
    "title": "Celestial Fracture",
    "name": "Celestial Valkor",
    "epithet": "Fusion of Light and Dark",
    "image": "/assets/enemy/boss_009.webp",
    "desc": "Valkor is the first being the heroes encountered who had actually succeeded at what Mother Eclipse would later achieve naturally - merging perfect light and perfect darkness into one form. The difference, Kaori Adachi realized too late to prevent the attempt, is that Valkor forced the synthesis rather than letting it settle: he absorbed both sides of the celestial fracture and tried to rewrite what reality allows by sheer will. Five factions stopping that rewrite before it completed was the first time unity itself - not any single element - was the thing that actually won the fight.",
    "effect": "PARALYSIS",
    "hp": 19500,
    "atk": 770,
    "def": 530,
    "color": "#E0F2FE",
    "accent": "#FFFFFF"
  },
  {
    "chapter": 10,
    "title": "Void Queen's Reign",
    "name": "Queen Nythera",
    "epithet": "The Void Queen",
    "image": "/assets/enemy/boss_010.webp",
    "desc": "Zimara's assessment of Nythera cuts to the heart of what makes her uniquely dangerous: she didn't conquer the celestial realm by force. She infected it, and it surrendered willingly. She is void energy given a throne, having absorbed dimensional power from every realm the abyss has ever touched - not a foreign invader smashing through a gate, but a slow, willing corruption that the celestial realm let happen to itself one compromise at a time.",
    "effect": "VOID_CURSE",
    "hp": 21000,
    "atk": 830,
    "def": 575,
    "color": "#C084FC",
    "accent": "#E9D5FF"
  },
  {
    "chapter": 11,
    "title": "Titan's March",
    "name": "The Infernal Titan King",
    "epithet": "The Infernal Titan King",
    "image": "/assets/enemy/boss_011.webp",
    "desc": "Dario Ferraro called him basically unkillable under normal conditions, and at building-scale height with each footstep erasing landmarks centuries old, that assessment wasn't hyperbole. Carmen Vidal found the one flaw in his design - a volcanic core on his chest sustaining both his size and his heat - and Maeve Boyle's insight completed the plan: concentrated cold or void energy against that single point destabilizes the entire titan. Precision, not brute force, is what actually brings down something this size.",
    "effect": "SHATTER",
    "hp": 23000,
    "atk": 890,
    "def": 620,
    "color": "#F87171",
    "accent": "#FCA5A5"
  },
  {
    "chapter": 12,
    "title": "Time's End",
    "name": "Chronos",
    "epithet": "The God of Time",
    "image": "/assets/enemy/boss_012.webp",
    "desc": "Chronos doesn't fight to win in the moment - he fights by rewriting when the moment happened at all, undoing the heroes' victories as fast as they achieve them. Zimara's answer to Valen's question - how do you fight someone who controls when things happen? - was the only one that could possibly work: act in the exact instant he can't predict, before he has time to see it coming and erase it. Facing a literal god of time, chapters after facing gates, empires, and swarms, was the moment the war stopped being about strength and started being about acting faster than causality itself.",
    "effect": "PARALYSIS",
    "hp": 24500,
    "atk": 940,
    "def": 650,
    "color": "#2DD4BF",
    "accent": "#99F6E4"
  },
  {
    "chapter": 13,
    "title": "Eternal Winter",
    "name": "The Frostbound Monarch",
    "epithet": "The Frostbound Monarch",
    "image": "/assets/enemy/boss_013.webp",
    "desc": "The Monarch had been watching the entire war since before Chapter One, letting every other threat - Lysha, Pyrevex, Nyx, Nythera - test the heroes first while he studied and prepared. Aisling Doyle's warning at the throne's approach was chilling in its precision: he had designed counters for every single Trump Card the heroes had ever used, built specifically around their exact abilities. His defeat marked what the heroes believed, in that moment, was the true end of the war - the culmination of everything five factions had earned through blood and sacrifice. History would prove that belief wrong almost immediately.",
    "effect": "CHILL",
    "hp": 25500,
    "atk": 980,
    "def": 670,
    "color": "#BAE6FD",
    "accent": "#F0F9FF"
  },
  {
    "chapter": 14,
    "title": "Crimson Empire",
    "name": "Seraphine the Crimson Empress",
    "epithet": "The Crimson Empress",
    "image": "/assets/enemy/boss_014.webp",
    "desc": "Seraphine never fought the heroes directly until Chapter Fourteen - she simply waited and fed. Reika Kurosawa's realization was devastating in hindsight: she'd been absorbing a fraction of the power from every Trump Card the heroes used since Chapter One, harvesting their victories as fuel for her own ascension. Valen named the truth plainly - Seraphine had engineered the entire war so the heroes would grow strong enough to be worth harvesting. Every previous villain, however dangerous, had unknowingly been charging this one.",
    "effect": "VOID_CURSE",
    "hp": 27000,
    "atk": 1040,
    "def": 700,
    "color": "#E11D48",
    "accent": "#FDA4AF"
  },
  {
    "chapter": 15,
    "title": "World's Last Hour",
    "name": "The World Eater Leviathan",
    "epithet": "The World Eater Leviathan",
    "image": "/assets/enemy/boss_015.webp",
    "desc": "Kaori Adachi's description carried the true weight of what the heroes were facing: the World Eater doesn't conquer or corrupt anything - it simply consumes, and it existed before the universe itself had a name to lose. Zimara's account of its history was absolute: every realm it has touched is gone, not conquered or corrupted but erased so completely that they were removed from having ever existed at all. It surfaced from the cosmic abyss having sent an entire herald of lesser threats ahead of it - antibodies clearing resistance before the main body ever had to arrive. Facing it meant fighting not to win in any conventional sense, but simply to remain real in a universe actively being eaten alive around them.",
    "effect": "VOID_CURSE",
    "hp": 28000,
    "atk": 1100,
    "def": 720,
    "color": "#8B5CF6",
    "accent": "#C4B5FD"
  },
  {
    "chapter": 16,
    "title": "Cathedral of Chains",
    "name": "Visalia the Crimson",
    "epithet": "The True Architect",
    "image": "/assets/enemy/boss_016.webp",
    "desc": "Visalia predates Seraphine by centuries and was never her subordinate - Kaori Adachi's realization at the cathedral altar reframed the entire Crimson Empire's history: Seraphine wasn't the architect of the war's cruelty. Visalia was, engineering every conflict, every empire, every battle from the shadows while feeding on the collective bloodshed they generated. The Crimson Empire had been drawing from Visalia's reservoir the entire time without ever knowing it existed. Everything Seraphine harvested from the heroes' Trump Cards ultimately flowed to her.",
    "effect": "VOID_CURSE",
    "hp": 29500,
    "atk": 1140,
    "def": 742,
    "color": "#C21010",
    "accent": "#FF8C8C"
  },
  {
    "chapter": 17,
    "title": "The Hollow Crown",
    "name": "The Crownless King",
    "epithet": "The Crownless King",
    "image": "/assets/enemy/boss_017.webp",
    "desc": "Every name carved into his black-gold armor belongs to someone whose story was erased alongside his own - Kaori Adachi understood immediately that he carries their weight because he refuses to let an entire kingdom be forgotten twice. The void where his face should be marks exactly where his identity was taken, leaving him certain only that he was wronged, and that the wrong was systematic rather than accidental. Reika Kurosawa's warning proved correct: something this old and this specifically angry doesn't have a clean weakness to exploit. Only a will that had to be met with an equal and opposite one.",
    "effect": "VOID_CURSE",
    "hp": 31000,
    "atk": 1180,
    "def": 765,
    "color": "#8B7340",
    "accent": "#D4A843"
  },
  {
    "chapter": 18,
    "title": "Divided Heaven",
    "name": "Mother Eclipse",
    "epithet": "The Balanced Goddess",
    "image": "/assets/enemy/boss_018.webp",
    "desc": "Mother Eclipse achieved what Celestial Valkor tried and failed to force nine chapters earlier - true, natural equilibrium between divine light and absolute darkness, two cosmic bodies merged into one being with neither side dominant. Kaori Adachi, who had faced beings of pure void and witnessed entities of pure light separately, had never encountered anything like her: she transcends elemental categories entirely, existing in the space between all of them rather than as any single extreme. Reika Kurosawa's assessment closed the door on ordinary strategy - no elemental advantage applies to something that embodies everything and its opposite simultaneously. Only total, unified commitment from every faction at once ever stood a chance.",
    "effect": "BURN",
    "hp": 32500,
    "atk": 1220,
    "def": 790,
    "color": "#C8A800",
    "accent": "#C084FC"
  },
  {
    "chapter": 19,
    "title": "The Living Archive",
    "name": "The Archive Devourer",
    "epithet": "The Devourer of Knowledge",
    "image": "/assets/enemy/boss_019.webp",
    "desc": "The Archive Devourer doesn't destroy the knowledge it consumes - Zimara was precise about the horror of it: it contains everything, every secret, every lost civilization's final recorded words, every spell ever written, all still trapped and aware somewhere inside it. Kaori Adachi's warning before the final clash cut deepest: it had already read the heroes' complete history from a thousand different sources, meaning any documented technique or established pattern was already known and countered before it was even attempted. Reika Kurosawa's answer - pure improvisation, giving it nothing that had ever appeared in any text - was the first time the heroes' greatest weapon against an ancient threat was simply doing something no one had ever written down before.",
    "effect": "VOID_CURSE",
    "hp": 34000,
    "atk": 1262,
    "def": 818,
    "color": "#92640A",
    "accent": "#E8D5A3"
  },
  {
    "chapter": 20,
    "title": "Before the First Breath",
    "name": "The First Dream",
    "epithet": "The Dreaming Origin",
    "image": "/assets/enemy/boss_020.webp",
    "desc": "The First Dream existed before the universe had rules, before cause and effect were invented, before anything anywhere had a name - Kaori Adachi's assessment placed it below the void, below the shadow, below everything the heroes had previously understood as deep. It is the original consciousness that dreamed existence into being in the first place, and it was never evil in any sense that word could apply - it simply predates the concept entirely. The heroes' victory here wasn't destruction; destroying the dream would have unmade the reality it was dreaming, themselves included. It was persuasion - proving to something vast, ancient, and utterly without context for a world outside its own imagination that the dream it had made was worth continuing exactly as it was.",
    "effect": "PARALYSIS",
    "hp": 36000,
    "atk": 1320,
    "def": 860,
    "color": "#6D28D9",
    "accent": "#C4B5FD"
  },
  {
    "chapter": 21,
    "title": "Shadow Sovereign",
    "name": "The Shadow Sovereign",
    "epithet": "The Shadow Sovereign",
    "image": "/assets/enemy/boss_021.webp",
    "desc": "She had been consolidating power in the dark realm since before any of the heroes were born, patient enough to wait three hundred years for the exact right moment to move. Reika Kurosawa's realization was chilling in scope: she'd been absorbing shadow energy from every battle the heroes had ever fought, across every single prior chapter - every darkness they dispelled had fed her rather than weakened the dark as a whole. Zimara found the one thing shadow energy this vast had never been forced to absorb: pure, faction-unified light, five elements combined into something the Sovereign's centuries of preparation had never modeled. She planned for every scenario except total, genuine cooperation - which, as Kaori Adachi noted, has always been the heroes' real edge against enemies who plan alone.",
    "effect": "VOID_CURSE",
    "hp": 38500,
    "atk": 1385,
    "def": 905,
    "color": "#6429ec",
    "accent": "#A78BFA"
  },
  {
    "chapter": 22,
    "title": "The Cosmic Weave",
    "name": "Caelestra the Cosmic Weaver",
    "epithet": "The Cosmic Weaver",
    "image": "/assets/enemy/boss_022.webp",
    "desc": "Zimara named the scale of what Caelestra had done: she absorbed the memories of dying worlds, every civilization that burned out and every consciousness that reached for more than it could hold, keeping all of it rather than letting it fade with the stars that once housed it. Valen recognized this wasn't simple power - it was responsibility carried at a scale no single being should have to hold. Reika Kurosawa's warning shaped how the heroes approached her: beings who absorb that much memory eventually lose track of which instincts are truly theirs and which were merely borrowed from the dead. She was not defeated so much as reminded - by five factions acting as one living, present voice - that one world still choosing to exist mattered more than all the preserved memory of a thousand that no longer did.",
    "effect": "VOID_CURSE",
    "hp": 41500,
    "atk": 1448,
    "def": 945,
    "color": "#3a67d0",
    "accent": "#7EC8E3"
  },
  {
    "chapter": 23,
    "title": "Demon Glacier",
    "name": "Glacidra the Frost Demon",
    "epithet": "The Frost Demon",
    "image": "/assets/enemy/boss_023.webp",
    "desc": "Something older than any written seal had been holding Glacidra beneath the ice - Zimara noted that whatever documentation once existed for her original sealing had either been lost or deliberately destroyed. Her frost is not weather or even cold in any conventional sense; Zimara's assessment was precise and alarming: it removes the possibility of heat from the fabric of space itself rather than merely lowering its temperature, corrupting the dimensional matter she touches permanently. Valentina Ardente found the only workable strategy against a being who changes the rules of physics simply by existing: don't fight the ice she generates. Fight her, the singular source all of it comes from, and let the corrupted zones re-stabilize on their own once that source is gone.",
    "effect": "CHILL",
    "hp": 44000,
    "atk": 1512,
    "def": 985,
    "color": "#486da1",
    "accent": "#72C4E8"
  },
  {
    "chapter": 24,
    "title": "The Elder Crimson",
    "name": "Lady Lyssiel the Elder Crimson",
    "epithet": "The Elder Crimson",
    "image": "/assets/enemy/boss_024.webp",
    "desc": "Lady Lyssiel is the original source of the entire Crimson bloodline - everything Visalia became in the Cathedral of Chains, everything the youngest sister Lysse aspires to become, traces back to her. Kaori Adachi's realization was the most unsettling of the whole encounter: she had been watching the heroes since Chapter One, observing every battle and every Trump Card and every alliance without ever once intervening, because she had simply been finishing her assessment of whether they were worth her attention at all. Reika Kurosawa's answer to what that assessment concluded was the most dangerous compliment the heroes had ever received from an enemy - that they were, at last, worth fighting. Lady Lyssiel had watched every empire in Aetheria's history rise and fall from a domain older than any of them without ever once needing to move. She moved for this fight, and only this one.",
    "effect": "VOID_CURSE",
    "hp": 46500,
    "atk": 1578,
    "def": 1025,
    "color": "#c53655",
    "accent": "#FF8C8C"
  },
  {
    "chapter": 25,
    "title": "The First Entity",
    "name": "The Origin",
    "epithet": "The Origin",
    "image": "/assets/enemy/boss_025.webp",
    "desc": "Kaori Adachi named it the First Entity: Aetheria's original inhabitant, older than the gods the heroes had already fought, older than the void, older than the very concept of darkness. It didn't create the world - it was simply already present when the world arrived. Zimara's clarification mattered more than any battle strategy: it isn't malevolent, because malevolence was invented long after it already existed. What it has instead is magnitude - so much more than everything else that its mere existence exerts pressure on reality itself. The heroes couldn't destroy something that predates the concept of destruction, and couldn't reason with it in a language that postdates it by an immeasurable margin. Reika Kurosawa's answer was to communicate in something older than language: pure, undiluted existence at full intensity, every faction and every element at once, making the argument that a world this alive was worth leaving intact simply by refusing to stop living. And in its final moment - the detail that changed everything the heroes thought they understood about the scale of what they were fighting - the Origin didn't look at them at all. It looked upward, toward something even it had no name for. Something above everything it had ever known.",
    "effect": "VOID_CURSE",
    "hp": 50000,
    "atk": 1655,
    "def": 1075,
    "color": "#8a8a8a",
    "accent": "#C4B5FD"
  },
  {
    "chapter": 26,
    "title": "Void Eternal",
    "name": "The Void Eternal",
    "epithet": "The Living Absence",
    "image": "/assets/enemy/boss_026.webp",
    "desc": "Reika Kurosawa's description was the most precise definition any enemy in the war had ever received: the Void Eternal is not a ruler, and it is not a destroyer. It is the silence that follows every ending - what remains, structurally, once a story is finished being told. Zimara's warning carried the true stakes: if it succeeds, even the heroes' hard-won victories would be unmade entirely, leaving no legend, no story, and no echo of the resistance that came before. It fed on the fragments of every defeated foe the heroes had ever faced, reforming their history as ammunition against them - the war's past turned into a weapon aimed at its own future. The heroes' answer wasn't strategy. It was refusal - proof that something could endure even the deliberate erasure of everything that came before it.",
    "effect": "VOID_CURSE",
    "hp": 53500,
    "atk": 1698,
    "def": 1102,
    "color": "#4C1D95",
    "accent": "#A78BFA"
  },
  {
    "chapter": 27,
    "title": "Celestial Reckoning",
    "name": "The Grand Reckoning",
    "epithet": "The Grand Reckoning",
    "image": "/assets/enemy/boss_027.webp",
    "desc": "Zimara's assessment removed any comfort from the confrontation: the Grand Reckoning doesn't hate the heroes. It simply perceives their continued survival as an error in a cosmic equation that governs realities far beyond Aetheria alone. It represents the original judges - beings who maintain balance across multiple universes, and who had, until now, judged the heroes' repeated defiance of fate to be a threat worth correcting directly. Valen's answer reframed the entire fight: if survival itself was the error, then the heroes would simply become the glitch the equation could never successfully calculate away.",
    "effect": "SMITE",
    "hp": 57000,
    "atk": 1785,
    "def": 1155,
    "color": "#FBBF24",
    "accent": "#FDE68A"
  },
  {
    "chapter": 28,
    "title": "Seraphic Judgment",
    "name": "The Last Seraph",
    "epithet": "The Last Seraph",
    "image": "/assets/enemy/boss_028.webp",
    "desc": "Highest of the herald choir sent ahead to judge whether the heroes' continued defiance had earned the right to be noticed by whatever the choir was truly protecting. Zimara's assessment made the stakes clear: beyond this seraph, there is no more judgment left in the choir's hierarchy to pass - only whatever waits on the other side of its verdict. Kaori Adachi's read softened the confrontation without lessening it: it doesn't hate the heroes, and doesn't even fully register them as a threat. It simply needs to be certain, absolutely certain, before letting anything else beyond it notice they exist at all. And in the instant the Last Seraph fell, something ancient and unblinking, far above the light, finally opened its eyes toward the battlefield for the first time.",
    "effect": "BLESSING",
    "hp": 61000,
    "atk": 1895,
    "def": 1215,
    "color": "#F5D061",
    "accent": "#FFFDF0"
  },
  {
    "chapter": 29,
    "title": "The Silent Vigil",
    "name": "The Silent Watcher",
    "epithet": "The Silent Watcher",
    "image": "/assets/enemy/boss_029.webp",
    "desc": "Sworn since the birth of the very first reality to observe and never interfere - no matter what it witnessed, no matter how easily it could have helped - the Silent Watcher had maintained an unbroken vow for longer than Kaori Adachi could put a number to. Zimara understood exactly what its presence here meant: if it was finally choosing to act, the heroes weren't just another battle to it anymore. They were the exception it had decided was worth breaking a billion-year-old oath to intervene for. Its defeat wasn't the end of the mystery - it was confirmation that something, somewhere above even a being this ancient, had been worth warning about all along.",
    "effect": "SHATTER",
    "hp": 65000,
    "atk": 2005,
    "def": 1275,
    "color": "#1E293B",
    "accent": "#94A3B8"
  },
  {
    "chapter": 30,
    "title": "Beyond Creation",
    "name": "The One Above All",
    "epithet": "The One Above All",
    "image": "/assets/enemy/boss_030.webp",
    "desc": "It had no form, no name, and no single moment of arrival, because Zimara understood it had never truly been absent - it simply was, and always had been, above everything the heroes had ever called reality. Kaori Adachi's final assessment placed the entire war in true perspective: the Origin the heroes fought in Chapter Twenty-Five was the first being inside creation. This is what stands outside it entirely - above the Origin, above the Silent Watcher who broke a billion-year vow just to warn them it existed. There is nothing higher than this in any reality the heroes could ever reach. It doesn't rule through malice and wouldn't end them out of cruelty; to something this far above every story ever told, the heroes were simply a chapter it hadn't yet decided the worth of. Valen's final answer, backed by every hero, every faction, and every Trump Card earned since the very first shattered barrier, wasn't a bid to replace what stood above all creation. It was proof - offered directly to the top of existence itself - that everything allowed to exist beneath it had been worth creating in the first place.",
    "effect": "SMITE",
    "hp": 72000,
    "atk": 2185,
    "def": 1385,
    "color": "#FBBF24",
    "accent": "#FDE68A"
  }
];

// ─── Recurring mini-bosses, deduped by first appearance ──────────────────────
export const MINI_BOSSES = [
  {
    "imageKey": "mini-boss_001",
    "name": "Frost Commander",
    "epithet": "The Frost Commander",
    "image": "/assets/enemy/mini-boss_001.webp",
    "chapter": 1
  },
  {
    "imageKey": "mini-boss_002",
    "name": "Inferno Warden",
    "epithet": "The Inferno Warden",
    "image": "/assets/enemy/mini-boss_002.webp",
    "chapter": 2
  },
  {
    "imageKey": "mini-boss_003",
    "name": "Forest Knight",
    "epithet": "The Fallen Forest Knight",
    "image": "/assets/enemy/mini-boss_003.webp",
    "chapter": 3
  },
  {
    "imageKey": "mini-boss_009",
    "name": "Crimson Widow Queen",
    "epithet": "The Crimson Widow Queen",
    "image": "/assets/enemy/mini-boss_009.webp",
    "chapter": 4
  },
  {
    "imageKey": "mini-boss_010",
    "name": "Frostveil Sorceress",
    "epithet": "The Frostveil Sorceress",
    "image": "/assets/enemy/mini-boss_010.webp",
    "chapter": 5
  },
  {
    "imageKey": "mini-boss_011",
    "name": "Celestial Fallen Valkyrie",
    "epithet": "The Fallen Valkyrie",
    "image": "/assets/enemy/mini-boss_011.webp",
    "chapter": 6
  },
  {
    "imageKey": "mini-boss_007",
    "name": "Abyss Prophet",
    "epithet": "The Abyss Prophet",
    "image": "/assets/enemy/mini-boss_007.webp",
    "chapter": 7
  },
  {
    "imageKey": "mini-boss_004",
    "name": "Void Samurai Warlord",
    "epithet": "The Void Samurai Warlord",
    "image": "/assets/enemy/mini-boss_004.webp",
    "chapter": 8
  },
  {
    "imageKey": "mini-boss_008",
    "name": "Clockwork Commander",
    "epithet": "The Clockwork Commander",
    "image": "/assets/enemy/mini-boss_008.webp",
    "chapter": 9
  },
  {
    "imageKey": "mini-boss_012",
    "name": "Nature Assassin",
    "epithet": "The Nature Assassin",
    "image": "/assets/enemy/mini-boss_012.webp",
    "chapter": 10
  },
  {
    "imageKey": "mini-boss_005",
    "name": "Infernal Berserker King",
    "epithet": "The Infernal Berserker King",
    "image": "/assets/enemy/mini-boss_005.webp",
    "chapter": 11
  },
  {
    "imageKey": "mini-boss_006",
    "name": "Frost Revenant Knight",
    "epithet": "The Frost Revenant Knight",
    "image": "/assets/enemy/mini-boss_006.webp",
    "chapter": 12
  },
  {
    "imageKey": "mini-boss_013",
    "name": "Storm Siren Empress",
    "epithet": "The Storm Siren Empress",
    "image": "/assets/enemy/mini-boss_013.webp",
    "chapter": 13
  },
  {
    "imageKey": "mini-boss_014",
    "name": "Stone Keeper",
    "epithet": "The Stone Keeper",
    "image": "/assets/enemy/mini-boss_014.webp",
    "chapter": 16
  },
  {
    "imageKey": "mini-boss_015",
    "name": "Lady Silkgrave",
    "epithet": "Lady Silkgrave",
    "image": "/assets/enemy/mini-boss_015.webp",
    "chapter": 17
  },
  {
    "imageKey": "mini-boss_016",
    "name": "The Furnace Saint",
    "epithet": "The Furnace Saint",
    "image": "/assets/enemy/mini-boss_016.webp",
    "chapter": 18
  },
  {
    "imageKey": "mini-boss_017",
    "name": "Void-Touched Navigator",
    "epithet": "The Void-Touched Navigator",
    "image": "/assets/enemy/mini-boss_017.webp",
    "chapter": 19
  },
  {
    "imageKey": "mini-boss_018",
    "name": "The Last Marionette",
    "epithet": "The Last Marionette",
    "image": "/assets/enemy/mini-boss_018.webp",
    "chapter": 20
  },
  {
    "imageKey": "mini-boss_019",
    "name": "Kitsune Specter",
    "epithet": "The Kitsune Specter",
    "image": "/assets/enemy/mini-boss_019.webp",
    "chapter": 21
  },
  {
    "imageKey": "mini-boss_020",
    "name": "Obsidian Scholar",
    "epithet": "The Obsidian Scholar",
    "image": "/assets/enemy/mini-boss_020.webp",
    "chapter": 22
  },
  {
    "imageKey": "mini-boss_021",
    "name": "Lysse the Youngest",
    "epithet": "Lysse the Youngest",
    "image": "/assets/enemy/mini-boss_021.webp",
    "chapter": 23
  },
  {
    "imageKey": "mini-boss_022",
    "name": "Fae Enchantress",
    "epithet": "The Fae Enchantress",
    "image": "/assets/enemy/mini-boss_022.webp",
    "chapter": 24
  },
  {
    "imageKey": "mini-boss_023",
    "name": "Briar the Elder",
    "epithet": "Briar the Elder",
    "image": "/assets/enemy/mini-boss_023.webp",
    "chapter": 25
  },
  {
    "imageKey": "mini-boss_024",
    "name": "Chronomancer Eternal",
    "epithet": "The Chronomancer Eternal",
    "image": "/assets/enemy/mini-boss_024.webp",
    "chapter": 26
  },
  {
    "imageKey": "mini-boss_025",
    "name": "Seraph of the Scales",
    "epithet": "Seraph of the Scales",
    "image": "/assets/enemy/mini-boss_025.webp",
    "chapter": 27
  },
  {
    "imageKey": "mini-boss_026",
    "name": "Ophaniel the Vigilant",
    "epithet": "Ophaniel the Vigilant",
    "image": "/assets/enemy/mini-boss_026.webp",
    "chapter": 28
  },
  {
    "imageKey": "mini-boss_027",
    "name": "The Recording Eye",
    "epithet": "The Recording Eye",
    "image": "/assets/enemy/mini-boss_027.webp",
    "chapter": 29
  },
  {
    "imageKey": "mini-boss_028",
    "name": "Echo of the One Above All",
    "epithet": "Echo of the One Above All",
    "image": "/assets/enemy/mini-boss_028.webp",
    "chapter": 30
  }
];

// ─── Common mob enemies, deduped by first appearance ─────────────────────────
export const MOB_ENEMIES = [
  {
    "imageKey": "mob_001",
    "name": "Flame Scout",
    "epithet": "Rift-Born Scout",
    "image": "/assets/enemy/mob_001.webp",
    "chapter": 1
  },
  {
    "imageKey": "mob_002",
    "name": "Fire Specter",
    "epithet": "Ember Wraith",
    "image": "/assets/enemy/mob_002.webp",
    "chapter": 1
  },
  {
    "imageKey": "mob_003",
    "name": "Shadow Hound",
    "epithet": "Void Hound",
    "image": "/assets/enemy/mob_003.webp",
    "chapter": 1
  },
  {
    "imageKey": "mob_004",
    "name": "Shadow Wraith",
    "epithet": "Wraith of the Caldera",
    "image": "/assets/enemy/mob_004.webp",
    "chapter": 2
  },
  {
    "imageKey": "mob_008",
    "name": "Emberhorn Brute",
    "epithet": "Emberhorn Brute",
    "image": "/assets/enemy/mob_008.webp",
    "chapter": 2
  },
  {
    "imageKey": "mob_005",
    "name": "Forest Warden",
    "epithet": "Forsaken Warden",
    "image": "/assets/enemy/mob_005.webp",
    "chapter": 3
  },
  {
    "imageKey": "mob_006",
    "name": "Light Golem",
    "epithet": "Golem of False Radiance",
    "image": "/assets/enemy/mob_006.webp",
    "chapter": 3
  },
  {
    "imageKey": "mob_007",
    "name": "Abyss Fang Ravager",
    "epithet": "Abyss-Bound Ravager",
    "image": "/assets/enemy/mob_007.webp",
    "chapter": 4
  },
  {
    "imageKey": "mob_014",
    "name": "Water Guardian",
    "epithet": "Corrupted Water Guardian",
    "image": "/assets/enemy/mob_014.webp",
    "chapter": 5
  },
  {
    "imageKey": "mob_010",
    "name": "Rotclaw Ghoul",
    "epithet": "Rotclaw Ghoul",
    "image": "/assets/enemy/mob_010.webp",
    "chapter": 6
  },
  {
    "imageKey": "mob_009",
    "name": "Frostveil Siren",
    "epithet": "Frostveil Siren",
    "image": "/assets/enemy/mob_009.webp",
    "chapter": 6
  },
  {
    "imageKey": "mob_013",
    "name": "Forest Marionette",
    "epithet": "Forest Marionette",
    "image": "/assets/enemy/mob_013.webp",
    "chapter": 6
  },
  {
    "imageKey": "mob_011",
    "name": "Stormbreaker Titan",
    "epithet": "Stormbreaker Titan",
    "image": "/assets/enemy/mob_011.webp",
    "chapter": 7
  },
  {
    "imageKey": "mob_012",
    "name": "Dark Huntress",
    "epithet": "Dark Huntress",
    "image": "/assets/enemy/mob_012.webp",
    "chapter": 8
  },
  {
    "imageKey": "mob_015",
    "name": "Iron Shade Knight",
    "epithet": "Iron Shade Knight",
    "image": "/assets/enemy/mob_015.webp",
    "chapter": 16
  },
  {
    "imageKey": "mob_016",
    "name": "Forest Revenant",
    "epithet": "Forest Revenant",
    "image": "/assets/enemy/mob_016.webp",
    "chapter": 16
  },
  {
    "imageKey": "mob_017",
    "name": "Earth Sentinel",
    "epithet": "Earth Sentinel",
    "image": "/assets/enemy/mob_017.webp",
    "chapter": 16
  },
  {
    "imageKey": "mob_019",
    "name": "Void Wraith Archer",
    "epithet": "Void Wraith Archer",
    "image": "/assets/enemy/mob_019.webp",
    "chapter": 17
  },
  {
    "imageKey": "mob_020",
    "name": "Tomb Specter",
    "epithet": "Tomb Specter",
    "image": "/assets/enemy/mob_020.webp",
    "chapter": 17
  },
  {
    "imageKey": "mob_021",
    "name": "Dark Golem",
    "epithet": "Dark Golem",
    "image": "/assets/enemy/mob_021.webp",
    "chapter": 18
  },
  {
    "imageKey": "mob_022",
    "name": "Obsidian Sentinel",
    "epithet": "Obsidian Sentinel",
    "image": "/assets/enemy/mob_022.webp",
    "chapter": 18
  },
  {
    "imageKey": "mob_018",
    "name": "Phantom Silk Crawler",
    "epithet": "Phantom Silk Crawler",
    "image": "/assets/enemy/mob_018.webp",
    "chapter": 19
  },
  {
    "imageKey": "mob_023",
    "name": "Star Map Wanderer",
    "epithet": "Star Map Wanderer",
    "image": "/assets/enemy/mob_023.webp",
    "chapter": 19
  },
  {
    "imageKey": "mob_024",
    "name": "Dimensional Rift Stalker",
    "epithet": "Dimensional Rift Stalker",
    "image": "/assets/enemy/mob_024.webp",
    "chapter": 19
  },
  {
    "imageKey": "mob_025",
    "name": "Porcelain Guard",
    "epithet": "Porcelain Guard",
    "image": "/assets/enemy/mob_025.webp",
    "chapter": 20
  },
  {
    "imageKey": "mob_026",
    "name": "Celestial String Dancer",
    "epithet": "Celestial String Dancer",
    "image": "/assets/enemy/mob_026.webp",
    "chapter": 20
  },
  {
    "imageKey": "mob_027",
    "name": "Shadow Feline",
    "epithet": "Shadow Feline",
    "image": "/assets/enemy/mob_027.webp",
    "chapter": 21
  },
  {
    "imageKey": "mob_028",
    "name": "Void Viper",
    "epithet": "Void Viper",
    "image": "/assets/enemy/mob_028.webp",
    "chapter": 21
  },
  {
    "imageKey": "mob_032",
    "name": "Dark Crowmancer",
    "epithet": "Dark Crowmancer",
    "image": "/assets/enemy/mob_032.webp",
    "chapter": 21
  },
  {
    "imageKey": "mob_029",
    "name": "Bone Harpy",
    "epithet": "Bone Harpy",
    "image": "/assets/enemy/mob_029.webp",
    "chapter": 22
  },
  {
    "imageKey": "mob_030",
    "name": "Crystal Drake",
    "epithet": "Crystal Drake",
    "image": "/assets/enemy/mob_030.webp",
    "chapter": 22
  },
  {
    "imageKey": "mob_031",
    "name": "Abyss Spider",
    "epithet": "Abyss Spider",
    "image": "/assets/enemy/mob_031.webp",
    "chapter": 22
  }
];

// ─── Enemies-page summary stats ──────────────────────────────────────────────
export const ENEMY_STATS = {
  "chapters": 30,
  "stages": 90,
  "bossTypes": 30,
  "uniqueEnemies": 90
};
