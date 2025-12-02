import { body, validationResult } from 'express-validator';

export const eventValidationRules = [
    body('name')
        .notEmpty().withMessage('Event name is required')
        .isLength({ min: 3 }).withMessage('Event name must be at least 3 characters'),

    body('date')
        .notEmpty().withMessage('Event date is required')
        .isISO8601().withMessage('Date must be in YYYY-MM-DD format'),

    body('location')
        .notEmpty().withMessage('Event location is required')
        .isLength({ min: 3 }).withMessage('Location must be at least 3 characters')
];

export const validateEvent = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
