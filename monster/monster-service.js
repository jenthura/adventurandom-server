const MonsterService = {
  getAllMonster(db) {
    return db.from('monster').select('*');
  },

  getById(db, id) {
    return MonsterService.getAllMonster(db).where('monster.id', id).first();
  },
};

module.exports = MonsterService;
