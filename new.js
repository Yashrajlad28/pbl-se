function show() {
    let myVar = document.getElementById('ray').value;
    myItm = myVar.split(",");

    // to convert characters to integers
    for (let i = 0; i < myItm.length; i++) {
        myItm[i] = parseInt(myItm[i], 10)
    }

    let j = -1;
    myItm.forEach((ele) => {
        let box = document.createElement('div');
        box.style.display = "inline-flex";
        box.className = 'box';
        box.id = "in" + (++j);
        box.style.height = '4rem';
        box.style.width = '4rem';
        box.style.border = "2px solid green";
        box.style.backgroundColor = "gray";
        box.style.color = "whitesmoke";
        box.style.borderRadius = "0.5rem";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.fontSize = "2rem"; // Set your desired font size here
        box.innerHTML = ele;
        document.querySelector(".display").appendChild(box);
    });

}

async function initiate() {
    // applying transition property to each element
    let ray = document.getElementsByClassName('box');
    for (let t = 0; t < ray.length; t++) {
        ray[t].style.transition = "0.9s";
    }

    // Selection sort logic
    for (let i = 0; i < myItm.length - 1; i++) {
        let minin = i
        let can1 = document.getElementsByClassName('box')[minin];
        console.log("Min Index is: ",minin);
        for (let j = i + 1; j < myItm.length; j++) {
            if (myItm[j] < myItm[minin]) {
                console.log("Value of j is: ",j);
                minin = j;
                let can2 = document.getElementsByClassName('box')[minin];
                console.log(can2);
                await swap(can1, can2, minin);
            }
        }

        // Uncomment the line below to see the animation step by step
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

function swap(para1, para2, multiplier) {
    return new Promise(resolve => {
        let computedDist = 4 * multiplier;

        para1.style.transform = `translate(${computedDist}rem,0rem) rotate(360deg)`;
        para2.style.transform = `translate(${-computedDist}rem,0rem) rotate(360deg)`;

        // Wait for transition to complete
        setTimeout(() => {
            // Swap the elements in the DOM
            // para1.parentNode.insertBefore(para2, para1);
            resolve();
        }, 900); // Transition time 0.9s converted to milliseconds
    });
}