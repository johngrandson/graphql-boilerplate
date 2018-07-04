import mongoose from 'mongoose';
import authorModel from '../../models/author';

const resolvers = {
    Query: {
        authors: () => {
            return authorModel.find({});
        },
        authorByAge: (root, {age}) => {
            return authorModel.findOne({age: age});
        },
        authorById: (root, {id}) => {
            return authorModel.findOne({id: id});
        }
    },
    Mutation: {
        addAuthor: (root, {name, age, books}) => {
            const author = new authorModel({age: age, name: name, books: books});
            return author.save();
        },
        deleteAuthor: (root, {id}) => {
            return authorModel.findByIdAndRemove({id: id});
        },
        updateAuthor: (root, {id, name}) => {
            return authorModel.findOneAndUpdate({id: id}, {name: name});
        }
    }
}

export default resolvers