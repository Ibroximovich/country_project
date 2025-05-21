 let elcountry = document.querySelector(".select")
let createCountry = document.querySelector(".create-country")


 function createSelectOption(){
      countries.forEach(item =>{
        let createOption = document.createElement("option")
        createOption.textContent = item.capital
        createOption.value = item.capital.toLowerCase()
        elcountry.appendChild(createOption)
      })
 }

 createSelectOption()

 function renderProduct(arr,list){
     list.innerHTML = null
     arr.forEach(item =>{
      let ellistItem= document.createElement("li")
        ellistItem.className = "w-[264px] rounded-[5px] shadow-md shadow-grey-300"
        list.appendChild(ellistItem)

        ellistItem.innerHTML =`
           <img class="!w-[260px] !h-[160px] object-cover" src="${item.flag}" alt="Country img" width="264" height="160px">
            <div class="pl-[24px] py-[24px]">
                <strong class="font-extra-bold text-[18px] leading-[28px] inline-block mb-[16px]">${item.name}</strong>
                <p class="font-semibold text-[14px] leading-[16px]"> Population: <span class="font-light">${item.population}</span></p>
                <p class="font-semibold text-[14px] leading-[16px] my-[8px]">Region: <span class="font-light">${item.region}</span></p>
                <p class="font-semibold text-[14px] leading-[16px]"> Capital: <span class="font-light">${item.capital}</span></p>
                
            </div>
              <div class="flex justify-between items-center pb-[20px] px-[24px] gap-[10px]">
                 <button class="like-btn flex justify-center  w-[30%] flex items-center gap-[2px] border-[2px]  cursor-pointer  rounded-md p-2 duration-300  hover:bg-red-500 hover:border-none hover:text-white active:scale-90">
                   Liked
                </button>
                <button class=" save-btn flex justify-center w-[30%] flex items-center gap-[5px] p-2 border-[2px] cursor-pointer  rounded-md  duration-300  hover:bg-blue-400 hover:border-none hover:text-white active:scale-90">
                    Saved
                </button>
                <button  class="more-btn flex justify-center w-[30%] flex items-center border-[2px]  gap-[5px] rounded-md p-2 uration-300  duration-300 hover:bg-green-500 hover:border-none hover:text-white active:scale-90">
                    More
                </button>
            </div>
           `
     })
 }


 renderProduct(countries,createCountry)

 let mode = document.querySelector(".dark-mode")
  let bt = document.querySelector(".bt")
  let sv = document.querySelector(".save")

   document.querySelectorAll(".like-btn").forEach((btn) =>{
    btn.addEventListener("click", () =>{
      bt.classList.toggle("fill-red-500")
    })
  })
   document.querySelectorAll(".save-btn").forEach((save) =>{
    save.addEventListener("click", () => {
      sv.classList.toggle("fill-blue-500")
    })
  })

let mor = document.querySelectorAll(".more-btn");

mor.forEach(item => {
  item.addEventListener("click", () => {
        alert("more")
  });
});

    


  const searchInput = document.querySelector("#search");

  let searchselect = document.querySelector(".country")

  searchselect.addEventListener("change",() =>{
     let arr = countries.filter(item =>{
       return item.capital.toLowerCase().includes(searchselect.value)
     })
     renderProduct(arr, createCountry)
  })

searchInput.addEventListener("input",() =>{
  let search = countries.filter(item =>{
    if(item.name.toLowerCase().trim().includes(searchInput.value)){
      return  item.capital
    }
    else if(item.capital.toLowerCase().trim().includes(searchInput.value)){
       return  item.capital
    }
   
  })
  renderProduct(search,createCountry)
})





let darkModeBtn = document.querySelector(".dark-mode1");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});




