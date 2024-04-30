import { mergeTypeDefs } from "@graphql-tools/merge";

//typeDefs

import userTypeDef from "./user.typeDef.js";
import transactionTypeDef from "./transactions.typeDef.js";

const mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef])

export default mergedTypeDefs