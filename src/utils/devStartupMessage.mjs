import chalk from 'chalk';
import figlet from 'figlet';

const message = figlet.textSync('NextJs, React & Styled Components, Starting Up!!!', {
  font: 'Standard', // You can choose other fonts provided by figlet
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
});

const rockets = `
🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 
`;

const reactIcons = `
⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ ⚛️ 
`;

console.log(chalk.greenBright(rockets));
console.log(chalk.cyanBright(reactIcons));
console.log(chalk.blueBright(message));
console.log(chalk.blueBright(reactIcons));
console.log(chalk.greenBright(rockets));
console.log(chalk.blueBright(`Environment: ${process.env.NODE_ENV}`));
console.log(chalk.magentaBright(`App is running at: http://localhost:3000`));
console.log(chalk.yellowBright(`Press CTRL-C to stop\n`));
