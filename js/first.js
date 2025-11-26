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
    function callAndCoin(id, id2, id3){
        document.getElementById(id).addEventListener('click',function(){
    const headerCoin =parseInt(document.getElementById('header-coin').innerText) ;
    const twenty= 20
    const nowHeaderCoin = headerCoin - twenty
    const firstHeader = document.getElementById(id2).innerText;
    const firstDivNumber = document.getElementById(id3).innerText;
    console.log(firstHeader,firstDivNumber)
    return headerCoin > 20 ? (alert(`Calling ${firstHeader} service ${firstDivNumber}.....`),
    (document.getElementById('header-coin').innerText = nowHeaderCoin)) : alert('You need more than 20 coins to call')     
    //  if(headerCoin>20){
    //     alert(`Calling ${firstHeader} service ${firstDivNumber}.....`)
    //     document.getElementById('header-coin').innerText = nowHeaderCoin
    // }
    // else{
    //     alert('You need more than 20 coins to call.')
    // }
})
    }
 callAndCoin('num-one','first-div-header','first-div-number')   

