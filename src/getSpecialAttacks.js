function getSpecialAttacks({ special }) {
  special.forEach((element) => {
    if (!element.description) {
      const el = element; // что бы линт не ругался
      el.description = 'Описание недоступно';
    }
  });
  return special;
}

module.exports = {
  getSpecialAttacks,
};
