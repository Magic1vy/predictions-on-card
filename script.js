const items = document.querySelectorAll('.item');

items.forEach (item => {
    
    item.addEventListener('click', () =>{
        removeFocus();
        item.classList.add('selected');
    })
    removeFocus = () =>{
        items.forEach(item =>{
            item.classList.remove('selected');
        })
    }
})









console.log(items)