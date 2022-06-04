// ------------------------ Create HTML elements ----------------------------

let headerEle = document.createElement('header')
headerEle.innerHTML = `
<h3>This is a basic calculator App. Use this calculator for preform with addition, subtraction, division
and multiplication and modulus.</h3>`

let div = document.createElement('div')
div.className = 'container'
div.innerHTML = `
<div class="calculator">
<p id="display-value"></p>
<input type="text" placeholder="0" id="output" readonly>
<span class="num" onclick="cl()"><i class="fa-solid fa-c"></i></span>
<span class="num" onclick="display('/')"><i class="fa-solid fa-divide"></i></span>
<span class="num" onclick="display('*')"><i class="fa-solid fa-xmark"></i></span>
<span class="num" onclick="backspace()"><i class="fa-solid fa-delete-left"></i></span>
<span class="num" onclick="display('7')"><i class="fa-solid fa-7"></i></span>
<span class="num" onclick="display('8')"><i class="fa-solid fa-8"></i></span>
<span class="num" onclick="display('9')"><i class="fa-solid fa-9"></i></span>
<span class="num" onclick="display('-')"><i class="fa-solid fa-minus"></i></span>
<span class="num" onclick="display('4')"><i class="fa-solid fa-4"></i></span>
<span class="num" onclick="display('5')"><i class="fa-solid fa-5"></i></span>
<span class="num" onclick="display('6')"><i class="fa-solid fa-6"></i></span>
<span class="num" onclick="display('+')"><i class="fa-solid fa-plus"></i></span>
<span class="num" onclick="display('1')"><i class="fa-solid fa-1"></i></span>
<span class="num" onclick="display('2')"><i class="fa-solid fa-2"></i></span>
<span class="num" onclick="display('3')"><i class="fa-solid fa-3"></i></span>
<span class="num equal" onclick="equal()"><i class="fa-solid fa-equals"></i></span>
<span class="num" onclick="display('%')"><i class="fa-solid fa-percent"></i></span>
<span class="num" onclick="display('0')"><i class="fa-solid fa-0"></i></span>
<span class="num" onclick="display('.')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg></span>
</div>
`
document.body.append(headerEle, div)

// --------------------------- calculator function --------------------------------
let output = document.getElementById('output')
let displayScreen = document.getElementById('display-value')

function display(number) {
  displayScreen.innerText += number
}

function equal() {
  try {
    output.value = eval(displayScreen.innerText)
  } catch (error) {
    output.value = 'Invalid'
  }
}

function cl() {
  displayScreen.innerText = ''
  output.value = ''
}

function backspace() {
  displayScreen.innerText = displayScreen.innerText.slice(0, -1)
}

document.body.addEventListener('keypress', keypress)

function keypress(a) {
  let displayScreen = document.getElementById('display-value')
  if (
    (a.key >= 0 && a.key < 10) ||
    a.key === '+' ||
    a.key === '-' ||
    a.key === '*' ||
    a.key === '/' ||
    a.key === '.' ||
    a.key === '%'
  ) {
    displayScreen.innerText += a.key
  } else if (a.key === 'Enter') {
    equal()
  } else if (a.key === 'Backspace') {
    backspace()
  }
}
