const chalk = require('chalk');

function printBanner() {
    console.clear();
    console.log(chalk.magenta(`
▓█████▄  ██▀███   ▄▄▄      ▒██   ██▒▓█████  ██▓      ██████ 
▒██▀ ██▌▓██ ▒ ██▒▒████▄    ▒▒ █ █ ▒░▓█   ▀ ▓██▒    ▒██    ▒ 
░██   █▌▓██ ░▄█ ▒▒██  ▀█▄  ░░  █   ░▒███   ▒██░    ░ ▓██▄   
░▓█▄   ▌▒██▀▀█▄  ░██▄▄▄▄██  ░ █ █ ▒ ▒▓█  ▄ ▒██░      ▒   ██▒
░▒████▓ ░██▓ ▒██▒ ▓█   ▓██▒▒██▒ ▒██▒░▒████▒░██████▒▒██████▒▒
 ▒▒▓  ▒ ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░▒▒ ░ ░▓ ░░░ ▒░ ░░ ▒░▓  ░▒ ▒▓▒ ▒ ░
 ░ ▒  ▒   ░▒ ░ ▒░  ▒   ▒▒ ░░░   ░▒ ░ ░ ░  ░░ ░ ▒  ░░ ░▒  ░ ░
 ░ ░  ░   ░░   ░   ░   ▒    ░    ░     ░     ░ ░   ░  ░  ░  
   ░       ░           ░  ░ ░    ░     ░  ░    ░  ░      ░  
 ░                                                          
    `));
    
    flickerText('                [>]     WOW WOW      [<]', 'magenta');
    console.log(chalk.magenta('                [>] CODED BY DRAXELS [<]'));
    console.log('');
    
    // simulateHacking() kaldırıldı
    
    console.log(chalk.red.bold('     ~Babaların mesleğini her yetim yapamaz'));
    console.log('');
}

function flickerText(text, color) {
    console.log(chalk[color].bold(text));
}

function printHackerLine() {
    const chars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▪', '◢', '◣', '◤', '◥', '0', '1'];
    let line = '';
    for(let i = 0; i < 70; i++) {
        if (Math.random() > 0.8) {
            line += chalk.cyan(chars[Math.floor(Math.random() * chars.length)]);
        } else if (Math.random() > 0.5) {
            line += chalk.magenta(chars[Math.floor(Math.random() * chars.length)]);
        } else {
            line += chalk.blue(chars[Math.floor(Math.random() * chars.length)]);
        }
    }
    console.log(line);
}

function printStats(phone, amount) {
    const width = 70; // kutu genişliği
    const boxLine = (char) => char.repeat(width);

    const padText = (text, totalWidth) => {
        const plainLength = text.replace(/\x1b\[[0-9;]*m/g, '').length; // renk kodlarını saymaz
        if (plainLength >= totalWidth) return text.slice(0, totalWidth);
        const space = ' '.repeat(totalWidth - plainLength);
        return text + space;
    }

    console.log(chalk.magenta('╔' + boxLine('═') + '╗'));
    console.log(chalk.magenta('║') + chalk.cyan.bold(padText(' OPERATION PARAMETERS ', width)) + chalk.magenta('║'));
    console.log(chalk.magenta('╠' + boxLine('═') + '╣'));
    console.log(chalk.magenta('║') + chalk.white(padText(` OROSPU COCU: +90${phone} `, width)) + chalk.magenta('║'));
    console.log(chalk.magenta('║') + chalk.white(padText(` AMOUNT: ${amount} `, width)) + chalk.magenta('║'));
    console.log(chalk.magenta('╚' + boxLine('═') + '╝'));

    for (let i = 0; i < 3; i++) {
        printHackerLine();
    }
    console.log('');
}

module.exports = { printBanner, printHackerLine, printStats };
