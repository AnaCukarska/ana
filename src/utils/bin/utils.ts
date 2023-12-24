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
  return 'guest';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const gui = async (args: string[]): Promise<string> => {
  window.open('https://m4tt72.com', '_self');

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
  ];
  setTimeout(function () {
    window.open(songs[(Math.random() * songs.length) | 0]);
  }, 1000);

  return 'Playing music...';
};

export const banner = (args?: string[]): string => {
  return `
  █████████                         ██            █████   ███   █████          █████
 ███░░░░░███                       ███           ░░███   ░███  ░░███          ░░███
░███    ░███  ████████    ██████  ░░░   █████     ░███   ░███   ░███   ██████  ░███████  ████████   ██████    ███████  ██████
░███████████ ░░███░░███  ░░░░░███      ███░░      ░███   ░███   ░███  ███░░███ ░███░░███░░███░░███ ░░░░░███  ███░░███ ███░░███
░███░░░░░███  ░███ ░███   ███████     ░░█████     ░░███  █████  ███  ░███████  ░███ ░███ ░███ ░███  ███████ ░███ ░███░███████
░███    ░███  ░███ ░███  ███░░███      ░░░░███     ░░░█████░█████░   ░███░░░   ░███ ░███ ░███ ░███ ███░░███ ░███ ░███░███░░░
█████   █████ ████ █████░░████████     ██████        ░░███ ░░███     ░░██████  ████████  ░███████ ░░████████░░███████░░██████
░░░░░   ░░░░░ ░░░░ ░░░░░  ░░░░░░░░     ░░░░░░          ░░░   ░░░       ░░░░░░  ░░░░░░░░   ░███░░░   ░░░░░░░░  ░░░░░███ ░░░░░░
                                                                                         ░███                ███ ░███
                                                                                         █████              ░░██████
                                                                                        ░░░░░                ░░░░░░            v${packageJson.version}

Type 'help' to see list of available commands.
`;
};
