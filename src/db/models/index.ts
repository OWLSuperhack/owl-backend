import { Sequelize } from "sequelize";
import  { User, UserSchema } from "./user.model";
import  { Location, LocationSchema } from "./location.model";
import  { Message, MessageSchema } from "./message.model";
import  { Decision, DecisionSchema } from "./decision.model";

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
  Message.init(MessageSchema, Message.config(sequelize));
  Decision.init(DecisionSchema, Decision.config(sequelize));

  User.associate(sequelize.models);
  Location.associate(sequelize.models);
  Message.associate(sequelize.models);
  Decision.associate(sequelize.models);
}

export default setupModels;
