function distncia_pontos(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf-8');
    var lines = input.split('\n');

    let linha1 = lines[0].split(' ');
    let x1 = Number(linha1[0]);
    let y1 = Number(linha1[1]);

    let linha2 = lines[1].split(' ');
    let x2 = Number(linha2[0]);
    let y2 = Number(linha2[1]);

    let calc_primeiro = x2 - x1
    let calc_segundo = y2 - y1
    
    calc_primeiro = calc_primeiro * calc_primeiro
    calc_segundo = calc_segundo * calc_segundo

    let final = Math.sqrt(calc_primeiro + calc_segundo)

    console.log(final.toFixed(4))

}

//1 e 7
// // 5 e 9