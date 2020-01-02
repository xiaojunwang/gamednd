import { User } from '../../../model.js';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end(); //do not allow this method
    return;
  }

  const { email, password, passwordconfirmation } = req.body;

  if (password !== passwordconfirmation) {
    res.end(
      JSON.stringify({ status: 'error', message: 'Passwords do not match' })
    );
    return;
  }

  try {
    const user = await User.create({ email, password });
    res.end(JSON.stringify({ status: 'success', message: 'User added' }));
  } catch (error) {
    res.statusCode = 500;
    let message = 'An error occured';
    if (error.name === 'SequelizeUniqueConstraintError') {
      message = 'User already exists';
    }
    res.end(JSON.stringify({ status: 'error', message }));
  }
};
