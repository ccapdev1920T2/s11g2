const db = require('./models/db.js');

const collection = 'cars';

db.createDatabase();

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c0/Dubsta-GTAV-front.png/revision/latest?cb=20160409171730",
    name: "Dubsta",
    brand: "Benefactor",
    class: "SUV",
    bodystyle: "4-Door SUV",
    capacity: 4,
    price: 23750,
    description: "The Dubsta features good ground clearance, such that its axles and differential can be viewed from a slightly high angle. The SUV features a high displacement engine, a V12 engine based on the badge on the back. This is sent through a permanent four wheel drive system, and then finally through large, high-profile tyres to the ground. The Dubsta is one of the most capable off-roading SUV's, since it has the ability to climb over rocks and make it up steep mountains without getting damaged at all and without hesitation, as its V12 supplies an excellent amount of torque. Its heavy weight can be useful when ramming other cars or pushing them. By feathering the throttle, it is possible to push a medium weight car with ease. The V12 engine, if untuned, will struggle against the weight and thus it cannot attain high speeds, and has average acceleration."

}

db.insertOne(collection, car);

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/7/78/Dominator-GTAV-front.png/revision/latest?cb=20160702195350",
    name: "Dominator",
    brand: "Vapid",
    class: "Sports",
    bodystyle: "2-Door Muscle Car",
    capacity: 2,
    price: 35000,
    description: "The main body of the Dominator seems to be heavily inspired by the fifth generation Ford Mustang, with flared wheel arches, connected to the elevated area that spans the lower body. The front headlight pockets are taken from the fifth generation Mustang, with the circular headlights, squared grille and hood being skewed forwards and down. Halfway up the body, the main body line makes a sharp angular turn, signaling the classical inspiration of the first generation Mustang. The car features twelve spoke alloy wheels, wrapped in low profile tires. The rear hatch closely resembles a fastback design, also taken from the first generation Mustang. The front grille design, rear fascia and tail lights and are derived straight from the 1970 Ford Mustang fastback, as is the name Dominator, which was the name of a hood available on early 70's Mustangs. The rear bumper features circular twin-exit exhaust with chrome tips. The vehicle features a modeled V8 engine with a single bank of cams on either side of the engine. On the top is a large cylindrical air filter wrapped with red filter paper. The engine sound is a very high torque V8 engine, with low-silenced exhausts. The badges indicates that the Dominator is powered by a 450cui (7.4L) Supercharged engine."
}

db.insertOne(collection, car);

/*
var car = {
    name:
    brand:
    class:
    bodystyle:
    capacity:
    price:
    description:
}
*/

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/2/2f/Tornado-GTAV-front.png/revision/latest?cb=20180331183746",
    name: "Tornado",
    brand: "DeClasse",
    class: "Sports",
    bodystyle: "2-Door Convertible",
    capacity: 2,
    price: 55500,
    description: "The Tornado still resembles a 1958 Chevrolet Bel Air in its front end and overall shape, but the years of the ends have been swapped; the front end now has the '58 Bel Air design and the rear now takes influence from the 1957 Chevrolet or 1957 Bel Air. New features include a bumper similar to a 1957 Cadillac Eldorado, dual headlights (with black surrounds like the '57) and 1957 Bel Air style rear wings and trunk. Other than the dual headlights, and '57 Chevy Bel Air rear, it resembles its predecessor. It also has some design cues taken from a 1958 Plymouth Belvedere. Having only two doors, the Tornado is only designed to carry two occupants. The car does make up for this with its above average top speed and acceleration, as well as its generally stable cornering (even with its long wheelbase that is supposed to hamper the car's maneuverability). The engine is modeled after a V8 with single-overhead camshafts and a large cylindrical air filter. It is coupled to a 4-speed gearbox in a front engine, rear wheel drive layout."
}

db.insertOne(collection, car);

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/4/47/Kamacho-GTAO-front.png/revision/latest?cb=20190128192114",
    name: "Kamacho",
    brand: "Canis",
    class: "Truck",
    bodystyle: "4-Door Utility Truck",
    capacity: 4,
    price: 18500,
    description: "The vehicle is strongly based on the Jeep Crew Chief 715 concept, which is itself a homage to the Kaiser Jeep M715. Notable differences include the headlight setup of round and rectangular headlamps rather than the Crew Chief's double round headlamps, as well as a minor change on the lower lamps to feature yellow and white lights. The rear end features a dual tail light setup of red and yellow, as well as white lights on the bumper, opposed to the characteristic Jeep's single light setup of red and white. The Kamacho features a soft top similar to the Mesa and the Crusader, as well as a floodlight bar similar to the Riata and the Barrage. As expected from a vehicle of its type, sump guards are visible in both ends of the underside and static winches on the bumpers. The Kamacho is an adept offroader, with high torque and ground clearance, giving it immense capability offroad. It is capable of tackling even the roughest terrain, with 50/50 torque distribution, giving it an advantage on uneven terrain. Durability is good and can be further improved with the addition of bullbars."
}

db.insertOne(collection, car);

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/c/ca/Premier-GTAV-front.png/revision/latest?cb=20161018180637",
    name: "Premier",
    brand: "DeClasse",
    class:"Sedan",
    bodystyle: "Compact Sedan",
    capacity: 4,
    price: 10000,
    description: "The Declasse-manufactured Premier is redesigned as a more modernized compact design, which is more suited for urban city streets. It is resembling a cross between the Chevrolet Cobalt and Daewoo Lacetti, with some details that resembles a 2005-2011 T250 Chevrolet Aveo sedan (obviously for its four-door design but also for its tail light design). The front of the car appears similar to Chevrolet Cobalt sedan and the 2001-2006 Toyota Corolla E120. With its enlarged grille located in the bumper region, the car bears an eerie resemblance to the 9th generation Chevrolet Impala. The tail lights appear similar to the 2005-2011 Chevrolet Aveo tail lights, and are reminiscent of the tail lights of the 2006-2009 Ford Fusion and the 2007-2009 Ford Taurus. Its front and rear are also similar to the 2001-2007 Citroen C5, As well as having some resemblance of the third generation Nissan Altima, mainly with the chrome tail lights and muffled V6 sound, as was the case with the 2002-2006 Altima 3.5 SE. The Premier's engine sounds to be a mid to high revving V6, and the beefy engine and 5-speed transmission work together in propelling the vehicle off the line quickly, resulting in a long burnout from the front wheels and yielding an impressive 0-60 time as well as a fantastic top speed for its class. For being a smaller compact sedan, the engine can be overpowering at some times, considering the Premier's lighter total weight and economy themed instead of performance themed drive train layout, but nevertheless the Premier is a good getaway vehicle in terms of performance."
}

db.insertOne(collection, car);

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/d/da/BeeJayXL-GTAV-front.png/revision/latest?cb=20160929171015",
    name: "BeeJay XL",
    brand: "Karin",
    class: "SUV",
    bodystyle: "Midsize SUV",
    capacity: 4,
    price: 27000,
    description: "The BeeJay XL features a retro utilitarian design theme, which seems to be inspired by the Japanese styling found on the Toyota FJ Cruiser, but with a flatter, less aggressive appearance and regular second-row doors (as opposed to suicide doors). The rear bumper and fascia bears some resemblance to the first generation Toyota RAV4, while the grille resembles that of a Hummer H2. The BeeJay XL is powered by a V8 engine, as suggested by the engine cover, which is coupled to a 5-speed gearbox in a front engine, all wheel drive (60% front and 40% rear) layout. Like its real life counterpart, it has a large loud sounding engine."
}

db.insertOne(collection, car);

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/0/07/Sadler-GTAV-front.png/revision/latest?cb=20161018180756",
    name: "Sadler",
    brand: "Vapid",
    class: "Truck",
    bodystyle: "4-Door Pickup Truck",
    capacity: 4,
    price: 35000,
    description: "The Vapid Sadler features a linear theme and appears to be inspired by North American styling featured on the first generation Ford F250 Super Duty. It only comes in crew cab variants. The Sadler commonly functions as a trailer towing truck or a work truck. The Sadler has average acceleration and a decent top speed. However, the truck's large turning radius is very wide, and needs a lot of braking to corner around sharp bends. This is made up for by the Sadler having great durability. The truck performs pretty well off-road due to a high ground clearance, and a torque loaded engine to haul its weight up steep hills. The Sadler is powered by, what the cover suggests, a V8, true to the badging that says it is a 5.4L V8. Said engine is coupled to a 5-speed gearbox in a front engine, all wheel drive in a 1:4 ratio. The engine sound is of a diesel-type engine, similar to that of the Granger and its variants."
}

db.insertOne(collection, car);

var car = {
    img: "https://vignette.wikia.nocookie.net/gtawiki/images/b/bb/Sultan-GTAV-front.png/revision/latest?cb=20180331183641",
    name: "Sultan",
    brand: "Karin",
    class: "Sedan",
    bodystyle: "4-Door Saloon",
    capacity: 4,
    price: 12000,
    description: "The Sultan's general body shape is partly based on the first-generation Lexus IS (Toyota Altezza), but its prevalence of sharper characteristics lends it a much more striking form. Certain elements such as the rear lamp units are inspired by the Mitsubishi Lancer Evolution V. Other elements (such as the bonnet and spoiler of the Korean Mob variant) bear resemblance to the Mitsubishi Lancer Evolution VI. Interestingly, ordinary Sultans come with blued exhaust tips, similar to the titanium tips on the Futo GT. The Sultan remains fast, grippy, engaging and easy to drive. Like all past Sultan models (and most Subarus) the Sultan is AWD (40% front/ 60% rear torque distribution), providing superior traction and handling over other cars of the same class. While many similarly sized sedans offer similar straight line performance, the added stability of the Sultan allows fast cornering and easy power sliding, making it a good choice for races or getaways. The soft suspension makes it roll over easily when turning. Under-steer is a factor, but the powerful engine and quick handling make it sporty and fun to drive. Although the engine is not the most durable, considering its speed, body deformation is average. Non-tuned Sultans come with alarms, the most popular forms being the horn and beep versions."
}

db.insertOne(collection, car);