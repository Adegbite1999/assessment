const hamburger = document.querySelector('.hamburger')
const navUl = document.querySelector('#nav-ul')

hamburger.addEventListener('click', () =>{
    navUl.classList.toggle('show')
})

$(document).ready(()=> {

   $('.register').on('mouseover',()=>{
       $('.google').removeClass('hidden')
       $('.overlay').removeClass('hidden')
       $('.register').html('<i class="fas fa-user-plus"></i> Close')
   }) 

   $('.google').on('mouseout',()=>{
    $('.google').addClass('hidden')
    $('.overlay').addClass('hidden')
    $('.register').html('<i class="fas fa-user-plus"></i> Sign Up')
}) 
$('.register').click(()=>{
    $('.google').toggleClass('hidden')
    $('.overlay').toggleClass('hidden')
    $('.register').html(openAndclose())
})


function openAndclose(){
    let ab = $('.register').html()

return    (ab ==='<i class="fas fa-user-plus"></i> Sign Up' ) ? '<i class="fas fa-times"></i> Close' : '<i class="fas fa-user-plus"></i> Sign Up'
}
})
