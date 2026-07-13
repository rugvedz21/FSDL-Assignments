require('dotenv').config();
const mongoose = require('mongoose');
const Car = require('./models/Car');

const cars = [
  { brand:'BMW', model:'M4 Competition', year:2022, price:8500000, kmDriven:12000, fuel:'Petrol', transmission:'Automatic', color:'Alpine White', location:'Mumbai', featured:true,
    description:'Pristine M4 Competition with full service history. 510 HP twin-turbo beast.',
    image:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1000' },
  { brand:'Toyota', model:'Fortuner Legender', year:2023, price:4200000, kmDriven:18000, fuel:'Diesel', transmission:'Automatic', color:'Pearl White', location:'Delhi', featured:true,
    description:'Top-end Legender variant. Single owner, all paperwork clean.',
    image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1000' },
  { brand:'Tesla', model:'Model 3 Performance', year:2023, price:6500000, kmDriven:8000, fuel:'Electric', transmission:'Automatic', color:'Midnight Silver', location:'Bangalore', featured:true,
    description:'0-100 in 3.1s. Full self-driving capability. Premium audio.',
    image:'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1000' },
  { brand:'Mahindra', model:'Thar LX', year:2022, price:1650000, kmDriven:25000, fuel:'Diesel', transmission:'Manual', color:'Red Rage', location:'Pune',
    description:'Hard top 4x4. Off-road ready with stock setup.',
    image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1000' },
  { brand:'Honda', model:'City ZX', year:2021, price:1200000, kmDriven:32000, fuel:'Petrol', transmission:'Automatic', color:'Lunar Silver', location:'Chennai',
    description:'CVT, sunroof, leather seats. Excellent condition.',
    image:'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=1000' },
  { brand:'Hyundai', model:'Creta SX(O)', year:2023, price:1850000, kmDriven:14000, fuel:'Petrol', transmission:'Automatic', color:'Phantom Black', location:'Hyderabad',
    description:'Top variant with panoramic sunroof, ADAS features.',
    image:'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000' },
  { brand:'Audi', model:'Q5 45 TFSI', year:2021, price:5200000, kmDriven:28000, fuel:'Petrol', transmission:'Automatic', color:'Glacier White', location:'Mumbai',
    description:'Quattro AWD, virtual cockpit, B&O sound system.',
    image:'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1000' },
  { brand:'Maruti', model:'Swift VXI', year:2020, price:550000, kmDriven:42000, fuel:'Petrol', transmission:'Manual', color:'Solid Fire Red', location:'Jaipur',
    description:'Reliable city hatchback. Great mileage.',
    image:'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1000' },
  { brand:'Kia', model:'Seltos GTX+', year:2022, price:1750000, kmDriven:22000, fuel:'Diesel', transmission:'Automatic', color:'Intense Red', location:'Delhi',
    description:'GT line with all premium features.',
    image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000' },
  { brand:'Mercedes', model:'C220d AMG Line', year:2022, price:5800000, kmDriven:15000, fuel:'Diesel', transmission:'Automatic', color:'Obsidian Black', location:'Bangalore', featured:false,
    description:'AMG line trim, ambient lighting, MBUX system.',
    image:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1000' },
  { brand:'Tata', model:'Nexon EV Max', year:2023, price:1750000, kmDriven:11000, fuel:'Electric', transmission:'Automatic', color:'Daytona Grey', location:'Pune',
    description:'437 km range. Fast charging supported.',
    image:'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1000' },
  { brand:'Ford', model:'Mustang GT', year:2019, price:6800000, kmDriven:20000, fuel:'Petrol', transmission:'Automatic', color:'Race Red', location:'Mumbai',
    description:'5.0L V8. American muscle in pristine shape.',
    image:'https://images.unsplash.com/photo-1547245324-d777c6f05e80?w=1000' }
];

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Car.deleteMany({});
  await Car.insertMany(cars);
  console.log(`✅ Seeded ${cars.length} cars into MongoDB`);
  process.exit(0);
})();
