import { Sequelize } from "sequelize";
import { User, UserSchema } from "./user.model";
import { Location, LocationSchema } from "./location.model";
import { Message, MessageSchema } from "./message.model";
import { Decision, DecisionSchema } from "./decision.model";
import { Attestation, AttestationSchema } from "./attestation.model";
import { Activity, ActivitySchema } from "./activity.model";

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
  Message.init(MessageSchema, Message.config(sequelize));
  Decision.init(DecisionSchema, Decision.config(sequelize));
  Attestation.init(AttestationSchema, Attestation.config(sequelize));
  Activity.init(ActivitySchema, Activity.config(sequelize));

  User.associate(sequelize.models);
  Location.associate(sequelize.models);
  Message.associate(sequelize.models);
  Decision.associate(sequelize.models);
  Attestation.associate(sequelize.models);
}

export default setupModels;
