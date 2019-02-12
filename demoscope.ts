function doWork(x: boolean){
    let y= 100;
    if(x){
        console.log('conditioned'+ y);
    }
    console.log('Unconditioned' + y);
}

doWork(true);
doWork(false);