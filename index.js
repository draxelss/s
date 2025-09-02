const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');
const { printBanner, printHackerLine, printStats } = require('./modules/ascii.js');
const { loadingAnimation, typeWriter } = require('./modules/animations.js');

global.request = require('request');
global.axios = require('axios');
global.faker = require('faker');
global.dayjs = require('dayjs');
global.fs = require('fs');
global.chalk = require('chalk');

async function main() {
    printBanner();
    
    console.log(chalk.red('\n[SYSTEM] Allahim emrinizdeyim\n'));
    
    console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let telefon = rl.question(chalk.red.bold('[TARGET] ') + chalk.white('Yaz bisiler pampa (+90): '));
    
    if (telefon.length != 10) {
        console.log(chalk.red('❌ [ERROR] Phone number must be 10 digits. Ex: 5401234521'));
        process.exit(1);
    }
    
    title('Target Acquired: ' + telefon);
    
    console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let miktar = rl.question(chalk.red.bold('[PAYLOAD] ') + chalk.white('Ne kadar pampa: '));
    
    if(isNaN(miktar)) {
        console.log(chalk.red('❌ [ERROR] Düzgün gir anani sikerim'));
        process.exit(1);
    }
    
    if (miktar.length == 0) {
        console.log(chalk.red('❌ [ERROR] Ne kadar diye soruldugunda bosmu birakiyon yarramin  kafasi'));
        process.exit(1);
    }
    
    title(`Target: ${telefon} - Payload: ${miktar}`);
    
    printStats(telefon, miktar);
    
    console.log(chalk.red.bold('Anal Sikis Götten Sokus'));
    for(let i = 5; i > 0; i--) {
        console.log(chalk.red.bold(`[${i}] Sex starting ${i} seconds...`));
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(chalk.green.bold(' --------------- By Draxels --------------- \n'));
    
    await fastBomber(telefon, miktar);
}

main().catch(console.error);
