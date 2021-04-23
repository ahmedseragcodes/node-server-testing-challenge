
exports.up = function(knex) {
  return knex.schema
  .createTable("hobbits", tbl=>{
    tbl.increments("id")
    tbl.string("name", 255).notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("hobbits");
};
