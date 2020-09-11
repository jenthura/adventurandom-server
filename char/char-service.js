const CharService = {
  getAllChar(db) {
    return db.from('char').select('*');
  },

  getById(db, id) {
    return CharService.getAllChar(db).where('char.id', id).first();
  },
  //many-to-many table join, characters can share attacks and can also be assigned many attacks
  getAttacks(db, id) {
    return db
      .select('attack.attack_name', 'attack.damage_die')
      .from('char')
      .rightOuterJoin('char_attack', 'char_attack.char_id', 'char.id')
      .join('attack', 'attack.id', 'char_attack.att_id')
      .where('char.id', id);
  },

  getHitpoints(db, id) {
    return db.select('hitpoints').from('char').where('char.id', id);
  },
};

module.exports = CharService;
