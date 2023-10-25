const express = require('express');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    // 존재하는 유저인지 체크
    if (!user) {
      return res.status(400).send('Auth failed, email not found');
    }

    // 비밀번호가 올바른지 체크
    const isMatch = await user.comparePassword(req.body.password);

    if (!isMatch) {
      return res.status(400).send('Wrong password');
    }

    const payload = {
      userId: user._id.toHexString(),
    };

    // token을 생성
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({ user, accessToken });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
