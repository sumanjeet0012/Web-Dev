const panels = document.querySelectorAll('.panel');
// panels.forEach(
//     (panel) => console.log(panel)
// )

function RemoveActiveAll(){
    panels.forEach(function(panel){
        panel.classList.remove('active')
    })
}

document.querySelector('h1').addEventListener('click',function(){
    RemoveActiveAll()
})

panels.forEach(function (panel) {
    panel.addEventListener('click',function(){
        RemoveActiveAll()
        panel.classList.add('active')
    })
})

