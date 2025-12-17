const calculateFines = (str) => {
  const carsArr = JSON.parse(str);
  
  const cars = carsArr.map((carArr) => {
    const [ ,, reg, year, fuel ] = carArr;
    const fine1 = year < 2000 ? 20 : 0;
    const fine2 = year < 2015 && fuel === "diesel" ? 10 : 0;
    const fine = fine1 >= fine2 ? fine1 : fine2;
    return {
      reg: reg,
      year: year,
      fuel: fuel,
      fine: fine
    };
  }).filter( car => car.fine > 0);

  return JSON.stringify({
    totalFines: cars.reduce( (total, car) => total += car.fine, 0),
    cars: cars
  });
};

// const carData =
//   '[["Toyota", "Camry", "ABC123", 2014, "diesel"], ["Ford", "Focus", "XYZ456", 1999, "petrol"]]';

// [
//     ["Toyota", "Camry", "ABC123", 2014, "diesel"],
//     ["Ford", "Focus", "XYZ456", 1999, "petrol"]
// ]

// console.log(calculateFines(carData));
// {"totalFines":30,"cars":[{"reg":"ABC123","year":2014,"fuel":"diesel","fine":10},{"reg":"XYZ456","year":1999,"fuel":"petrol","fine":20}]}
// {"totalFines":30,"cars":[{"reg":"ABC123","year":2014,"fuel":"diesel","fine":10},{"reg":"XYZ456","year":1999,"fuel":"petrol","fine":20}]}

// {
//   "totalFines": 30,
//   "cars": [
//     {
//       "reg": "ABC123",
//       "year": 2014,
//       "fuel": "diesel",
//       "fine": 10
//     },
//     {
//       "reg": "XYZ456",
//       "year": 1999,
//       "fuel": "petrol",
//       "fine": 20
//     }
//   ]
// }

