// คำนวณค่าโดยสารโดยปัดระยะทางขึ้นเป็นกิโลเมตร
const calcFare = (distanceKm) => {
	if (!Number.isFinite(distanceKm) || distanceKm < 0) {
		return 0;
	}

	const roundedDistance = Math.ceil(distanceKm);
	return roundedDistance <= 2 ? 10 : 10 + (roundedDistance - 2) * 2;
};

// ฟังก์ชันช่วยทดสอบ
function test(description, actual, expected) {
	const passed = actual === expected;
	const status = passed ? "✅ PASS" : "❌ FAIL";
	console.log(`${status} | ${description} | ค่าที่ได้: ${actual} | ค่าที่คาดหวัง: ${expected}`);
	return passed;
}

console.log("=== เริ่มทดสอบ calcFare ===\n");

let passedCount = 0;
let totalCount = 0;

function runTest(description, actual, expected) {
	totalCount++;
	if (test(description, actual, expected)) {
		passedCount++;
	}
}

// กรณีปกติ — ระยะทางไม่เกิน 2 กม. (ค่าโดยสาร 10)
runTest("ระยะทาง 0 กม.", calcFare(0), 10);
runTest("ระยะทาง 1 กม.", calcFare(1), 10);
runTest("ระยะทาง 1.5 กม. (ปัดเป็น 2)", calcFare(1.5), 10);
runTest("ระยะทาง 2 กม. (ขอบเขต)", calcFare(2), 10);

// กรณีปกติ — ระยะทางเกิน 2 กม. (ค่าโดยสารเพิ่ม 2 บาทต่อกม.)
runTest("ระยะทาง 2.1 กม. (ปัดเป็น 3)", calcFare(2.1), 12);
runTest("ระยะทาง 3 กม.", calcFare(3), 12);
runTest("ระยะทาง 7.2 กม. (ปัดเป็น 8)", calcFare(7.2), 22);
runTest("ระยะทาง 10 กม.", calcFare(10), 26);

// กรณีขอบ (Edge cases)
runTest("ระยะทาง 0.1 กม. (ปัดเป็น 1)", calcFare(0.1), 10);
runTest("ระยะทาง 2.01 กม. (ปัดเป็น 3)", calcFare(2.01), 12);

// กรณีไม่ถูกต้อง — ควรคืนค่า 0
runTest("ระยะทางติดลบ -5", calcFare(-5), 0);
runTest("NaN", calcFare(NaN), 0);
runTest("Infinity", calcFare(Infinity), 0);
runTest("-Infinity", calcFare(-Infinity), 0);
runTest("ข้อความ 'abc'", calcFare("abc"), 0);
runTest("null", calcFare(null), 0);
runTest("undefined", calcFare(undefined), 0);

console.log(`\n=== สรุปผล: ${passedCount}/${totalCount} ผ่าน ===`);
