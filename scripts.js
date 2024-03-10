// Scroll To Top
let scrollBtn = document.getElementById('scrollToTopBtn');
var rootElement = document.documentElement;

scrollBtn.addEventListener('click', () => { (
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
)
});

function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal ) > 0.60 ) {
      // Show button
      scrollBtn.classList.remove("disNone")
      scrollBtn.classList.add("disBlock")
    } else {
      // Hide button
      scrollBtn.classList.add("disNone")
      scrollBtn.classList.remove("disBlock")
    }
}

document.addEventListener("scroll", handleScroll)


// Change Language
let langIcon = document.getElementById('langIcon');
let langsDiv = document.getElementById('langs');

langIcon.addEventListener('click', () => {
  if(langsDiv.classList.contains('disNone')) {
    langsDiv.classList.remove('disNone')
    langsDiv.classList.add('disFlex')
  } else if(langsDiv.classList.contains('disFlex')) {
    langsDiv.classList.add('disNone')
    langsDiv.classList.remove('disFlex')
  }
})




// Email Sub Noti
let subBtn = document.getElementById('subBtn');
let emailSub = document.getElementById('emailSub');
let emailSubClose = document.getElementById('emailSubClose');

subBtn.addEventListener('click', () => {
  emailSub.style.display = 'flex'
})

emailSubClose.addEventListener('click', () => {
  emailSub.style.display = 'none'
})