// Fecha actual
const date = new Date()
console.log(date)

// Fecha de nacimiento
const birth_date = new Date(1990, 6, 11)
console.log(birth_date)

// Crear variable que indique si hoy es más tarde (>) que fecha de nacimiento.
const dateCheck = date > birth_date
console.log(dateCheck)

// Crear variable que contenga el día de nacimiento
const birth_day = birth_date.getDate()
console.log(birth_day)

// Crear variable que contenga el mes de nacimiento
const birth_month = birth_date.getMonth()+1
console.log(birth_month)

// Crear variable que contenga el año de mi nacimiento (4 dígitos)
const birth_year = birth_date.getFullYear()
console.log(birth_year)