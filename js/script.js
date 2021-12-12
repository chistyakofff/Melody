let optSelect = document.querySelector('#choosed-floor');
let selIndex = optSelect.options[optSelect.selectedIndex],
    selValue = selIndex.value;
let floorList = document.querySelector('#select-floor');
floorList.innerHTML = `${selValue}`;

console.log(optSelect.selectedIndex);

window.addEventListener('load', function () {

    let floorUp = document.querySelector('#floor-up'),
        floorDown = document.querySelector('#floor-down');

   let floorList = document.querySelector('#select-floor');
    floorList.innerHTML = `${selValue}`;

    floorUp.addEventListener('click', function () {

        selIndex = optSelect.options[optSelect.selectedIndex],
        selValue = selIndex.value,
         numValue = Number(selValue),
         numIndex = Number(optSelect.selectedIndex);

        floorList = document.querySelector('#select-floor');
        

        if (numIndex < 17) {
            optSelect.options[optSelect.selectedIndex].removeAttribute("selected"); //убираем selected
            optSelect.options[numIndex+1].setAttribute("selected", "selected"); //добавляем selected на следующий option
            floorList.innerHTML = `${numValue + 1}`;
        }
        else {
            numValue = 1;
            numIndex = 0;
            optSelect.options[optSelect.selectedIndex].removeAttribute("selected"); //убираем selected
            optSelect.options[numIndex].setAttribute("selected", "selected"); //добавляем selected на следующий option
            floorList.innerHTML = `${numValue}`;
        }
    });


    floorDown.addEventListener('click', function () {
        selIndex = optSelect.options[optSelect.selectedIndex],
            selValue = selIndex.value,
            numValue = Number(selValue),
            numIndex = Number(optSelect.selectedIndex);

        floorList = document.querySelector('#select-floor');


        if (numIndex >= 1) {
            optSelect.options[optSelect.selectedIndex].removeAttribute("selected"); //убираем selected
            optSelect.options[numIndex-1].setAttribute("selected", "selected"); //добавляем selected на следующий option
            floorList.innerHTML = `${numValue - 1}`;
        }
        else {
            numValue = 18;
            numIndex = 17;
            optSelect.options[optSelect.selectedIndex].removeAttribute("selected"); //убираем selected
            optSelect.options[numIndex].setAttribute("selected", "selected"); //добавляем selected на следующий option
            floorList.innerHTML = `${numValue}`;
        }
    });
});




