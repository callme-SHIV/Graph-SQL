import  Transaction  from '../models/transaction.model.js'

const transactionResolver = {
    Query: {

     transactions: async (_,_, context) => {
        try {
            if(!context.getUser())  throw new Error('unauthorized');
            const userId =  await context.getUser()._id;

            const transaction = await Transaction.find({userId});
            return transaction
        } catch (err) {
            console.log('error getting transations' , err)
            throw new Error('error getting transaction');
        }
     },

     transaction : async(_,{transactionId} ) => {
        try{
            const transaction = await Transaction.findById(transactionId);
            return transaction;

        }
        catch(err) {
            console.log('error getting transations' , err)
            throw new Error('error getting transaction');
        }

     },
    //   TODO => ADD categorystatics query
    },
    Mutation: {

       createTransaction: async(_, {input}, context) => {
            try {
               const newTransaction = new Transaction({
                ...input,
                userId: context.getUser()._id
               }) 

               await newTransaction.save();
               return newTransaction
            } catch (err) {
                console.log('error getting transations' , err)
                 throw new Error('error getting transaction');
            }
       } ,
       updateTransaction: async(_,{input}) => {
        try {
           const updatedTransaction = await Transaction.findByIdAndUpdate(input.transactionId,input,{new:true});

           return updatedTransaction;

        } catch (err) {
            console.log('error getting transations' , err)
            throw new Error('error getting transaction');
        }
       } ,
       deleteTransaction: async(_, {transactionId}) => {

        try {
           const deleteTransaction = await Transaction.findByIdAndDelete(transactionId);
           return deleteTransaction;  
        } catch (err) {
            console.log('error getting transations' , err)
            throw new Error('error getting transaction');
        }

       } 

    },
    //TODO => ADD transaction/user relationship
};

export default transactionResolver;