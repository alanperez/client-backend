const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "submissions";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["twitch_name", "discord_name", "server", "rank_division","summoner_name","primary_role","secondary_role","email"],
      properties: {
        id: { type: "integer" },
        email: { type: "string", minLength: 5, maxLength: 255 },
        password: { type: "string", minLength: 10, maxLength: 255 },
        date: { type: "date" }
      }
    };
  }

  static get relationMappings() {
    const UserProfile = require("./profiles.model");
    return {
      profiles: {
        relation: Model.HasManyRelation,
        modelClass: UserProfile,
        join: {
          from: "user.id",
          to: "user_profile.user_profile"
        }
      }
    };
  }
}

module.exports = User;
