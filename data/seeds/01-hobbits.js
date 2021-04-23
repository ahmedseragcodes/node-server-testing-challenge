
exports.seed = function(knex) {
      return knex('hobbits').insert([
        {name: "sam"},
        {name: "frodo"},
        {name: "aragorn"},
        {name: "legolas"},
        {name: "gandalf"},
      ]);
};
