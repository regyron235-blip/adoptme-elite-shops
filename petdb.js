// Pet Knowledge Base for AI Assistant
// Prices in Ride Potions (RP) based on community trading values
const petDatabase = [
    // === LEGENDARY — TOP TIER ===
    { name: "Shadow Dragon", rarity: "Legendary", year: 2019, event: "Halloween 2019", origin: "Candy Shop (1000 Robux)", value: "330 RP", demand: "Very High", desc: "Dark skeletal dragon with glowing white eyes and black smoke particles. One of the rarest and most valuable pets." },
    { name: "Bat Dragon", rarity: "Legendary", year: 2019, event: "Halloween 2019", origin: "Candy Shop (180,000 Candy)", value: "182 RP", demand: "Very High", desc: "Spooky orange-bellied dragon with dark brown wings and glowing yellow eyes." },
    { name: "Frost Dragon", rarity: "Legendary", year: 2019, event: "Christmas 2019", origin: "Robux (1000 Robux)", value: "120 RP", demand: "Very High", desc: "Icy blue dragon with translucent wings and frost particles. A fan-favorite legendary." },
    { name: "Giraffe", rarity: "Legendary", year: 2019, event: "Safari Egg", origin: "Safari Egg (750 Bucks)", value: "152 RP", demand: "Very High", desc: "Tall spotted giraffe. One of the oldest and most valuable pets from the Safari Egg." },
    { name: "Shadow Reaper Dragon", rarity: "Legendary", year: 2024, event: "Halloween 2024", origin: "Candy Shop", value: "508 RP", demand: "Extremely High", desc: "The most valuable pet currently in the game. Released during Halloween 2024." },

    // === LEGENDARY — HIGH TIER ===
    { name: "Owl", rarity: "Legendary", year: 2019, event: "Farm Egg", origin: "Farm Egg (750 Bucks)", value: "76 RP", demand: "Very High", desc: "Large brown owl from the Farm Egg. Extremely popular and highly traded." },
    { name: "Parrot", rarity: "Legendary", year: 2019, event: "Jungle Egg", origin: "Jungle Egg (750 Bucks)", value: "68 RP", demand: "Very High", desc: "Colorful tropical parrot from the Jungle Egg. One of the oldest legendaries." },
    { name: "Crow", rarity: "Legendary", year: 2019, event: "Farm Egg", origin: "Farm Egg (750 Bucks)", value: "66 RP", demand: "High", desc: "Black crow from the Farm Egg. Often compared to Owl in value." },
    { name: "Evil Unicorn", rarity: "Legendary", year: 2019, event: "Halloween 2019", origin: "Halloween Egg (108,000 Candy)", value: "64 RP", demand: "High", desc: "Dark unicorn with red fiery mane and glowing red eyes. A spooky Halloween exclusive." },
    { name: "Arctic Reindeer", rarity: "Legendary", year: 2019, event: "Christmas 2019", origin: "Christmas Egg (14,500 Gingerbread)", value: "46 RP", demand: "High", desc: "White reindeer with blue antlers from the Christmas 2019 event." },
    { name: "Albino Monkey", rarity: "Legendary", year: 2020, event: "Monkey Fairground", origin: "Monkey Box + Albino Ingredient", value: "42 RP", demand: "High", desc: "White-furred monkey. Rare because of the complex crafting process." },

    // === LEGENDARY — MID-HIGH TIER ===
    { name: "Monkey King", rarity: "Legendary", year: 2020, event: "Monkey Fairground", origin: "3 Staff Ingredients + Monkey", value: "50 RP", demand: "High", desc: "Golden armored monkey with a crown and staff. One of the rarest monkey variants." },
    { name: "Diamond Dragon", rarity: "Legendary", year: 2020, event: "Star Rewards", origin: "Star Rewards (660 Stars)", value: "13.2 RP", demand: "Medium", desc: "Sparkling diamond-textured dragon from the Star Rewards login streak." },
    { name: "Diamond Griffin", rarity: "Legendary", year: 2020, event: "Star Rewards", origin: "Star Rewards (660 Stars)", value: "12.8 RP", demand: "Medium", desc: "Diamond-textured griffin from Star Rewards." },
    { name: "Diamond Unicorn", rarity: "Legendary", year: 2020, event: "Star Rewards", origin: "Star Rewards (660 Stars)", value: "14.4 RP", demand: "Medium", desc: "Diamond-textured unicorn from Star Rewards." },
    { name: "Golden Dragon", rarity: "Legendary", year: 2020, event: "Star Rewards", origin: "Star Rewards (660 Stars)", value: "5 RP", demand: "Low-Medium", desc: "Golden-textured dragon from the Star Rewards login streak." },
    { name: "Golden Griffin", rarity: "Legendary", year: 2020, event: "Star Rewards", origin: "Star Rewards (660 Stars)", value: "4.6 RP", demand: "Low-Medium", desc: "Golden-textured griffin from Star Rewards." },
    { name: "Golden Unicorn", rarity: "Legendary", year: 2020, event: "Star Rewards", origin: "Star Rewards (660 Stars)", value: "5.4 RP", demand: "Low-Medium", desc: "Golden-textured unicorn from Star Rewards." },

    // === LEGENDARY — MID TIER ===
    { name: "Turtle", rarity: "Legendary", year: 2020, event: "Aussie Egg", origin: "Aussie Egg (750 Bucks)", value: "22 RP", demand: "High", desc: "Green turtle with an Australian theme from the Aussie Egg." },
    { name: "Kangaroo", rarity: "Legendary", year: 2020, event: "Aussie Egg", origin: "Aussie Egg (750 Bucks)", value: "15.2 RP", demand: "Medium-High", desc: "Brown kangaroo from the Aussie Egg." },
    { name: "Frost Fury", rarity: "Legendary", year: 2020, event: "Christmas 2020", origin: "Robux (800 Robux)", value: "9.2 RP", demand: "Medium", desc: "Ice-blue saber-toothed cat with frost particles." },
    { name: "Dodo", rarity: "Legendary", year: 2020, event: "Fossil Egg", origin: "Fossil Egg (750 Bucks)", value: "7 RP", demand: "Medium", desc: "Extinct bird from the Fossil Egg. Cute and popular." },
    { name: "T-Rex", rarity: "Legendary", year: 2020, event: "Fossil Egg", origin: "Fossil Egg (750 Bucks)", value: "7.2 RP", demand: "Medium", desc: "Green tyrannosaurus rex from the Fossil Egg." },
    { name: "Skele-Rex", rarity: "Legendary", year: 2020, event: "Halloween 2020", origin: "Candy Shop (10,000 Candy)", value: "9 RP", demand: "Medium", desc: "Skeleton T-Rex with glowing eyes from Halloween 2020." },
    { name: "Snow Owl", rarity: "Legendary", year: 2020, event: "Christmas 2020", origin: "Gingerbread (10,000)", value: "5.8 RP", demand: "Medium", desc: "White snowy owl from the 2020 Christmas event." },
    { name: "Cerberus", rarity: "Legendary", year: 2020, event: "Gamepass", origin: "Gamepass (500 Robux)", value: "3 RP", demand: "Low-Medium", desc: "Three-headed dog from Greek mythology. Permanently available." },
    { name: "Robo Dog", rarity: "Legendary", year: 2020, event: "Cyber Sale", origin: "Robux (Cyber Sale)", value: "3 RP", demand: "Low", desc: "Robotic dog with neon accents." },
    { name: "King Bee", rarity: "Legendary", year: 2020, event: "Coffee Shop", origin: "Honey (199 Robux per jar)", value: "4 RP", demand: "Low-Medium", desc: "Royal bee with a crown. Hatched randomly from Honey." },
    { name: "Queen Bee", rarity: "Legendary", year: 2020, event: "Coffee Shop", origin: "Honey (199 Robux per jar)", value: "15 RP", demand: "Medium", desc: "The rarest bee — 1/40 chance from Honey." },
    { name: "Kitsune", rarity: "Legendary", year: 2020, event: "Robux Shop", origin: "Robux (600 Robux)", value: "2.4 RP", demand: "Low", desc: "Japanese fox spirit with multiple tails." },

    // === LEGENDARY — 2021 ===
    { name: "Axolotl", rarity: "Legendary", year: 2021, event: "Summer 2021", origin: "Summer Sale (Robux)", value: "3.6 RP", demand: "Low-Medium", desc: "Pink amphibian, cute and colorful from the 2021 Summer event." },
    { name: "Cobra", rarity: "Legendary", year: 2021, event: "Star Rewards", origin: "Star Rewards", value: "2.8 RP", demand: "Low", desc: "Hooded cobra snake from Star Rewards." },
    { name: "Guardian Lion", rarity: "Legendary", year: 2021, event: "Lunar New Year", origin: "Robux (500 Robux)", value: "3 RP", demand: "Low", desc: "Golden Chinese guardian lion from Lunar New Year 2021." },
    { name: "Octopus", rarity: "Legendary", year: 2021, event: "Ocean Egg", origin: "Ocean Egg (750 Bucks)", value: "6.2 RP", demand: "Medium", desc: "Purple octopus from the Ocean Egg." },
    { name: "Shark", rarity: "Legendary", year: 2021, event: "Ocean Egg", origin: "Ocean Egg (750 Bucks)", value: "5.6 RP", demand: "Medium", desc: "Blue shark from the Ocean Egg." },
    { name: "Peacock", rarity: "Legendary", year: 2021, event: "Robux Shop", origin: "Robux (550 Robux)", value: "2.4 RP", demand: "Low", desc: "Beautiful blue peacock with spread tail feathers." },
    { name: "Phoenix", rarity: "Legendary", year: 2021, event: "Mythic Egg", origin: "Mythic Egg (750 Bucks)", value: "6 RP", demand: "Medium", desc: "Fiery mythical bird from the Mythic Egg." },
    { name: "Goldhorn", rarity: "Legendary", year: 2021, event: "Mythic Egg", origin: "Mythic Egg (750 Bucks)", value: "5 RP", demand: "Medium", desc: "Golden unicorn-like creature with a spiral golden horn." },
    { name: "Ghost Dragon", rarity: "Legendary", year: 2021, event: "Halloween 2021", origin: "Candy Shop (Candy)", value: "5 RP", demand: "Medium", desc: "Ghostly transparent dragon from Halloween 2021." },

    // === LEGENDARY — 2022 ===
    { name: "Mechapup", rarity: "Legendary", year: 2022, event: "April Fools 2022", origin: "April Fools Event", value: "8 RP", demand: "Medium", desc: "Robotic puppy from the April Fools 2022 event." },
    { name: "Alicorn", rarity: "Legendary", year: 2022, event: "Basic Egg", origin: "Retired Egg", value: "3.2 RP", demand: "Low-Medium", desc: "Winged unicorn (Alicorn) from the retired Basic Egg 2022." },
    { name: "Lava Dragon", rarity: "Legendary", year: 2022, event: "Halloween 2022", origin: "Candy Shop", value: "5.2 RP", demand: "Medium", desc: "Fiery lava-covered dragon from Halloween 2022." },
    { name: "Ice Moth Dragon", rarity: "Legendary", year: 2022, event: "Winter 2022", origin: "Gingerbread Shop", value: "4.8 RP", demand: "Medium", desc: "Icy moth-winged dragon from Winter 2022." },
    { name: "Strawberry Bat Dragon", rarity: "Legendary", year: 2022, event: "Winter 2022", origin: "Gingerbread Shop", value: "4.4 RP", demand: "Medium", desc: "Sweet strawberry-themed bat dragon from Winter 2022." },
    { name: "Diamond Butterfly", rarity: "Legendary", year: 2022, event: "Sanctuary 2022", origin: "Sanctuary Butterfly Event", value: "4 RP", demand: "Low-Medium", desc: "Diamond-textured butterfly from the Sanctuary 2022 event." },
    { name: "Capricorn", rarity: "Legendary", year: 2022, event: "Space House 2022", origin: "Space House Event", value: "3.8 RP", demand: "Low-Medium", desc: "Zodiac-themed goat-fish from Space House 2022." },
    { name: "Lunar Dragon", rarity: "Legendary", year: 2022, event: "Lunar New Year 2022", origin: "Lunar New Year Event", value: "4.2 RP", demand: "Low-Medium", desc: "Red and gold dragon from Lunar New Year 2022." },
    { name: "Winged Horse", rarity: "Legendary", year: 2022, event: "Random Pets 2022", origin: "In-game Event", value: "3.4 RP", demand: "Low-Medium", desc: "Pegasus-like winged horse." },
    { name: "Sugar Glider", rarity: "Legendary", year: 2022, event: "Easter 2022", origin: "Easter Egg Event", value: "4 RP", demand: "Low-Medium", desc: "Cute sugar glider from Easter 2022." },
    { name: "Ancient Dragon", rarity: "Legendary", year: 2022, event: "Basic Egg 2022", origin: "Retired Egg", value: "3.2 RP", demand: "Low-Medium", desc: "Ancient-looking dragon from the Basic Egg 2022." },

    // === LEGENDARY — 2023 ===
    { name: "Vampire Dragon", rarity: "Legendary", year: 2023, event: "Halloween 2023", origin: "Candy Shop", value: "6.4 RP", demand: "Medium", desc: "Gothic vampire dragon with bat wings from Halloween 2023." },
    { name: "Diamond Amazon", rarity: "Legendary", year: 2023, event: "Rain 2023", origin: "Rain Event", value: "3.6 RP", demand: "Low-Medium", desc: "Diamond-textured amazon parrot from the Rain 2023 event." },
    { name: "Nessie", rarity: "Legendary", year: 2023, event: "Scottish 2023", origin: "Scottish Event", value: "5 RP", demand: "Medium", desc: "Loch Ness monster from the Scottish 2023 event." },
    { name: "Gargoyle", rarity: "Legendary", year: 2023, event: "Urban 2023", origin: "Urban Event", value: "3.4 RP", demand: "Low-Medium", desc: "Stone gargoyle from the Urban 2023 event." },
    { name: "Naga Dragon", rarity: "Legendary", year: 2023, event: "SE Asia 2023", origin: "SE Asia Event", value: "3.8 RP", demand: "Low-Medium", desc: "Multi-headed serpent dragon from the SE Asia 2023 event." },
    { name: "Tree Kangaroo", rarity: "Legendary", year: 2023, event: "SE Asia 2023", origin: "SE Asia Event", value: "3.6 RP", demand: "Low-Medium", desc: "Tree-climbing kangaroo from the SE Asia 2023 event." },
    { name: "Leviathan", rarity: "Legendary", year: 2023, event: "Summer 2023", origin: "Summer Festival", value: "4 RP", demand: "Low-Medium", desc: "Sea monster leviathan from Summer Festival 2023." },
    { name: "Billy Goat", rarity: "Legendary", year: 2023, event: "Urban 2023", origin: "Urban Event", value: "3 RP", demand: "Low", desc: "Billy goat from the Urban 2023 event." },

    // === LEGENDARY — 2024 ===
    { name: "Midnight Dragon", rarity: "Legendary", year: 2024, event: "Lunar New Year 2024", origin: "Lunar New Year Event", value: "6.8 RP", demand: "Medium-High", desc: "Dark mystical dragon from Lunar New Year 2024." },
    { name: "Hippogriff", rarity: "Legendary", year: 2024, event: "Gift Hat November 2024", origin: "Gift Hat Event", value: "5.4 RP", demand: "Medium", desc: "Mythical eagle-horse from the Gift Hat November 2024 event." },
    { name: "Balloon Unicorn", rarity: "Legendary", year: 2024, event: "Summer Fest 2024", origin: "Summer Festival 2024", value: "4.2 RP", demand: "Low-Medium", desc: "Inflatable balloon unicorn from Summer Festival 2024." },
    { name: "Corn Doggo", rarity: "Legendary", year: 2024, event: "Summer Fest 2024", origin: "Summer Festival 2024", value: "3.8 RP", demand: "Low-Medium", desc: "Corn-dog themed dog from Summer Festival 2024." },

    // === ULTRA-RARE PETS ===
    { name: "Dalmatian", rarity: "Ultra-Rare", year: 2019, event: "Christmas 2019", origin: "Christmas Event (Robux)", value: "40 RP", demand: "Very High", desc: "Spotted dalmatian dog from Christmas 2019. Very rare and valuable for an Ultra-Rare." },
    { name: "Flamingo", rarity: "Ultra-Rare", year: 2019, event: "Safari Egg", origin: "Safari Egg", value: "38 RP", demand: "Very High", desc: "Pink flamingo from the Safari Egg. One of the most valuable ultra-rares." },
    { name: "Hedgehog", rarity: "Ultra-Rare", year: 2019, event: "Christmas 2019", origin: "Christmas Event", value: "35 RP", demand: "High", desc: "Small brown hedgehog from Christmas 2019." },
    { name: "Crocodile", rarity: "Ultra-Rare", year: 2019, event: "Jungle Egg", origin: "Jungle Egg", value: "20 RP", demand: "High", desc: "Green crocodile from the Jungle Egg." },
    { name: "Lion", rarity: "Ultra-Rare", year: 2019, event: "Safari Egg", origin: "Safari Egg", value: "19.2 RP", demand: "High", desc: "Golden lion from the Safari Egg." },
    { name: "Platypus", rarity: "Ultra-Rare", year: 2019, event: "Jungle Egg", origin: "Jungle Egg", value: "17.2 RP", demand: "Medium-High", desc: "Brown platypus from the Jungle Egg." },
    { name: "Turkey", rarity: "Ultra-Rare", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "13.6 RP", demand: "Medium", desc: "Thanksgiving turkey from the Farm Egg." },
    { name: "Llama", rarity: "Ultra-Rare", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "16 RP", demand: "Medium-High", desc: "White llama from the Farm Egg." },
    { name: "Zombie Buffalo", rarity: "Ultra-Rare", year: 2019, event: "Halloween 2019", origin: "Halloween Egg", value: "10.8 RP", demand: "Medium", desc: "Zombified buffalo from Halloween 2019." },
    { name: "Bee", rarity: "Ultra-Rare", year: 2019, event: "Coffee Shop", origin: "Honey (199 Robux)", value: "2 RP", demand: "Low", desc: "Standard bee hatched from Honey jars." },
    { name: "Frog", rarity: "Ultra-Rare", year: 2020, event: "Aussie Egg", origin: "Aussie Egg", value: "3.8 RP", demand: "Low-Medium", desc: "Green frog from the Aussie Egg." },
    { name: "Koala", rarity: "Ultra-Rare", year: 2020, event: "Aussie Egg", origin: "Aussie Egg", value: "3.4 RP", demand: "Low-Medium", desc: "Gray koala bear from the Aussie Egg." },
    { name: "Horse", rarity: "Ultra-Rare", year: 2020, event: "Robux Shop", origin: "Robux (300 Robux)", value: "1.6 RP", demand: "Low", desc: "Standard brown horse available for Robux." },

    // === RARE PETS ===
    { name: "Cow", rarity: "Rare", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "24 RP", demand: "Very High", desc: "Black and white cow from the Farm Egg. The most valuable Rare pet in the game!" },
    { name: "Elephant", rarity: "Rare", year: 2019, event: "Safari Egg", origin: "Safari Egg", value: "16.8 RP", demand: "High", desc: "Gray elephant from the Safari Egg." },
    { name: "Hyena", rarity: "Rare", year: 2019, event: "Safari Egg", origin: "Safari Egg", value: "15 RP", demand: "Medium-High", desc: "Spotted hyena from the Safari Egg." },
    { name: "Brown Bear", rarity: "Rare", year: 2019, event: "Jungle Egg", origin: "Jungle Egg", value: "12.4 RP", demand: "Medium", desc: "Brown bear from the Jungle Egg." },
    { name: "Rhino", rarity: "Rare", year: 2019, event: "Jungle Egg", origin: "Jungle Egg", value: "12 RP", demand: "Medium", desc: "Gray rhinoceros from the Jungle Egg." },
    { name: "Polar Bear", rarity: "Rare", year: 2019, event: "Christmas 2019", origin: "Christmas Event", value: "10.4 RP", demand: "Medium", desc: "White polar bear from Christmas 2019." },
    { name: "Pig", rarity: "Rare", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "10 RP", demand: "Medium", desc: "Pink pig from the Farm Egg." },
    { name: "Swan", rarity: "Rare", year: 2019, event: "Christmas 2019", origin: "Christmas Egg", value: "8.8 RP", demand: "Medium", desc: "White swan from Christmas 2019." },
    { name: "Shrew", rarity: "Rare", year: 2019, event: "Christmas 2019", origin: "Christmas Event", value: "10 RP", demand: "Medium", desc: "Small shrew from Christmas 2019." },

    // === UNCOMMON PETS ===
    { name: "Blue Dog", rarity: "Uncommon", year: 2019, event: "Blue Egg", origin: "Blue Egg (Starter Egg)", value: "34 RP", demand: "High", desc: "The very first pet ever available in Adopt Me! Extremely rare despite being Uncommon." },
    { name: "Pink Cat", rarity: "Uncommon", year: 2019, event: "Pink Egg", origin: "Pink Egg (Starter Egg)", value: "23 RP", demand: "High", desc: "Second ever pet in Adopt Me. Very rare starter pet." },
    { name: "Drake", rarity: "Uncommon", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "6 RP", demand: "Medium", desc: "Small green drake (baby dragon) from the Farm Egg." },
    { name: "Silly Duck", rarity: "Uncommon", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "6.6 RP", demand: "Medium", desc: "Yellow rubber duck from the Farm Egg." },
    { name: "Wild Boar", rarity: "Uncommon", year: 2019, event: "Safari Egg", origin: "Safari Egg", value: "8 RP", demand: "Medium", desc: "Brown wild boar from the Safari Egg." },
    { name: "Meerkat", rarity: "Uncommon", year: 2019, event: "Safari Egg", origin: "Safari Egg", value: "9.6 RP", demand: "Medium", desc: "Standing meerkat from the Safari Egg." },
    { name: "Black Panther", rarity: "Uncommon", year: 2019, event: "Jungle Egg", origin: "Jungle Egg", value: "7.6 RP", demand: "Medium", desc: "Black panther from the Jungle Egg." },
    { name: "Capybara", rarity: "Uncommon", year: 2019, event: "Jungle Egg", origin: "Jungle Egg", value: "7.2 RP", demand: "Medium", desc: "Brown capybara from the Jungle Egg." },
    { name: "Wolf", rarity: "Uncommon", year: 2019, event: "Christmas 2019", origin: "Christmas Egg", value: "4 RP", demand: "Low-Medium", desc: "Gray wolf from Christmas 2019." },

    // === COMMON PETS ===
    { name: "Chicken", rarity: "Common", year: 2019, event: "Farm Egg", origin: "Farm Egg", value: "9.2 RP", demand: "Medium", desc: "White chicken from the Farm Egg. Valuable because the Farm Egg is retired." },
    { name: "Robin", rarity: "Common", year: 2019, event: "Christmas 2019", origin: "Christmas Egg", value: "3.2 RP", demand: "Low-Medium", desc: "Red-breasted robin from Christmas 2019." },
    { name: "Dog", rarity: "Common", year: 2019, event: "Starter Egg", origin: "Starter Egg (Free)", value: "0.01 RP", demand: "Very Low", desc: "The basic starter dog. Everyone's first pet!" },
    { name: "Cat", rarity: "Common", year: 2019, event: "Starter Egg", origin: "Starter Egg (Free)", value: "0.01 RP", demand: "Very Low", desc: "The basic starter cat." },
    { name: "Buffalo", rarity: "Common", year: 2019, event: "Cracked Egg", origin: "Cracked Egg (350 Bucks)", value: "0.02 RP", demand: "Very Low", desc: "Brown buffalo from the Cracked Egg." },
    { name: "Otter", rarity: "Common", year: 2019, event: "Cracked Egg", origin: "Cracked Egg (350 Bucks)", value: "0.02 RP", demand: "Very Low", desc: "Small otter from the Cracked Egg." },

    // === MORE LEGENDARIES (not on site) ===
    { name: "Dragon", rarity: "Legendary", year: 2019, event: "Royal Egg", origin: "Royal Egg (1450 Bucks)", value: "2 RP", demand: "Low", desc: "Classic red dragon. Permanently available from Royal Egg." },
    { name: "Unicorn", rarity: "Legendary", year: 2019, event: "Royal Egg", origin: "Royal Egg (1450 Bucks)", value: "2.2 RP", demand: "Low", desc: "White unicorn with rainbow horn. Permanently available." },
    { name: "Griffin", rarity: "Legendary", year: 2019, event: "Gamepass", origin: "Gamepass (600 Robux)", value: "1.8 RP", demand: "Very Low", desc: "Brown eagle-lion hybrid. Permanently available." },
    { name: "Golden Rat", rarity: "Legendary", year: 2020, event: "Lunar New Year 2020", origin: "Rat Box (345 Robux)", value: "4 RP", demand: "Low-Medium", desc: "Golden rat from Lunar New Year 2020 event." },
    { name: "Ninja Monkey", rarity: "Legendary", year: 2020, event: "Monkey Fairground", origin: "Monkey Box + Ninja Ingredient", value: "8.8 RP", demand: "Medium", desc: "Black-masked ninja monkey from the Monkey Fairground event." },
    { name: "Golden Penguin", rarity: "Legendary", year: 2020, event: "Ice Cream Shop", origin: "Golden Goldfish (225 Robux)", value: "3.6 RP", demand: "Low", desc: "Golden penguin from the Ice Cream Shop." },
    { name: "Metal Ox", rarity: "Legendary", year: 2021, event: "Lunar New Year 2021", origin: "Ox Box (350 Robux)", value: "1.4 RP", demand: "Very Low", desc: "Metallic ox from Lunar New Year 2021." },
    { name: "Diamond Ladybug", rarity: "Legendary", year: 2021, event: "Farm Shop", origin: "Diamond Lavender (199 Robux)", value: "4.8 RP", demand: "Low-Medium", desc: "Diamond-textured ladybug. Rare drop from Diamond Lavender." },
    { name: "Golden Ladybug", rarity: "Legendary", year: 2021, event: "Farm Shop", origin: "Golden Goldfish", value: "3.2 RP", demand: "Low", desc: "Golden ladybug from the Farm Shop." }
];
