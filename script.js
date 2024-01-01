document.getElementById('percepatan').addEventListener('click',()=>{
    let kecepatan = document.getElementById('kec').value;
    let waktu = document.getElementById('waktu').value;
    if(kecepatan === "" || waktu === ""){
        alert('Anda belum memasukkan angka!');
        return false;
    }
    let result = Number(kecepatan)/Number(waktu);
    document.getElementById('result').innerHTML = "Percepatannya adalah " + result.toFixed(0) + " m/s<sup>2</sup>";
});
document.getElementById('gaya').addEventListener('click',()=>{
    let massa = document.getElementById('masa').value;
    if(massa === ""){
        alert('Anda belum memasukkan angka!');
        return false;
    }
    let result = massa*10;
    document.getElementById('result2').innerHTML = "Gaya yang dimiliki adalah " + result.toFixed(0) + " N";
})