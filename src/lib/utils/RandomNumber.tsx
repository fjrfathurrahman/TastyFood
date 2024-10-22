/**
 * * Function membuat angka random, source code dari https://github.com/BraydenTW/braydentw.io/
 * @param {string} finalNum - Angka terakhir yang akan ditampilkan
 * @param {React.Dispatch<React.SetStateAction<string>>} setNumber - state untuk menyimpan angka
 */
export default function randomNumberText (finalNumber: string, setNumber: React.Dispatch<React.SetStateAction<string>>) {
  let count = 0;
  let newNum = '';

  const interval = setInterval(() => {
    count++;
  
    for (let i = 0; i < finalNumber.length; i++) {
      newNum += Math.floor(Math.random() * 10);
    }

    setNumber(newNum);
    newNum = "";
    
    if (count === 20) {
      clearInterval(interval);

      setNumber("404");
    }
  }, 85);
};