function helloWorld(){
process.stdout.write("Hello World!\n");
}

function main (outputNun) {
    for (let i = 0; i< outputNun;i++){
        helloWorld();
    }
}

main(5);