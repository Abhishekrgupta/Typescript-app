function doWork(x) {
    var y = 100;
    if (x) {
        console.log('conditioned' + y);
    }
    console.log('Unconditioned' + y);
}
doWork(true);
doWork(false);
