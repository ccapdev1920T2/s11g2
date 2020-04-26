const db = require('./models/db.js');

const Car = require('./models/CarModel.js');
const User = require('./models/UserModel.js');

/* This is used to hash the password of the admin */
const bcrypt = require('bcrypt');
const saltRounds = 10;

db.connect();

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c0/Dubsta-GTAV-front.png/revision/latest?cb=20160409171730",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/f/fa/Dubsta2-GTAV-front.png/revision/latest?cb=20160318211333",
    name: "Dubsta",
    brand: "Benefactor",
    carClass: "SUV",
    bodyStyle: "4-Door SUV",
    capacity: 4,
    price: 23750,
    description: "The Dubsta features good ground clearance, such that its axles and differential can be viewed from a slightly high angle. The SUV features a high displacement engine, a V12 engine based on the badge on the back. This is sent through a permanent four wheel drive system, and then finally through large, high-profile tyres to the ground. The Dubsta is one of the most capable off-roading SUV's, since it has the ability to climb over rocks and make it up steep mountains without getting damaged at all and without hesitation, as its V12 supplies an excellent amount of torque. Its heavy weight can be useful when ramming other cars or pushing them. By feathering the throttle, it is possible to push a medium weight car with ease. The V12 engine, if untuned, will struggle against the weight and thus it cannot attain high speeds, and has average acceleration."

}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/7/78/Dominator-GTAV-front.png/revision/latest?cb=20160702195350",
    optionImg: "https://www.gta5rides.com/vehicleImages/cropped/dominator.jpg.jpg",
    name: "Dominator",
    brand: "Vapid",
    carClass: "Sports",
    bodyStyle: "2-Door Muscle Car",
    capacity: 2,
    price: 35000,
    description: "The main body of the Dominator seems to be heavily inspired by the fifth generation Ford Mustang, with flared wheel arches, connected to the elevated area that spans the lower body. The front headlight pockets are taken from the fifth generation Mustang, with the circular headlights, squared grille and hood being skewed forwards and down. Halfway up the body, the main body line makes a sharp angular turn, signaling the classical inspiration of the first generation Mustang. The car features twelve spoke alloy wheels, wrapped in low profile tires. The rear hatch closely resembles a fastback design, also taken from the first generation Mustang. The front grille design, rear fascia and tail lights and are derived straight from the 1970 Ford Mustang fastback, as is the name Dominator, which was the name of a hood available on early 70's Mustangs. The rear bumper features circular twin-exit exhaust with chrome tips. The vehicle features a modeled V8 engine with a single bank of cams on either side of the engine. On the top is a large cylindrical air filter wrapped with red filter paper. The engine sound is a very high torque V8 engine, with low-silenced exhausts. The badges indicates that the Dominator is powered by a 450cui (7.4L) Supercharged engine."
}

db.insertOne(Car, car, function(flag){});

/*
name
brand
carClass
bodyStyle
 capacity
price
description
imgLink
*/

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/2/2f/Tornado-GTAV-front.png/revision/latest?cb=20180331183746",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/1/18/Tornado2Up-GTAV-front.png/revision/latest?cb=20180331183743",
    name: "Tornado",
    brand: "DeClasse",
    carClass: "Sports",
    bodyStyle: "2-Door Convertible",
    capacity: 2,
    price: 55500,
    description: "The Tornado still resembles a 1958 Chevrolet Bel Air in its front end and overall shape, but the years of the ends have been swapped; the front end now has the '58 Bel Air design and the rear now takes influence from the 1957 Chevrolet or 1957 Bel Air. New features include a bumper similar to a 1957 Cadillac Eldorado, dual headlights (with black surrounds like the '57) and 1957 Bel Air style rear wings and trunk. Other than the dual headlights, and '57 Chevy Bel Air rear, it resembles its predecessor. It also has some design cues taken from a 1958 Plymouth Belvedere. Having only two doors, the Tornado is only designed to carry two occupants. The car does make up for this with its above average top speed and acceleration, as well as its generally stable cornering (even with its long wheelbase that is supposed to hamper the car's maneuverability). The engine is modeled after a V8 with single-overhead camshafts and a large cylindrical air filter. It is coupled to a 4-speed gearbox in a front engine, rear wheel drive layout."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/4/47/Kamacho-GTAO-front.png/revision/latest?cb=20190128192114",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/9/90/Kamacho-GTAO-front-TruePatriotLivery.png/revision/latest?cb=20190128193451",
    name: "Kamacho",
    brand: "Canis",
    carClass: "Truck",
    bodyStyle: "4-Door Utility Truck",
    capacity: 4,
    price: 18500,
    description: "The vehicle is strongly based on the Jeep Crew Chief 715 concept, which is itself a homage to the Kaiser Jeep M715. Notable differences include the headlight setup of round and rectangular headlamps rather than the Crew Chief's double round headlamps, as well as a minor change on the lower lamps to feature yellow and white lights. The rear end features a dual tail light setup of red and yellow, as well as white lights on the bumper, opposed to the characteristic Jeep's single light setup of red and white. The Kamacho features a soft top similar to the Mesa and the Crusader, as well as a floodlight bar similar to the Riata and the Barrage. As expected from a vehicle of its type, sump guards are visible in both ends of the underside and static winches on the bumpers. The Kamacho is an adept offroader, with high torque and ground clearance, giving it immense capability offroad. It is capable of tackling even the roughest terrain, with 50/50 torque distribution, giving it an advantage on uneven terrain. Durability is good and can be further improved with the addition of bullbars."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/c/ca/Premier-GTAV-front.png/revision/latest?cb=20161018180637",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/b/b0/Premier-GTAO-RGSC3.jpg/revision/latest?cb=20200401222306",
    name: "Premier",
    brand: "DeClasse",
    carClass:"Sedan",
    bodyStyle: "Compact Sedan",
    capacity: 4,
    price: 10000,
    description: "The Declasse-manufactured Premier is redesigned as a more modernized compact design, which is more suited for urban city streets. It is resembling a cross between the Chevrolet Cobalt and Daewoo Lacetti, with some details that resembles a 2005-2011 T250 Chevrolet Aveo sedan (obviously for its four-door design but also for its tail light design). The front of the car appears similar to Chevrolet Cobalt sedan and the 2001-2006 Toyota Corolla E120. With its enlarged grille located in the bumper region, the car bears an eerie resemblance to the 9th generation Chevrolet Impala. The tail lights appear similar to the 2005-2011 Chevrolet Aveo tail lights, and are reminiscent of the tail lights of the 2006-2009 Ford Fusion and the 2007-2009 Ford Taurus. Its front and rear are also similar to the 2001-2007 Citroen C5, As well as having some resemblance of the third generation Nissan Altima, mainly with the chrome tail lights and muffled V6 sound, as was the case with the 2002-2006 Altima 3.5 SE. The Premier's engine sounds to be a mid to high revving V6, and the beefy engine and 5-speed transmission work together in propelling the vehicle off the line quickly, resulting in a long burnout from the front wheels and yielding an impressive 0-60 time as well as a fantastic top speed for its class. For being a smaller compact sedan, the engine can be overpowering at some times, considering the Premier's lighter total weight and economy themed instead of performance themed drive train layout, but nevertheless the Premier is a good getaway vehicle in terms of performance."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/d/da/BeeJayXL-GTAV-front.png/revision/latest?cb=20160929171015",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/d/d9/BeejayXL-GTAO-RGSC3.jpg/revision/latest?cb=20200403030536",
    name: "BeeJay XL",
    brand: "Karin",
    carClass: "SUV",
    bodyStyle: "Midsize SUV",
    capacity: 4,
    price: 27000,
    description: "The BeeJay XL features a retro utilitarian design theme, which seems to be inspired by the Japanese styling found on the Toyota FJ Cruiser, but with a flatter, less aggressive appearance and regular second-row doors (as opposed to suicide doors). The rear bumper and fascia bears some resemblance to the first generation Toyota RAV4, while the grille resembles that of a Hummer H2. The BeeJay XL is powered by a V8 engine, as suggested by the engine cover, which is coupled to a 5-speed gearbox in a front engine, all wheel drive (60% front and 40% rear) layout. Like its real life counterpart, it has a large loud sounding engine."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/0/07/Sadler-GTAV-front.png/revision/latest?cb=20161018180756",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/9/96/Sadler_GTAV_CabLights_FrontQuarterView.jpg/revision/latest?cb=20140918021437",
    name: "Sadler",
    brand: "Vapid",
    carClass: "Truck",
    bodyStyle: "4-Door Pickup Truck",
    capacity: 4,
    price: 35000,
    description: "The Vapid Sadler features a linear theme and appears to be inspired by North American styling featured on the first generation Ford F250 Super Duty. It only comes in crew cab variants. The Sadler commonly functions as a trailer towing truck or a work truck. The Sadler has average acceleration and a decent top speed. However, the truck's large turning radius is very wide, and needs a lot of braking to corner around sharp bends. This is made up for by the Sadler having great durability. The truck performs pretty well off-road due to a high ground clearance, and a torque loaded engine to haul its weight up steep hills. The Sadler is powered by, what the cover suggests, a V8, true to the badging that says it is a 5.4L V8. Said engine is coupled to a 5-speed gearbox in a front engine, all wheel drive in a 1:4 ratio. The engine sound is of a diesel-type engine, similar to that of the Granger and its variants."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/b/bb/Sultan-GTAV-front.png/revision/latest?cb=20180331183641",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c1/SultanRS-GTAO-front.png/revision/latest?cb=20160128182129",
    name: "Sultan",
    brand: "Karin",
    carClass: "Sedan",
    bodyStyle: "4-Door Saloon",
    capacity: 4,
    price: 12000,
    description: "The Sultan's general body shape is partly based on the first-generation Lexus IS (Toyota Altezza), but its prevalence of sharper characteristics lends it a much more striking form. Certain elements such as the rear lamp units are inspired by the Mitsubishi Lancer Evolution V. Other elements (such as the bonnet and spoiler of the Korean Mob variant) bear resemblance to the Mitsubishi Lancer Evolution VI. Interestingly, ordinary Sultans come with blued exhaust tips, similar to the titanium tips on the Futo GT. The Sultan remains fast, grippy, engaging and easy to drive. Like all past Sultan models (and most Subarus) the Sultan is AWD (40% front/ 60% rear torque distribution), providing superior traction and handling over other cars of the same class. While many similarly sized sedans offer similar straight line performance, the added stability of the Sultan allows fast cornering and easy power sliding, making it a good choice for races or getaways. The soft suspension makes it roll over easily when turning. Under-steer is a factor, but the powerful engine and quick handling make it sporty and fun to drive. Although the engine is not the most durable, considering its speed, body deformation is average. Non-tuned Sultans come with alarms, the most popular forms being the horn and beep versions."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c5/Cavalcade-GTAV-front.png/revision/latest?cb=20161111195103",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/0/08/Cavalcade2-GTAV-front.png/revision/latest?cb=20160304225018",
    name: "Cavalcade",
    brand: "Albany",
    carClass: "SUV",
    bodyStyle: "4-Door SUV",
    capacity: 4,
    price: 60000,
    description: "Despite the sheer size of the Cavalcade, it accelerates quick enough to worry high-displacement saloons. The Cavalcade's top speed is rather high. The Cavalcade's brakes are strong, but seem to lack feel. The suspension is moderately firm, and will keep the Cavalcade surprisingly well balanced through the bends, though some oversteer can be felt on longer turns, an odd handling characteristic for a 4WD SUV to have. On rough roads or when clipping curbs, the Cavalcade is fairly unstable and at high speeds in these conditions is susceptible to tipping over. Crash deformation is minimal; the Cavalcade holds its shape after multiple accidents."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/5/51/Granger-GTAO-RGSC2.jpg/revision/latest?cb=20200403032205",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/d/de/Granger-GTAV-front.png/revision/latest?cb=20160626144333",
    name: "Granger",
    brand: "Vapid",
    carClass: "SUV",
    bodyStyle: "4-Door SUV",
    capacity: 4,
    price: 35000,
    description: "The Granger features North American styling, similar to the tenth generation (2007-2014) Chevrolet Suburban (GMT900) in terms of the front-end, side and rear profile, with subtle design cues of the refreshed model, applied to the front end. Its headlights resemble the 2007-2013 GMC Sierra."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/9/97/Mesa-GTAV-front.png/revision/latest?cb=20160626145559",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/f/fd/Mesa3-GTAV-front.png/revision/latest?cb=20160929163600",
    name: "Mesa",
    brand: "Canis",
    carClass: "SUV",
    bodyStyle: "4-Door SUV",
    capacity: 4,
    price: 20000,
    description: "The Mesa has an average top speed and good acceleration due to its light weight. However, it has a wide turning radius and needs to be driven moderately. The vehicle performs well off-road due to its full 4WD drivetrain and light weight, and it has excellent torque which allows it to climb very steep hills. Durability is excellent, as the vehicle is able to take considerable abuse from gunfire and collisions before the engine fails. The Mesa is also capable of an impressive amount of momentum once it gathers speed, rivalling larger cars like the Emperor in its ability to force its way through obstacles and roadblocks."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/3/3d/Bullet-GTAV-front.png/revision/latest?cb=20180331183434",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/a/ac/VapidBullet-GTAO-SocialClub3.jpg/revision/latest?cb=20191229074551",
    name: "Bullet",
    brand: "Vapid",
    carClass: "Sports",
    bodyStyle: "2-Door Sports Coupe",
    capacity: 2,
    price: 84000,
    description: "The Bullet's design closely resembles a Ford GT. However, the Ford GT was not introduced until 2002, ten years after the game takes place, but the original GT40 model was manufactured from 1964 to 1969. The Ford GT40 was used as a racecar in the 1960s, but bears less resemblance to the Bullet."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/7/7b/CarbonizzareDown-GTAV-front.png/revision/latest?cb=20160917231442",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/8/80/Carbonizzare-GTAV-RGSC3.jpg/revision/latest?cb=20200103095703",
    name: "Carbonizzare",
    brand: "Grotti",
    carClass: "Sports",
    bodyStyle: "2-Door Grand Tourer",
    capacity: 2,
    price: 195000,
    description: "The car's design draws clear inspiration from British-Italian styling found on the Aston Martin V12 Zagato and Ferrari F12 for the rear fascia, front and rear quarter paneling, along with the almost identical wheel design as the Aston. The headlights, front bumper ducts and integrated LED daytime running lights appear near identical to those of the TranStar Racing Dagger GT. The car's convertible feature is based on that of the Ferrari California, while the Aston Martin V12 Zagato does not feature any folding roof mechanism."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/d/d2/Comet-GTAV-front.png/revision/latest?cb=20160702195302",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/0/05/Modified-Comet-LSC-GTA-V.jpg/revision/latest?cb=20150102181347",
    name: "Comet",
    brand: "Pfister",
    carClass: "Sports",
    bodyStyle: "2-Door Sports Car",
    capacity: 2,
    price: 28000,
    description: "Manufactured by Pfister, the Comet is available only in hardtop coupé form. It now largely resembles a Porsche 996 Carrera 4S and the Porsche Carrera GT for the front grille/mouth and headlights. The Comet features large, cross-drilled disc brakes all around. Inside are two sport seats in black leather resembling Lamborghini's seat design. Similar to the Turismo, the Comet also features a front-mounted, carpeted boot with space for luggage."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/6/68/Packer-GTAV-front.png/revision/latest?cb=20160308175915",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/8/81/Packer-GTAIV-front.png/revision/latest?cb=20170223191434",
    name: "Packer",
    brand: "MTL",
    carClass: "Truck",
    bodyStyle: "Industrial Truck",
    capacity: 2,
    price: 45000,
    description: "The majority of the design is based around two existing vehicles; the Brute Stockade and the JoBuilt Phantom. A large portion of the front area of the vehicle, particularly the hood, lights and fenders are identical to the Stockade. The hood and grille lacks any badging and the grille itself has comparatively less vertical elements than the Stockade, but the general shape remains the same. The truck also sports a new commercial bumper, and sees the removal of the hood mirrors, hood catches and the arch cladding present on the Stockade."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c6/Contender-GTAO-front.png/revision/latest?cb=20160712124055",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/1/1f/Contender-GTAIV-front.png/revision/latest?cb=20160829215234",
    name: "Contender",
    brand: "Vapid",
    carClass: "Truck",
    bodyStyle: "Pickup Truck",
    capacity: 4,
    price: 25000,
    description: "The truck has reasonable performance thanks to a powerful V8 engine powering all four wheels, giving it immediate acceleration and little loss of traction in a straight line, as well as great off-roading capabilities. However, it has a large oversteer when approaching corners too fast, resulting in a spin-out at high speeds. Along with being a heavy and durable vehicle, this vehicle has bullet resistant windows, strong axle, and sturdy frame."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/c/c6/Contender-GTAO-front.png/revision/latest?cb=20160712124055",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/1/1f/Contender-GTAIV-front.png/revision/latest?cb=20160829215234",
    name: "Mule",
    brand: "Maibatsu",
    carClass: "Truck",
    bodyStyle: "2-Door Box Truck",
    capacity: 2,
    price: 20000,
    description: "The truck has reasonable performance thanks to a powerful V8 engine powering all four wheels, giving it immediate acceleration and little loss of traction in a straight line, as well as great off-roading capabilities. However, it has a large oversteer when approaching corners too fast, resulting in a spin-out at high speeds. Along with being a heavy and durable vehicle, this vehicle has bullet resistant windows, strong axle, and sturdy frame."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/b/b4/Vacca-GTAV-front.png/revision/latest/scale-to-width-down/1000?cb=20180331183726",
    optionImg: "https://gta.fandom.com/wiki/Vacca?file=Vacca-GTAV-FrontQuarter.png",
    name: "Vacca",
    brand: "Pegassi",
    carClass: "Sports",
    bodyStyle: "2-Door Sports car",
    capacity: 2,
    price: 50000,
    description: "The car is capable of high top speeds, owing to its high horse-power. Bearing a powerful engine, the Vacca is very easy to throw around on roads at high speeds. It can curve around bends with ease and weave in and out of traffic without much effort or body roll, though some oversteer is noticeable. Shifts are rather quick but sometimes it takes a while for the Vacca to gain traction after powerful take off, resulting in the transmission hesitating to upshift."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/5/58/Asea-GTAV-front.png/revision/latest?cb=20160406180243",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/d/d5/Asea-GTAV-Stickerbomb-Front.png/revision/latest?cb=20141022195847",
    name: "Asea",
    brand: "DeClasse",
    carClass: "Sedan",
    bodyStyle: "4-Door Compact Sedan",
    capacity: 4,
    price: 12000,
    description: "An affordable, no frills, fuel-efficient compact sedan. When 'ample headroom' is central to the marketing campaign, what you see is what you get."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/7/7c/Intruder-GTAV-front.png/revision/latest?cb=20160305191559",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/5/5f/Intruder-GTAV-Other.png/revision/latest?cb=20180413095627",
    name: "Intruder",
    brand: "Karin",
    carClass: "Sedan",
    bodyStyle: "4-Door Sedan",
    capacity: 4,
    price: 16000,
    description: "The Japanese-made Intruder was launched by Karin to compete in the same market as German high-performance luxury cars (i.e. by copying them exactly using substandard parts and selling for half the price)."
}

db.insertOne(Car, car, function(flag){});

var car = {
    imgLink: "https://vignette.wikia.nocookie.net/gtawiki/images/5/57/Schafter-GTAV-front.png/revision/latest?cb=20160409181945",
    optionImg: "https://vignette.wikia.nocookie.net/gtawiki/images/6/6d/Schafter-GTAIV-front.png/revision/latest?cb=20170122142823",
    name: "Schafter",
    brand: "Benefactor",
    carClass: "Sedan",
    bodyStyle: "4-Door Sedan",
    capacity: 4,
    price: 65000,
    description: "Good-looking yet utilitarian, sexy yet asexual, slender yet terrifyingly powerful, the Schafter is German engineering at its very finest."
}

db.insertOne(Car, car, function(flag){});

/* Implementing the hashing function to the password of the admin */
var pw = 'admin'; //Manually placing the value of the password
bcrypt.hash(pw, saltRounds, function(err, hash) {
    var admin = { 
        fName: "admin",
        lName: "admin",
        uName: "admin",
        pw: hash,
        email: "admin@admin.com",
        bDay: '2001-07-08',     //...new Date(2001, 7, 8),
        //credit card
        ccNo: 0,
        ccExp: '2069-07-08',    //...new Date(2069, 7, 8)
        ccPin: 6969,
        //license
        fileId: "69420-S3X",
        startDate: '2069-07-08',//...new Date(2069, 7, 8),
        expDate: '2420-07-08'   //...new Date(2420, 7, 8)
    }
    
    db.insertOne(User, admin, function(flag){});
});

var pw = 'password'; //Manually placing the value of the password
bcrypt.hash(pw, saltRounds, function(err, hash) {
    var admin = { 
        fName: "Ned",
        lName: "Stark",
        uName: "nedstark",
        pw: hash,
        email: "nedstark@got.com",
        bDay: '2001-07-08',     //...new Date(2001, 7, 8),
        //credit card
        ccNo: 0,
        ccExp: '2069-07-08',    //...new Date(2069, 7, 8)
        ccPin: 6969,
        //license
        fileId: "1234",
        startDate: '2069-07-08',//...new Date(2069, 7, 8),
        expDate: '2420-07-08'   //...new Date(2420, 7, 8)
    }
    
    db.insertOne(User, admin, function(flag){});
});

var pw = 'password'; //Manually placing the value of the password
bcrypt.hash(pw, saltRounds, function(err, hash) {
    var admin = { 
        fName: "John",
        lName: "Doe",
        uName: "johndoe",
        pw: hash,
        email: "johndoe@mgs.com",
        bDay: '2001-07-08',     //...new Date(2001, 7, 8),
        //credit card
        ccNo: 0,
        ccExp: '2069-07-08',    //...new Date(2069, 7, 8)
        ccPin: 6969,
        //license
        fileId: "1234",
        startDate: '2069-07-08',//...new Date(2069, 7, 8),
        expDate: '2420-07-08'   //...new Date(2420, 7, 8)
    }
    
    db.insertOne(User, admin, function(flag){});
});

var pw = 'password'; //Manually placing the value of the password
bcrypt.hash(pw, saltRounds, function(err, hash) {
    var admin = { 
        fName: "Jane",
        lName: "Doe",
        uName: "janedoe",
        pw: hash,
        email: "janedoe@mgs.com",
        bDay: '2001-07-08',     //...new Date(2001, 7, 8),
        //credit card
        ccNo: 0,
        ccExp: '2069-07-08',    //...new Date(2069, 7, 8)
        ccPin: 6969,
        //license
        fileId: "1234",
        startDate: '2069-07-08',//...new Date(2069, 7, 8),
        expDate: '2420-07-08'   //...new Date(2420, 7, 8)
    }
    
    db.insertOne(User, admin, function(flag){});
});