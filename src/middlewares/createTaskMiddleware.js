import express from 'express';

export default function newMiddleware() {
  return (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required' });
    }
    next();
  };
}
