
/////////////////////////////////////Factorial
const factorial = (n) => {
	let result = 1
	for (let i = 1; i <= n; i++) {
		 result *= i
	}
		 return result

}
console.log(factorial(3))

//////////////////////////////Avarage

////////////////////////////////////Tarberak_1
const test_array = [1,3,5,-2,0]

const avrg = (arr) =>{
	let sum = 0
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
		count++
	}
	return sum/count

}

console.log(avrg(test_array))


////////////////////////////////////Tarberak_2

const sum_array = (arr) =>{
	let result = 0
	for (let i = 0; i < arr.length; i++) {
		result += arr[i]
	}
		return result
	
}
console.log(sum_array(test_array))


const avarage = (array) =>{
	const sum = sum_array(array)
	return sum/array.length
}

console.log(avarage(test_array))


/////////////////////////////////////Triangle-1
const stars_1 = (n) => {
	for (let i = 0; i <= n; i++) {
		let line = ""
		for (let j = 0; j < i; j++) {
			line += "*"
		}

		console.log(line)
		
	}

}

stars_1(5)

/////////////////////////////////////Triangle-2


const stars_2 = (n) => {
	for (let lineCount = 0; lineCount <= n; lineCount++) {  //(let lineCount = 1; lineCount <= n; lineCount++)
		let line = ""
		for (let dashCount = 0; dashCount < n-lineCount; dashCount++) {
			line += "-"
		}
			for (let starCount = 0; starCount < lineCount; starCount++) {
				line += "*"
			}
		console.log(line)
	
	}
}

	stars_2(5)
