
function heartHeartCount(id){
    document.getElementById(id).addEventListener('click', function(){
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
})
    }
 callAndCoin('num-one','first-div-header','first-div-number')   
 callAndCoin('num-two','second-div-header','second-div-number')   
 callAndCoin('num-three','third-div-header','third-div-number')   
 callAndCoin('num-four','forth-div-header','forth-div-number')   
 callAndCoin('num-five','fifth-div-header','fifth-div-number')   
 callAndCoin('num-six','sixth-div-header','sixth-div-number')   
 callAndCoin('num-seven','seventh-div-header','seventh-div-number')   
 callAndCoin('num-eight','eight-div-header','eight-div-number')   
 callAndCoin('num-nine','ninth-div-header','ninth-div-number')   
// 
// 
// 
// copy number function
// reuseable copy function
function copyNumber(id,id2){

    return document.getElementById(id).addEventListener('click', function(){
        const num =parseInt(document.getElementById(id2).innerText);
        navigator.clipboard.writeText(num);
        const a = 1;
        const headerCopyCount =parseInt(document.getElementById('header-copy-number').innerText);
        const nowHeaderCopyCount = a + headerCopyCount;
        document.getElementById('header-copy-number').innerText = nowHeaderCopyCount;
        const showNumber = document.getElementById(id2).innerText;
        alert(`This number has been copied: ${showNumber}`)
    })
}
copyNumber('first-copy','first-div-number')
copyNumber('second-copy','second-div-number')
copyNumber('third-copy','third-div-number')
copyNumber('forth-copy','forth-div-number')
copyNumber('fifth-copy','fifth-div-number')
copyNumber('sixth-copy','sixth-div-number')
copyNumber('seventh-copy','seventh-div-number')
copyNumber('eight-copy','eight-div-number')
copyNumber('ninth-copy','ninth-div-number')
// document.getElementById('first-copy').addEventListener('click', function(){
//     const num =parseInt(document.getElementById('first-div-number').innerText) ;
//     navigator.clipboard.writeText(num)
//     const a = 1;
//     const headerCopyCount =parseInt(document.getElementById('header-copy-number').innerText);
//     const nowHeaderCopyCount = a + headerCopyCount;
//     document.getElementById('header-copy-number').innerText = nowHeaderCopyCount;
//     const showNumber = document.getElementById('first-div-number').innerText;
//     alert(`This number has been copied: ${showNumber}`)
// })