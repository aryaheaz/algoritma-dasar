//memilah sampah

let sampah = confirm("sampah organik");
if(sampah == false){
    let reusable = confirm("reusable");
    if(reusable == false){
        document.write("bakar")
    }else{
        document.write("pakai lagi")
    }
}else{
    document.write("jadi pupuk")
}

