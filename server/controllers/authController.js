import prisma from "../DB/prisma.config.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: req.user.id } });

    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(200).json({
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("Error in getMe controller", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({ where: { username } });

    if (!user) return res.status(404).json({ error: "Invalid credentials" });

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(404).json({ error: "Invalid credentials" });

    generateToken(user.id, res);

    res.status(200).json({
      id: user.id,
      fullName: user.fullName,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (!fullName || !username || !password || !confirmPassword || !gender)
      return res.status(400).json({ error: "Please fill in all fields." });

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Password don't match." });

    const user = await prisma.user.findUnique({ where: { username } });

    if (user) return res.status(400).json({ error: "User already exist." });

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await prisma.user.create({
      data: {
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilepic: gender === "male" ? boyProfilePic : girlProfilePic,
      },
    });

    if (newUser) {
      generateToken(newUser.id, res);

      res.status(201).json({
        id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilepic: newUser.profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data." });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};
