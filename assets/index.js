


function clearNote(){ $('#calNote').text('')}
 
function insert(num){
    if (document.form.calView.value.length>=15) return 

    let originVal =  document.form.calView.value  ; 
    document.form.calView.value = originVal+ num
 
    
    let originNote = $('#calNote').text()
    console.log('originNote: ', originNote);
    clearNote()
    $('#calNote').append(originNote + num) 

    if(parseInt(num)) {
        let value = document.form.calView.value 
        console.log('value: ', value);
        value = value.replace(/,/g,'')
        // var re = '/[+-\/*,]/g';
        // let numArr = value.split(re)
        
       
        
        document.form.calView.value = numberWithCommas(value)
       
    } 
    
       
     
} 
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function equal(){
    var exp = document.form.calView.value
    
    if(exp){
        exp =  exp.replace(/,/g,'')
     
        
        document.form.calView.value = eval(exp)
        document.form.calView.value = numberWithCommas(document.form.calView.value)
    }
     
} 

function clean(){ 
    document.form.calView.value = ""
    clearNote()
}

function back(){
    var exp = document.form.calView.value; 
    document.form.calView.value = exp.substring(0,exp.length-1)
} 
let stream$ = Rx.Observable.create((observer) => {
    observer.error('error message');
 })