// คำนวณค่าโดยสารโดยปัดระยะทางขึ้นเป็นกิโลเมตร
const calcFare = (distanceKm) => {
	if (!Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

console.log(calcFare(1.5));
console.log(calcFare(2));
console.log(calcFare(7.2));