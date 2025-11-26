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
// 
// 
// 

    document.getElementById('num-one').addEventListener('click',function(){
    const headerCoin =parseInt(document.getElementById('header-coin').innerText) ;
    const twenty= 20
    const nowHeaderCoin = headerCoin - twenty
    const firstHeader = document.getElementById('first-div-header').innerText;
    const firstDivNumber = document.getElementById('first-div-number').innerText;
    console.log(firstHeader,firstDivNumber)
     if(headerCoin>20){
        alert(`Calling ${firstHeader} service ${firstDivNumber}.....`)
        document.getElementById('header-coin').innerText = nowHeaderCoin
    }
    else{
        alert('You need more than 20 coins to call.')
    }
})

