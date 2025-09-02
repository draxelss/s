const chalk = require('chalk');

function loadingAnimation(text, duration = 3000) {
    return new Promise((resolve) => {
        const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
        let i = 0;
        
        const interval = setInterval(() => {
            process.stdout.write(`\r${chalk.cyan(frames[i % frames.length])} ${chalk.white(text)}`);
            i++;
        }, 100);
        
        setTimeout(() => {
            clearInterval(interval);
            process.stdout.write(`\r${chalk.cyan('✓')} ${chalk.white(text)} ${chalk.cyan('COMPLETE')}\n`);
            resolve();
        }, duration);
    });
}

module.exports = { loadingAnimation };
