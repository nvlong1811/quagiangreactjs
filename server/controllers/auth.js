import { UserModel } from "../models/UserModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const login = async (req, res) => {
    const user = await UserModel.findOne({
		email: req.body.email,
	})

	if (!user) {
		return res.json({ status: 'error', error: "Email không tồn tại" })
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				_id: user._id
			},
			'secret123'
		)

		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', error: "Sai mật khẩu" })
	}
};

export const register = async (req, res)=>{
    try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		const user = new UserModel({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
			location: req.body.location,
		});
        await user.save();
		res.status(200).json({status: 'ok'})
	} catch (err) {
		res.json({ status: 'error', error: err })
	}
};
