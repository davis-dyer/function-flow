const yellowChairMaker = (chairMaterial) => {
	const chairObject = {
		type: "Chair",
		color: "Yellow",
		material: chairMaterial,
		price: 49.29
	}

	return chairObject
}

// Now you can invoke the function - or start the task - to make two chairs.
const metalChair = yellowChairMaker("Aluminum")
const oakChair = yellowChairMaker("Oak");

console.log(metalChair);
console.log(oakChair);

const websiteDesc = (chairDesc) => {
    const text1 = `The ${chairDesc.color}, ${chairDesc.material} ${chairDesc.type} costs ${chairDesc.price}`
    return text1
};

let websiteText = websiteDesc(metalChair);
console.log(websiteText)
