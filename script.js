// Login Button

let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginPart = document.getElementById('login-part');
    loginPart.style.display='none';

    const transPart = document.getElementById('trans-part');

    transPart.style.display= 'block';

    document.getElementById('email').value= "";
})

//deposit button

let depositbtn = document.getElementById('adddeposit');
depositbtn.addEventListener("click", function(){
    let depositamount = document.getElementById('depositamount').value;
    let depositnumber = parseFloat(depositamount);

    spanClass('currentdeposit', depositnumber);
    spanClass('currentbalance', depositnumber);

    document.getElementById('depositamount').value="";
})

    

// Withdraw button

const addwithdraw = document.getElementById('addwithdraw');
addwithdraw.addEventListener('click', function(){
    const withdrawamount = document.getElementById('withdrawamount').value;

    let withdrawnumber = parseFloat(withdrawamount);

    spanClass('currentwithdraw', withdrawnumber);
    spanClass('currentbalance', -1*withdrawnumber);

    document.getElementById('withdrawamount').value="";
})

// Deposit add and withdraw add function
function spanClass(id, depositnumber){
        const current = document.getElementById(id).innerHTML;
        let currentnumber = parseFloat(current);
        let total = currentnumber+depositnumber;
        document.getElementById(id).innerHTML=total;
    }
