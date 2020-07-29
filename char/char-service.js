const CharService = {
  getAllChar(db) {
    return db
      .from('char')
      .select('*')
  },

  getById(db, id) {
    return CharService.getAllChar(db)
      .where('char.id', id)
      .first()
  },

}

module.exports = CharService;
