// console.log('added')
function heartHeartCount(id){
    document.getElementById(id).addEventListener('click', function(){
    // const heart = document.getElementsByClassName('div-heart')
    // console.log(heart)
    const count = 1;
    const headerHeartNumber =parseInt(document.getElementById('header-heart').innerText) ;
    const add = count + headerHeartNumber;
    return document.getElementById('header-heart').innerText = add;
    
})
}
heartHeartCount('one')
heartHeartCount('two')
heartHeartCount('three')
heartHeartCount('four')
heartHeartCount('five')
heartHeartCount('six')
heartHeartCount('seven')
heartHeartCount('eight')
heartHeartCount('nine')