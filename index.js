
const coinName = ['BTC','DASH','ZEC','DOGE','LTC']

let result = ''

async function doData() {
    for (let index = 0; index < coinName.length; index++) {
     
        await axios.get('https://chain.so/api/v2/get_info/'+coinName[index])
        .then(function (response) {
            let data = response.data.data
            let price = data.price
            let blocks = data.blocks
            result +=
            `<div class="coindata">
                <div class="coinname">${data.network+'&nbsp'+'|'+'&nbsp'+ data.name}</div>
                <div class="coinothers">
                    <div>${'$'+price}</div><div>${blocks}</div><div>${'$'+price*blocks}</div>
                </div>                       
            </div>` 
        })   
        let fatherE = document.querySelector('.coinBase')

        fatherE.innerHTML = result
    }
}
doData();



