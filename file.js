function show()
{
    let myVar = document.getElementById('ray').value;
    myItm = myVar.split(",");

    // to convert characters to integers
    for(let i=0; i<myItm.length; i++)
    {
        myItm[i] = parseInt(myItm[i],10)
    }


    let j = -1;
    myItm.forEach((ele)=>{
    let box = document.createElement('div');
    box.style.display = "inline-flex";
    box.className = 'box';
    box.id = "in" + (++j);
    box.style.height = '4rem';
    box.style.width = '4rem';
    box.style.border = "2px solid green";
    box.style.backgroundColor = "gray";
    box.style.color = "whitesmoke";
    // box.style.textAlign="center";
    box.style.borderRadius="0.5rem";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.fontSize = "2rem"; // Set your desired font size here
    box.innerHTML = ele;
    document.querySelector(".display").appendChild(box);
    });

}

// this is my self written code
async function initiate()
{
    // applying transition property to each element
    let ray = document.getElementsByClassName('box');
    for(let t =0; t<ray.length; t++)
    {
        ray[t].style.transition = "0.9s";
    }

    
    //Selction sort logic
    for(let i =0; i<myItm.length-1; i++)
    {
        let minin = i
        let can1 = document.getElementsByClassName('box')[minin];
        for(let j =i+1; j<myItm.length; j++)
        {
            if(myItm[j]<myItm[minin])
            {
                minin = j;
            }
        }
        let can2 = document.getElementsByClassName('box')[minin];
        console.log(minin);

        await interchange(can1, can2, minin-i);
        let temp = myItm[i];
        myItm[i] = myItm[minin];
        myItm[minin] = temp;
    }
    //console.log(myItm[3]);
    console.log("Sorting Completed!!!");
    console.log("Array after sorting: ",myItm);
}

function swap(para1, para2, multiplier)
{
    //const referenceElement = document.querySelector('.reference-class');
    //referenceElement.parentNode.insertBefore(elementToMove, referenceElement);

    let computedDist = 4*multiplier;
    let neg = -1*(computedDist);

    para1.style.transform=`translate(${computedDist}rem,0rem) rotate(360deg)`;
    para2.style.transform=`translate(${neg}rem,0rem) rotate(360deg)`;
}

let interchange = (can1,can2,minin) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            swap(can1, can2, minin)
            resolve();
        },1000);
    })
}

// var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
