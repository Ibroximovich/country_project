 let elcountry = document.querySelector(".select")
let createCountry = document.querySelector(".create-country")

 const searchInput = document.querySelector("#search");
let searchselect = document.querySelector(".country")
let countLiked = document.querySelector(".liked-count")
let countsaved = document.querySelector(".saved-count")
let bt = document.querySelector(".bt")



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
                 <button onclick="handeLikeclick(${item.id})"  class="  ${item.isLiked ? "bg-red-500 text-white" : "border-slate-500"}  like-bt  flex justify-center  w-[30%] flex items-center gap-[2px] border-[2px]   cursor-pointer  rounded-md p-2 duration-300  ">
                    Liked
                 </button>
               
                <button onclick="handeSaveclick(${item.id})" class=" ${item.isBasket ? "bg-blue-500 text-white" : "border-slate-500"} flex justify-center w-[30%] flex items-center gap-[5px] p-2 border-[2px] cursor-pointer  rounded-md  duration-300  ">
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



  searchselect.addEventListener("change",() =>{
      if(searchselect.value == "ol"){
        renderProduct(countries,createCountry)
      }
      else{
        let arr = countries.filter(item =>{
          return item.capital.toLowerCase().includes(searchselect.value)
        })
        renderProduct(arr, createCountry)
      }
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

function handeLikeclick(id){
  bt.classList.toggle("fill-red-500")
 let findObject = countries.find(item => item.id == id)
 findObject.isLiked = !findObject.isLiked
 renderProduct(countries,createCountry)
 countLiked.textContent = countries.filter(item => item.isLiked == true).length

}

 function  handbtnclick(){
  let arr = countries.filter(item => item.isLiked == true)
  renderProduct(arr,createCountry)
 }

function handeSaveclick(id){
 let findObject = countries.find(item => item.id == id)
 findObject.isBasket = !findObject.isBasket
 renderProduct(countries,createCountry)
 countsaved.textContent = countries.filter(item => item.isBasket == true).length
}

function  handsvdclick(){
  let arr = countries.filter(item => item.isBasket == true)
  renderProduct(arr,createCountry)
}












let darkModeBtn = document.querySelector(".dark-mode1");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});




