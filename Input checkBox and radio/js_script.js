const checkBox = document.getElementById("checkBox");
const visa = document.getElementById("Visa");
const Master = document.getElementById("Master");
const wechat = document.getElementById("Wechatpay");
const payPal = document.getElementById("payPalpay");
const submit = document.getElementById("submitbtn");
const subscibe = document.getElementById("Subscription");
const payment = document.getElementById("payment");


submit.onclick = function()
{
    if (checkBox.checked) {
        subscibe.textContent = "You are subscibed!";
    }
    else
    {
        subscibe.textContent = "You are not subscibed";
    }
    if (visa.checked) {
        payment.textContent = `You are paying with VISA`;
    }
    else if (Master.checked) {
        payment.textContent = `You are paying with MasterCard`;
    }
    else if (wechat.checked) {
        payment.textContent = `You are paying with Wechat pay`;
    }
    else if (payPal.checked) {
        payment.textContent = `You are paying with PayPal`;
    }
    else
    {
        payment.textContent = `You haven't selected a payment method`;
    }
}



