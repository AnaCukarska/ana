import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};
//
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

export const whoami = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://en.wikipedia.org/wiki/Solipsism');
  }, 1000);

  return `As far as I am concerned you might just be a product of my imagination.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://anacukarska.vercel.app', '_self');

  return 'Opening GUI version...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:ana.cukarska@tum.de');

  return 'Opening mailto:ana.cukarska@tum.de...';
};

export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const nano = async (args: string[]): Promise<string> => {
  return `why use nano? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};
//
// export const repo = async (args?: string[]): Promise<string> => {
//   setTimeout(function () {
//     window.open('https://github.com/m4tt72/terminal', '_blank');
//   }, 1000);
//
//   return 'Opening repository...';
// };

export const music = async (args?: string[]): Promise<string> => {
  const songs = [
    'https://www.youtube.com/watch?v=feA64wXhbjo',
    'https://www.youtube.com/watch?v=fQDEUU1lyZQ',
    'https://www.youtube.com/watch?v=xpahYJ7UpP4',
    'https://www.youtube.com/watch?v=h8DLofLM7No',
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=oYssb0d4AKQ',
    'https://www.youtube.com/watch?v=esqRBsVumrw',
    'https://www.youtube.com/watch?v=xA8MCbepGRE',
    'https://www.youtube.com/watch?v=bB34_eLCLKo',
    'https://www.youtube.com/watch?v=E_5vYiLLh8k',
    'https://www.youtube.com/watch?v=tP97_AQCldk',
    'https://www.youtube.com/watch?v=l0yRNQj2_tc',
    'https://www.youtube.com/watch?v=A-Tod1_tZdU',
    'https://www.youtube.com/watch?v=Jpz_gUyImhw',
    'https://www.youtube.com/watch?v=7-lWzQd_xeQ',
    'https://www.youtube.com/watch?v=H5v3kku4y6Q',
    'https://www.youtube.com/watch?v=ewOPQZZn4SY',
    'https://www.youtube.com/watch?v=ZWmrfgj0MZI',
    'https://www.youtube.com/watch?v=fdixQDPA2h0',
  ];
  setTimeout(function () {
    window.open(songs[(Math.random() * songs.length) | 0]);
  }, 1000);

  return 'Playing music...';
};

export const banner = (args?: string[]): string => {
  return `
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣴⢿⣿⣿⠿⣿⣿⡟⠉⠻⣿⣿⣿⣿⠋⠛⠃⠉⠳⣄⠀⠀⠀⠀⠀
⠀⠀⠀⣠⠟⠁⠸⠋⠀⠀⠀⠈⠉⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠈⢷⡀⠀⠀⠀
⠀⠀⣰⡏⠀⠀⠀⠀⣠⣴⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀
⠀⢠⣿⣿⣷⣶⣶⣿⣿⡿⠟⠋⢁⡀⠀⠀⢀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠈⣿⠀⠀
⠀⣼⣿⣿⣿⣿⣿⣿⣿⡦⠀⠈⠛⠛⠀⠀⠈⠻⣿⣿⣿⣄⡀⠀⠀⠀⠀⢻⡇⠀
⠀⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⡇⠀⠀⠀⢸⡇⠀    𝕙𝕖𝕝𝕝𝕠 𝕨𝕠𝕣𝕝𝕕, 𝕥𝕙𝕚𝕤 𝕚𝕤 𝕒𝕟𝕒.
⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⢹⣿⠿⣿⣿⡇⠀⢠⣄⣼⠇⠀
⠀⠘⣿⡿⠁⠈⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠙⠳⠀⠀⢻⡿⠀⠀
⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⠃⠀⠀⠀⠀⢀⠀⠀⠀⢀⡾⠁⠀⠀
⠀⠀⠀⠈⢷⡄⠠⣤⣄⣀⢀⣠⣴⣦⠀⠁⠀⠀⢀⣠⣾⣿⣿⣦⣤⡿⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠙⢷⣿⣿⣿⣿⣿⣿⣿⣦⣶⣶⣶⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀


v${packageJson.version}

Welcome to my personal webpage interfaced as a terminal. If you are very
uncomfortable with this type of terminal-style page,
you can type 'gui' below, and a normal webpage will open.

Type 'help' to see list of available commands and have fun!
`;
};
