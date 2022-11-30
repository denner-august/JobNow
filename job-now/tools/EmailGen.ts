export function emailLinkGen(email: string, vaga: string) {
  const emailGen = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=${email}&su=${vaga}`;
  return emailGen;
}
