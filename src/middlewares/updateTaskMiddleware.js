import express from 'express';

export default function updateMiddleware() {
  return (req, res, next) => {
    const { title, description } = req.body;
    if (!title && !description) {
      return res.status(400).json({ error: 'Title or description are required' });
    }
    next();
  };
}