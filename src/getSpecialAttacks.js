function getSpecialAttacks({ special }) {
  const copySpecial = [...special];
  for (let i = 0; i < copySpecial.length; i += 1) {
    if (!copySpecial[i].description) {
      copySpecial[i].description = 'Описание недоступно';
    }
  }
  return copySpecial;
}

module.exports = {
  getSpecialAttacks,
};
