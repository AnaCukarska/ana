import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  return `
Hi there 👋

I'm Ana Cukarska
- 📍 I am a PhD candidate in the Machine Learning group, at SCCS TUM, see my [page](https://www.cs.cit.tum.de/en/sccs/personen/ana-cukarska/)
- 🔭 I’m currently working on system identification with machine learning
- 🌱 I’m currently learning about the Koopman operator
   - some recommendations to start learning:
      - [Applied Koopmanism](https://arxiv.org/abs/1206.3164)
      - [On the Koopman operator of algorithms](https://arxiv.org/abs/1907.10807)
      - [Koopman's original paper](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1076052/)
- 🗨️ I’m interested in scientific machine learning topics in general
- 📫 How to reach me: ana.cukarska@tum.de (or use the command 'email')
- 😄 Pronouns: she/her
- ⚡ Fun question to think about: How would you sort a list of Chinese words?
  `;
};
