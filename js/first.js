/// history data
const callHistoryData = [];

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
// call function
    function callAndCoin(id, id2, id3){
    document.getElementById(id).addEventListener('click',function(){

        const headerCoin = parseInt(document.getElementById('header-coin').innerText);
        const cost = 20;
        const nowHeaderCoin = headerCoin - cost;

        const firstHeader = document.getElementById(id2).innerText;
        const firstDivNumber = document.getElementById(id3).innerText;

        // history data (keeps old history)
        const data = {
            name: firstHeader,
            phoneNumber: firstDivNumber,
            date: new Date().toLocaleTimeString()
        }
        callHistoryData.push(data);

        const historyContainer = document.getElementById('adding-history');
        
        if (headerCoin >= 20) {

            // Always re-render ALL history but don't clear stored data
            historyContainer.innerHTML = '';
            for(const item of callHistoryData){
                const div = document.createElement('div');
                div.innerHTML = `
                <div class="flex items-center justify-between mt-6 bg-[#fafafa] p-4 rounded-lg">
                    <div>
                        <p class="font-semibold">${item.name}</p>
                        <p class="text-[#5c5c5c]">${item.phoneNumber}</p>
                    </div>
                    <div>
                        <p class='text-[#111111]'>${item.date}</p>
                    </div>
                </div>
                `;
                historyContainer.appendChild(div);
            }

            alert(`Calling ${firstHeader} service ${firstDivNumber}.....`);
            document.getElementById('header-coin').innerText = nowHeaderCoin;
        } 
        
        else {
            alert('You need at least 20 coins to call');
        }
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


// clear data
document.getElementById('clear').addEventListener('click', function(){
        // historyContainer.innerHTML = ''
        document.getElementById('adding-history').innerHTML = ''
    })
