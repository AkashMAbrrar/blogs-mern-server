import User from "../models/User";
import bcrypt from 'bcryptjs';

// controller for get all the users data
export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(error)
    }
    if (!users) {
        return res.status(404).json({ message: "No users found there!" })
    }
    res.status(200).json({ users })
};

// signup for users creates
export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        console.log(error);
    }
    if (existingUser) {
        return res.status(400).json({ message: "User Already Exists There" })
    }
    const hashPassword = bcrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password: hashPassword,
    });

    try {
        await user.save()
    } catch (error) {
        console.log(error);
    }
    return res.status(201).json({ user })
};

// controller for user login and getting exist uers
export const login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (error) {
        return console.log(error);
    }
    if (!existingUser) {
        return res.status(404).json({ message: "couldn't the user by this email and pass" })
    }
    const isPassCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPassCorrect) {
        return res.status(400).json({ message: "Wrong Password" })
    }
    return res.status(200).json({ message: "Login Successful" })

}