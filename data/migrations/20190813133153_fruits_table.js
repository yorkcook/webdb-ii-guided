exports.up = function(knex) {
  return knex.schema.createTable("fruits", tbl => {
    tbl.increments();
    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl.decimal("avg-weight-oz");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
};
