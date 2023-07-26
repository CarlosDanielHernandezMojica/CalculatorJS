const btn_one = document.querySelector("#btn_one")
const btn_two = document.querySelector("#btn_two")
const btn_three = document.querySelector("#btn_three")
const btn_four = document.querySelector("#btn_four")
const btn_five = document.querySelector("#btn_five")
const btn_six = document.querySelector("#btn_six")
const btn_seven = document.querySelector("#btn_seven")
const btn_eight = document.querySelector("#btn_eight")
const btn_nine = document.querySelector("#btn_nine")
const btn_point = document.querySelector("#btn_point")
const btn_add = document.querySelector("#btn_add")
const btn_subtract = document.querySelector("#btn_subtract")
const btn_divide = document.querySelector("#btn_divide")
const btn_multiply = document.querySelector("#btn_multiply")
const btn_AC = document.querySelector("#btn_AC")
const btn_CE = document.querySelector("#btn_CE")
const btn_erase = document.querySelector("#btn_erase")
const btn_percentage = document.querySelector("#btn_percentage")
const btn_equal = document.querySelector("#btn_equal")

const screen = document.querySelector("#screen")

var numbers = []
var typing = false
var operations = []

function calculate(operation){
    if(screen.value === ''){
        return
    }

    this.numbers.push(screen.value)
    
    if (operation === "=") {
        operate(this.operations[this.operations.length - 1])
        clearSetup()
    }
    else{
        this.operations.push(operation)
        this.typing = false
    
        if (this.numbers.length > 1 || this.operating === true) {
            operate(this.operations[this.operations.length - 1])    
        }
    }
    
}

function add(){
    this.numbers.push(parseFloat(this.numbers[this.numbers.length - 2]) + parseFloat(screen.value))
    screen.value = this.numbers[this.numbers.length - 1]
}

function subtract(){
    this.numbers.push(parseFloat(this.numbers[this.numbers.length - 2]) - parseFloat(screen.value))
    screen.value = this.numbers[this.numbers.length - 1]
}

function divide(){
    this.numbers.push(parseFloat(this.numbers[this.numbers.length - 2]) / parseFloat(screen.value))
    screen.value = this.numbers[this.numbers.length - 1]
}

function multiply(){
    this.numbers.push(parseFloat(this.numbers[this.numbers.length - 2]) * parseFloat(screen.value))
    screen.value = this.numbers[this.numbers.length - 1]
}

function get_percentage(value, percentage){
    let result = (percentage * value) / 100
    return result
}

function calculate_percentage(value, percentage, operation){
    switch (operation) {
        case "+":
            screen.value = parseFloat(value) + get_percentage(value, percentage)
            break;
        case "-":
            screen.value = parseFloat(value) - get_percentage(value, percentage)
            break;
        case "/":
            screen.value = parseFloat(value) / get_percentage(value, percentage)
            break;
        case "*":
            screen.value = parseFloat(value) * get_percentage(value, percentage)
            break;
        default:
            return "It can't be done! :c"
            break;
    }

    clearSetup()
}

function operate(operation){
    switch (operation) {
        case "+":
            add()
            break;
        case "-":
            subtract()    
            break;
        case "/":
            divide()
            break;
        case "*":
            multiply()
            break;
        case "%":
            calculate_percentage(this.numbers[this.numbers.length - 2], this.numbers[this.numbers.length - 1], this.operations[this.operations.length - 2])
            break;
        default:
            return "It can't be done! :c"
            break;
    }
}

function setNumber(number){
    if (typing === false){
        screen.value = ""
        typing = true    
    }

    if(screen.value.length < 10){
        screen.value += number
    }

}

function removeNumber(){
    let number = screen.value
    screen.value = number.slice(0, -1)
}

function clearScreen(){
    screen.value = "" 
    clearSetup()
}

function clearSetup(){
    this.numbers = []
    this.operations = []
    this.typing = false
}

btn_zero.addEventListener("click", function(){setNumber("0")})
btn_one.addEventListener("click", function(){setNumber(1)})
btn_two.addEventListener("click", function(){setNumber(2)})
btn_three.addEventListener("click", function(){setNumber(3)})
btn_four.addEventListener("click", function(){setNumber(4)})
btn_five.addEventListener("click", function(){setNumber(5)})
btn_six.addEventListener("click", function(){setNumber(6)})
btn_seven.addEventListener("click", function(){setNumber(7)})
btn_eight.addEventListener("click", function(){setNumber(8)})
btn_nine.addEventListener("click", function(){setNumber(9)})
btn_point.addEventListener("click", function(){setNumber(".")})

btn_AC.addEventListener("click", clearScreen)
btn_CE.addEventListener("click", clearScreen)

btn_erase.addEventListener("click", removeNumber)

btn_add.addEventListener("click", function(){calculate('+')})
btn_subtract.addEventListener("click", function(){calculate('-')})
btn_divide.addEventListener("click", function(){calculate('/')})
btn_multiply.addEventListener("click", function(){calculate('*')})
btn_percentage.addEventListener("click", function(){calculate('%')})
btn_equal.addEventListener("click", function(){calculate('=')})