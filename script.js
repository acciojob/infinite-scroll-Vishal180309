//your code here!

let list_var = document.getElementById('infi-list');
list_var.addEventListener('scroll',function (e) {
    while((list_var.scrollTop + list_var.clientHeight) >= list_var.scrollHeight - 5) {
        let innerList1 = document.createElement('li');
        let innerList2 = document.createElement('li');

        // getting last no.
        let last_list_number = list_var.lastElementChild;
        let no_lln = parseInt(last_list_number.textContent);

        // let ol_var = document.getElementById('infi-list');
        
        // adding continue numbers
        innerList1.textContent=`${no_lln+1}`;
        innerList2.textContent=`${no_lln+2}`;

        list_var.appendChild(innerList1);
        list_var.appendChild(innerList2);
    }
});
